import { ReactNode } from 'react';

import { CardPriceT } from '@/lib/types/components/modules/OurPricing';

export type TimePricePlanT = 'month' | 'year';

export type PricingClientComponentProps = {
  data: CardPriceT[] | null;
  children: ReactNode;
};
