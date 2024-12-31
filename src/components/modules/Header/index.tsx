import { Link } from '@nextui-org/link';

import { navigationLinks } from '@/helpers/mockData/navigationLinks';
import { ROUTES } from '@/lib/constants/routes';
import LinkAsButton from '@/src/components/elements/LinkAsButton';
import LogoComponent from '@/src/components/elements/LogoComponent';
import TopLine from '@/src/components/modules/Header/TopLine';
import MenuIcon from 'public/svg/mobile-menu.svg';

const Header = () => {
  return (
    <header>
      <TopLine />
      <nav className='container mx-auto flex justify-between'>
        <div className='mt-4 flex items-center justify-center md:space-x-12 2xl:mt-5'>
          <LogoComponent />
          <div className='hidden md:flex'>
            {navigationLinks.header.map((link) => {
              return (
                <Link key={link.id} href={link.href} color='secondary' className='text-sm md:mr-7 2xl:text-lg'>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <Link href={ROUTES.SIGN_UP} color='secondary'>
            Sign Up
          </Link>
          <LinkAsButton
            href={ROUTES.LOGIN}
            color='secondary'
            className='rounded-lg bg-orange-50 px-6 py-2.5 2xl:px-8 2xl:py-3.5'
          >
            Login
          </LinkAsButton>
          <div className='flex md:hidden'>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
