import { Link } from '@heroui/link';

import { ROUTES } from '@/lib/constants/routes';
import Arrow from 'public/svg/right-arrow.svg';

const TopLine = () => {
  return (
    <div
      className='mx-4 mt-10 flex max-w-full items-center justify-center space-x-3 rounded-lg bg-orange-50 py-2.5 md:mx-5 md:mt-5
        md:space-x-6 md:py-3 2xl:mx-8 2xl:py-3.5'
    >
      <p className='text-sm text-white 2xl:text-lg'>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      <Link href={ROUTES.HOME()}>
        <Arrow />
      </Link>
    </div>
  );
};

export default TopLine;
