'use client';

import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import 'react-phone-number-input/style.css';

import { PhoneFormInputProps } from '@/lib/types/components/elements/formElements/FormPhoneInput';

const FormPhoneInput = ({ control }: PhoneFormInputProps) => {
  return (
    <div className='flex flex-col text-sm font-medium'>
      <label htmlFor='phone' className='relative -top-0.5'>
        Phone
      </label>
      <PhoneInputWithCountry
        name='phone'
        id='phone'
        control={control}
        autoComplete='new-phone'
        className='border-gray-15 relative top-0.75 h-15 min-h-15 rounded-xl border bg-white-97 px-5 focus:bg-white-97 2xl:h-17
          2xl:min-h-17 [&_input]:bg-white-97 [&_input]:outline-none'
        limitMaxLength
      />
    </div>
  );
};

export default FormPhoneInput;
