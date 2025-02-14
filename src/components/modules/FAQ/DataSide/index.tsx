'use client';

import { Accordion } from '@heroui/react';

import { DataSideProps } from '@/lib/types/components/modules/FAQ/DataSide';
import AccordionItemComponent from '@/src/components/modules/FAQ/DataSide/AccordionItemComponent';

const DataSide = ({ data }: DataSideProps) => {
  return (
    <Accordion className='space-y-4'>
      {data.map((item) => (
        <AccordionItemComponent key={item.id} item={item} />
      ))}
    </Accordion>
  );
};

export default DataSide;
