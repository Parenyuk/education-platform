const PlayIcon = ({}) => {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>
      <svg
        width='62'
        height='63'
        viewBox='0 0 62 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='block 2xl:hidden'
      >
        <rect x='4' y='4.5' width='54' height='54' rx='27' fill='white' fillOpacity='0.2' />
        <rect x='2' y='2.5' width='58' height='58' rx='29' stroke='white' strokeOpacity='0.3' strokeWidth='4' />
        <path
          d='M24.7097 19.329C23.0117 18.2585 20.7998 19.4788 20.7998 21.4861V41.5141C20.7998 43.5214 23.0117 44.7417 24.7097 43.6712L40.594 33.6572C42.1807 32.6568 42.1807 30.3433 40.594 29.343L24.7097 19.329Z'
          fill='white'
        />
      </svg>
      <svg
        width='84'
        height='84'
        viewBox='0 0 84 84'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='hidden 2xl:block'
      >
        <rect x='6' y='6' width='72' height='72' rx='36' fill='white' fillOpacity='0.2' />
        <rect x='3' y='3' width='78' height='78' rx='39' stroke='white' strokeOpacity='0.3' strokeWidth='6' />
        <path
          d='M33.8597 26.2492C31.6622 24.8639 28.7998 26.4431 28.7998 29.0408V54.9593C28.7998 57.557 31.6622 59.1362 33.8597 57.7509L54.4158 44.7916C56.4692 43.497 56.4692 40.5031 54.4158 39.2085L33.8597 26.2492Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default PlayIcon;
