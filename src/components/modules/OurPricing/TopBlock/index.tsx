import { TopBlockProps } from '@/lib/types/components/modules/OurPricing/TopBlock';

const TopBlock = ({ title, description }: TopBlockProps) => {
  return (
    <div className='flex flex-col'>
      {title && <h2 className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title}</h2>}
      {description && (
        <p className='mb-5 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>
          {description}
        </p>
      )}
    </div>
  );
};

export default TopBlock;
