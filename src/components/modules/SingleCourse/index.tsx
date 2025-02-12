import { SingleCourseProps } from '@/lib/types/components/modules/SingleCourse';
import ModuleItem from '@/src/components/modules/SingleCourse/ModuleItem';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import VideoBlock from '@/src/components/units/VideoBlock';

const SingleCourse = ({ data }: SingleCourseProps) => {
  // console.log('data1', data);

  return (
    <>
      <TopPageUnit title={data?.title} description={data?.description} />
      <VideoBlock url={data.video_preview} imagePreview={data.image_preview} />
      <div className='container mx-auto grid md:grid-cols-2 gap-5 2xl:gap-8 mb-12 md:mb-24 2xl:mb-32'>
        {
          data?.course_modules.map((item, index) => {
            return <ModuleItem key={item.id} item={item} order={index + 1} />;
          })
        }
      </div>
    </>
  );
};

export default SingleCourse;
