import { CardPriceT } from '@/lib/types/components/modules/OurPricing';
import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';

export type DataBlockProps = {
  data: CardPriceT[];
  timePlanType: TimePricePlanT;
};
