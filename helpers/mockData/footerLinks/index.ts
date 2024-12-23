import { FooterLink } from '@/lib/types/helpers/mockData/footerLinks';

export const footerLinks: FooterLink[] = [
  {
    id: 0,
    name: 'Home',
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
    items: [
      { id: 0, title: 'Company', href: '/' },
      { id: 1, title: 'Achievements', href: '/' },
      { id: 2, title: 'Our Goals', href: '/' },
    ],
  },
];
