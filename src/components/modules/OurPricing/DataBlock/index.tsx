import { DataBlockProps } from '@/lib/types/components/modules/OurPricing/DataBlock';
import CardPrice from 'src/components/units/cards/СardPrice';

const DataBlock = ({ data, timePlanType }: DataBlockProps) => {
  return (
    <div className='grid gap-8 rounded-xl bg-white p-5 md:grid-cols-2 md:p-12 2xl:p-20'>
      {data?.map((item) => {
        return <CardPrice key={item.id} item={item} timePlanType={timePlanType} />;
      })}
    </div>
  );
};

export default DataBlock;
