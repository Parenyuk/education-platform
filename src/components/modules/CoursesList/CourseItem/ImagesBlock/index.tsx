import { Image } from '@heroui/image';

import { ImagesBlockProps } from '@/lib/types/components/modules/CoursesList/CourseItem/ImagesBlock';

const ImagesBlock = ({ images }: ImagesBlockProps) => {
  return (
    <div className='grid grid-cols-3 gap-2.5 md:gap-5 2xl:gap-8'>
      {images.slice(0, 3).map((image, index) => (
        <Image key={index} src={image} className='aspect-square rounded object-cover md:rounded-md 2xl:rounded-lg' />
      ))}
    </div>
  );
};

export default ImagesBlock;
