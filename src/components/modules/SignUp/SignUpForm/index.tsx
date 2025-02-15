'use client';

import { useState } from 'react';

import { Button } from '@heroui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { signUpAction } from '@/actions/auth/signUpAction';
import { signUpSchema } from '@/lib/schema/SignUpSchema';
import { SignUpSchema } from '@/lib/types/schema/SignUpSchema';
import FormCheckbox from '@/src/components/elements/formElements/FormCheckbox';
import FormInput from '@/src/components/elements/formElements/FormInput';
import FormPasswordInput from '@/src/components/elements/formElements/FormPasswordInput';

const SignUpForm = () => {
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
  );
};

export default SignUpForm;
