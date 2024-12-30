import { ReactNode } from 'react';

export type LinkAsButtonProps = {
  children: ReactNode;
  color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  className?: string;
  href: string;
};
