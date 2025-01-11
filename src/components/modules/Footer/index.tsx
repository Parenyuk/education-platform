import LogoBlock from '@/src/components/modules/Footer/LogoBlock';
import RightBlock from '@/src/components/modules/Footer/RightBlock';
import Copyright from 'src/components/modules/Footer/Copyright';

const Footer = ({}) => {
  return (
    <footer className='mt-auto bg-white pt-12 text-base md:pt-15 2xl:pt-24 2xl:text-lg 2xl:font-semibold'>
      <div className='container mx-auto flex flex-col justify-between border-b border-white-95 pb-4 md:flex-row 2xl:pb-7'>
        <LogoBlock />
        <RightBlock />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
