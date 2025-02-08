import { ResourceType, TableNames } from '@/lib/types/common/tableNames';
import { FetchDataMethods, GetAllParams, SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const fetchData = (): FetchDataMethods => {
  const getAll = async <T>(
    resource: ResourceType,
    { filters = [], pagination = {}, options }: GetAllParams = {},
  ): Promise<SupabaseResponse<T>> => {
    const supabase = await createClient();

    let query = supabase.from(resource as TableNames).select('*', { count: 'exact' });

    console.log('filters', filters);

    if (filters.length > 0) {
      filters.forEach(({ column, operator, value }) => {
        if (query[operator]) {
          query = query[operator](column, value);
        }
      });
    }

    if (options) {
      options.queryModifiers?.forEach((modifier) => {
        query = modifier(query);
      });
    }

    if (pagination.limit) query = query.limit(pagination.limit);
    if (pagination.offset) query = query.range(pagination.offset, pagination.offset + pagination.limit - 1);

    const { data, error, status, statusText, count } = await query;

    if (error) {
      return { data: null, error, status, statusText, count };
    }

    return { data: data as T, error: null, status, statusText, count };
  };

  return { getAll };
};

