export const ROUTES = {
  AUTH: '/auth',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  SIGN_UP: '/sign-up',
  CREATE_USER: '/create-user',
  PROFILE: '/profile',
  CONTACT: '/contact',
  ABOUTUS: '/about-us',
  COURSES: (page: number = 1) => `/courses?page=${page}`,
  PRICING: '/pricing',
} as const;
