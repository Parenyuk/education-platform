import { navigationLinks } from '@/helpers/mockData/navigationLinks';
import LogoComponent from '@/src/components/elements/LogoComponent';
import SimpleLink from '@/src/components/elements/SimpleLink';
import TopLine from '@/src/components/modules/Header/TopLine';
import MenuIcon from 'public/svg/mobile-menu.svg';

const Header = ({}) => {
  return (
    <header>
      <TopLine />
      <nav className='container mx-auto flex justify-between'>
        <div className='mt-4 flex items-center justify-center md:space-x-12 2xl:mt-5'>
          <LogoComponent />
          <div className='hidden md:flex'>
            {navigationLinks.header.map((link) => {
              return (
                <SimpleLink key={link.id} href={link.href} className='text-sm md:mr-7 2xl:text-lg'>
                  {link.name}
                </SimpleLink>
              );
            })}
          </div>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <div>login</div>
          <div className='flex md:hidden'>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;