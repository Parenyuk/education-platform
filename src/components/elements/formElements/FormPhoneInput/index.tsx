'use client';

import React, { useState } from 'react';

import { parsePhoneNumber } from 'react-phone-number-input';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import 'react-phone-number-input/style.css';

import { PhoneFormInputProps } from '@/lib/types/components/elements/formElements/FormPhoneInput';
import FormError from '@/src/components/elements/formElements/FormError';

const FormPhoneInput = ({ control, error }: PhoneFormInputProps) => {
  const [fullPhoneNumber, setFullPhoneNumber] = useState<string | null>(null);
  const [isInternational, setIsInternational] = useState<boolean>(true);

  // console.log('error', error);

  const handlePhoneChange = (value?: string) => {
    if (value) {
      const phoneNumber = parsePhoneNumber(value);

      if (phoneNumber) {
        console.log('phoneNumber', phoneNumber);
        setFullPhoneNumber(phoneNumber.format('E.164'));
        setIsInternational(!phoneNumber.country);
        console.log('Full Phone Number:', phoneNumber.number);
        console.log('Country Code:', phoneNumber.country || 'International');
      }
    } else {
      setFullPhoneNumber(null);
      setIsInternational(true);
    }
  };

  return (
    <div className='relative flex flex-col text-sm font-medium'>
      <div className='relative -top-0.5 flex items-center'>
        <label htmlFor='phone'>Phone</label>
        <p className='ml-1'>{fullPhoneNumber}</p>
      </div>
      <PhoneInputWithCountry
        name='phone'
        id='phone'
        control={control}
        autoComplete='new-phone'
        className='border-gray-15 relative top-0.75 h-15 min-h-15 rounded-xl border bg-white-97 px-5 focus:bg-white-97 2xl:h-17
          2xl:min-h-17 [&_input]:bg-white-97 [&_input]:outline-none'
        limitMaxLength
        onChange={handlePhoneChange}
      />
      {error && <FormError error={error} />}
      {fullPhoneNumber && !isInternational && (
        <p className='mt-2 text-xs text-gray-500'>Full Phone Number: {fullPhoneNumber}</p>
      )}
    </div>
  );
};

export default FormPhoneInput;
