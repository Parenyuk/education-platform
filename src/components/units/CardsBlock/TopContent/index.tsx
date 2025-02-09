import { Button } from '@heroui/button';

const TopContent = ({ title = '', description = '' }) => {
  if (!title && !description) return null;

  return (<>
    {title && <h2 className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title}</h2>}
    {description && (
      <div
        className='mb-10 mt-2.5 flex w-full flex-col md:mb-15 md:mt-3.5 md:flex-row md:justify-between 2xl:mb-20 2xl:mt-4'>
        <p className='text-sm md:text-base 2xl:text-lg'>{description}</p>
        <Button className='mt-5 md:mt-0'>View All</Button>
      </div>
    )}
  </>);
};

export default TopContent;
