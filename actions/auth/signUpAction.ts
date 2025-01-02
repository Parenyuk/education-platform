'use server';

import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import ZodParseDataAdapter from '@/adapters/zod/ZodParseDataAdapter';
import { ROUTES } from '@/lib/constants/routes';
import { signUpSchema } from '@/lib/schema/SignUpSchema';
import { SignUpSchema } from '@/lib/types/schema/SignUpSchema';
import { createClient } from '@/utils/supabase/server';

export const signUpAction = async (formData: SignUpSchema) => {
  const validatedData = ZodParseDataAdapter<SignUpSchema>(signUpSchema, formData);

  if (validatedData.errors) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(<SignUpWithPasswordCredentials>{
    email: validatedData.data.email,
    password: validatedData.data.password,
    options: {
      data: {
        full_name: validatedData.data.name,
      },
    },
  });

  if (error) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  revalidatePath(ROUTES.CREATE_USER, 'layout');
  redirect(ROUTES.CREATE_USER);
};
