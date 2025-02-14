import { ReactNode } from 'react';

import { PricingI } from '@/lib/types/common/tables';
import { PricingModeT } from '@/lib/types/components/modules/OurPricing';

export type TimePricePlanT = 'month' | 'year';

export type PricingClientComponentProps = {
  data: PricingI[] | null;
  children?: ReactNode;
  mode?: PricingModeT;
};
