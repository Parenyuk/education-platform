'use server';

import { createClient } from '@/utils/supabase/server';

export const logOutAction = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();
};
