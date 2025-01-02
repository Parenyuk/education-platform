import { Link } from '@nextui-org/link';

import { LinkAsButtonProps } from '@/lib/types/components/elements/LinkAsButton';

const LinkAsButton = ({ href, className, color, children }: LinkAsButtonProps) => {
  return (
    <Link href={href} color={color} className={className}>
      {children}
    </Link>
  );
};

export default LinkAsButton;
