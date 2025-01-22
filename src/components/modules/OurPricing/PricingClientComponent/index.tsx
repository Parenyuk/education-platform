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

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col'>
          {title && <p className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title}</p>}
          {description && (
            <p className='mb-5 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>
              {description}
            </p>
          )}
        </div>
        <div className='relative mb-10 flex self-center rounded-lg bg-white p-3 md:ml-24 xl:ml-40 2xl:ml-64'>
          <div
            className={cn(
              'absolute left-0 top-0 z-20 m-3 h-10 w-32 rounded-md bg-orange-50 transition-transform duration-300 ease-in-out',
              {
                'translate-x-0': timePlanType === 'month',
                'translate-x-full': timePlanType === 'year',
              }
            )}
          ></div>
          <Button
            className={cn('relative z-30 w-32 bg-transparent text-center')}
            onPress={() => setTimePlanType('month')}
          >
            Monthly
          </Button>
          <Button
            className={cn('relative z-30 w-32 bg-transparent text-center')}
            onPress={() => setTimePlanType('year')}
          >
            Yearly
          </Button>
        </div>
      </div>

      <div className='grid gap-8 rounded-xl bg-white p-5 md:grid-cols-2 md:p-12 2xl:p-20'>
        {ourPricingData?.map((item) => {
          return <CardPrice key={item.id} item={item} timePlanType={timePlanType} />;
        })}
      </div>
    </div>
  );
};

export default PricingClientComponent;
