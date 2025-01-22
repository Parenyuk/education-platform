'use client';

import { useState } from 'react';

import {
  PricingClientComponentProps,
  TimePricePlanT,
} from '@/lib/types/components/modules/OurPricing/PricingClientComponent';
import DataBlock from '@/src/components/modules/OurPricing/DataBlock';
import TabButtons from '@/src/components/modules/OurPricing/TabButtons';
import TopBlock from '@/src/components/modules/OurPricing/TopBlock';

const PricingClientComponent = ({ data }: PricingClientComponentProps) => {
  if (!data) return null;

  const { title, description, data: ourPricingData } = data;

  const [timePlanType, setTimePlanType] = useState<TimePricePlanT>('month');

  return (
    <div className='container mx-auto mb-12 md:mb-24 2xl:mb-36'>
      <div className='flex flex-col md:flex-row'>
        <TopBlock title={title} description={description} />
        <TabButtons timePlanType={timePlanType} setTimePlanType={setTimePlanType} />
      </div>
      <DataBlock data={ourPricingData} timePlanType={timePlanType} />
    </div>
  );
};

export default PricingClientComponent;
