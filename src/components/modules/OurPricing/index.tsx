import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CardPriceT } from '@/lib/types/components/modules/OurPricing';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';
import PricingClientComponent from 'src/components/modules/OurPricing/PricingClientComponent';

const OurPricing = async ({}) => {
  const { getAll } = await fetchData();

  const { data: ourPricing, error } = await getAll<CardsCommonI<CardPriceT>>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'pricing',
  });

  if (error) return null;

  return <PricingClientComponent data={ourPricing} />;
};

export default OurPricing;
