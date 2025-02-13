import { ReactNode } from 'react';

import { CardPriceT, PricingModeT } from '@/lib/types/components/modules/OurPricing';

export type TimePricePlanT = 'month' | 'year';

export type PricingClientComponentProps = {
  data: CardPriceT[] | null;
  children?: ReactNode;
  mode?: PricingModeT;
};
