'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { LoginSchema } from '@/lib/types/schema/LoginSchema';
import { createClient } from '@/utils/supabase/server';

export const loginAction = async (formData: LoginSchema) => {
  console.log('server action', formData);

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword(formData);

  console.log('lo', data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/profile', 'layout');
  redirect('/profile');
};
