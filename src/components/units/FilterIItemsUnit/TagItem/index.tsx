'use client';

import { TagItemProps } from '@/lib/types/components/units/FilterItemsUnit/TagItem';
import cn from '@/utils/helpers/cn';

const TagItem = ({ item, onClick, isSelected }: TagItemProps) => {
  return (
    <div
      className={cn('cursor-pointer rounded-lg border p-2 transition hover:bg-orange-50', {
        'bg-orange-50': isSelected,
      })}
      onClick={onClick}
    >
      {item}
    </div>
  );
};

export default TagItem;
