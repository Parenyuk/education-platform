'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { loginSchema } from '@/lib/schema/LoginSchema';
import { SignUpSchema } from '@/lib/types/schema/SignUpSchema';
import GoogleIcon from '@/public/svg/google.svg';
import Arrow from '@/src/components/elements/Arrow';
import FormDivider from '@/src/components/elements/formElements/FormDivider';
import FormInput from '@/src/components/elements/formElements/FormInput';
import FormPasswordInput from '@/src/components/elements/formElements/FormPasswordInput';

const Login = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<SignUpSchema> = (data) => console.log(data);

  console.log(watch('checkbox'));

  return (
    <>
      <h2 className='mb-2 text-center text-xl font-semibold md:text-5xl 2xl:text-5xl'>Login</h2>
      <p className='text-center'>Welcome back! Please log in to access your account.</p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col md:mt-10 2xl:mt-12'>
        <div className='space-y-12 2xl:space-y-15'>
          <FormInput
            label='Email'
            placeholder='Enter your Email'
            register={register('email', { required: true })}
            error={errors?.email?.message}
          />
          <FormPasswordInput
            label='Password'
            placeholder='Enter your Password'
            register={register('password', { required: true })}
            error={errors?.password?.message}
          />
        </div>

        <Button type='submit' color='primary' className='mt-5 text-white-100'>
          Submit
        </Button>
      </form>
      <FormDivider />
      <Button startContent={<GoogleIcon />} size='lg' className='my-6 min-h-14 w-full' color='default'>
        Login with Google
      </Button>
      <p className='text-center'>
        Don’t have an account?{' '}
        <Link
          href='/sign-up'
          showAnchorIcon
          className='underline'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default Login;
