import { OurPricingType } from '@/lib/types/components/modules/OurPricing';
import CardPrice from '@/src/components/units/cards/cardPrice';
import { fetchData } from '@/supabase/fetchData';

const OurPricing = async ({}) => {
  const { getAll } = await fetchData();

  const { data: ourPricing, error } = await getAll<OurPricingType>('get_pricing_with_metadata', { isRpc: true });

  if (ourPricing?.data.length == 0 || error) return null;

  return (
    <div className='container mx-auto'>
      <p>{ourPricing?.title}</p>
      <p>{ourPricing?.description}</p>
      <div className='grid gap-8 rounded-xl bg-white p-5 md:grid-cols-2 md:p-12 2xl:p-20'>
        {ourPricing?.data.map((item) => {
          return <CardPrice key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default OurPricing;
