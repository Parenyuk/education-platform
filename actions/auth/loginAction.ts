'use server';

import { SignInWithPasswordCredentials } from '@supabase/auth-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import ZodParseDataAdapter from '@/adapters/zod/ZodParseDataAdapter';
import { loginSchema } from '@/lib/schema/LoginSchema';
import { LoginResponse } from '@/lib/types/actions';
import { LoginSchema } from '@/lib/types/schema/LoginSchema';
import { createClient } from '@/utils/supabase/server';

export const loginAction = async (formData: LoginSchema): Promise<LoginResponse> => {
  const validatedData = ZodParseDataAdapter(loginSchema, formData);

  if (validatedData.errors) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(<SignInWithPasswordCredentials>validatedData.data);

  if (error) {
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }

  revalidatePath('/profile', 'layout');
  redirect('/profile');
};
