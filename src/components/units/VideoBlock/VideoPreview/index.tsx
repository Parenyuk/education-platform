import { Image } from '@heroui/image';

import { ViewPreviewProps } from '@/lib/types/components/units/VideoBlock/VideoPreview';

const VideoPreview = ({ image }: ViewPreviewProps) => {
  return <Image src={image ?? 'png/video-preview.png'} className='aspect-video min-w-full' alt='video-preview' />;
};

export default VideoPreview;
