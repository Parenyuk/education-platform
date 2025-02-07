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

export interface FetchDataMethods {
  getAll: <T>(
    resource: ResourceType,
    options?: {
      filters?: any;
      options?: any;
    },
  ) => Promise<SupabaseResponse<T>>;
}

export type GetAllParams = {
  isRpc?: boolean;
  table_name?: TableNames;
  filter_level?: CheckLevelReturn;
};
