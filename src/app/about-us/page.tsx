import { userAuthStateAction } from '@/actions/auth/userAuthStateAction';
import InfoCardsBlock from '@/src/components/units/InfoCardsBlock';
import JoinUsBanner from '@/src/components/units/JoinUsBanner';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import {
  achievementsMockData,
  achievementsMockDescription,
  ourGoalsMockData,
  ourGoalsMockDataDescription,
  pageDescription,
} from '@/utils/mockData/aboutUsPage';

export default async function AboutUsPage() {
  const { user } = await userAuthStateAction();

  return (
    <>
      <TopPageUnit title='About Skillbridge' description={pageDescription} />
      <div className='container mx-auto'>
        <InfoCardsBlock title='Achievements' description={achievementsMockDescription} data={achievementsMockData} />
        <InfoCardsBlock
          title='Our Goals'
          description={ourGoalsMockDataDescription}
          data={ourGoalsMockData}
          classNames={'mb-12 md:mb-15 2xl:mb-20'}
        />
        {!user && <JoinUsBanner />}
      </div>
    </>
  );
}
