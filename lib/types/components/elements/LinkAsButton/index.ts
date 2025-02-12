import { ReactNode } from 'react';

type LinkAsButtonType = 'primary' | 'secondary' | 'secondary-full' | 'tertiary';

export type LinkAsButtonProps = {
  children: ReactNode;
  color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  className?: string;
  href: string;
  type?: LinkAsButtonType;
};
