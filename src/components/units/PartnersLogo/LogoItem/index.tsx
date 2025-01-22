import { Image } from '@heroui/image';

import { LogoItemProps } from '@/lib/types/components/units/PartnersLogo/LogoItem';

const LogoItem = ({ logo, index }: LogoItemProps) => {
  return (
    <div className='grid w-full place-items-center py-5 2xl:py-8'>
      <Image key={index} src={logo} alt={`Partner logo ${index + 1}`} className='h-7 w-auto' />
    </div>
  );
};

export default LogoItem;
