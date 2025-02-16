import { DataBlockProps } from '@/lib/types/components/units/DataBlock';
import ModuleItem from '@/src/components/modules/SingleCourse/ModuleItem';

const DataBlock = ({ data }: DataBlockProps) => {
  return (
    <div className='container mx-auto mb-12 grid gap-5 md:mb-24 md:grid-cols-2 2xl:mb-32 2xl:gap-8'>
      {data?.map((item, index) => {
        return <ModuleItem key={item.id} item={item} order={index + 1} />;
      })}
    </div>
  );
};

export default DataBlock;
