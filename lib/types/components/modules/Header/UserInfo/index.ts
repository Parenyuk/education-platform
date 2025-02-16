import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';

export type UserInfoPropsT = {
  isLoggedIn: boolean;
  user: ReturnType<typeof UserDataAdapter> | null;
};
