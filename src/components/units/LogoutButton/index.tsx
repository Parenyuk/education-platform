'use client';

import { Button } from '@nextui-org/button';

import { logOut } from '@/helpers/auth/LogOut';

const LogOutButton = ({}) => {
  return (
    <Button color='primary' onPress={() => logOut()}>
      Log out
    </Button>
  );
};

export default LogOutButton;
