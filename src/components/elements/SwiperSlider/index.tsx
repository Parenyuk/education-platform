'use client';

import { Swiper } from 'swiper/react';

import { SwiperCarouselProps } from 'lib/types/components/elements/SwiperSlider';

const SwiperSlider = ({ children, ...props }: SwiperCarouselProps) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default SwiperSlider;
