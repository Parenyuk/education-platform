import { ROUTES } from '@/lib/constants/routes';
import { TopBlockProps } from '@/lib/types/components/modules/CoursesList/CourseItem/TopBlock';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const TopBlock = ({ item }: TopBlockProps) => {
  return (
    <div className='flex flex-col items-center justify-between md:flex-row'>
      <div>
        <h3 className='text-lg font-semibold md:text-xl 2xl:text-2xl'>{item.title}</h3>
        <p className='grey-35 mb-5 mt-1 text-sm md:mb-6 md:mt-1.5 md:text-base 2xl:mb-8 2xl:mt-2.5 2xl:text-lg'>
          {item.description}
        </p>
      </div>
      {item.slug && (
        <LinkAsButton
          href={ROUTES.COURSE_PAGE({ slug: item.slug })}
          className='mb-6 ml-4 whitespace-nowrap px-4 py-3.5 text-sm md:mb-0 md:ml-6 md:text-base 2xl:ml-10 2xl:px-6 2xl:py-4.5 2xl:text-lg'
          type='primary'
        >
          View Course
        </LinkAsButton>
      )}
    </div>
  );
};

export default TopBlock;
