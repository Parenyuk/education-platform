import { Tables } from '@/database.types';
import { CourseContentType } from '@/lib/types/components/modules/OurCoursesCardModule';

export interface SingleCourseI extends Tables<'courses'> {
  course_content: CourseContentType[];
  course_modules: (Tables<'course_modules'> & {
    course_lessons: Tables<'course_lessons'>[];
  })[];
}

export type SingleCourseProps = {
  data: SingleCourseI;
}
