'use client';
import { Column } from '@umami/react-zen';
import { SignupForm } from './SignupForm';

export function SignupPage() {
  return (
    <Column alignItems="center" height="100vh" backgroundColor="2" paddingTop="12">
      <SignupForm />
    </Column>
  );
}
