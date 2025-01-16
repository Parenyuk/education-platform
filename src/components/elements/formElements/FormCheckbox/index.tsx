'use client';

import { Checkbox } from '@nextui-org/checkbox';
import { Link } from '@nextui-org/link';

import { FormCheckboxProps } from '@/lib/types/components/elements/formElements/FormCheckbox';
import FormError from '@/src/components/elements/formElements/FormError';

const FormCheckbox = ({ error, register }: FormCheckboxProps) => {
  return (
    <>
      <Checkbox color='default' className='mt-5' {...register}>
        I agree with{' '}
        <Link href='#' className='z-10 underline' color='secondary'>
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link href='#' className='z-10 underline' color='secondary'>
          Privacy Policy
        </Link>
      </Checkbox>
      <div className='mt-2 min-h-6'>{error && <FormError error={error} />}</div>
    </>
  );
};

export default FormCheckbox;
