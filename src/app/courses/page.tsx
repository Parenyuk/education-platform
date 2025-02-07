import { SearchParams } from 'next/dist/server/request/search-params';

import { coursesDescription, coursesTitle } from '@/lib/constants/courses';
import { MetadataI } from '@/lib/types/common/metadata';
import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import { ExperienceLevelT } from '@/lib/types/components/units/FilterItemsUnit';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';
import { checkLevel } from '@/utils/helpers/checkLevel';

export default async function ContactPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { level } = await searchParams;

  const checkedLevel = checkLevel(level);

  const filters = [];
  if (checkedLevel?.length) {
    filters.push({ column: 'level', operator: 'in', value: checkedLevel });
  }

  const metaData = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'courses' }],
    options: { queryModifiers: [(q: unknown) => q.single()] },
  });

  const courses = await fetchData().getAll<CourseI[]>('courses',
    filters.length ? { filters } : {},
  );

  const metadataItem = metaData?.data;

  const title = metadataItem?.title || coursesTitle;

  const description = metadataItem?.description || coursesDescription;

  if (!courses.data) {
    return null;
  }

  return (
    <>
      <TopPageUnit title={title} description={description} />
      <FilterIItemsUnit level={(level as ExperienceLevelT[]) || 'all levels'} />
      <CoursesList data={courses.data} />
    </>
  );
}
