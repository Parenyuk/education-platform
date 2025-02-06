'use client';

import cn from '@/helpers/cn';
import { TagItemProps } from '@/lib/types/components/units/FilterItemsUnit/TagItem';

const TagItem = ({ item, onClick, isSelected }: TagItemProps) => {
  return (<div
    className={cn(`border p-2 rounded-lg cursor-pointer hover:bg-orange-50 transition`, { 'bg-orange-50': isSelected })}
    onClick={onClick}>{item}</div>);
};

export default TagItem;
