import { userAuthStateAction } from '@/actions/auth/userAuthStateAction';
import { aboutUsDescription } from '@/lib/constants/aboutUsDescription';
import { achievementsDescription } from '@/lib/constants/achievements';
import { ourGoalsDescription } from '@/lib/constants/ourGoals';
import InfoCardsBlock from '@/src/components/units/InfoCardsBlock';
import JoinUsBanner from '@/src/components/units/JoinUsBanner';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import {
  achievementsMockData,
  ourGoalsMockData,
} from '@/utils/mockData/aboutUsPage';

export default async function AboutUsPage() {
  const { user } = await userAuthStateAction();

  return (
    <>
      <TopPageUnit title='About Skillbridge' description={aboutUsDescription} />
      <div className='container mx-auto'>
        <InfoCardsBlock title='Achievements' description={achievementsDescription} data={achievementsMockData} />
        <InfoCardsBlock
          title='Our Goals'
          description={ourGoalsDescription}
          data={ourGoalsMockData}
          classNames='mb-12 md:mb-15 2xl:mb-20'
        />
        {!user && <JoinUsBanner />}
      </div>
    </>
  );
}
