import { ReactNode } from 'react';

import { MetadataI } from '@/lib/types/common/metadata';

export interface CardsBlockProps extends Partial<MetadataI> {
  children: ReactNode;
  itemContainerStyles?: string;
}

export interface CardsCommonI<T> extends Partial<MetadataI> {
  data: T[];
}
