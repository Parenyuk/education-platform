import { AuthWrapperProps } from '@/lib/types/components/modules/AuthWrapper';

const AuthWrapper = ({ title, description, children }: AuthWrapperProps) => {
  return (
    <div className='rounded-xl bg-white-100 p-7 md:p-10 2xl:p-12'>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default AuthWrapper;
