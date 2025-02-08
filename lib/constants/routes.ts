import { ExperienceLevelT } from '@/lib/types/components/units/FilterItemsUnit';

export const AppRoutes = {
  AUTH: 'AUTH',
  LOGIN: 'LOGIN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  SIGN_UP: 'SIGN_UP',
  CREATE_USER: 'CREATE_USER',
  PROFILE: 'PROFILE',
  CONTACT: 'CONTACT',
  ABOUT_US: 'ABOUT_US',
  COURSES: 'COURSES',
  PRICING: 'PRICING',
  HOME: 'HOME',
} as const;

export type DynamicRoute = (options?: {
  page?: string | null;
  level?: ExperienceLevelT[];
}) => string

export const ROUTES: Record<keyof typeof AppRoutes, DynamicRoute> = {
  [AppRoutes.AUTH]: () => '/auth',
  [AppRoutes.LOGIN]: () => '/login',
  [AppRoutes.FORGOT_PASSWORD]: () => '/forgot-password',
  [AppRoutes.SIGN_UP]: () => '/sign-up',
  [AppRoutes.CREATE_USER]: () => '/create-user',
  [AppRoutes.PROFILE]: () => '/profile',
  [AppRoutes.CONTACT]: () => '/contact',
  [AppRoutes.ABOUT_US]: () => '/about-us',
  [AppRoutes.COURSES]: (options) =>
    `/courses${options?.page ? `?page=${options.page}` : '?page=1'}${options?.level ? `?level=${options.level.join('-')}` : ''}`,
  // [AppRoutes.COURSES]: (options) => {
  //   const pageParam = `page=${options?.page ?? 1}`;
  //   const levelParam = Array.isArray(options?.level)
  //     ? `&level=${options.level.join('-')}`
  //     : options?.level ? `&level=${options.level}`
  //       : '';
  //
  //   return `/courses?${pageParam}${levelParam}`;
  // },
  [AppRoutes.PRICING]: () => '/pricing',
  [AppRoutes.HOME]: () => `/`,
};
