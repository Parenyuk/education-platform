import React from 'react';

import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';
import HomePageTop from '@/src/components/units/HomePageTop';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex min-h-screen flex-col'>
        <HomePageTop />
      </main>
      <Footer />
    </div>
  );
}
