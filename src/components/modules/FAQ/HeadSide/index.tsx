import { FAQ } from '@/lib/constants/faq';
import { MetadataI } from '@/lib/types/common/metadata';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import { fetchData } from '@/supabase/fetchData';

const HeadSide = async () => {
  const { data: metaData } = await fetchData().getAll<MetadataI>('global_metadata', {
    filters: [{ column: 'table_name_key', operator: 'eq', value: 'faq' }],
    queryOptions: { queryModifiers: [(q) => q.single()] },
  });

  if (!metaData) return null;

  return (
    <div>
      <h2
        className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{metaData.title || FAQ}</h2>
      <p className='mt-2 text-sm md:text-base 2xl:text-lg'>{metaData.description}</p>
      <LinkAsButton className='mt-5 md:mt-10 2xl:mt-12' type='tertiary' href='/'>
        See All FAQ’s
      </LinkAsButton>
    </div>
  );
};

export default HeadSide;
