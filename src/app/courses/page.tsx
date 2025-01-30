import { Tables } from '@/database.types';
import { rpcFunction } from '@/lib/constants/tableFunctions';
import CoursesList from '@/src/components/modules/CoursesList';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';

export default async function ContactPage() {
  const { data: courses, error } = await fetchData().getAll<Tables<'courses'>, true>(
    rpcFunction.getTableWithMetadata,
    {
      isRpc: true,
      table_name: 'courses',
    },
  );

  if (courses?.data?.length == 0 || !courses || error) return null;

  return (
    <>
      <TopPageUnit title={courses?.data.title} description={courses?.description} />
      <CoursesList data={courses.data} />
    </>
  );
}
