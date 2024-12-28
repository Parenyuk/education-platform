'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import cn from '@/helpers/cn';
import { signUpSchema } from '@/lib/schema/SignUpSchema';
import { SignUpSchema } from '@/lib/types/schema/SignUpSchema';
import GoogleIcon from '@/public/svg/google.svg';
import Arrow from '@/src/components/elements/Arrow';
import FormError from '@/src/components/elements/formElements/FormError';
import InputLabel from '@/src/components/elements/formElements/InputLabel';


const SignUp = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit: SubmitHandler<SignUpSchema> = (data) => console.log(data);

  console.log(watch('name'));

  return (
    <div>
      <h2 className='mb-2 text-center text-xl font-semibold md:text-5xl 2xl:text-5xl'>Sign Up</h2>
      <p className='text-center'>Create an account to unlock exclusive features.</p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col md:mt-10 2xl:mt-12'>
        <div className='space-y-12 2xl:space-y-15'>
          <Input
            label={<InputLabel label='Full Name' error={!!errors?.name?.message} />}
            labelPlacement='outside'
            placeholder='Enter your Name'
            className={cn({ 'text-red-500': errors?.name?.message })}
            {...register('name', { required: true })}
          />
          {errors.name && <FormError error={errors.name.message} />}
          <Input
            label={<InputLabel label='Email' error={!!errors?.email?.message} />}
            labelPlacement='outside'
            placeholder='Enter your Email'
            className={cn({ 'text-red-500': errors?.email?.message })}
            {...register('email', { required: true })}
          />
          {errors.email && <FormError error={errors.email.message} />}
          <Input
            label={<InputLabel label='Password' error={!!errors?.password?.message} />}
            labelPlacement='outside'
            placeholder='Enter your Password'
            className={cn({ 'text-red-500': errors?.password?.message })}
            {...register('password', { required: true })}
          />
          {errors.password && <FormError error={errors.password.message} />}

          {/*<FormInput  {...register('name', { required: true })} label='Full Name' name='name' errors={errors} />*/}
          {/*<FormInput  {...register('email', { required: true })} label='Email' name='email' errors={errors} />*/}
          {/*<FormInput  {...register('password', { required: true })} label='Password' name='password' errors={errors} />*/}
        </div>

        {/*<>*/}
        {/*  <Checkbox color='default' className='mt-5'>*/}
        {/*    I agree with{' '}*/}
        {/*    <Link href='#' className='underline'>*/}
        {/*      Terms of Use*/}
        {/*    </Link>{' '}*/}
        {/*    and{' '}*/}
        {/*    <Link href='#' className='underline'>*/}
        {/*      Privacy Policy*/}
        {/*    </Link>*/}
        {/*  </Checkbox>*/}
        {/*  {errors.checkbox && <FormError error={errors.checkbox.message} />}*/}
        {/*</>*/}

        <Button type='submit' color='primary' className='mt-5 text-white-100'>
          Submit
        </Button>
      </form>
      <div className='mt-5 flex items-center justify-center'>
        <div className='h-px w-full bg-white-90'></div>
        <span className='mx-2 text-gray-500'>OR</span>
        <div className='h-px w-full bg-white-90'></div>
      </div>
      <Button startContent={<GoogleIcon />} size='lg' className='my-6 min-h-14 w-full' color='default'>
        Sign Up with Google
      </Button>
      <p className='text-center'>
        Already have an account?{' '}
        <Link
          href='#'
          isExternal
          showAnchorIcon
          className='underline'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
