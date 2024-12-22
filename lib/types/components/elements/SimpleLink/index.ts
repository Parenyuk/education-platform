import React from 'react';

export interface SimpleLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  classNames?: string;
  children: React.ReactNode;
}
