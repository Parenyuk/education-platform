import { PostgrestError } from '@supabase/supabase-js';

import { ResourceType, TableNames } from '@/lib/types/common/tableNames';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
};

export interface FetchDataMethods {
  getAll: <T>(
    resource: ResourceType,
    options?: {
      isRpc?: boolean;
      table_name: TableNames;
    }
  ) => Promise<SupabaseResponse<T>>;
}
