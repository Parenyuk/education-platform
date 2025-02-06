import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';

export type UserInfoPropsType = {
  isLoggedIn: boolean;
  user: ReturnType<typeof UserDataAdapter> | null;
};
