import { ROUTES } from '@/lib/constants/routes';
import { NavigationLinksType } from '@/lib/types/helpers/mockData/navigationLinks';

export const navigationLinks: NavigationLinksType = {
  header: [
    {
      id: 0,
      name: 'Home',
      href: '/',
      items: null,
    },
    {
      id: 1,
      name: 'Courses',
      href: '/',
      items: null,
    },
    {
      id: 2,
      name: 'About Us',
      href: ROUTES.ABOUTUS,
      items: null,
    },
    {
      id: 3,
      name: 'Pricing',
      href: '/',
      items: null,
    },
    {
      id: 4,
      name: 'Contact',
      href: ROUTES.CONTACT,
      items: null,
    },
  ],
  footer: [
    {
      id: 0,
      name: 'Home',
      href: '/',
      items: [
        { id: 0, title: 'Benefits', href: '/benefits' },
        { id: 1, title: 'Our Courses', href: '/' },
        { id: 2, title: 'Our Testimonials', href: '/' },
        { id: 3, title: 'Our FAQ', href: '/' },
      ],
    },
    {
      id: 1,
      name: 'About Us',
      href: '/',
      items: [
        { id: 0, title: 'Company', href: '/' },
        { id: 1, title: 'Achievements', href: '/' },
        { id: 2, title: 'Our Goals', href: '/' },
      ],
    },
  ],
};
