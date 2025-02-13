import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';

export type DisplayPriceProps = {
  pricePerMonth: number;
  pricePerYear: number;
  timePlanType: TimePricePlanT;
};
