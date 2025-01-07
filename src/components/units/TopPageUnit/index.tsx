import { TopPageUnitProps } from 'lib/types/components/units/TopPageUnit';

const TopPageUnit = ({ title, description }: TopPageUnitProps) => {
  return (
    <>
      <div className='container mx-auto mt-12 grid md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-28 2xl:gap-24'>
        <h2 className='text-3xl font-semibold text-grey-15 md:self-center md:text-5xl 2xl:text-6xl'>{title}</h2>
        <p className='text-grey-35'>{description}</p>
      </div>
      <span
        className='mx-4 mt-7 flex h-0.5 max-w-full items-center justify-center space-x-3 bg-white-90 md:mx-5 md:mt-10 md:space-x-6 2xl:mx-8
          2xl:mt-12'
      />
    </>
  );
};

export default TopPageUnit;
