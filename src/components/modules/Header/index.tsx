import LogoComponent from '@/src/components/elements/LogoComponent';
import NavigationLinks from '@/src/components/modules/Header/NavigationLinks';
import TopLine from '@/src/components/modules/Header/TopLine';
import UserInfo from '@/src/components/modules/Header/UserInfo';

const Header = async () => {
  return (
    <header>
      <TopLine />
      <nav className='container mx-auto flex justify-between'>
        <div className='mt-4 flex items-center justify-center md:space-x-12 2xl:mt-5'>
          <LogoComponent />
          <NavigationLinks />
        </div>
        <UserInfo />
      </nav>
    </header>
  );
};

export default Header;
