import { BenefitI } from '@/lib/types/components/modules/BenefitsCardModule';
import CardNumeric from '@/src/components/units/cards/CardNumeric';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const BenefitsCardModule = async () => {
  const { data: benefits, error } = await fetchData().getAll<BenefitI[]>('benefits');

  if (error) return null;

  return (
    <CardsBlock tableName='benefits'>
      {benefits?.map((item, index) => {
        return <CardNumeric key={item.id} item={item} index={index} />;
      })}
    </CardsBlock>
  );
};

export default BenefitsCardModule;
