'use client';

const Copyright = ({}) => {
  const currentYear = new Date().getFullYear();

  return (
    <p className='container mx-auto mb-6 mt-5 flex items-center justify-center text-sm md:mt-8 2xl:mb-8 2xl:mt-14 2xl:text-lg'>
      © {currentYear} Skillbridge. All rights reserved.
    </p>
  );
};

export default Copyright;
