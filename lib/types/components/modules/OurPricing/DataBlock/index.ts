import { PricingI } from '@/lib/types/common/tables';
import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';

export type DataBlockProps = {
  data: PricingI[];
  timePlanType: TimePricePlanT;
};
