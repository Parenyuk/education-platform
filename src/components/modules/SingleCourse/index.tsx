import { SingleCourseProps } from '@/lib/types/components/modules/SingleCourse';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import VideoBlock from '@/src/components/units/VideoBlock';

const SingleCourse = ({ data }: SingleCourseProps) => {
  console.log('data', data);

  return (
    <div>
      <TopPageUnit title={data?.title} description={data?.description} />
      <VideoBlock url={data.video_preview} imagePreview={data.image_preview} />
    </div>
  );
};

export default SingleCourse;
