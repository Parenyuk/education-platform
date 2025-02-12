import { ourPricingDescription, ourPricings } from '@/lib/constants/ourPricing';
import TopPageUnit from '@/src/components/units/TopPageUnit';

export default async function PricingPage() {
  return (
    <>
      <TopPageUnit title={ourPricings} description={ourPricingDescription} />
      <div className='container mx-auto'></div>
    </>
  );
}
