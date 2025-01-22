'use client';

import { Button } from '@heroui/button';

import cn from '@/helpers/cn';
import { TabButtonsProps } from '@/lib/types/components/modules/OurPricing/TabButtons';

const TabButtons = ({ timePlanType, setTimePlanType }: TabButtonsProps) => {
  const bgAnimationStyle =
    'absolute left-0 top-0 z-20 m-3 h-10 w-32 rounded-md bg-orange-50 transition-transform duration-300 ease-in-out';

  const buttonStyle = 'relative z-30 w-32 bg-transparent text-center';

  const translateClass = timePlanType === 'month' ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className='relative mb-10 flex self-center rounded-lg bg-white p-3 md:ml-24 xl:ml-40 2xl:ml-64'>
      <div className={cn(bgAnimationStyle, translateClass)}></div>
      <Button className={buttonStyle} onPress={() => setTimePlanType('month')}>
        Monthly
      </Button>
      <Button className={buttonStyle} onPress={() => setTimePlanType('year')}>
        Yearly
      </Button>
    </div>
  );
};

export default TabButtons;
