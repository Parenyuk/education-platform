import { PricingI } from '@/lib/types/common/tables';
import { OurPricingProps } from '@/lib/types/components/modules/OurPricing';
import TopBlock from '@/src/components/modules/OurPricing/TopBlock';
import { fetchData } from '@/supabase/fetchData';
import PricingClientComponent from 'src/components/modules/OurPricing/PricingClientComponent';

const OurPricing = async ({ mode = 'right' }: OurPricingProps) => {
  const { data: pricing, error } = await fetchData().getAll<PricingI[]>('pricing');

  if (error || !pricing) return null;

  return (
    <PricingClientComponent data={pricing} mode={mode}>
      <TopBlock />
    </PricingClientComponent>
  );
};

export default OurPricing;
