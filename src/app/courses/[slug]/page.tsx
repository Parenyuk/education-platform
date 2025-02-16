import { CoursesModulesLessons } from '@/lib/constants/CoursesModulesLessons';
import { SingleCourseI } from '@/lib/types/common/tables';
import SingleCourse from '@/src/components/modules/SingleCourse';
import { fetchData } from '@/supabase/fetchData';

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: course, error } = await fetchData().getOne<SingleCourseI>(
    'courses',
    'slug',
    slug,
    CoursesModulesLessons
  );

  if (error || !course) return null;

  return <SingleCourse data={course} />;
}
