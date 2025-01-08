import { Button } from '@nextui-org/button';

const JoinUsBanner = ({}) => {
  return (
    <div
      className={`mb-12 flex flex-col justify-between rounded-lg bg-white bg-abstract-design bg-custom-size-mobile
        bg-custom-position-mobile bg-no-repeat p-8 md:mb-24 md:flex-row md:bg-custom-size-laptop md:bg-custom-position-laptop
        md:p-15 2xl:mb-40 2xl:p-20`}
    >
      <div>
        <h3 className='w-3/4 text-3xl font-semibold md:text-5xl 2xl:text-6xl'>
          <span className='text-orange-50'>Together,</span> let's shape the future of digital innovation
        </h3>
        <p className='mt-2 text-grey-30 md:mt-4 2xl:mt-6'>
          Join us on this exciting learning journey and unlock your potential in design and development.
        </p>
      </div>
      <Button color='primary' className='self-center text-white'>
        Join now
      </Button>
    </div>
  );
};

export default JoinUsBanner;
