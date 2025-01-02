'use client';
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { SubmitHandler, useForm } from 'react-hook-form';

import { contactPageText } from '@/helpers/mockData/contactPage';
import { contactSchema } from '@/lib/schema/contactSchema';
import { ContactSchema } from '@/lib/types/schema/ContactSchema';
import FormInput from '@/src/components/elements/formElements/FormInput';
import ContactBoxUnit from '@/src/components/units/ContactBoxUnit';

export default function ContactPage() {
  const {
    register,
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
    base: 'border border-gray-50 bg-white-95 rounded-md max-h-15 2xl:h-17',
    inputWrapper: 'h-15 min-h-15 2xl:h-17 2xl:min-h-17 px-5',
    label: 'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_30px)]',
  };

  return (
    <>
      <div className='container mx-auto mt-12 grid md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-28 2xl:gap-24'>
        <h2 className='text-3xl font-semibold md:self-center md:text-5xl 2xl:text-6xl'>Contact Us</h2>
        <p>{contactPageText}</p>
      </div>
      <span
        className='mx-4 mt-7 flex h-0.5 max-w-full items-center justify-center space-x-3 bg-white-90 md:mx-5 md:mt-10 md:space-x-6 2xl:mx-8
          2xl:mt-12'
      />
      <div className='container mx-auto mt-12 flex rounded-xl bg-white-100 md:mt-20 2xl:mt-24'>
        <form className='p-7 md:p-15 2xl:p-20' onSubmit={handleSubmit(onSubmit)}>
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
          <FormInput
            label='Phone'
            placeholder='Enter your Phone'
            register={register('phone', { required: true })}
            error={errors?.phone?.message}
            classNames={commonInputClassnames}
          />
          <FormInput
            label='Subject'
            placeholder='Enter your Subject'
            register={register('subject', { required: true })}
            error={errors?.subject?.message}
            classNames={commonInputClassnames}
          />
          <FormInput
            label='Message'
            placeholder='Enter your Message'
            register={register('subject', { required: true })}
            error={errors?.message?.message}
            classNames={commonInputClassnames}
          />
          {errorMessage}
          <Button type='submit' color='primary' className='mt-5 text-white-100'>
            Send your message
          </Button>
        </form>
        <ContactBoxUnit />
      </div>
    </>
  );
}
