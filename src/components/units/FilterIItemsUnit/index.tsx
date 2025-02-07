'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { experienceLevels } from '@/lib/constants/experienceLevels';
import { ROUTES } from '@/lib/constants/routes';
import { ExperienceLevelT, FilterItemsUnitProps } from '@/lib/types/components/units/FilterItemsUnit';
import TagItem from '@/src/components/units/FilterIItemsUnit/TagItem';

const FilterItemsUnit = ({ level }: FilterItemsUnitProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState<ExperienceLevelT[]>(level);

  const handleTagClick = (item: ExperienceLevelT) => {
    setSelected((prevSelected) => {
      let newSelection: ExperienceLevelT[];

      if (item === 'all levels') {
        newSelection = ['all levels'];
        router.push(ROUTES.COURSES());
      } else if (prevSelected.includes('all levels')) {
        newSelection = [item];
        router.push(`${ROUTES.COURSES()}&level=${item}`);
      } else if (prevSelected.includes(item)) {
        const updatedSelection = prevSelected.filter((level) => level !== item);
        newSelection = updatedSelection.length > 0 ? updatedSelection : ['all levels'];
        router.push(
          updatedSelection.length > 0 ? `${ROUTES.COURSES()}&level=${updatedSelection.join('-')}` : ROUTES.COURSES(),
        );
      } else {
        newSelection = [...prevSelected, item];
        router.push(`${ROUTES.COURSES()}&level=${[...newSelection].join('-')}`);
      }

      return newSelection;
    });
  };

  return (
    <div className='roundedmd container mx-auto mt-6 md:mt-10 md:rounded-lg 2xl:mt-12 2xl:rounded-xl'>
      <h3 className='mb-5 text-2xl md:mb-8 md:text-3xl 2xl:mb-12 2xl:text-5xl'>Choose experience level:</h3>
      <div className='flex'>
        <div></div>
        <div className='flex gap-4'>
          {experienceLevels.map((item) => (
            <TagItem key={item} item={item} onClick={() => handleTagClick(item)} isSelected={selected.includes(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterItemsUnit;
