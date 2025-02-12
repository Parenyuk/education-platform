import { ModuleItemProps } from '@/lib/types/components/modules/SingleCourse/ModuleItem';
import LessonItem from '@/src/components/modules/SingleCourse/ModuleItem/LessonItem/LessonItem';
import { checkNumber } from '@/utils/helpers/checkNumber';

const ModuleItem = ({ item, order }: ModuleItemProps) => {
  console.log('item', item);
  return (<div className='rounded-lg 2xl:rounded-xl bg-white p-8 md:p-10 2xl:md-12'>
    <div
      className='text-end text-grey-15 font-bold text-6xl md:text-7xl 2xl:text-8xl mb-8 md:mb-10 2xl:mb-12'>{checkNumber(order)}</div>
    <h3 className='font-semibold text-lg md:text-xl 2xl:text-2xl mb-8 md:mb-10 2xl:mb-12'>{item.title}</h3>
    <div className='grid gap-4 2xl:gap-5'>
      {
        item.course_lessons.map((lesson) => {
          return <LessonItem key={lesson.id} lesson={lesson} />;
        })
      }
    </div>
  </div>);
};

export default ModuleItem;
