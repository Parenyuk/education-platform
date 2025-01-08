'use server';

import ZodParseDataAdapter from '@/adapters/zod/ZodParseDataAdapter';
import { checkPhoneLength } from '@/helpers/checkPhoneLength';
import { contactSchema } from '@/lib/schema/contactSchema';
import { ContactSchema } from '@/lib/types/schema/ContactSchema';
import { createClient } from '@/utils/supabase/server';

export const contactAction = async (formData: ContactSchema) => {
  const validatedData = ZodParseDataAdapter<ContactSchema>(contactSchema, formData);

  // eslint-disable-next-line camelcase
  const { fullName: full_name, email, phone, subject, message } = validatedData.data;

  const checkedPhone = checkPhoneLength(phone);

  if (validatedData.errors) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from('contacts')
    .insert([
      {
        full_name,
        email,
        phone: checkedPhone,
        subject,
        message,
      },
    ])
    .select();

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: null };
};
