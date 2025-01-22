import Feature from '@/lib/types/components/modules/OurPricing/Feature';
import { CardPriceProps } from '@/lib/types/components/units/cards/CardPrice';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const CardPrice = ({ item }: CardPriceProps) => {
  const {
    plan_type: planType,
    price_per_month: pricePerMonth,
    price_per_year: pricePerYear,
    available_features: availableFeatures,
  } = item;

  console.log('features 1', item.available_features);
  return (<div className='px-5 py-8 md:px-6 md:py-10 2xl:px-8 2xl:py-12 bg-white-99 rounded-xl border border-white-95'>
    <div
      className='grid place-items-center rounded 2xl:rounded-md bg-orange-97 border border-orange-90 font-medium text-base md:text-lg 2xl:text-2xl p-2 md:p-2.5 2xl:p-3'>{planType}</div>
    <span className='text-6xl md:text-7xl 2xl:text-8xl font-semibold '>${pricePerMonth}</span>
    <span
      className='text-base md:text-lg 2xl:text-xl font-medium'>/month</span>
    <div className='bg-white rounded-t-md md:rounded-t-lg border border-white-95 p-5 md:p-8 2xl:p-10'>
      <p className='text-lg font-medium 2xl:text-2xl text-center mb-5 md:mb-6 2xl:mb-8'>Available Features</p>
      {
        availableFeatures.map((feature: any, index: number) => <Feature item={feature} key={index} />)
      }
    </div>
    <LinkAsButton href={'/'}
      color='secondary'
      type='secondary-full'
    >Get Started</LinkAsButton>
  </div>);
};

export default CardPrice;
