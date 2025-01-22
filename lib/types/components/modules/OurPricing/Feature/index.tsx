'use client';
import CrossIcon from 'public/svg/cross.svg';
import TickIcon from 'public/svg/tick.svg';

const Feature = ({ item }: { item: { name: string; value: boolean } }) => {
  return (
    <div className='mb-5 flex gap-2 rounded-md border border-white-95 p-3 2xl:gap-3 2xl:rounded-lg 2xl:p-3.5'>
      {!!item.value ? <TickIcon /> : <CrossIcon />}
      <p>{item.name}</p>
    </div>
  );
};

export default Feature;
