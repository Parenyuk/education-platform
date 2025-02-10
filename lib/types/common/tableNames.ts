import { Database } from '@/database.types';

export type TableNamesT = keyof Database['public']['Tables'];

export type ResourceType = TableNamesT;
