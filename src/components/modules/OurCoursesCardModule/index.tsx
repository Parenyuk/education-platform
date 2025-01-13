import { CourseType } from '@/lib/types/components/modules/OurCoursesCardModule';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurCoursesCardModule = async ({ title, description }: { title: string; description: string }) => {
  const { getAll } = await fetchData();

  const { data: courses, error } = await getAll<CourseType[]>('courses');

  console.log('courses', courses);

  if (courses?.length == 0 || error) return null;

  return (
    <CardsBlock title={title} description={description} itemContainerStyles='md:grid-cols-2'>
      {courses?.map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
