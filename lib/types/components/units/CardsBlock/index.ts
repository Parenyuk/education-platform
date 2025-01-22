import { ReactNode } from 'react';

export type CardsBlockProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  itemContainerStyles?: string;
};

export type CardsCommonT<T> = {
  title: string;
  description: string;
  data: T[];
};
