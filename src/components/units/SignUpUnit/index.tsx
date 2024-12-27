'use client';

import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/checkbox';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import Arrow from '@/src/components/elements/Arrow';
import GoogleIcon from 'public/svg/google.svg';

type Inputs = {
  name: string;
  email: string;
  password: string;
  checkbox: boolean;
};

const SignUpUnit = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('name'));

  return (
    <div>
      <h2 className='mb-2 text-center text-xl font-semibold md:text-5xl 2xl:text-5xl'>Sign Up</h2>
      <p className='text-center'>Create an account to unlock exclusive features.</p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col md:mt-10 2xl:mt-12'>
        <div className='space-y-12 2xl:space-y-15'>
          <Input
            label='Full Name'
            labelPlacement='outside'
            placeholder='Enter your Name'
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <Input
            label='Email'
            labelPlacement='outside'
            placeholder='Enter your Email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <Input
            label='Password'
            labelPlacement='outside'
            placeholder='Enter your Password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        <div>
          <Checkbox color='default' className='mt-5'>
            I agree with{' '}
            <Link href='#' className='underline'>
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href='#' className='underline'>
              Privacy Policy
            </Link>
          </Checkbox>
        </div>

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

export default SignUpUnit;
