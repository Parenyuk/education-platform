'use client';

import { useMediaQuery } from 'usehooks-ts';

const LogoComponent = () => {
  const desktop = useMediaQuery('(min-width: 1920px)');

  return desktop ? (
    <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='54' height='54' rx='8' fill='#FF9500' />
      <rect width='54' height='54' rx='8' fill='black' fillOpacity='0.2' />
      <path d='M11.168 43.6666L22.0013 32.8333H32.8346V22L43.668 32.8333L32.8346 43.6666H11.168Z' fill='white' />
      <path d='M11.168 22L22.0013 32.8333V22H32.8346L43.668 11.1666H22.0013L11.168 22Z' fill='white' />
    </svg>
  ) : (
    <svg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='44' height='44' rx='6' fill='#FF9500' />
      <rect width='44' height='44' rx='6' fill='black' fillOpacity='0.2' />
      <path d='M9.09766 35.5802L17.9248 26.7531H26.752V17.9259L35.5791 26.7531L26.752 35.5802H9.09766Z' fill='white' />
      <path d='M9.09766 17.9259L17.9248 26.7531V17.9259H26.752L35.5791 9.09875H17.9248L9.09766 17.9259Z' fill='white' />
    </svg>
  );
};

export default LogoComponent;
