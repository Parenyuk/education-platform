'use client';

import { Accordion, AccordionItem } from '@heroui/react';

import { DataSideProps } from '@/lib/types/components/modules/FAQ/DataSide';
import FAQCross from '@/src/components/elements/svgElements/FAQCross';
import FAQPlus from '@/src/components/elements/svgElements/FAQPlus';
import RightArrowUnit from '@/src/components/units/RightArrowUnit';

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
          {item.linkText && (
            <div
              className='mt-5 flex justify-between rounded-md bg-white-95 px-5 py-3 md:mt-10 md:px-6 md:py-4 2xl:mt-12 2xl:rounded-lg 2xl:px-8
                2xl:py-5'
            >
              <p className='self-center text-sm font-medium md:text-base 2xl:text-lg'>{item.linkText}</p>
              <RightArrowUnit link={item.link} />
            </div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default DataSide;
