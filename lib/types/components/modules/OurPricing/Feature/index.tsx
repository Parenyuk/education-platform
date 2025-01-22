'use client';
import CrossIcon from 'public/svg/cross.svg';
import TickIcon from 'public/svg/tick.svg';


const Feature = ({ item }: { item: { name: string, value: boolean } }) => {
  return (<div className='flex gap-2 2xl:gap-3'>
    {!!item.value ? <TickIcon /> : <CrossIcon />}
    <p>{item.name}</p>
  </div>);
};

export default Feature;
