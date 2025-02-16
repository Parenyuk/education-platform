import { Link } from '@heroui/link';

import { navigationLinks } from '@/lib/constants/navigationLinks';

const NavigationLinks = ({}) => {
  return (
    <div className='hidden md:flex'>
      {navigationLinks.header.map((link) => {
        return (
          <Link key={link.id} href={link.href} color='secondary' className='text-sm md:mr-7 2xl:text-lg'>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationLinks;
