'use server';

import { createClient } from '@/utils/supabase/server';

export const logOut = async () => {
  const supabase = await createClient();

  return supabase.auth.signOut();
};
