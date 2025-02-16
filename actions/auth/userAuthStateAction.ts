'use server';

import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';
import { UserAuthStateActionT } from '@/lib/types/adapters/auth';
import { createClient } from '@/utils/supabase/server';

export const userAuthStateAction = async (): Promise<UserAuthStateActionT> => {
  const supabase = await createClient();

  const user = await supabase.auth.getUser();

  const adaptedUserData = UserDataAdapter(user);

  return {
    isLoggedIn: !!adaptedUserData,
    user: adaptedUserData || null,
  };
};
