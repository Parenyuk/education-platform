import { DateInfoI } from '@/lib/types/common/date';
import { ItemID } from '@/lib/types/common/id';
import { MetadataI } from '@/lib/types/common/metadata';

export interface CourseType extends ItemID, DateInfoI, MetadataI {
  author: string;
  imageURL: string;
  tags: string[];
}
