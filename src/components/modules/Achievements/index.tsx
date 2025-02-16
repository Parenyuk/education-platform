import { achievementsDescription } from '@/lib/constants/achievements';
import { AchievementT } from '@/lib/types/common/tables';
import InfoCardsBlock from '@/src/components/units/InfoCardsBlock';
import { fetchData } from '@/supabase/fetchData';

const Achievements = async () => {
  const { data: achievements, error } = await fetchData().getAll<AchievementT[]>('achievements');

  if (error || achievements?.length === 0) return null;

  return <InfoCardsBlock title='Achievements' description={achievementsDescription} data={achievements} />;
};

export default Achievements;
