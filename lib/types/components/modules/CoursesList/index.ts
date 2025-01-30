import { Tables } from '@/database.types';


export type CoursesListProps = {
  data: Tables<'courses'>[] | null;
}
