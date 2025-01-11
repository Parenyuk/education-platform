import SignUp from '@/src/components/modules/SignUp';
import AuthSlider from '@/src/components/units/AuthSlider';
import AuthWrapper from '@/src/components/wrappers/AuthWrapper';

export default async function SignUpPage() {
  return (
    <div className='container mx-auto mt-12 grid grid-cols-1 gap-y-8 md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-24 2xl:gap-24'>
      <AuthSlider />
      <div className='w-full'>
        <AuthWrapper>
          <SignUp />
        </AuthWrapper>
      </div>
    </div>
  );
}
