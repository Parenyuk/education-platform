import { AuthWrapperProps } from '@/lib/types/components/modules/AuthWrapper';

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return <div className='rounded-xl bg-white-100 p-7 md:p-10 2xl:p-12'>{children}</div>;
};

export default AuthWrapper;
