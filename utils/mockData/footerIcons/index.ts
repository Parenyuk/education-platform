import { ComponentType, SVGProps } from 'react';

import FacebookIcon from '@/public/svg/facebook.svg';
import LinkedinIcon from '@/public/svg/linkedIn.svg';
import TwitterIcon from '@/public/svg/twitter.svg';

type SocialProfile = {
  key: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialProfiles: SocialProfile[] = [
  { key: 'facebook', link: 'https://facebook.com', icon: FacebookIcon },
  { key: 'twitter', link: 'https://twitter.com', icon: TwitterIcon },
  { key: 'linkedIn', link: 'https://www.linkedin.com', icon: LinkedinIcon },
];
