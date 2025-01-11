import { InfoCardType } from '@/lib/types/components/units/InfoCardsUnit/InfoCard';

export type InfoCardsBlockProps = {
  title: string;
  description: string;
  data: InfoCardType[];
  classNames?: string;
};
