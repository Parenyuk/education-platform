import { CourseT } from '@/lib/types/common/tables';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurCoursesCardModule = async () => {
  const { data: courses, error } = await fetchData().getAll<CourseT[]>('courses');

  if (error || !courses?.length) return null;

  return (
    <CardsBlock tableName='courses' itemContainerStyles='md:grid-cols-2'>
      {courses?.slice(0, 6).map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
