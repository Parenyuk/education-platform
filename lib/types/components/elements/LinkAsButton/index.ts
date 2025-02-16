import { ReactNode } from 'react';

type LinkAsButtonT = 'primary' | 'secondary' | 'secondary-full' | 'tertiary';

export type LinkAsButtonProps = {
  children: ReactNode;
  color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  href: string;
  type?: LinkAsButtonT;
};
