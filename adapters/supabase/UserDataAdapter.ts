import { UserResponse } from '@supabase/auth-js';

export const UserDataAdapter = (data: UserResponse) => {
  if (!data) return null;

  return {
    id: data.data.user?.id,
    aud: data.data.user?.aud,
    email: data.data.user?.email,
    phone: data.data.user?.phone,
    fullName: data.data.user?.user_metadata.full_name,
  };
};
