'use client';

import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { SubmitHandler, useForm } from 'react-hook-form';

import { contactSchema } from '@/lib/schema/contactSchema';
import { ContactSchema } from '@/lib/types/schema/ContactSchema';
import FormInput from '@/src/components/elements/formElements/FormInput';
import FormPhoneInput from '@/src/components/elements/formElements/FormPhoneInput';
import FormTextArea from '@/src/components/elements/formElements/FormTextArea';

const ContactFormUnit = ({}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactSchema> = (data) => {
    console.log('data', data);
    setErrorMessage(null);
    // const response = await loginAction(data);
    // if (!response.success) {
    //   setErrorMessage(response.message);
    // }
  };

  const commonInputClassnames = {
    inputWrapper: 'border border-gray-15 bg-white-97 h-15 min-h-15 2xl:h-17 2xl:min-h-17 px-5',
    label: 'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_30px)]',
  };

  return (
    <form className='grid w-full p-7 md:p-8 lg:p-15 2xl:p-20' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-4 pb-4 md:gap-6 md:pb-6 lg:grid-cols-2 2xl:gap-8 2xl:pb-8'>
        <FormInput
          label='Full Name'
          placeholder='Enter your full name'
          register={register('fullName', { required: true })}
          error={errors?.fullName?.message}
          classNames={commonInputClassnames}
        />
        <FormInput
          label='Email'
          placeholder='Enter your Email'
          register={register('email', { required: true })}
          error={errors?.email?.message}
          classNames={commonInputClassnames}
        />
        <FormPhoneInput control={control} />
        <FormInput
          label='Subject'
          placeholder='Enter your Subject'
          register={register('subject', { required: true })}
          error={errors?.subject?.message}
          classNames={commonInputClassnames}
        />
      </div>
      <FormTextArea
        label='Message'
        placeholder='Enter your Message'
        register={register('message', { required: true })}
        error={errors?.message?.message}
        classNames={{
          inputWrapper: commonInputClassnames.inputWrapper,
        }}
        minRows={10}
      />
      {errorMessage}
      <Button
        type='submit'
        color='primary'
        className='mt-8 w-full text-white-100 md:mx-auto md:mt-10 md:w-auto 2xl:mt-12'
      >
        Send your message
      </Button>
    </form>
  );
};

export default ContactFormUnit;
