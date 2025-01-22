'use client';

import { Input } from '@heroui/input';

import cn from '@/helpers/cn';
import { FormInputProps } from '@/lib/types/components/elements/formElements/FormInput';
import FormError from '@/src/components/elements/formElements/FormError';

const FormInput = ({ label, placeholder, register, error, classNames, ...restProps }: FormInputProps) => {
  return (
    <div className='relative'>
      <Input
        label={label}
        labelPlacement='outside'
        placeholder={placeholder}
        classNames={{
          base: cn({ 'text-red-500': !!error }),
          ...classNames,
        }}
        {...register}
        {...restProps}
      />
      {error && <FormError error={error} />}
    </div>
  );
};

export default FormInput;
