import { ModuleItemProps } from '@/lib/types/components/modules/SingleCourse/ModuleItem';
import LessonItem from '@/src/components/modules/SingleCourse/ModuleItem/LessonItem/LessonItem';
import { checkNumber } from '@/utils/helpers/checkNumber';

const ModuleItem = ({ item, order }: ModuleItemProps) => {
  return (
    <div className='2xl:md-12 rounded-lg bg-white p-8 md:p-10 2xl:rounded-xl'>
      <div className='mb-8 text-end text-6xl font-bold text-grey-15 md:mb-10 md:text-7xl 2xl:mb-12 2xl:text-8xl'>
        {checkNumber(order)}
      </div>
      <h3 className='mb-8 text-lg font-semibold md:mb-10 md:text-xl 2xl:mb-12 2xl:text-2xl'>{item.title}</h3>
      <div className='grid gap-4 2xl:gap-5'>
        {item.course_lessons.map((lesson) => {
          return <LessonItem key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default ModuleItem;
