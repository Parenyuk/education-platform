import { SingleCourseProps } from '@/lib/types/components/modules/SingleCourse';
import DataBlock from '@/src/components/modules/SingleCourse/DataBlock';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import VideoBlock from '@/src/components/units/VideoBlock';

const SingleCourse = ({ data }: SingleCourseProps) => {
  return (
    <>
      <TopPageUnit title={data?.title} description={data?.description} />
      <VideoBlock url={data.video_preview} imagePreview={data.image_preview} />
      <DataBlock data={data.course_modules} />
    </>
  );
};

export default SingleCourse;
