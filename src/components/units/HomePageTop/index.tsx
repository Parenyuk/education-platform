import { Button } from '@heroui/button';

import { ROUTES } from '@/lib/constants/routes';
import AbstractLine from '@/public/svg/abstract_line.svg';
import LightningIcon from '@/src/components/elements/LightningIcon';

const HomaPageTop = ({}) => {
  return (
    <div className='container mx-auto grid place-items-center'>
      <div className='flex flex-col items-center justify-center'>
        <div
          className='relative mt-12 flex w-auto items-center justify-center gap-2.5 rounded-lg bg-white p-3.5 md:mt-20 md:p-4 2xl:mt-24
            2xl:p-5'
        >
          <AbstractLine className={'absolute -left-6 -top-7.5'} />
          <div className='rounded-md bg-orange-95 p-3.5 md:p-4 2xl:p-5'>
            <LightningIcon />
          </div>
          <h1 className='text-base font-semibold md:text-5xl 2xl:text-6xl'>
            <span className='text-orange-50'>Unlock</span> Your Creative Potential
          </h1>
        </div>
        <p className='mt-4 px-8 text-center text-2xl font-medium md:text-3xl 2xl:mt-5 2xl:text-5xl'>
          with Online Design and Development Courses.
        </p>
        <p className='mt-1 px-8 text-center text-sm md:text-base 2xl:text-lg'>
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className='mt-12 flex gap-3 2xl:mt-15'>
          <Button color='primary' className='text-white' href={ROUTES.COURSES()}>
            Explore Courses
          </Button>
          <Button href={ROUTES.PRICING()}>View Pricing</Button>
        </div>
      </div>
    </div>
  );
};

export default HomaPageTop;
