import { ReactNode } from 'react';

import { LinkAsButtonType } from '@/src/components/elements/LinkAsButton';

export type LinkAsButtonProps = {
  children: ReactNode;
  color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  className?: string;
  href: string;
  type?: LinkAsButtonType;
};
