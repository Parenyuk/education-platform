import { InfoCardType } from '@/lib/types/components/units/InfoCardsUnit/InfoCard';

const InfoCard = ({ item }: { item: InfoCardType }) => {
  return (
    <div className='rounded-lg bg-white p-8 md:p-10 2xl:p-12'>
      <div className='inline-block rounded-lg bg-orange-97 p-3.5 2xl:p-4'>
        <item.icon className='z-10 h-7 w-7 transition hover:scale-125' />
      </div>
      <h4 className='2xl-mt-8 mt-6 text-lg font-medium text-grey-15 md:text-xl 2xl:text-2xl'>{item.title}</h4>
      <p className='text-base md:text-lg'>{item.text}</p>
    </div>
  );
};

export default InfoCard;
