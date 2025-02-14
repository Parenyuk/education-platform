import { useState } from 'react';

import { Button } from '@heroui/button';
import { Checkbox } from '@heroui/checkbox';
import { Link } from '@heroui/link';
import { SubmitHandler } from 'react-hook-form';

import { loginAction } from '@/actions/auth/loginAction';
import { ROUTES } from '@/lib/constants/routes';
import { LoginFormProps } from '@/lib/types/components/modules/Login/LoginForm';
import { LoginSchema } from '@/lib/types/schema/LoginSchema';
import FormInput from '@/src/components/elements/formElements/FormInput';
import FormPasswordInput from '@/src/components/elements/formElements/FormPasswordInput';

const LoginForm = ({ register, handleSubmit, errors }: LoginFormProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setErrorMessage(null);
    const response = await loginAction(data);
    if (!response.success) {
      setErrorMessage(response.message);
    }
  };

  return (
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
      <Link href={ROUTES.FORGOT_PASSWORD()} color='secondary' className='mt-2.5 justify-end 2xl:mt-3.5'>
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
  );
};

export default LoginForm;
