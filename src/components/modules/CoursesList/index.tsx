import { CoursesListProps } from '@/lib/types/components/modules/CoursesList';
import CourseItem from '@/src/components/modules/CoursesList/CourseItem';

const CoursesList = ({ data }: CoursesListProps) => {
  if (!data) return null;

  return (
    <div
      className='md-mb-24 container mx-auto my-12 space-y-5 md:mt-20 md:space-y-10 2xl:mb-32 2xl:mt-24 2xl:space-y-12'>
      {data?.map((item) => (
        <CourseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CoursesList;
