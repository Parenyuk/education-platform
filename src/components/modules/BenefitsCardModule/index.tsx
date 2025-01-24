import { rpcFunction } from '@/lib/constants/tableFunctions';
import { BenefitI } from '@/lib/types/components/modules/BenefitsCardModule';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import CardNumeric from '@/src/components/units/cards/CardNumeric';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const BenefitsCardModule = async () => {
  const { data: benefits, error } = await fetchData().getAll<CardsCommonI<BenefitI>>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'benefits',
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
