import { coursesDescription, coursesTitle } from '@/lib/constants/courses';
import { MetadataI } from '@/lib/types/common/metadata';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';

const TopPageUnitWrapper = async () => {
  const { data: metaData } = await fetchData().getOne<MetadataI>('global_metadata', 'table_name_key', 'courses');

  const title = metaData?.title || coursesTitle;

  const description = metaData?.description || coursesDescription;

  return <TopPageUnit title={title} description={description} />;
};

export default TopPageUnitWrapper;
