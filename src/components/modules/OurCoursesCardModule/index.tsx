import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurCoursesCardModule = async () => {
  const { data: courses, error } = await fetchData().getAll<CourseI[]>('courses');

  if (error || courses?.length === 0) return null;

  return (
    <CardsBlock tableName='courses' itemContainerStyles='md:grid-cols-2'>
      {courses?.slice(0, 6).map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
