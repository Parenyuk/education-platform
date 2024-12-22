import Link from 'next/link';

import { SimpleLinkProps } from '@/lib/types/components/elements/SimpleLink';

const SimpleLink = ({ classNames, children, href }: SimpleLinkProps) => {
  return (
    <Link href={href || ''} className={classNames}>
      {children}
    </Link>
  );
};

export default SimpleLink;
