import type { Metadata } from 'next';

import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';

export const metadata: Metadata = {
  title: 'Create user page',
  description: 'Here you can create user',
};

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
