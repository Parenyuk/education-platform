'use client';

import { Button } from '@heroui/button';
import { useRouter } from 'next/navigation';

import { logOutAction } from '@/actions/auth/LogOutAction';

const LogOutButton = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    await logOutAction();
    router.refresh();
  };

  return (
    <Button color='primary' onPress={handleLogOut}>
      Log out
    </Button>
  );
};

export default LogOutButton;
