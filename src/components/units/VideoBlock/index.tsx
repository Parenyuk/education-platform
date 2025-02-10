'use client';

import { useState, useEffect } from 'react';

import { Skeleton } from '@heroui/skeleton';
import dynamic from 'next/dynamic';

import { homePageMainVideo } from '@/lib/constants/homePageMainVideo';
import { VideoBlockProps } from '@/lib/types/components/units/VideoBlock';
import PlayIcon from '@/src/components/elements/PlayIcon';
import VideoPreview from '@/src/components/units/VideoBlock/VideoPreview';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoBlock = ({ url, imagePreview }: VideoBlockProps) => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsPlayerReady(true), 1000);

    return () => clearTimeout(timeout);
  }, []);

  console.log('isPlayerReady:', isPlayerReady);

  return (
    <section className='container mx-auto mb-12 mt-8 md:mb-24 md:mt-20 2xl:mb-40 2xl:mt-24'>
      <div className='relative aspect-video min-w-full overflow-hidden rounded-lg'>
        {!isPlayerReady ? (
          <div className={`transition-opacity duration-500 ${isPlayerReady ? 'opacity-0' : 'opacity-100'}`}>
            <Skeleton className='rounded-lg'>
              <div className='aspect-video min-w-full bg-default-300' />
            </Skeleton>
          </div>
        ) : (
          <ReactPlayer
            url={url ?? homePageMainVideo}
            width='100%'
            height='100%'
            light={<VideoPreview image={imagePreview} />}
            playIcon={<PlayIcon />}
            playing
            controls
          />
        )}
      </div>
    </section>
  );
};

export default VideoBlock;
