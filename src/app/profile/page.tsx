import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  console.log('data', data);

  return <p>Hello {data.user.user_metadata.full_name ?? data.user.email}</p>;
}
