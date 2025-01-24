import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CourseType } from '@/lib/types/components/modules/OurCoursesCardModule';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import CoursesList from '@/src/components/modules/CoursesList';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';

export default async function ContactPage() {
  const { data: courses, error } = await fetchData().getAll<CardsCommonI<CourseType>>(
    rpcFunction.getTableWithMetadata,
    {
      isRpc: true,
      table_name: 'courses',
    }
  );

  if (courses?.data.length == 0 || !courses || error) return null;

  return (
    <>
      <TopPageUnit title={courses?.title} description={courses?.description} />
      <CoursesList data={courses.data} />
    </>
  );
}
