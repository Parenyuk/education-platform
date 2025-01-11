import { Image } from '@nextui-org/image';

import { CardImageProps } from '@/lib/types/components/units/cards/CardImage';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import TagComponent from '@/src/components/units/cards/CardImage/TagComponent';

const CardImage = ({ item }: CardImageProps) => {
  return (
    <div className='rounded-xl bg-white p-6 md:p-10 2xl:p-12'>
      <Image src={item.imageURL} className='rounded-lg' />
      <div className='mb-3.5 mt-6 flex justify-between md:mb-6 2xl:my-7.5 2xl:mt-7.5'>
        <div className='flex gap-2.5'>
          {item.tags.map((item) => (
            <TagComponent key={item} item={item} />
          ))}
        </div>
        <div className='self-center text-sm font-medium md:text-base 2xl:text-lg'>By {item.author}</div>
      </div>
      <h4 className='text-lg font-semibold md:text-xl 2xl:text-2xl'>{item.title}</h4>
      <p className='mb-6 mt-2.5 text-grey-15 2xl:mb-7.5 2xl:mt-3.5'>{item.description}</p>
      <LinkAsButton
        href={'/'}
        type='primary'
        className='border:bg-white-97 grid w-full place-items-center rounded-lg border bg-white-95 py-3.5 text-grey-30 transition
          hover:bg-orange-50 hover:text-white 2xl:py-4'
      >
        Get it Now
      </LinkAsButton>
    </div>
  );
};

export default CardImage;
