'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export const googleAuth = async () => {
  const supabase = await createClient();

  const origin = await headers().get('origin');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // redirectTo: 'https://fcjzznjdzlmtnndrdsej.supabase.co/auth/v1/callback',
      redirectTo: `${origin}/profile/auth/callback`,
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
