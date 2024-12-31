'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export const googleAuth = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://fcjzznjdzlmtnndrdsej.supabase.co/auth/v1/callback',
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  console.log('data', data);
  console.log('error', error);
  if (data.url) {
    redirect(data.url);
  }
};
