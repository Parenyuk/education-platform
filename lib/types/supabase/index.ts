import { PostgrestError } from '@supabase/supabase-js';

import { ResourceType, TableNames } from '@/lib/types/common/tableNames';
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

type QueryOptionsType = { queryModifiers: ((q: unknown) => unknown)[]; };

export interface FetchDataMethods {
  getAll: <T>(
    resource: ResourceType,
    params?: {
      filters?: FiltersType[];
      pagination?: PaginationType;
      queryOptions?: QueryOptionsType;
    },
  ) => Promise<SupabaseResponse<T>>;
}

export type GetAllParams = {
  isRpc?: boolean;
  table_name?: TableNames;
  filter_level?: CheckLevelReturn;
};
