'use client';

import { Accordion, AccordionItem } from '@heroui/react';

import { DataSideProps } from '@/lib/types/components/modules/FAQ/DataSide';
import FAQCross from '@/src/components/elements/svgElements/FAQCross';
import FAQPlus from '@/src/components/elements/svgElements/FAQPlus';

const DataSide = ({ data }: DataSideProps) => {
  return (
    <Accordion className='space-y-4'>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.question}
          className='rounded-lg border p-6 md:px-10 2xl:px-12 2xl:py-8'
          classNames={{
            heading: 'data-[open=true]:pb-2 data-[open=true]:border-b data-[open=true]:border-gray-200',
            content: 'data-[open=true]:pt-5 md:data-[open=true]:pt-10 2xl:data-[open=true]:pt-12',
          }}
          indicator={({ isOpen }) => (isOpen ? <FAQCross /> : <FAQPlus />)}
        >
          <p className=''>{item.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default DataSide;
