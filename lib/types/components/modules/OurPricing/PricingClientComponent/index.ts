import { CardPriceT } from '@/lib/types/components/modules/OurPricing';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';

export type TimePricePlanT = 'month' | 'year';

export type PricingClientComponentProps = {
  data: CardsCommonI<CardPriceT> | null;
};
