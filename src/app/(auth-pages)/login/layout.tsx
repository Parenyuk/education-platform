import type { Metadata } from 'next';

import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';

export const metadata: Metadata = {
  title: 'Login page',
  description: 'Login page description',
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
