'use server';

import { createClient } from '@/utils/supabase/server';

export const logOutAction = async () => {
  const supabase = await createClient();

  return supabase.auth.signOut();
};
