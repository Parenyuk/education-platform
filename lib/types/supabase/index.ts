import { PostgrestError } from '@supabase/supabase-js';

import { TableNames } from '@/lib/constants/tables';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
};

export interface FetchDataMethods {
  getAll: <T>(resource: string, options?: { isRpc?: boolean; table_name: TableNames }) => Promise<SupabaseResponse<T>>;
}
