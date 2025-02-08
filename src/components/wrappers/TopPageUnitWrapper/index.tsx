import { coursesDescription, coursesTitle } from '@/lib/constants/courses';
import { MetadataI } from '@/lib/types/common/metadata';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { fetchData } from '@/supabase/fetchData';

const TopPageUnitWrapper = async () => {
  const metaData = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'courses' }],
    queryOptions: { queryModifiers: [(q) => q.single()] },
  });

  const metadataItem = metaData?.data;

  const title = metadataItem?.title || coursesTitle;

  const description = metadataItem?.description || coursesDescription;

  return <TopPageUnit title={title} description={description} />;
};

export default TopPageUnitWrapper;
