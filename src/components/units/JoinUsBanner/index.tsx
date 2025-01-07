import { Button } from '@nextui-org/button';

const JoinUsBanner = ({}) => {
  return (
    <div
      className={`mb-12 flex flex-col justify-between rounded-lg bg-white-100 bg-no-repeat p-8 md:mb-24 md:flex-row md:p-15 2xl:mb-40
        2xl:p-20`}
      style={{
        backgroundImage: 'url("/png/abstract_design.png")',
        backgroundSize: 'auto 200%',
        backgroundPosition: '80% center',
      }}
    >
      <div>
        <h3 className='w-3/4 text-3xl font-semibold md:text-5xl 2xl:text-6xl'>
          <span className='text-orange-50'>Together,</span> let's shape the future of digital innovation
        </h3>
        <p className='mt-2 text-grey-30 md:mt-4 2xl:mt-6'>
          Join us on this exciting learning journey and unlock your potential in design and development.
        </p>
      </div>
      <Button color='primary' className='self-center text-white-100'>
        Join now
      </Button>
    </div>
  );
};

export default JoinUsBanner;
