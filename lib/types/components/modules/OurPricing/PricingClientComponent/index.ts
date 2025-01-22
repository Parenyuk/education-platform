import { OurPricingType } from '@/lib/types/components/modules/OurPricing';

export type TimePricePlanT = 'month' | 'year';

export type PricingClientComponentProps = {
  data: OurPricingType | null;
};
