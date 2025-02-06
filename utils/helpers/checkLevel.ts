import { CheckLevelProps, CheckLevelReturn } from '@/lib/types/utils/checkLevel';

export const checkLevel = (level: CheckLevelProps): CheckLevelReturn => {
  if (!level) {
    return null;
  }

  if (typeof level === 'string') {
    return level.includes('-') ? level.split('-') : [level];
  }

  return level;
};
