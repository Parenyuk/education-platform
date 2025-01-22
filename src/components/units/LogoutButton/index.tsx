'use client';

import { Button } from '@heroui/button';

import { logOutAction } from '@/actions/auth/LogOutAction';

const LogOutButton = ({}) => {
  return (
    <Button color='primary' onPress={() => logOutAction()}>
      Log out
    </Button>
  );
};

export default LogOutButton;
