import { MetadataI } from '@/lib/types/common/metadata';
import { TopContentWrapperProps } from '@/lib/types/components/units/CardsBlock/TopContentWrapper';
import TopContent from '@/src/components/units/CardsBlock/TopContent';
import { fetchData } from '@/supabase/fetchData';

const TopContentWrapper = async ({ tableName }: TopContentWrapperProps) => {
  const { data: metaData } = await fetchData().getOne<MetadataI>('global_metadata', 'table_name_key', tableName);

  if (!metaData) return null;

  return <TopContent title={metaData.title ?? ''} description={metaData.description ?? ''} />;
};

export default TopContentWrapper;
