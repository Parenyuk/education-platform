import { PostgrestError } from '@supabase/supabase-js';

import { ResourceType, TableNamesT } from '@/lib/types/common/tableNames';
import { CheckLevelReturn } from '@/lib/types/utils/checkLevel';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
  count?: number | null;
};

type FiltersType = { column: string; operator: string; value: string | string[] };

type PaginationType = { limit: number; offset: number };

export interface FetchDataMethods {
  getAll: <T>(
    resource: ResourceType,
    params?: {
      filters?: FiltersType[];
      pagination?: PaginationType;
    }
  ) => Promise<SupabaseResponse<T>>;

  getOne: <T>(resource: ResourceType, column: string, value: string, select?: string) => Promise<SupabaseResponse<T>>;
}

export type GetAllParams = {
  table_name?: TableNamesT;
  filter_level?: CheckLevelReturn;
};
