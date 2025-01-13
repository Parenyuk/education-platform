import { CoursesType } from '@/lib/types/components/modules/OurCoursesCardModule';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurCoursesCardModule = async () => {
  const { getAll } = await fetchData();

  const { data: courses, error } = await getAll<CoursesType>('get_courses_with_metadata', { isRpc: true });

  if (courses?.data.length == 0 || error) return null;

  return (
    <CardsBlock title={courses?.title} description={courses?.description} itemContainerStyles='md:grid-cols-2'>
      {courses?.data.map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
