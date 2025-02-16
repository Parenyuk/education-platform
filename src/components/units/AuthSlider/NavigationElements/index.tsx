const NavigationElements = ({}) => {
  return (
    <div
      className='absolute -bottom-14 left-1/2 flex -translate-x-1/2 justify-center md:left-auto md:right-16 md:translate-x-0
        md:justify-end md:space-x-2.5 2xl:space-x-4'
    >
      <button
        className='swiper-button-prev min-h-14 min-w-14 rounded-lg bg-white !text-black transition hover:bg-gray-300 md:p-3 2xl:min-h-16
          2xl:min-w-16 2xl:p-3.5'
      >
        →
      </button>
      <button
        className='swiper-button-next min-h-14 min-w-14 rounded-lg bg-white !text-black transition hover:bg-gray-300 md:p-3 2xl:min-h-16
          2xl:min-w-16 2xl:p-3.5'
      >
        ←
      </button>
    </div>
  );
};

export default NavigationElements;
