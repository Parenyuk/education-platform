import { PostgrestError } from '@supabase/supabase-js';

import { ResourceType, TableNames } from '@/lib/types/common/tableNames';
import { CheckLevelReturn } from '@/lib/types/utils/checkLevel';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
  count?: number;
};

type FiltersType = { column: string; operator: string; value: string | string[]; };

export interface FetchDataMethods {
  getAll: <T>(
    resource: ResourceType,
    options?: {
      filters?: FiltersType[];
      pagination?: { limit: number; offset: number; }
      options?: { queryModifiers: ((q: unknown) => unknown)[]; };
    },
  ) => Promise<SupabaseResponse<T>>;
}

export type GetAllParams = {
  isRpc?: boolean;
  table_name?: TableNames;
  filter_level?: CheckLevelReturn;
};
