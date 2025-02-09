import { MetadataI } from '@/lib/types/common/metadata';
import { TopContentWrapperProps } from '@/lib/types/components/units/CardsBlock/TopContentWrapper';
import TopContent from '@/src/components/units/CardsBlock/TopContent';
import { fetchData } from '@/supabase/fetchData';

const TopContentWrapper = async ({ tableName }: TopContentWrapperProps) => {
  const { data: metaData } = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: tableName }],
    queryOptions: { queryModifiers: [(q) => q.single()] },
  });

  if (!metaData) return null;

  return (<TopContent title={metaData.title ?? ''} description={metaData.description ?? ''} />);
};

export default TopContentWrapper;
