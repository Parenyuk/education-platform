import { companyEmail } from '@/lib/constants/email';
import { companyPhone } from '@/lib/constants/phone';
import Logo from 'public/svg/Logo.svg';
import MessageIcon from 'public/svg/message.svg';
import PhoneIcon from 'public/svg/phone.svg';

const Footer = ({}) => {
  return (
    <footer className='mt-auto'>
      <div className='container mx-auto bg-red-500'>
        <div>
          <Logo />
          <div className='flex'>
            <MessageIcon />
            <p>{companyEmail}</p>
          </div>
          <div className='flex'>
            <PhoneIcon />
            <p>{companyPhone}</p>
          </div>
        </div>
        footer
      </div>
    </footer>
  );
};

export default Footer;
