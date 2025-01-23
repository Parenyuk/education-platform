import { rpcFunction } from '@/lib/constants/tableFunctions';
import { FAQI } from '@/lib/types/components/modules/FAQ';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const FAQ = async ({}) => {
  const { getAll } = await fetchData();

  const { data: faqData, error } = await getAll<CardsCommonI<FAQI>>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'faq',
  });

  console.log('FAQ', faqData);

  if (error) return null;

  return (
    <div className='container mx-auto'>
      <h2>{faqData?.title}</h2>
    </div>
  );
};

export default FAQ;
