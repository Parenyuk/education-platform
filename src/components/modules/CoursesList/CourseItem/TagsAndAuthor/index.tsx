import { TagsAndAuthorProps } from '@/lib/types/components/modules/CoursesList/CourseItem/TagsAndAuthor';
import TagItem from 'src/components/modules/CoursesList/CourseItem/TagItem';

const TagsAndAuthor = ({ item }: TagsAndAuthorProps) => {
  return (
    <div className='mb-4 mt-6 flex flex-col md:mb-10 md:flex-row md:justify-between 2xl:mb-12 2xl:mt-8'>
      <div className='flex gap-2 2xl:gap-2.5'>
        {item.duration && <TagItem tag={item.duration} />}
        {item.level && <TagItem tag={item.level} />}
      </div>
      <p className='mt-4 text-base font-medium md:mt-0 md:self-center md:text-lg 2xl:text-xl'>By {item.author}</p>
    </div>
  );
};

export default TagsAndAuthor;
