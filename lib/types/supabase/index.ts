import { PostgrestError } from '@supabase/supabase-js';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
};

export interface FetchDataMethods {
  getAll: <T>(resource: string, options?: { isRpc?: boolean; table_name?: string }) => Promise<SupabaseResponse<T>>;
}
