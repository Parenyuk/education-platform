import { CardPriceType } from '@/lib/types/components/modules/OurPricing';
import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';

export type DataBlockProps = {
  data: CardPriceType[];
  timePlanType: TimePricePlanT;
};
