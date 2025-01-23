import { DateInfoI } from '@/lib/types/common/date';
import { ItemID } from '@/lib/types/common/id';

export interface FAQI extends ItemID, DateInfoI {
  answer: string;
  question: string;
  linkText: string;
  link: string;
}
