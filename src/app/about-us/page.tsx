import { userAuthStateAction } from '@/actions/auth/userAuthStateAction';
import { aboutUsDescription } from '@/lib/constants/aboutUsDescription';
import Achievements from '@/src/components/modules/Achievements';
import OurGoals from '@/src/components/modules/OurGoals';
import JoinUsBanner from '@/src/components/units/JoinUsBanner';
import TopPageUnit from '@/src/components/units/TopPageUnit';

export default async function AboutUsPage() {
  const { user } = await userAuthStateAction();

  return (
    <>
      <TopPageUnit title='About Skillbridge' description={aboutUsDescription} />
      <div className='container mx-auto'>
        <Achievements />
        <OurGoals />
        {!user && <JoinUsBanner />}
      </div>
    </>
  );
}
