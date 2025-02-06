'use client';


import { useEffect, useState } from 'react';


import TagItem from '@/src/components/units/FilterIItemsUnit/TagItem';


const FilterItemsUnit = ({}) => {
  const [selected, setSelected] = useState<ExperienceLevelT[]>(['all levels']);

  // const durationItems = ['up to 2 weeks', 'up to 2 weeks', 'up to 6 weeks', 'up to 10 weeks', 'more than 10 weeks'];

  const experienceLevel = ['beginner', 'intermediate', 'advanced', 'expert', 'all levels'] as const;

  type ExperienceLevelT = typeof experienceLevel[number];

  const handleTagClick = (item: ExperienceLevelT) => {
    setSelected((prevSelected) => {
      if (item === 'all levels') {
        return ['all levels'];
      }

      if (prevSelected.includes('all levels')) {
        return [item];
      }

      if (prevSelected.includes(item)) {
        const updatedSelection = prevSelected.filter((level) => level !== item);
        return updatedSelection.length > 0 ? updatedSelection : ['all levels'];
      }

      return [...prevSelected, item];
    });
  };

  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);

  return (<div className='container mx-auto my-12 md:my-20 2xl:my-24'>
    <h3>Categories</h3>
    <div className='flex'>
      <div>

      </div>
      <div><h4>Experience level</h4>
        <div className='flex gap-4'>
          {
            experienceLevel.map((item) => <TagItem key={item} item={item} onClick={() => handleTagClick(item)}
              isSelected={selected.includes(item)} />)
          }
        </div>

      </div>
    </div>
  </div>);
};

export default FilterItemsUnit;
