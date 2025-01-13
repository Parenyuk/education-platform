'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/checkbox';
import { Link } from '@nextui-org/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { googleAuth } from '@/actions/auth/GoogleAuth';
import { loginAction } from '@/actions/auth/loginAction';
import { ROUTES } from '@/lib/constants/routes';
import { loginSchema } from '@/lib/schema/LoginSchema';
import { LoginSchema } from '@/lib/types/schema/LoginSchema';
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
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setErrorMessage(null);
    const response = await loginAction(data);
    if (!response.success) {
      setErrorMessage(response.message);
    }
  };

  console.log(watch('email'));

  const onPressHandler = async () => {
    return await googleAuth();
  };

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
        <Link href={ROUTES.FORGOT_PASSWORD} color='secondary' className='mt-2.5 justify-end 2xl:mt-3.5'>
          Forgot Password?
        </Link>

        <p>{errorMessage}</p>

        <Checkbox color='default' className='mt-5' {...register('rememberMe')}>
          Remember me
        </Checkbox>

        <Button type='submit' color='primary' className='mt-5 text-white'>
          Login
        </Button>
      </form>
      <FormDivider />
      <Button
        onPress={onPressHandler}
        startContent={<GoogleIcon />}
        size='lg'
        className='my-6 min-h-14 w-full'
        color='default'
      >
        Login with Google
      </Button>
      <p className='text-center'>
        Don’t have an account?{' '}
        <Link
          href={ROUTES.SIGN_UP}
          showAnchorIcon
          className='underline'
          color='secondary'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default Login;
