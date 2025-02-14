import type { Metadata } from 'next';

import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Contact page description',
};

export default function ContactLayout({
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
