'use server';

import ZodParseDataAdapter from '@/adapters/zod/ZodParseDataAdapter';
import { contactSchema } from '@/lib/schema/contactSchema';
import { ContactSchema } from '@/lib/types/schema/ContactSchema';
import { createClient } from '@/utils/supabase/server';

export const contactAction = async (formData: ContactSchema) => {
  const validatedData = ZodParseDataAdapter(contactSchema, formData);

  if (validatedData.errors) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  const supabase = await createClient();
};
