import { SearchParams } from 'next/dist/server/request/search-params';

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

  const metaData = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'courses' }],
    options: { queryModifiers: [(q) => q.single()] },
  });

  const courses = await fetchData().getAll<CourseI[]>('courses', {
    filters: [{ column: 'level', operator: 'in', value: checkedLevel }],
  });


  const metadataItem = metaData?.data;

  const title = metadataItem?.title || 'Our Courses';

  const description = metadataItem?.description || 'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in';

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
