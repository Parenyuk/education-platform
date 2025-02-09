import { CardsBlockProps } from '@/lib/types/components/units/CardsBlock';
import TopContentWrapper from '@/src/components/units/CardsBlock/TopContentWrapper';
import cn from '@/utils/helpers/cn';

const CardsBlock = ({ children, itemContainerStyles, tableName }: CardsBlockProps) => {
  return (
    <div className='container mx-auto my-12 md:my-24 2xl:my-40'>
      <TopContentWrapper tableName={tableName} />
      <div className={cn('grid gap-5 md:grid-cols-3', itemContainerStyles)}>{children}</div>
    </div>
  );
};

export default CardsBlock;
