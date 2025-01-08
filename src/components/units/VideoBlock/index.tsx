'use client';

import dynamic from 'next/dynamic';

import { homePageMainVideo } from '@/lib/constants/homePageMainVideo';
import PlayIcon from '@/src/components/elements/PlayIcon';
import VideoPreview from '@/src/components/units/VideoBlock/VideoPreview';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoBlock = () => {
  return (
    <section className='container mx-auto mb-12 mt-8 md:mb-24 md:mt-20 2xl:mb-40 2xl:mt-24'>
      <div className='relative aspect-video min-w-full overflow-hidden rounded-lg'>
        <ReactPlayer
          url={homePageMainVideo}
          width='100%'
          height='100%'
          light={<VideoPreview />}
          playIcon={<PlayIcon />}
          playing
        />
      </div>
    </section>
  );
};

export default VideoBlock;
