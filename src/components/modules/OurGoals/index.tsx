import { ourGoalsDescription } from '@/lib/constants/ourGoals';
import { OurGoalsT } from '@/lib/types/common/tables';
import InfoCardsBlock from '@/src/components/units/InfoCardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurGoals = async () => {
  const { data: ourGoals, error } = await fetchData().getAll<OurGoalsT[]>('our_goals');

  if (error || ourGoals?.length === 0) return null;

  return <InfoCardsBlock title='Our Goals' description={ourGoalsDescription} data={ourGoals} />;
};

export default OurGoals;
