import { CourseLessonsT, CourseModulesT } from '@/lib/types/common/tables';

export type ModuleItemProps = {
  item: CourseModulesT & {
    course_lessons: CourseLessonsT[];
  };
  order: number;
};
