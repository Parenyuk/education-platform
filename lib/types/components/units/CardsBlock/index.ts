import { ReactNode } from 'react';

import { MetadataI } from '@/lib/types/common/metadata';
import { TableNamesT } from '@/lib/types/common/tableNames';

export interface CardsBlockProps {
  children: ReactNode;
  itemContainerStyles?: string;
  tableName: TableNamesT;
}

export interface CardsCommonI<T> extends Partial<MetadataI> {
  data: T[];
}
