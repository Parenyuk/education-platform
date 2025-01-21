import { Link } from "@heroui/link";

import cn from '@/helpers/cn';
import { LinkAsButtonProps } from '@/lib/types/components/elements/LinkAsButton';

const typeStyles: Record<string, string> = {
  primary:
    'grid place-items-center px-3.5 py-4 2xl:px-4.5 2xl:py-6 font-medium text-grey-15 bg-white-95 hover:bg-orange-50 hover:text-white transition border border:bg-white-97 rounded-lg py-3.5 2xl:py-4',
};

export type LinkAsButtonType = keyof typeof typeStyles;

const LinkAsButton = ({ href, className, color, children, type }: LinkAsButtonProps) => {
  const typeClass = typeStyles[type ?? ''] || '';

  return (
    <Link href={href} color={color} className={cn(typeClass, className)}>
      {children}
    </Link>
  );
};

export default LinkAsButton;
