import { PropsWithChildren, ReactNode, RefAttributes } from 'react';

import { SwiperProps, SwiperRef } from 'swiper/react';

export interface SwiperCarouselProps extends RefAttributes<SwiperRef>, PropsWithChildren<SwiperProps> {
  children: ReactNode;
}
