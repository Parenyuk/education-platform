import { Dispatch, SetStateAction } from 'react';

import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';

export type TabButtonsProps = {
  timePlanType: TimePricePlanT;
  setTimePlanType: Dispatch<SetStateAction<TimePricePlanT>>;
};
