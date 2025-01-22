import { BenefitType } from '@/lib/types/components/modules/BenefitsCardModule';
import { CardsCommonT } from '@/lib/types/components/units/CardsBlock';
import CardNumeric from '@/src/components/units/cards/CardNumeric';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const BenefitsCardModule = async () => {
  const { getAll } = await fetchData();

  const { data: benefits, error } = await getAll<CardsCommonT<BenefitType>>('get_benefits_with_metadata', {
    isRpc: true,
  });

  if (error) return null;

  return (
    <CardsBlock title={benefits?.title} description={benefits?.description}>
      {benefits?.data.map((item, index) => {
        return <CardNumeric key={item.id} item={item} index={index} />;
      })}
    </CardsBlock>
  );
};

export default BenefitsCardModule;
