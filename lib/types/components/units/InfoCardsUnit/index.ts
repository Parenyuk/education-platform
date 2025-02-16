import { AchievementT, OurGoalsT } from '@/lib/types/common/tables';

export type InfoCardsBlockProps = {
  title: string;
  description: string;
  data: AchievementT[] | OurGoalsT[] | null;
  classNames?: string;
};
