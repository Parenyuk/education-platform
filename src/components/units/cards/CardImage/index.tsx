'use client';

import { Image } from '@heroui/react';
import NextImage from 'next/image';

import { ROUTES } from '@/lib/constants/routes';
import { CardImageProps } from '@/lib/types/components/units/cards/CardImage';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import TagComponent from '@/src/components/units/cards/CardImage/TagComponent';

const CardImage = ({ item }: CardImageProps) => {
  const image = item?.images?.[1] ?? null;

  return (
    <div className='rounded-xl bg-white p-6 md:p-10 2xl:p-12'>
      {image && (
        <Image alt='HeroUI hero Image' as={NextImage} src={image} className='min-w-full' width='300' height='300' />
      )}
      <div className='mb-3.5 mt-6 flex justify-between md:mb-6 2xl:my-7.5 2xl:mt-7.5'>
        <div className='flex gap-2.5'>
          {item.duration && <TagComponent item={item.duration} />}
          {item.level && <TagComponent item={item.level} />}
        </div>
        <div className='self-center text-sm font-medium md:text-base 2xl:text-lg'>By {item.author}</div>
      </div>
      <h4 className='text-lg font-semibold md:text-xl 2xl:text-2xl'>{item.title}</h4>
      <p className='mb-6 mt-2.5 text-grey-15 2xl:mb-7.5 2xl:mt-3.5'>{item.description}</p>
      <LinkAsButton href={ROUTES.HOME()} type='primary'>
        Get it Now
      </LinkAsButton>
    </div>
  );
};

export default CardImage;
