import { ComponentType, ReactNode, SVGProps } from 'react';

export type ContactItemProps = {
  children: ReactNode | string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
