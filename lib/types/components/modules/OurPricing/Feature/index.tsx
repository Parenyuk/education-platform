'use client';

import { useState } from 'react';

import { CustomCheckbox } from '@/src/components/elements/CustomCheckbox';


const Feature = ({ item }: { item: { name: string, value: boolean } }) => {
  const [isSelected, setIsSelected] = useState(item.value);

  return (<div className='flex'>

    <CustomCheckbox
      aria-label={item.name}
      isSelected={isSelected}
      label={item.name}
    >
      {item.name}
    </CustomCheckbox>
  </div>);
};

export default Feature;
