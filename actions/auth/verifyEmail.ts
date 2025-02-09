'use server';

import { EmailOtpType } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

import { ROUTES } from '@/lib/constants/routes';
import { createClient } from '@/utils/supabase/server';

export const verifyEmail = async (token_hash: string, type: EmailOtpType) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.verifyOtp({ token_hash, type });

  if (error) {
    return;
  }

  redirect(ROUTES.LOGIN());
};
