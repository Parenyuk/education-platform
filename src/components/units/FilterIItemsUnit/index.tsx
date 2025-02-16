'use client';

import { parseAsArrayOf, parseAsInteger, parseAsStringLiteral, useQueryState } from 'nuqs';

import { experienceLevels } from '@/lib/constants/experienceLevels';
import { ExperienceLevelT } from '@/lib/types/components/units/FilterItemsUnit';
import TagItem from '@/src/components/units/FilterIItemsUnit/TagItem';

const FilterItemsUnit = () => {
  const [level, setLevel] = useQueryState<ExperienceLevelT[]>(
    'level',
    parseAsArrayOf(parseAsStringLiteral<ExperienceLevelT>(experienceLevels), '-')
      .withOptions({ shallow: false })
      .withDefault(['all levels']),
  );

  const [, setPage] = useQueryState('page', parseAsInteger.withOptions({ shallow: false }));

  const handleTagClick = async (item: ExperienceLevelT) => {
    if (item === 'all levels') {
      await setLevel(null);
      await setPage(1);
      return;
    }

    let newLevels: ExperienceLevelT[] = [];

    if (level?.includes(item)) {
      newLevels = level.filter((levelItem) => levelItem !== item);
    } else if (level?.includes('all levels')) {
      newLevels = [item];
    } else {
      newLevels = [...(level ?? []), item];
    }

    if (newLevels.length === 0 || newLevels.length === experienceLevels.length - 1) {
      await setLevel(null);
      await setPage(1);
      return;
    }

    await setLevel(newLevels);
    await setPage(1);
  };

  return (
    <div className='roundedmd container mx-auto mt-6 md:mt-10 md:rounded-lg 2xl:mt-12 2xl:rounded-xl'>
      <h3 className='mb-5 text-2xl md:mb-8 md:text-3xl 2xl:mb-12 2xl:text-5xl'>Choose experience level:</h3>
      <div className='flex'>
        <div className='flex gap-4'>
          {experienceLevels.map((item) => (
            <TagItem key={item} item={item}
              onClick={() => handleTagClick(item)}
              isSelected={level.includes(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterItemsUnit;
