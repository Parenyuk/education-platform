'use client';

import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { SliderComponentProps } from '@/lib/types/components/units/AuthSlider/SliderComponent';
import SwiperSlider from '@/src/components/elements/SwiperSlider';
import NavigationElements from '@/src/components/units/AuthSlider/NavigationElements';

const SliderComponent = ({ data }: SliderComponentProps) => {
  return (
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
        {data.map((item) => (
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
      <NavigationElements />
    </div>
  );
};

export default SliderComponent;
