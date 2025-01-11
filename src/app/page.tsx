import { benefitsMockDataDescription, ourCoursesMockDataDescription } from '@/helpers/mockData/homePage';
import BenefitsCardModule from '@/src/components/modules/BenefitsCardModule';
import Footer from '@/src/components/modules/Footer';
import Header from '@/src/components/modules/Header';
import OurCoursesCardModule from '@/src/components/modules/OurCoursesCardModule';
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
        <BenefitsCardModule title='Benefits' description={benefitsMockDataDescription} />
        <OurCoursesCardModule title={'Our Courses'} description={ourCoursesMockDataDescription} />
      </main>
      <Footer />
    </div>
  );
}
