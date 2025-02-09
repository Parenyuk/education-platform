import { CardPriceT } from '@/lib/types/components/modules/OurPricing';
import TopBlock from '@/src/components/modules/OurPricing/TopBlock';
import { fetchData } from '@/supabase/fetchData';
import PricingClientComponent from 'src/components/modules/OurPricing/PricingClientComponent';

const OurPricing = async ({}) => {
  const { data: pricing, error } = await fetchData().getAll<CardPriceT[]>('pricing');

  if (error || !pricing) return null;

  return <PricingClientComponent data={pricing}>
    <TopBlock />
  </PricingClientComponent>;
};

export default OurPricing;
