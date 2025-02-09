import { MetadataI } from '@/lib/types/common/metadata';
import { fetchData } from '@/supabase/fetchData';

const TopBlock = async () => {
  const { data: metaData } = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'pricing' }],
    queryOptions: { queryModifiers: [(q) => q.single()] },
  });

  return (
    <div className='flex flex-col'>
      {metaData?.title && <h2 className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{metaData.title}</h2>}
      {metaData?.description && (
        <p
          className='mb-5 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>
          {metaData.description}
        </p>
      )}
    </div>
  );
};

export default TopBlock;
