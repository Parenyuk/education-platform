import AuthWrapper from '@/src/components/modules/AuthWrapper';
import AuthSlider from '@/src/components/units/AuthSlider';
import SignUpUnit from '@/src/components/units/SignUpUnit';

export default async function BookingPage() {
  return (
    <div className='container mx-auto mt-12 grid grid-cols-1 gap-y-8 md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-24 2xl:gap-24'>
      <AuthSlider />
      <div className='h-[700px] w-full md:h-[800px] md:w-[540px] 2xl:w-[660px]'>
        <AuthWrapper>
          <SignUpUnit />
        </AuthWrapper>
      </div>
    </div>
  );
}
