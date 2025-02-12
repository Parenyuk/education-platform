import { SingleCourseI } from '@/lib/types/components/modules/SingleCourse';
import SingleCourse from '@/src/components/modules/SingleCourse';
import { fetchData } from '@/supabase/fetchData';

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const {
    data: course,
    error,
  } = await fetchData().getOne<SingleCourseI>('courses', 'slug', slug, `*, course_modules (*, course_lessons (*) )`);

  if (error || !course) return null;

  return <SingleCourse data={course} />;
}
