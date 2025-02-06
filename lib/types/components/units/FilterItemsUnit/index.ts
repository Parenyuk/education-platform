import { experienceLevels } from '@/lib/constants/experienceLevels';

export type ExperienceLevelT = (typeof experienceLevels)[number];

export type FilterItemsUnitProps = {
  level: ExperienceLevelT[];
};
