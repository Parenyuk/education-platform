import { ItemID } from '@/lib/types/common/id';

export interface CardContentType extends ItemID {
  short_content: string;
  content: string;
  author: string;
  author_image: string;
}
