import { Link } from "@heroui/link";

import { CardNumericProps } from '@/lib/types/components/units/cards/CardNumeric';
import Arrow from '@/src/components/elements/Arrow';

const CardNumeric = ({ item, index }: CardNumericProps) => {
  const { title, description } = item;

  const cardIndex = item.id <= 10 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div className='flex flex-col rounded-xl bg-white p-8 md:p-10 2xl:p-12'>
      <span className='mb-8 self-end text-6xl font-bold md:mb-10 md:text-7xl 2xl:mb-12 2xl:text-8xl'>{cardIndex}</span>
      <h4 className='text-xl font-semibold 2xl:text-2xl'>{title}</h4>
      <p className='mb-8 mt-2.5 text-sm md:mb-10 md:mt-3.5 md:text-base 2xl:mb-10 2xl:mt-4 2xl:text-lg'>
        {description}
      </p>
      <Link href='/public' className='self-end rounded-md border border-white-95 bg-white-99 p-3.5 2xl:p-5'>
        <Arrow color='#FF9500' className='-rotate-45 transform' />
      </Link>
    </div>
  );
};

export default CardNumeric;
