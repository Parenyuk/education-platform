import { FAQT } from '@/lib/types/common/tables';
import DataSide from '@/src/components/modules/FAQ/DataSide';
import HeadSide from '@/src/components/modules/FAQ/HeadSide';
import { fetchData } from '@/supabase/fetchData';

const FAQ = async () => {
  const { data: faqData, error } = await fetchData().getAll<FAQT[]>('faq');

  if (error || !faqData?.length) return null;

  return (
    <div
      className='mb:12 container mx-auto grid grid-cols-1 rounded-xl bg-white p-6 md:mb-24 md:grid-cols-[4fr_8fr] md:gap-20 md:p-20
        2xl:mb-36 2xl:gap-32 2xl:p-24'
    >
      <HeadSide />
      <DataSide data={faqData} />
    </div>
  );
};

export default FAQ;
