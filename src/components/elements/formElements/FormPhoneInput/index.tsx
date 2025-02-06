'use client';

import React from 'react';

import { Controller } from 'react-hook-form';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { PhoneFormInputProps } from '@/lib/types/components/elements/formElements/FormPhoneInput';
import FormError from '@/src/components/elements/formElements/FormError';
import cn from '@/utils/helpers/cn';

const FormPhoneInput = ({ control, error }: PhoneFormInputProps) => {
  return (
    <div className='relative flex flex-col text-sm font-medium'>
      <label htmlFor='phone' className='relative -top-0.5'>
        Phone
      </label>
      <Controller
        control={control}
        name='phone'
        render={({ field: { ref, ...field } }) => (
          <ReactPhoneInput
            {...field}
            inputProps={{
              ref,
              required: false,
            }}
            country={'ua'}
            enableSearch
            containerClass={cn(
              `group transition-all !duration-150 flex z-20 border-gray-15 relative top-0.75 h-15 min-h-15 rounded-xl border bg-white-97
            focus:bg-white hover:bg-white focus-within:bg-white
            2xl:h-17 2xl:min-h-17 [&_input]:bg-white-97 [&_input]:outline-none`,
              'container-open'
            )}
            buttonClass='!border-none group-hover:bg-white !border-r-[#e5e7eb] !rounded-xl transition-all !duration-150'
            buttonStyle={{ borderRadius: '12px' }}
            inputClass=' min-w-full h-full self-center !border-none !group-hover:bg-white  !transition-all !duration-150'
            inputStyle={{ backgroundColor: 'transparent' }}
            countryCodeEditable={false}
          />
        )}
      />

      {error && <FormError error={error} />}
    </div>
  );
};

export default FormPhoneInput;
