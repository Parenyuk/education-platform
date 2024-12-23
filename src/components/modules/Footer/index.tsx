import { footerLinks } from '@/helpers/mockData/footerLinks';
import { companyEmail } from '@/lib/constants/email';
import { companyLocation } from '@/lib/constants/location';
import { companyPhone } from '@/lib/constants/phone';
import ContactLink from '@/src/components/elements/ContactLink';
import Copyright from '@/src/components/elements/Copyright';
import LogoComponent from '@/src/components/elements/LogoComponent';
import SimpleLink from '@/src/components/elements/SimpleLink';
import MarkerIcon from 'public/svg/marker.svg';
import MessageIcon from 'public/svg/message.svg';
import PhoneIcon from 'public/svg/phone.svg';
import SocialProfiles from 'src/components/units/SocialProfiles';

const Footer = ({}) => {
  return (
    <footer className='mt-auto text-base 2xl:text-lg 2xl:font-semibold'>
      <div className='container mx-auto flex flex-col justify-between border-b border-white-95 pb-4 md:flex-row 2xl:pb-7'>
        <div>
          <LogoComponent />
          <ContactLink text={companyEmail} className='mt-7 2xl:mt-10'>
            <MessageIcon />
          </ContactLink>
          <ContactLink text={companyPhone}>
            <PhoneIcon />
          </ContactLink>
          <ContactLink text={companyLocation} className='md:mb-0x mb-2.5'>
            <MarkerIcon />
          </ContactLink>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex'>
            {footerLinks.map((link) => (
              <div key={link.id} className='mr-6 2xl:mr-8'>
                <h6 className='mb-3.5 text-lg font-semibold 2xl:text-xl'>{link.name}</h6>
                <div className='flex flex-col space-y-1.5'>
                  {link.items.map((item) => (
                    <SimpleLink key={item.id} href={item.href} target='_blank'>
                      {item.title}
                    </SimpleLink>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SocialProfiles />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
