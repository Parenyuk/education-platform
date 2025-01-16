'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import { signUpAction } from '@/actions/auth/signUpAction';
import { ROUTES } from '@/lib/constants/routes';
import { signUpSchema } from '@/lib/schema/SignUpSchema';
import { SignUpSchema } from '@/lib/types/schema/SignUpSchema';
import GoogleIcon from '@/public/svg/google.svg';
import Arrow from '@/src/components/elements/Arrow';
import FormCheckbox from '@/src/components/elements/formElements/FormCheckbox';
import FormPasswordInput from '@/src/components/elements/formElements/FormPasswordInput';
import FormDivider from 'src/components/elements/formElements/FormDivider';
import FormInput from 'src/components/elements/formElements/FormInput';

const SignUp = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    setErrorMessage(null);
    const response = await signUpAction(data);
    if (!response.success) {
      setErrorMessage(response.message);
    }
  };

  return (
    <>
      <h2 className='mb-2 text-center text-xl font-semibold md:text-5xl 2xl:text-5xl'>Sign Up</h2>
      <p className='text-center'>Create an account to unlock exclusive features.</p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col md:mt-10 2xl:mt-12'>
        <div className='space-y-12 2xl:space-y-15'>
          <FormInput
            label='Full Name'
            placeholder='Enter your Name'
            register={register('name', { required: true })}
            error={errors?.name?.message}
          />
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
          <FormPasswordInput
            label='Confirm Password'
            placeholder='Enter your Password'
            register={register('confirmPassword', { required: true })}
            error={errors?.confirmPassword?.message}
          />
        </div>

        <FormCheckbox register={register('checkbox', { required: true })} error={errors?.checkbox?.message} />

        {errorMessage}

        <Button type='submit' color='primary' className='mt-5 text-white'>
          Submit
        </Button>
      </form>
      <FormDivider />
      <Button startContent={<GoogleIcon />} size='lg' className='my-6 min-h-14 w-full' color='default'>
        Sign Up with Google
      </Button>
      <p className='text-center'>
        Already have an account?{' '}
        <Link
          href={ROUTES.LOGIN}
          showAnchorIcon
          className='underline'
          color='secondary'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;
