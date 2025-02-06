import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CourseType } from '@/lib/types/components/modules/OurCoursesCardModule';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';

export default async function ContactPage({ searchParams }) {
  // console.log('p', await searchParams);

  const { level } = await searchParams;

  // console.log('level', level);

  const { data: courses, error } = await fetchData().getAll<CardsCommonI<CourseType>>(
    rpcFunction.getTableWithMetadata,
    {
      isRpc: true,
      table_name: 'courses',
      filter_level: level,
    },
  );

  // console.log('courses', courses);

  if (courses?.data.length == 0 || !courses || error) return null;

  return (
    <>
      <TopPageUnit title={courses?.title} description={courses?.description} />
      <FilterIItemsUnit />
      <CoursesList data={courses.data} />
    </>
  );
}
