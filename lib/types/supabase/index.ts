import { PostgrestError } from '@supabase/supabase-js';

import { ResourceT } from '@/lib/types/common/tables';
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
    resource: ResourceT,
    params?: {
      filters?: FiltersType[];
      pagination?: PaginationType;
    },
    select?: string
  ) => Promise<SupabaseResponse<T>>;

  getOne: <T>(resource: ResourceT, column: string, value: string, select?: string) => Promise<SupabaseResponse<T>>;
}

export type GetAllParams = {
  table_name?: ResourceT;
  filter_level?: CheckLevelReturn;
};
