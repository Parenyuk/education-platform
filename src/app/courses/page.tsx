import type { SearchParams } from 'nuqs/server';

import { coursesDescription, coursesTitle } from '@/lib/constants/courses';
import { MetadataI } from '@/lib/types/common/metadata';
import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import PaginationUnit from '@/src/components/units/PaginationUnit';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';
import { checkLevel } from '@/utils/helpers/checkLevel';
import { loadSearchParams } from '@/utils/nuqs';

export default async function CoursesPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { page, level } = await loadSearchParams(searchParams);

  const currentPage = page || 1;
  const itemsPerPage = 5;
  const checkedLevel = checkLevel(level);

  const filters = [];
  if (checkedLevel?.length) {
    filters.push({ column: 'level', operator: 'in', value: checkedLevel });
  }

  const metaData = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'courses' }],
    options: { queryModifiers: [(q: unknown) => q.single()] },
  });

  const courses = await fetchData().getAll<CourseI[]>('courses', {
    filters,
    pagination: { limit: itemsPerPage, offset: (currentPage - 1) * itemsPerPage },
  });

  const metadataItem = metaData?.data;

  const title = metadataItem?.title || coursesTitle;

  const description = metadataItem?.description || coursesDescription;

  if (!courses.data) {
    return null;
  }

  return (
    <>
      <TopPageUnit title={title} description={description} />
      <FilterIItemsUnit />
      <CoursesList data={courses.data} />
      <PaginationUnit total={courses.count} />
    </>
  );
}
