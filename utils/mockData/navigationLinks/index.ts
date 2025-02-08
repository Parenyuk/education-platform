import { ROUTES } from '@/lib/constants/routes';
import { NavigationLinksType } from '@/lib/types/utils/mockData/navigationLinks';

export const navigationLinks: NavigationLinksType = {
  header: [
    {
      id: 0,
      name: 'Home',
      href: ROUTES.HOME(),
      items: null,
    },
    {
      id: 1,
      name: 'Courses',
      href: ROUTES.COURSES(),
      items: null,
    },
    {
      id: 2,
      name: 'About Us',
      href: ROUTES.ABOUT_US(),
      items: null,
    },
    {
      id: 3,
      name: 'Pricing',
      href: ROUTES.HOME(),
      items: null,
    },
    {
      id: 4,
      name: 'Contact',
      href: ROUTES.CONTACT(),
      items: null,
    },
  ],
  footer: [
    {
      id: 0,
      name: 'Home',
      href: ROUTES.HOME(),
      items: [
        { id: 0, title: 'Benefits', href: '/benefits' },
        { id: 1, title: 'Our Courses', href: ROUTES.HOME() },
        { id: 2, title: 'Our TestimonialsCardModule', href: ROUTES.HOME() },
        { id: 3, title: 'Our FAQ', href: ROUTES.HOME() },
      ],
    },
    {
      id: 1,
      name: 'About Us',
      href: ROUTES.HOME(),
      items: [
        { id: 0, title: 'Company', href: ROUTES.HOME() },
        { id: 1, title: 'Achievements', href: ROUTES.HOME() },
        { id: 2, title: 'Our Goals', href: ROUTES.HOME() },
      ],
    },
  ],
};
