import { TagItemProps } from '@/lib/types/components/modules/CoursesList/CourseItem/TagsAndAuthor/TagItem';

const TagItem = ({ tag }: TagItemProps) => {
  return (
    <span
      className={`rounded-md border border-white-95 px-3 py-2 text-sm text-grey-35 md:rounded-lg md:text-base 2xl:rounded-xl 2xl:px-4
        2xl:py-2.5 2xl:text-lg`}
    >
      {tag}
    </span>
  );
};

export default TagItem;
