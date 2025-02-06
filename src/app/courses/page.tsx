import { SearchParams } from 'next/dist/server/request/search-params';

import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CourseType } from '@/lib/types/components/modules/OurCoursesCardModule';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import { ExperienceLevelT } from '@/lib/types/components/units/FilterItemsUnit';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';
import { checkLevel } from '@/utils/helpers/checkLevel';

export default async function ContactPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { level } = await searchParams;

  const checkedLevel = checkLevel(level);

  const { data: courses, error } = await fetchData().getAll<CardsCommonI<CourseType>>(
    rpcFunction.getTableWithMetadata,
    {
      isRpc: true,
      table_name: 'courses',
      filter_level: checkedLevel,
    }
  );

  if (courses?.data.length == 0 || !courses || error) return null;

  return (
    <>
      <TopPageUnit title={courses?.title} description={courses?.description} />
      <FilterIItemsUnit level={(level as ExperienceLevelT[]) || 'all levels'} />
      <CoursesList data={courses.data} />
    </>
  );
}
