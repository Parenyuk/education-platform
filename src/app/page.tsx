import BenefitsCardModule from '@/src/components/modules/BenefitsCardModule';
import FAQ from '@/src/components/modules/FAQ';
import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';
import OurCoursesCardModule from '@/src/components/modules/OurCoursesCardModule';
import OurPricing from '@/src/components/modules/OurPricing';
import TestimonialsCardModule from '@/src/components/modules/TestimonialsCardModule';
import HomePageTop from '@/src/components/units/HomePageTop';
import PartnersLogo from '@/src/components/units/PartnersLogo';
import VideoBlock from '@/src/components/units/VideoBlock';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main>
        <HomePageTop />
        <PartnersLogo />
        <VideoBlock playing lightMode />
        <BenefitsCardModule />
        <OurCoursesCardModule />
        <TestimonialsCardModule />
        <OurPricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
