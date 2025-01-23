import { rpcFunction } from '@/lib/constants/tableFunctions';
import { FAQI } from '@/lib/types/components/modules/FAQ';
import { CardsCommonI } from '@/lib/types/components/units/CardsBlock';
import DataSide from '@/src/components/modules/FAQ/DataSide';
import HeadSide from '@/src/components/modules/FAQ/HeadSide';
import { fetchData } from '@/supabase/fetchData';

const FAQ = async () => {
  const { getAll } = await fetchData();

  const { data: faqData, error } = await getAll<CardsCommonI<FAQI>>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'faq',
  });

  if (error || !faqData || !faqData.data?.length) {
    return null;
  }

  return (
    <div
      className='mb:12 container mx-auto grid grid-cols-1 rounded-xl bg-white p-6 md:mb-24 md:grid-cols-[4fr_8fr] md:gap-20 md:p-20
        2xl:mb-36 2xl:gap-32 2xl:p-24'
    >
      <HeadSide title={faqData.title} description={faqData.description} />
      <DataSide data={faqData.data} />
    </div>
  );
};

export default FAQ;
