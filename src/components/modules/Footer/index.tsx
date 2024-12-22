import { companyEmail } from '@/lib/constants/email';
import Logo from 'public/svg/Logo.svg';
import MessageIcon from 'public/svg/message.svg';

const Footer = ({}) => {
  return (
    <footer className='mt-auto bg-red-500'>
      <div>
        <Logo />
        <div>
          <MessageIcon />
          <p>{companyEmail}</p>
        </div>
        <div></div>
      </div>
      footer
    </footer>
  );
};

export default Footer;
