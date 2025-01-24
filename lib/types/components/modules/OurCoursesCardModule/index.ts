import { DateInfoI } from '@/lib/types/common/date';
import { ItemID } from '@/lib/types/common/id';
import { MetadataI } from '@/lib/types/common/metadata';

export type CourseContentType = {
  module: string;
  lessons: string[];
};

export interface CourseType extends ItemID, DateInfoI, MetadataI {
  author: string;
  images: string[];
  tags: string[];
  slug: string;
  course_content: CourseContentType[];
}
