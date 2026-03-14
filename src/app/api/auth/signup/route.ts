import { z } from 'zod';
import { ROLES } from '@/lib/constants';
import { uuid, secret } from '@/lib/crypto';
import { createSecureToken } from '@/lib/jwt';
import { hashPassword } from '@/lib/password';
import { parseRequest } from '@/lib/request';
import { badRequest, json } from '@/lib/response';
import { createUser, getUserByUsername, getAllUserTeams } from '@/queries/prisma';
import { saveAuth } from '@/lib/auth';
import redis from '@/lib/redis';

export async function POST(request: Request) {
  const schema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(8),
  });

  const { body, error } = await parseRequest(request, schema, { skipAuth: true });

  if (error) {
    return error();
  }

  const { username, password } = body;

  // Check if user already exists
  const existingUser = await getUserByUsername(username, { showDeleted: true });

  if (existingUser) {
    return badRequest({ message: 'Username already taken' });
  }

  // Create new user
  const user = await createUser({
    id: uuid(),
    username,
    password: hashPassword(password),
    role: ROLES.user,
  });

  // Generate auth token
  const { id, role, createdAt } = user;

  let token: string;

  if (redis.enabled) {
    token = await saveAuth({ userId: id, role });
  } else {
    token = createSecureToken({ userId: id, role }, secret());
  }

  const teams = await getAllUserTeams(id);

  return json({
    token,
    user: { id, username, role, createdAt, isAdmin: role === ROLES.admin, teams },
  });
}
