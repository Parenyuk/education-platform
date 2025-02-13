import { Tables } from '@/database.types';

export type InfoCardsBlockProps = {
  title: string;
  description: string;
  data: AchievementT[] | OurGoalsT[] | null;
  classNames?: string;
};

export type AchievementT = Tables<'achievements'>;

export type OurGoalsT = Tables<'our_goals'>;
