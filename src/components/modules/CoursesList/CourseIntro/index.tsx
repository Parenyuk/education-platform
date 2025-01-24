import { CourseIntroProps } from '@/lib/types/components/modules/CoursesList/CourseIntro';
import ModuleItem from '@/src/components/modules/CoursesList/CourseIntro/ModuleItem';

const CourseIntro = ({ item }: CourseIntroProps) => {
  return (
    <div className='rounded-lg border border-white-95'>
      <h4
        className={
          'border-b border-white-95 px-5 py-3.5 text-base font-semibold md:px-6 md:py-5 md:text-lg 2xl:px-8 2xl:py-6 2xl:text-xl'
        }
      >
        Curriculum
      </h4>
      {/*<div className='flex flex-col md:flex-row'>*/}
      <div className='grid md:grid-cols-4'>
        {item.slice(0, 4).map((item, index) => (
          <ModuleItem key={index} itemOrder={index + 1} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CourseIntro;
