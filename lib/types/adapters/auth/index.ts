import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';

export type UserAuthStateActionType = {
  isLoggedIn: boolean;
  user: ReturnType<typeof UserDataAdapter>;
};
