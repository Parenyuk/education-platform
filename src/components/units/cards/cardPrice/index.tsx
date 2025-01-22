import { FeatureType } from '@/lib/types/components/modules/OurPricing';
import Feature from '@/lib/types/components/modules/OurPricing/Feature';
import { CardPriceProps } from '@/lib/types/components/units/cards/CardPrice';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const CardPrice = ({ item }: CardPriceProps) => {
  const {
    plan_type: planType,
    price_per_month: pricePerMonth,
    // price_per_year: pricePerYear,
    available_features: availableFeatures,
  } = item;

  return (
    <div className='rounded-xl border border-white-95 bg-white-99 px-5 py-8 md:px-6 md:py-10 2xl:px-8 2xl:py-12'>
      <div
        className='grid place-items-center rounded border border-orange-90 bg-orange-97 p-2 text-base font-medium md:p-2.5 md:text-lg
          2xl:rounded-md 2xl:p-3 2xl:text-2xl'
      >
        {planType}
      </div>
      <span className='text-6xl font-semibold md:text-7xl 2xl:text-8xl'>${pricePerMonth}</span>
      <span className='text-base font-medium md:text-lg 2xl:text-xl'>/month</span>
      <div className='rounded-t-md border border-white-95 bg-white p-5 md:rounded-t-lg md:p-8 2xl:p-10'>
        <p className='mb-5 text-center text-lg font-medium md:mb-6 2xl:mb-8 2xl:text-2xl'>Available Features</p>
        {availableFeatures.map((feature: FeatureType, index: number) => (
          <Feature item={feature} key={index} />
        ))}
      </div>
      <LinkAsButton href={'/'} color='secondary' type='secondary-full'>
        Get Started
      </LinkAsButton>
    </div>
  );
};

export default CardPrice;
