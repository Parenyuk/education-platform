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
        <Link href='#' className='underline'>
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link href='#' className='underline'>
          Privacy Policy
        </Link>
      </Checkbox>
      {error && <FormError error={error} />}
    </>
  );
};

export default FormCheckbox;
