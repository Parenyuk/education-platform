import { ComponentType, SVGProps } from 'react';

export type InfoCardType = {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};
