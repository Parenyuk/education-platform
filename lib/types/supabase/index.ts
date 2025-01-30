import { PostgrestError } from '@supabase/supabase-js';

type TableWithMetadataType<T> = {
  data: {
    title: string;
    description: string;
    data: T[] | null
  }
}

type TableType<T> = {
  data: T | null;
}

export type SupabaseResponse<T, IsRpc extends boolean = false> = {
  data: IsRpc extends true ? TableWithMetadataType<T> : TableType<T> | null;
  error: PostgrestError | null;
  status: number;
  statusText: string;
};

export interface FetchDataMethods {
  getAll: <T, IsRpc extends boolean>(
    resource: string,
    options?: { isRpc?: IsRpc; table_name?: string },
  ) => Promise<SupabaseResponse<T, IsRpc>>;
}
