import AuthSlider from '@/src/components/units/AuthSlider';

export default async function BookingPage() {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-20 2xl:gap-24'>
      <AuthSlider />
      <div className='w-full md:h-[800px] md:w-[540px] 2xl:w-[660px]'>Sign Up</div>
    </div>
  );
}
