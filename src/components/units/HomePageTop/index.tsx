import { Button } from '@nextui-org/button';

import LightningIcon from '@/src/components/elements/LightningIcon';

const HomaPageTop = ({}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-12 flex w-auto items-center justify-center gap-2.5 rounded-lg bg-white-100 p-3.5 md:mt-20 md:p-4 2xl:mt-24 2xl:p-5'>
          <div className='rounded-md bg-orange-95 p-3.5 md:p-4 2xl:p-5'>
            <LightningIcon />
          </div>
          <h1 className='text-base font-semibold md:text-5xl 2xl:text-6xl'>
            <span className='text-orange-50'>Unlock</span> Your Creative Potential
          </h1>
        </div>
        <p className='mt-4 text-2xl font-medium md:text-3xl 2xl:mt-5 2xl:text-5xl'>
          with Online Design and Development Courses.
        </p>
        <p className='mt-1 text-sm md:text-base 2xl:text-lg'>Learn from Industry Experts and Enhance Your Skills.</p>
        <div className='mt-12 flex gap-3 2xl:mt-15'>
          <Button color='primary' className='text-white-100'>
            Explore Courses
          </Button>
          <Button>View Pricing</Button>
        </div>
      </div>
    </div>
  );
};

export default HomaPageTop;
