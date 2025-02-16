import { DisplayPriceProps } from '@/lib/types/components/units/cards/CardPrice/DisplayPrice';
import { pricingLabels } from '@/utils/helpers/pricingLabels';

const DisplayPrice = ({ pricePerMonth, pricePerYear, timePlanType }: DisplayPriceProps) => {
  const priceMap = {
    month: pricePerMonth,
    year: pricePerYear,
  };

  return (
    <>
      <span className='text-6xl font-semibold md:text-7xl 2xl:text-8xl'>${priceMap[timePlanType]}</span>
      <span className='text-base font-medium md:text-lg 2xl:text-xl'>{pricingLabels[timePlanType]}</span>
    </>
  );
};

export default DisplayPrice;
