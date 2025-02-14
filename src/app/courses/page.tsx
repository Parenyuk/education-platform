import type { SearchParams } from 'nuqs/server';

import { SelectCoursesAndModules } from '@/lib/constants/coursesAndModules';
import { INITIAL_PAGE } from '@/lib/constants/initialPage';
import { ITEMS_PER_PAGE } from '@/lib/constants/itemsPerPage';
import { CourseAndModulesI } from '@/lib/types/common/tables';
import CoursesList from '@/src/components/modules/CoursesList';
import FilterIItemsUnit from '@/src/components/units/FilterIItemsUnit';
import PaginationUnit from '@/src/components/units/PaginationUnit';
import TopPageUnitWrapper from '@/src/components/wrappers/TopPageUnitWrapper';
import { fetchData } from '@/supabase/fetchData';
import { checkLevel } from '@/utils/helpers/checkLevel';
import { paginationOffset } from '@/utils/helpers/paginationOffset';
import { loadSearchParams } from '@/utils/nuqs';

export default async function CoursesPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { page, level } = await loadSearchParams(searchParams);

  const currentPage = page || INITIAL_PAGE;
  const checkedLevel = checkLevel(level);

  const filters = [];
  if (checkedLevel?.length) {
    filters.push({ column: 'level', operator: 'in', value: checkedLevel });
  }

  const courses = await fetchData().getAll<CourseAndModulesI[]>(
    'courses',
    {
      filters,
      pagination: { limit: ITEMS_PER_PAGE, offset: paginationOffset(currentPage) },
    },
    SelectCoursesAndModules
  );

  if (!courses.data) return null;

  return (
    <>
      <TopPageUnitWrapper />
      <FilterIItemsUnit />
      <CoursesList data={courses.data} />
      {courses.count && <PaginationUnit total={courses.count} />}
    </>
  );
}
