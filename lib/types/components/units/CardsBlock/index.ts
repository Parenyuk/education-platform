import { ReactNode } from 'react';

import { ResourceT } from '@/lib/types/common/tables';

export interface CardsBlockProps {
  children: ReactNode;
  itemContainerStyles?: string;
  tableName: ResourceT;
}
