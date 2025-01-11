import { AuthWrapperProps } from '@/lib/types/components/modules/AuthWrapper';

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return <div className='mb-16 rounded-xl bg-white p-7 md:mb-20 md:p-10 2xl:mb-24 2xl:p-12'>{children}</div>;
};

export default AuthWrapper;
