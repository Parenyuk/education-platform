'use client';


import { useSearchParams } from 'next/navigation';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

import { experienceLevels } from '@/lib/constants/experienceLevels';
import { ExperienceLevelT } from '@/lib/types/components/units/FilterItemsUnit';
import TagItem from '@/src/components/units/FilterIItemsUnit/TagItem';

const FilterItemsUnit = () => {
  // const router = useRouter();
  // const [selected, setSelected] = useState<ExperienceLevelT[]>(level);
  const [level, setLevel] = useQueryState<ExperienceLevelT[]>('level', parseAsStringLiteral(experienceLevels).withDefault('all levels'));
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page');

  console.log('level client', level);

  const handleTagClick = async (item: ExperienceLevelT) => {
    return await setLevel(item);
    // const newLevel = level.includes(item)
    //   ? level.filter((i) => i !== item)
    //   : [...level, item];
    // await setLevel(newLevel.length > 0 ? newLevel : ['all levels']);
  };

  return (
    <div className='roundedmd container mx-auto mt-6 md:mt-10 md:rounded-lg 2xl:mt-12 2xl:rounded-xl'>
      <h3 className='mb-5 text-2xl md:mb-8 md:text-3xl 2xl:mb-12 2xl:text-5xl'>Choose experience level:</h3>
      <div className='flex'>
        <div></div>
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
