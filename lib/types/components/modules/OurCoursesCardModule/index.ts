import { Tables } from '@/database.types';

export type CourseContentType = {
  module: string;
  lessons: string[];
};

export interface CourseType extends Tables<'courses'> {
  tags: string[];
  course_content: CourseContentType[];
}
