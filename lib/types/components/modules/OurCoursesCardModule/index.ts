import { Tables } from '@/database.types';

export type CourseContentType = {
  module: string;
  lessons: string[];
};

export interface CourseI extends Tables<'courses'> {
  course_content: CourseContentType[];
}
