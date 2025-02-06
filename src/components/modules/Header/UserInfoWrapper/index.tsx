import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';
import UserInfo from '@/src/components/modules/Header/UserInfo';
import { createClient } from '@/utils/supabase/server';

const UserInfoWrapper = async ({}) => {
  const supabase = await createClient();

  const user = await supabase.auth.getUser();

  const adaptedUserData = UserDataAdapter(user);

  return <UserInfo isLoggedIn={!!adaptedUserData} user={adaptedUserData} />;
};

export default UserInfoWrapper;
