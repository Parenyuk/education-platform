import { ourPricingDescription, ourPricings } from '@/lib/constants/ourPricing';
import FAQ from '@/src/components/modules/FAQ';
import OurPricing from '@/src/components/modules/OurPricing';
import TopPageUnit from '@/src/components/units/TopPageUnit';

export default async function PricingPage() {
  return (
    <>
      <TopPageUnit title={ourPricings} description={ourPricingDescription} />
      <OurPricing mode={'center'} />
      <FAQ />
    </>
  );
}
