'use client';
import { FeatureProps } from '@/lib/types/components/modules/OurPricing/FeatureProps';
import Cross from '@/src/components/elements/svgElements/Cross';
import Tick from '@/src/components/elements/svgElements/Tick';

const Feature = ({ item }: FeatureProps) => {
  return (
    <div className='mb-5 flex gap-2 rounded-md border border-white-95 p-3 2xl:gap-3 2xl:rounded-lg 2xl:p-3.5'>
      {item.value ? <Tick /> : <Cross />}
      <p>{item.name}</p>
    </div>
  );
};

export default Feature;
