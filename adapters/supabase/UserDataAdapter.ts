import { UserResponse } from '@supabase/auth-js';

export const UserDataAdapter = (data: UserResponse) => {
  if (!data?.data?.user) return null;

  const { user } = data.data;

  return {
    id: user.id || null,
    aud: user.aud || null,
    email: user.email,
    phone: user.phone || null,
    fullName: user.user_metadata?.full_name || null,
  };
};
