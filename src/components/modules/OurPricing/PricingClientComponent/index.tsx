'use client';

import { useState } from 'react';

import { Button } from '@heroui/button';

import cn from '@/helpers/cn';
import { OurPricingType } from '@/lib/types/components/modules/OurPricing';
import { TimePricePlanT } from '@/lib/types/components/modules/OurPricing/PricingClientComponent';
import CardPrice from '@/src/components/units/cards/cardPrice';

const PricingClientComponent = ({ data }: { data: OurPricingType }) => {
  const { title, description, data: ourPricingData } = data;

  const [timePlanType, setTimePlanType] = useState<TimePricePlanT>('month');

  return (<div className='container mx-auto'>
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col'>
        {title && <p className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title}</p>}
        {description && <p
          className='mb-5 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>{description}</p>}
      </div>
      <div className='flex self-center gap-2 p-3 bg-white rounded-lg mb-10 md:ml-24 xl:ml-40 2xl:ml-64'>
        <Button className={cn({ 'bg-orange-50': timePlanType === 'month' })}
          onPress={() => setTimePlanType('month')}>Monthly</Button>
        <Button className={cn({ 'bg-orange-50': timePlanType === 'year' })}
          onPress={() => setTimePlanType('year')}>Yearly</Button>
      </div>
    </div>

    <div className='grid gap-8 rounded-xl bg-white p-5 md:grid-cols-2 md:p-12 2xl:p-20'>
      {ourPricingData?.map((item) => {
        return <CardPrice key={item.id} item={item} timePlanType={timePlanType} />;
      })}
    </div>
  </div>);
};

export default PricingClientComponent;
