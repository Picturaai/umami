import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pictura Analytics - Privacy-Focused Web Analytics',
  description: 'Free, privacy-focused web analytics by Imoogle Labs. Simple, secure, and no tracking - unlike Google Analytics.',
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
