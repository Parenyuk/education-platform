import { OurPricingType } from '@/lib/types/components/modules/OurPricing';
import { fetchData } from '@/supabase/fetchData';
import PricingClientComponent from 'src/components/modules/OurPricing/PricingClientComponent';

const OurPricing = async ({}) => {
  const { getAll } = await fetchData();

  const { data: ourPricing, error } = await getAll<OurPricingType>('get_pricing_with_metadata', { isRpc: true });

  if (ourPricing?.data.length == 0 || error) return null;

  return <PricingClientComponent data={ourPricing} />;
};

export default OurPricing;
