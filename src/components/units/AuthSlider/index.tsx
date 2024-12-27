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
    <div className='flex flex-col justify-center'>
      <h2 className='md:text-3xl 2xl:text-5xl'>Students Testimonials</h2>
      <p className='md:mb-15 md:text-base 2xl:mb-20 2xl:text-lg'>
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
        >
          {sliderMockData.map((item) => (
            <SwiperSlide key={item.id} className='bg-white-100 md:p-10 2xl:p-12'>
              <div>{item.description}</div>
              <div className='mt-4 flex items-center justify-between bg-white-99 md:px-10 md:py-6 2xl:px-8 2xl:py-12'>
                <div className='flex items-center'>
                  <Image src={item.authorIcon} alt={item.authorName} width={50} height={50} className='rounded-lg' />
                  <p className='ml-4 font-medium'>{item.authorName}</p>
                </div>
                <div className='rounded-lg bg-white-95 px-3.5 py-4'>
                  <Link href='' color='secondary' className=''>
                    Read Full Story
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlider>
        <div className='absolute -bottom-14 right-16 flex justify-end md:space-x-2.5 2xl:space-x-4'>
          <button
            className='swiper-button-prev rounded-lg bg-white-100 !text-black transition hover:bg-gray-300 md:min-h-14 md:min-w-14 md:p-3
              2xl:min-h-16 2xl:min-w-16 2xl:p-3.5'
          >
            →
          </button>
          <button
            className='swiper-button-next rounded-lg bg-white-100 !text-black transition hover:bg-gray-300 md:min-h-14 md:min-w-14 md:p-3
              2xl:min-h-16 2xl:min-w-16 2xl:p-3.5'
          >
            ←
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;
