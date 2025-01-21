import { Image } from '@nextui-org/image';

import { CardContentProps } from '@/lib/types/components/units/cards/CardContent';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const CardContent = ({ item }: CardContentProps) => {
  return (
    <div className='rounded-xl bg-white'>
      <div className='border-b border-b-white-90 p-8 md:p-10 2xl:p-12'>
        <p>{item.short_content}</p>
      </div>
      <div className='flex justify-between rounded-xl bg-white-99 p-5 md:p-8 2xl:p-10'>
        <div className='flex gap-2.5 2xl:gap-3'>
          <Image src={item.author_image} className='rounded-lg' />
          <p className='self-center text-base font-semibold 2xl:text-lg'>{item.author}</p>
        </div>
        <LinkAsButton type='primary' href='/'>
          Read Full Story
        </LinkAsButton>
      </div>
    </div>
  );
};

export default CardContent;
