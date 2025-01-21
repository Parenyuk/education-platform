'use client';

import { useState } from 'react';

import { CustomCheckbox } from '@/src/components/elements/CustomCheckbox';


const Feature = ({ item }: { item: { name: string, value: boolean } }) => {
  const [isSelected, setIsSelected] = useState(item.value);

  console.log('item.', typeof item.value);

  return (<div className='flex'>
    {/*<Checkbox*/}
    {/*  aria-label={item.name}*/}
    {/*  isSelected={isSelected}*/}
    {/*  onValueChange={setIsSelected}*/}

    {/*  // color='primary'*/}
    {/*  className='!after:bg-[#FF0000]'*/}
    {/*  // classNames={{*/}
    {/*  //   base: '!after:bg-red-500',*/}
    {/*  //   wrapper: '!after:bg-red-500',*/}
    {/*  //   hiddenInput: '!after:bg-red-500',*/}
    {/*  //   icon: '!after:bg-red-500',*/}
    {/*  //   label: '!after:bg-red-500',*/}
    {/*  // }}*/}
    {/*>*/}
    {/*  {item.name}*/}
    {/*</Checkbox>*/}
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
