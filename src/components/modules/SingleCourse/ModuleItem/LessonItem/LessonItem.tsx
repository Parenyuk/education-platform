import { LessonItemProps } from '@/lib/types/components/modules/SingleCourse/ModuleItem/LessonItem';
import Clock from '@/src/components/elements/svgElements/Clock';
import { formatDuration } from '@/utils/helpers/formatDuration';


const LessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <div
      className='group flex flex-col md:flex-row md:items-center justify-between border rounded 2xl:rounded-lg p-6 md:py-5 md:px-6 2xl:py-6 2xl:px-8
    hover:border-orange-80 transition-all duration-300  hover:shadow-orange-80 hover:shadow-custom md:min-h-32'>
      <div>
        <h4 className='text-base md:text-lg 2xl:text-xl font-medium text-grey-20'>{lesson.title}</h4>
        <span className='text-grey-35 text-sm md:text-base 2xl:text-lg'>Lesson {lesson.order}</span>
      </div>
      <div
        className='flex gap-1 bg-white-97 group-hover:bg-orange-80 p-2.5 2xl:p-3 rounded transition-all duration-300 w-fit md:min-w-fit mt-6 md:mt-0'>
        <Clock className='self-center' />
        <time>{formatDuration(lesson.duration as string)}</time>
      </div>
    </div>
  );
};

export default LessonItem;
