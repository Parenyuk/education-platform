'use client';

import { useState } from 'react';

import { Button } from '@heroui/button';

import { FeatureType } from '@/lib/types/components/modules/OurPricing';
import { CardPriceProps } from '@/lib/types/components/units/cards/CardPrice';
import DisplayPrice from '@/src/components/units/cards/СardPrice/DisplayPrice';
import PaymentModal from '@/src/components/units/cards/СardPrice/PaymentModal';
import Feature from 'src/components/modules/OurPricing/Feature';

const CardPrice = ({ item, timePlanType }: CardPriceProps) => {
  const {
    plan_type: planType,
    price_per_month: pricePerMonth,
    price_per_year: pricePerYear,
    available_features: availableFeatures,
  } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(pricePerMonth);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSelectedAmount(timePlanType === 'month' ? pricePerMonth : pricePerYear);
  };

  return (
    <div className='rounded-xl border border-white-95 bg-white-99 px-5 py-8 md:px-6 md:py-10 2xl:px-8 2xl:py-12'>
      <div
        className='grid place-items-center rounded border border-orange-90 bg-orange-97 p-2 text-base font-medium md:p-2.5 md:text-lg
          2xl:rounded-md 2xl:p-3 2xl:text-2xl'
      >
        {planType}
      </div>

      {pricePerMonth && pricePerYear && (
        <DisplayPrice pricePerMonth={pricePerMonth} pricePerYear={pricePerYear} timePlanType={timePlanType} />
      )}

      <div className='rounded-t-md border border-white-95 bg-white p-5 md:rounded-t-lg md:p-8 2xl:p-10'>
        <p className='mb-5 text-center text-lg font-medium md:mb-6 2xl:mb-8 2xl:text-2xl'>Available Features</p>
        {availableFeatures?.map((feature: FeatureType, index: number) => <Feature item={feature} key={index} />)}
      </div>

      <Button
        onPress={handleOpenModal}
        className='grid w-full place-items-center rounded-b-md rounded-t-none bg-orange-50 px-6 py-2.5 text-sm font-semibold text-white
          md:rounded-b-lg 2xl:px-8 2xl:py-3.5 2xl:text-lg'
      >
        Get Started
      </Button>

      {isModalOpen && selectedAmount && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          amount={selectedAmount}
          planType={timePlanType}
        />
      )}
    </div>
  );
};

export default CardPrice;
