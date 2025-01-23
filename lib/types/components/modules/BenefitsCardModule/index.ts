import { DateInfoI } from '@/lib/types/common/date';
import { ItemID } from '@/lib/types/common/id';
import { MetadataI } from '@/lib/types/common/metadata';

export interface BenefitI extends ItemID, DateInfoI, Partial<MetadataI> {}
