import { Link } from '@heroui/link';

import cn from '@/helpers/cn';
import { LinkAsButtonProps } from '@/lib/types/components/elements/LinkAsButton';

const typeStyles: Record<string, string> = {
  primary:
    'grid place-items-center px-3.5 py-4 2xl:px-4.5 2xl:py-6 font-medium text-grey-15 bg-white-95 hover:bg-orange-50 hover:text-white transition border border:bg-white-97 rounded-lg py-3.5 2xl:py-4',
  secondary: 'rounded-lg bg-orange-50 px-6 py-2.5 2xl:px-8 2xl:py-3.5',
  'secondary-full':
    'w-full grid place-items-center text-white font-semibold text-sm 2xl:text-lg rounded-b-md md:rounded-b-lg bg-orange-50 px-6 py-2.5 2xl:px-8 2xl:py-3.5',
  tertiary:
    'grid place-items-center px-5 py-3.5 2xl:px-6 2xl:p-4.5 text-grey-15 font-medium rounded-md text-sm border border-white-95 w-fit',
};

const LinkAsButton = ({ href, className, color, children, type }: LinkAsButtonProps) => {
  const typeClass = typeStyles[type ?? ''] || '';

  return (
    <Link href={href} color={color} className={cn(typeClass, className)}>
      {children}
    </Link>
  );
};

export default LinkAsButton;
