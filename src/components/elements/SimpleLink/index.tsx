import Link from 'next/link';

import { SimpleLinkProps } from '@/lib/types/components/elements/SimpleLink';

const SimpleLink = ({ classNames, children, href, ...props }: SimpleLinkProps) => {
  return (
    <Link href={href || ''} className={classNames} {...props}>
      {children}
    </Link>
  );
};

export default SimpleLink;
