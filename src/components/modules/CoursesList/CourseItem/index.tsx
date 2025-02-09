import { Image } from '@heroui/image';

import { CourseItemProps } from '@/lib/types/components/modules/CoursesList/CourseItem';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import CourseIntro from '@/src/components/modules/CoursesList/CourseIntro';
import TagItem from '@/src/components/modules/CoursesList/TagItem';

const CourseItem = ({ item }: CourseItemProps) => {
  return (
    <div className='rounded-md bg-white p-6 md:rounded-lg md:p-10 2xl:rounded-xl 2xl:p-12'>
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <div>
          <h3 className='text-lg font-semibold md:text-xl 2xl:text-2xl'>{item.title}</h3>
          <p className='grey-35 mb-5 mt-1 text-sm md:mb-6 md:mt-1.5 md:text-base 2xl:mb-8 2xl:mt-2.5 2xl:text-lg'>
            {item.description}
          </p>
        </div>
        {item.slug && (
          <LinkAsButton
            href={item.slug}
            className='ml-4 md:ml-6 2xl:ml-10 mb-6 whitespace-nowrap px-4 py-3.5 text-sm md:mb-0 md:text-base 2xl:px-6 2xl:py-4.5 2xl:text-lg'
            type='primary'
          >
            View Course
          </LinkAsButton>
        )}
      </div>
      {item.images && (
        <div className='grid grid-cols-3 gap-2.5 md:gap-5 2xl:gap-8'>
          {item.images.slice(0, 3).map((image, index) => (
            <Image
              key={index}
              src={image}
              className='aspect-square rounded object-cover md:rounded-md 2xl:rounded-lg'
            />
          ))}
        </div>
      )}
      <div className='mb-4 mt-6 flex flex-col md:mb-10 md:flex-row md:justify-between 2xl:mb-12 2xl:mt-8'>
        <div className='flex gap-2 2xl:gap-2.5'>
          {Object.values(item.tags).map((tag, index) => (
            <TagItem key={index} tag={tag} />
          ))}
        </div>
        <p className='mt-4 text-base font-medium md:mt-0 md:self-center md:text-lg 2xl:text-xl'>By {item.author}</p>
      </div>
      <CourseIntro item={item.course_content} />
    </div>
  );
};

export default CourseItem;
