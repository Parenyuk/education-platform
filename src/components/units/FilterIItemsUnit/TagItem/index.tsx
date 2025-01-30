'use client';

import cn from '@/helpers/cn';

const TagItem = ({ item, onClick, isSelected }) => {
  return (<div
    className={cn(`border p-2 rounded-lg cursor-pointer hover:bg-orange-50 transition`, { 'bg-orange-50': isSelected })}
    onClick={onClick}>{item}</div>);
};

export default TagItem;
