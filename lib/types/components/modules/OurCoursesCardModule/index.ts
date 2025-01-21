export type CourseType = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  author: string;
  imageURL: string;
  tags: string[];
};

export type CoursesType = {
  title: string;
  description: string;
  data: CourseType[];
};
