import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const OurCoursesCardModule = async () => {
  const { data: courses, error } = await fetchData().getAll<CardsCommonI<CourseI>>(
    rpcFunction.getTableWithMetadata,
    {
      isRpc: true,
      table_name: 'courses',
    },
  );

  if (courses?.data.length == 0 || error) return null;

  return (
    <CardsBlock title={courses?.title} description={courses?.description} itemContainerStyles='md:grid-cols-2'>
      {courses?.data.slice(0, 6).map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
