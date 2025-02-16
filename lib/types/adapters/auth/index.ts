import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';

export type UserAuthStateActionT = {
  isLoggedIn: boolean;
  user: ReturnType<typeof UserDataAdapter>;
};
