import LogoComponent from '@/src/components/elements/LogoComponent';
import NavigationLinks from '@/src/components/modules/Header/NavigationLinks';
import TopLine from '@/src/components/modules/Header/TopLine';
import UserInfoWrapper from '@/src/components/modules/Header/UserInfoWrapper';

const Header = () => {
  return (
    <header>
      <TopLine />
      <nav className='container mx-auto flex justify-between'>
        <div className='mt-4 flex items-center justify-center md:space-x-12 2xl:mt-5'>
          <LogoComponent />
          <NavigationLinks />
        </div>
        <UserInfoWrapper />
      </nav>
    </header>
  );
};

export default Header;
