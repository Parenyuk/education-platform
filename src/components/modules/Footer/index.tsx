import { companyEmail } from '@/lib/constants/email';
import { companyLocation } from '@/lib/constants/location';
import { companyPhone } from '@/lib/constants/phone';
import ContactLink from '@/src/components/elements/ContactLink';
import LogoComponent from '@/src/components/elements/LogoComponent';
import MarkerIcon from 'public/svg/marker.svg';
import MessageIcon from 'public/svg/message.svg';
import PhoneIcon from 'public/svg/phone.svg';

const Footer = ({}) => {
  return (
    <footer className='mt-auto'>
      <div className='container mx-auto '>
        <div>
          <LogoComponent />
          <ContactLink text={companyEmail} className='mt-10'>
            <MessageIcon />
          </ContactLink>
          <ContactLink text={companyPhone}>
            <PhoneIcon />
          </ContactLink>
          <ContactLink text={companyLocation}>
            <MarkerIcon />
          </ContactLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
