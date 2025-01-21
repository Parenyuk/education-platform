'use client';

import { useState } from 'react';

import { Checkbox } from '@heroui/checkbox';


const Feature = ({ item }: { item: { name: string, value: boolean } }) => {
  const [isSelected, setIsSelected] = useState(item.value);

  console.log('item.', typeof item.value);

  return (<div className='flex'>
    <Checkbox
      aria-label={item.name}
      isSelected={isSelected}
      onValueChange={setIsSelected}
      color='primary'
    >
      {item.name}
    </Checkbox>
  </div>);
};

export default Feature;
