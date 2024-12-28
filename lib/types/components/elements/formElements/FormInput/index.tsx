'use client';

import { Input } from '@nextui-org/input';

import cn from '@/helpers/cn';
import FormError from '@/src/components/elements/formElements/FormError';
import InputLabel from '@/src/components/elements/formElements/InputLabel';

const FormInput = ({ label = '', name = '', errors, ...props }: any) => {
  console.log('...props', props);

  const error = errors?.[name]?.message;

  return (<>
    <Input
      label={<InputLabel label={label} error={!!error} />}
      labelPlacement='outside'
      placeholder='Enter your Name'
      className={cn({ 'text-red-500': error })}
      {...props}
    />
    {errors.name && <FormError error={error} />}
  </>);
};

export default FormInput;
