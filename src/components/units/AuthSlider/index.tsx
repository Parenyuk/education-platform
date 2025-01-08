'use client';

import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { sliderMockData } from '@/helpers/mockData/slider';
import SwiperSlider from '@/src/components/elements/SwiperSlider';

const AuthSlider = () => {
  return (
    <div className='order-last mb-32 flex flex-col justify-center md:order-none'>
      <h2 className='text-3xl font-medium 2xl:text-5xl'>Students Testimonials</h2>
      <p className='mb-10 text-sm md:mb-15 md:text-base 2xl:mb-20 2xl:text-lg'>
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim
        lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className='auth-slider-container relative'>
        <SwiperSlider
          slidesPerView='auto'
          direction='horizontal'
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className='pb-10'
          spaceBetween={24}
        >
          {sliderMockData.map((item) => (
            <SwiperSlide key={item.id} className='border-gray-10 rounded-lg border bg-white'>
              <div className='text-smd p-7 md:p-10 md:text-base 2xl:p-12 2xl:text-lg'>{item.description}</div>
              <div
                className={`border-gray-10 mt-4 flex items-center justify-between rounded-bl-lg rounded-br-lg border-t bg-white-99 px-7 py-5
                md:px-10 md:py-6 2xl:px-8 2xl:py-12`}
              >
                <div className='flex items-center'>
                  <Image src={item.authorIcon} alt={item.authorName} width={50} height={50} className='rounded-lg' />
                  <p className='ml-4 font-medium'>{item.authorName}</p>
                </div>
                <div className='rounded-lg border border-white-95 bg-white-97 px-3.5 py-3.5 md:py-4'>
                  <Link href='' color='secondary' className='text-sm'>
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlider>
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
      </div>
    </div>
  );
};

export default AuthSlider;
