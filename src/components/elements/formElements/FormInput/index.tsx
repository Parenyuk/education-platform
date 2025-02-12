'use client';

import { Input } from '@heroui/input';

import { FormInputProps } from '@/lib/types/components/elements/formElements/FormInput';
import FormError from '@/src/components/elements/formElements/FormError';
import cn from '@/utils/helpers/cn';

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
