'use client';
import {
  Column,
  Form,
  FormButtons,
  FormField,
  FormSubmitButton,
  Heading,
  Icon,
  PasswordField,
  TextField,
  Text,
  Row,
} from '@umami/react-zen';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMessages, useUpdateQuery } from '@/components/hooks';
import { PicturaLogo } from '@/components/svg';
import { setClientAuthToken } from '@/lib/client';
import { setUser } from '@/store/app';

export function SignupForm() {
  const { formatMessage, labels, getErrorMessage } = useMessages();
  const router = useRouter();
  const { mutateAsync, error } = useUpdateQuery('/auth/signup');

  const handleSubmit = async (data: any) => {
    await mutateAsync(data, {
      onSuccess: async ({ token, user }) => {
        setClientAuthToken(token);
        setUser(user);
        router.push('/');
      },
    });
  };

  return (
    <Column justifyContent="center" alignItems="center" gap="6">
      <Icon size="lg">
        <PicturaLogo />
      </Icon>
      <Column alignItems="center" gap="2">
        <Heading>Create your account</Heading>
        <Text color="secondary">Join Pictura Analytics for free</Text>
      </Column>
      <Form onSubmit={handleSubmit} error={getErrorMessage(error)}>
        <FormField
          label={formatMessage(labels.username)}
          data-test="input-username"
          name="username"
          rules={{ 
            required: formatMessage(labels.required),
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            }
          }}
        >
          <TextField autoComplete="username" placeholder="Choose a username" />
        </FormField>

        <FormField
          label={formatMessage(labels.password)}
          data-test="input-password"
          name="password"
          rules={{ 
            required: formatMessage(labels.required),
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }}
        >
          <PasswordField autoComplete="new-password" placeholder="Create a password" />
        </FormField>

        <FormButtons>
          <FormSubmitButton
            data-test="button-submit"
            variant="primary"
            style={{ flex: 1 }}
            isDisabled={false}
          >
            Create account
          </FormSubmitButton>
        </FormButtons>
      </Form>
      <Row gap="2">
        <Text color="secondary">Already have an account?</Text>
        <Link href="/login" style={{ color: '#C87941', fontWeight: 500 }}>
          Sign in
        </Link>
      </Row>
    </Column>
  );
}
