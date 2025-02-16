'use client';

import { useState } from 'react';

import {
  PricingClientComponentProps,
  TimePricePlanT,
} from '@/lib/types/components/modules/OurPricing/PricingClientComponent';
import DataBlock from '@/src/components/modules/OurPricing/DataBlock';
import TabButtons from '@/src/components/modules/OurPricing/TabButtons';
import cn from '@/utils/helpers/cn';
import { pricingModeStyles } from '@/utils/helpers/pricingModeStyles';

const PricingClientComponent = ({ data, children, mode = 'right' }: PricingClientComponentProps) => {
  if (!data) return null;

  const [timePlanType, setTimePlanType] = useState<TimePricePlanT>('month');

  return (
    <div className='container mx-auto mb-12 md:mb-24 2xl:mb-36'>
      <div className={cn('flex', pricingModeStyles[mode])}>
        {mode === 'right' && children}
        <TabButtons timePlanType={timePlanType} setTimePlanType={setTimePlanType} />
      </div>
      <DataBlock data={data} timePlanType={timePlanType} />
    </div>
  );
};

export default PricingClientComponent;
