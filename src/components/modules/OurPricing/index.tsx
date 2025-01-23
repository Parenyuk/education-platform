import { rpcFunction } from '@/lib/constants/tableFunctions';
import { OurPricingType } from '@/lib/types/components/modules/OurPricing';
import { fetchData } from '@/supabase/fetchData';
import PricingClientComponent from 'src/components/modules/OurPricing/PricingClientComponent';

const OurPricing = async ({}) => {
  const { getAll } = await fetchData();

  const { data: ourPricing, error } = await getAll<OurPricingType>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'pricing',
  });

  if (error) return null;

  return <PricingClientComponent data={ourPricing} />;
};

export default OurPricing;
