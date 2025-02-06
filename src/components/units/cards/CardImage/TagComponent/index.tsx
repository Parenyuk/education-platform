import { TagComponentProps } from '@/lib/types/components/units/cards/CardImage/TagComponent';

const TagComponent = ({ item }: TagComponentProps) => {
  return (
    <div
      className='2xl:pyx-4 rounded-lg border border-white-95 px-3.5 py-2 text-sm text-grey-30 md:text-base 2xl:py-2.5 2xl:text-lg'>
      {item}
    </div>
  );
};

export default TagComponent;
