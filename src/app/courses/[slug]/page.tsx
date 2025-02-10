import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import SingleCourse from '@/src/components/modules/SingleCourse';
import { fetchData } from '@/supabase/fetchData';

type CoursePageParams = {
  slug: string;
};

export default async function CoursePage({ params: { slug } }: { params: CoursePageParams }) {
  const { data: course, error } = await fetchData().getOne<CourseI>('courses', 'slug', slug);

  if (error || !course) return null;

  return <SingleCourse data={course} />;
}
