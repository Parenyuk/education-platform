import { Link } from '@heroui/link';

import { RightArrowUnitProps } from '@/lib/types/components/units/RightArrowUnit';
import RightArrow from '@/src/components/elements/svgElements/RightArrow';

const RightArrowUnit = ({ link }: RightArrowUnitProps) => {
  return (
    <Link href={link} className='cursor-pointer rounded-full bg-white p-2.5 md:p-3 2xl:p-3.5'>
      <RightArrow />
    </Link>
  );
};

export default RightArrowUnit;
