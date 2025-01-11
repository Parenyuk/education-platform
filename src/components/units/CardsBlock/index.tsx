import { Button } from '@nextui-org/button';

import { CardsBlockProps } from '@/lib/types/components/units/CardsBlock';

const CardsBlock = ({ children, title, description }: CardsBlockProps) => {
  return (
    <div className='container mx-auto my-12 md:my-24 2xl:my-40'>
      <h3 className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title}</h3>
      <div className='mb-10 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>
        <p className='text-sm md:text-base 2xl:text-lg'>{description}</p>
        <Button>View All</Button>
      </div>
      <div className='grid gap-5 md:grid-cols-3'>{children}</div>
    </div>
  );
};

export default CardsBlock;
