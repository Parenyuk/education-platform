import { CourseItemProps } from '@/lib/types/components/modules/CoursesList/CourseItem';
import CourseIntro from '@/src/components/modules/CoursesList/CourseIntro';
import ImagesBlock from '@/src/components/modules/CoursesList/CourseItem/ImagesBlock';
import TagsAndAuthor from '@/src/components/modules/CoursesList/CourseItem/TagsAndAuthor';
import TopBlock from '@/src/components/modules/CoursesList/CourseItem/TopBlock';

const CourseItem = ({ item }: CourseItemProps) => {
  return (
    <div className='rounded-md bg-white p-6 md:rounded-lg md:p-10 2xl:rounded-xl 2xl:p-12'>
      <TopBlock item={item} />
      {item.images?.length === 0 && <ImagesBlock images={item.images} />}
      <TagsAndAuthor item={item} />
      {item.course_modules?.length > 0 && <CourseIntro item={item.course_modules} />}
    </div>
  );
};

export default CourseItem;
