'use server';

import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';
import { createClient } from '@/utils/supabase/server';

export const userAuthStateAction = async () => {
  const supabase = await createClient();

  const user = await supabase.auth.getUser();

  const adaptedUserData = UserDataAdapter(user);

  return {
    isLoggedIn: !!adaptedUserData,
    user: adaptedUserData || null,
  };
};
