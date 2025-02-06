import { InfoCardsBlockProps } from '@/lib/types/components/units/InfoCardsUnit';
import InfoCard from '@/src/components/units/InfoCardsBlock/InfoCard';
import cn from '@/utils/helpers/cn';

const InfoCardsBlock = ({ title, description, data, classNames }: InfoCardsBlockProps) => {
  return (
    <div className={cn('mt:12 mb:6 md:mb-24 md:mt-20 2xl:mb-44 2xl:mt-24', classNames)}>
      <h3 className='2xl:6xl text-2xl font-medium text-grey-20 md:text-3xl'>{title}</h3>
      <p className='text-grey-35'>{description}</p>
      <section className='mt-12 grid gap-5 md:mt-15 md:grid-cols-2 2xl:mt-20 2xl:gap-8'>
        {data.map((item) => {
          return <InfoCard key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};

export default InfoCardsBlock;
