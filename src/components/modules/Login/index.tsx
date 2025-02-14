'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginSchema } from '@/lib/schema/LoginSchema';
import { LoginSchema } from '@/lib/types/schema/LoginSchema';
import FormDivider from '@/src/components/elements/formElements/FormDivider';
import FormBottom from '@/src/components/modules/Login/FormBottom';
import FormTop from '@/src/components/modules/Login/FormTop';
import LoginForm from '@/src/components/modules/Login/LoginForm';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <FormTop />
      <LoginForm register={register} handleSubmit={handleSubmit} errors={errors} />
      <FormDivider />
      <FormBottom />
    </>
  );
};

export default Login;
