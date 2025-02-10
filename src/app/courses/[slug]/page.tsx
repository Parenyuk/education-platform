import { CourseI } from '@/lib/types/components/modules/OurCoursesCardModule';
import SingleCourse from '@/src/components/modules/SingleCourse';
import { fetchData } from '@/supabase/fetchData';

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: course, error } = await fetchData().getOne<CourseI>('courses', 'slug', slug);

  if (error || !course) return null;

  return <SingleCourse data={course} />;
}
