/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchDataMethods, SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const fetchData = (): FetchDataMethods => {
  const getAll = async <T>(
    resource: any,
    { isRpc = false, table_name }: { isRpc?: boolean; table_name?: string } = {},
  ): Promise<SupabaseResponse<T>> => {
    const supabase = await createClient();

    const query = isRpc ? supabase.rpc(resource, { table_name }) : supabase.from(resource).select();

    const { data, error, status, statusText } = await query;

    if (error) {
      return { data: null, error, status, statusText };
    }

    return error ? { data: null, error, status, statusText } : { data: data as T, error: null, status, statusText };
  };

  return { getAll };
};
