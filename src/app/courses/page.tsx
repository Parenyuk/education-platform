import type { SearchParams } from 'nuqs/server';

import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import PaginationUnit from '@/src/components/units/PaginationUnit';
import TopPageUnitWrapper from '@/src/components/wrappers/TopPageUnitWrapper';
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

  const courses = await fetchData().getAll<CourseI[]>('courses', {
    filters,
    pagination: { limit: itemsPerPage, offset: (currentPage - 1) * itemsPerPage },
  });

  if (!courses.data) {
    return null;
  }

  return (
    <>
      <TopPageUnitWrapper />
      <FilterIItemsUnit />
      <CoursesList data={courses.data} />
      <PaginationUnit total={courses.count} />
    </>
  );
}
