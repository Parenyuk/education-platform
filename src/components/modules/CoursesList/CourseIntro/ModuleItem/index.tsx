import { ModuleItemProps } from '@/lib/types/components/modules/CoursesList/CourseIntro/ModuleItem';
import { checkNumber } from '@/utils/helpers/checkNumber';

const ModuleItem = ({ item, itemOrder }: ModuleItemProps) => {
  return (
    <div
      className={`mb-5 mt-6 space-y-3 px-6 last:border-none md:my-6 md:space-y-4 md:border-r md:border-white-95 md:px-10 2xl:my-7.5
        2xl:space-y-5 2xl:px-12`}
    >
      <div className='text-3xl font-extrabold md:text-5xl 2xl:text-6xl'>{checkNumber(itemOrder)}</div>
      <div className='text-sm font-medium text-grey-20 md:text-base 2xl:text-lg'>{item.module}</div>
    </div>
  );
};

export default ModuleItem;
