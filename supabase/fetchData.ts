import { ResourceType, RpcFunctionValues, TableNames } from '@/lib/types/common/tableNames';
import { FetchDataMethods, GetAllParams, SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const fetchData = (): FetchDataMethods => {
  const getAll = async <T>(
    resource: ResourceType,
    { isRpc = false, table_name }: GetAllParams = {}
  ): Promise<SupabaseResponse<T>> => {
    const supabase = await createClient();

    if (isRpc && !table_name) {
      throw new Error('table_name is required when isRpc is true');
    }

    const query = isRpc
      ? supabase.rpc(resource as RpcFunctionValues, { table_name: table_name! })
      : supabase.from(resource as TableNames).select();

    const { data, error, status, statusText } = await query;

    if (error) {
      return { data: null, error, status, statusText };
    }

    return { data: data as T, error: null, status, statusText };
  };

  return { getAll };
};
