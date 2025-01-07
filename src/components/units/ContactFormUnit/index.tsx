'use client';

import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { SubmitHandler, useForm } from 'react-hook-form';

import { contactAction } from '@/actions/contact/contactAction';
import { contactSchema } from '@/lib/schema/contactSchema';
import { ContactSchema } from '@/lib/types/schema/ContactSchema';
import FormInput from '@/src/components/elements/formElements/FormInput';
import FormPhoneInput from '@/src/components/elements/formElements/FormPhoneInput';
import FormTextArea from '@/src/components/elements/formElements/FormTextArea';
import { ContactFormUnitProps } from 'lib/types/components/units/ContactFormUnit';

const ContactFormUnit = ({ user }: ContactFormUnitProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: user?.fullName,
      email: user?.email,
    },
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
    setErrorMessage(null);
    const response = await contactAction(data);
    if (!response.success) {
      setErrorMessage(response.message);
    } else {
      setSuccessMessage(true);
    }
  };

  const commonInputClassnames = {
    inputWrapper: 'border border-gray-15 bg-white-97 h-15 min-h-15 2xl:h-17 2xl:min-h-17 px-5',
    label: 'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_30px)]',
  };

  if (successMessage) {
    return <div className='grid w-full place-items-center text-3xl 2xl:text-5xl'>Your message successfully sent!</div>;
  }

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
        <FormPhoneInput control={control} error={errors?.phone?.message} />
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
