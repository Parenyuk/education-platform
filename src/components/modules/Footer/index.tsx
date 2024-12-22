import { footerLinks } from '@/helpers/mockData/footerLinks';
import { companyEmail } from '@/lib/constants/email';
import { companyLocation } from '@/lib/constants/location';
import { companyPhone } from '@/lib/constants/phone';
import ContactLink from '@/src/components/elements/ContactLink';
import LogoComponent from '@/src/components/elements/LogoComponent';
import SimpleLink from '@/src/components/elements/SimpleLink';
import MarkerIcon from 'public/svg/marker.svg';
import MessageIcon from 'public/svg/message.svg';
import PhoneIcon from 'public/svg/phone.svg';
import SocialProfiles from 'src/components/units/SocialProfiles';

const Footer = ({}) => {
  return (
    <footer className='mt-auto'>
      <div className='container mx-auto flex justify-between'>
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
        <div className='flex'>
          {footerLinks.map((link) => (
            <div key={link.id} className='mr-6 2xl:mr-8'>
              <h6 className='text-lg 2xl:text-xl'>{link.name}</h6>
              <div className='flex flex-col'>
                {link.items.map((item) => (
                  <SimpleLink key={item.id} href={item.href} target='_blank'>
                    {item.title}
                  </SimpleLink>
                ))}
              </div>
            </div>
          ))}
          <SocialProfiles />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
