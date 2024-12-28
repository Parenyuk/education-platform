'use client';

import { Input } from '@nextui-org/input';

import cn from '@/helpers/cn';
import { FormInputProps } from '@/lib/types/components/elements/formElements/FormInput';
import FormError from '@/src/components/elements/formElements/FormError';
import InputLabel from '@/src/components/elements/formElements/InputLabel';

const FormInput = ({ label, placeholder, register, error }: FormInputProps) => {
  return (
    <>
      <Input
        label={<InputLabel label={label} error={!!error} />}
        labelPlacement='outside'
        placeholder={placeholder}
        className={cn({ 'text-red-500': !!error })}
        {...register}
      />
      {error && <FormError error={error} />}
    </>
  );
};

export default FormInput;
