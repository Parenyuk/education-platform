import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';
import HomePageTop from '@/src/components/units/HomePageTop';
import PartnersLogo from '@/src/components/units/PartnersLogo';
import VideoBlock from '@/src/components/units/VideoBlock';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex min-h-screen flex-col'>
        <HomePageTop />
        <PartnersLogo />
        <VideoBlock />
      </main>
      <Footer />
    </div>
  );
}
