import { companyEmail } from '@/lib/constants/email';
import { companyLocation } from '@/lib/constants/location';
import { companyPhone } from '@/lib/constants/phone';
import MarkerIcon from '@/public/svg/marker.svg';
import MessageIcon from '@/public/svg/message.svg';
import PhoneIcon from '@/public/svg/phone.svg';
import LogoComponent from '@/src/components/elements/LogoComponent';
import ContactLink from '@/src/components/modules/Footer/ContactLink';

const LogoBlock = ({}) => {
  return (
    <div>
      <LogoComponent />
      <ContactLink text={companyEmail} className='mt-7 2xl:mt-10'>
        <MessageIcon />
      </ContactLink>
      <ContactLink text={companyPhone}>
        <PhoneIcon />
      </ContactLink>
      <ContactLink text={companyLocation} className='mb-2.5 md:mb-0'>
        <MarkerIcon />
      </ContactLink>
    </div>
  );
};

export default LogoBlock;
