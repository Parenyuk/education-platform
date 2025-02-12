import { Tables } from '@/database.types';

export type ModuleItemProps = {
  item: Tables<'course_modules'> & {
    course_lessons: Tables<'course_lessons'>[];
  }
  order: number;
}
