'use client';

import { Link } from '@heroui/link';

import { ROUTES } from '@/lib/constants/routes';
import { UserInfoPropsT } from '@/lib/types/components/modules/Header/UserInfo';
import MenuIcon from '@/public/svg/mobile-menu.svg';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import LogOutButton from '@/src/components/units/LogoutButton';

const UserInfo = ({ isLoggedIn, user }: UserInfoPropsT) => {
  return (
    <div className='flex items-center justify-center space-x-5'>
      {isLoggedIn ? (
        <div className='mt-2 flex gap-2 rounded-lg bg-white-90 p-3'>
          <p className='self-center'>{user?.fullName}</p>
          <LogOutButton />
        </div>
      ) : (
        <>
          <Link href={ROUTES.SIGN_UP()} color='secondary'>
            Sign Up
          </Link>
          <LinkAsButton
            href={ROUTES.LOGIN()}
            color='secondary'
            className='rounded-lg bg-orange-50 px-6 py-2.5 2xl:px-8 2xl:py-3.5'
          >
            Login
          </LinkAsButton>
        </>
      )}
      <div className='flex md:hidden'>
        <MenuIcon />
      </div>
    </div>
  );
};

export default UserInfo;
