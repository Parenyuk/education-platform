// @ts-nocheck
import { ResourceType, TableNamesT } from '@/lib/types/common/tableNames';
import { FetchDataMethods, GetAllParams, SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const fetchData = (): FetchDataMethods => {
  const getAll = async <T>(
    resource: ResourceType,
    { filters = [], pagination = {} }: GetAllParams = {}
  ): Promise<SupabaseResponse<T>> => {
    const supabase = await createClient();

    let query = supabase.from(resource as TableNamesT).select('*', { count: 'exact' });

    if (filters.length > 0) {
      filters.forEach(({ column, operator, value }) => {
        if (query[operator]) {
          query = query[operator](column, value);
        }
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

  const getOne = async (resource, column, value, select = '*'): Promise<unknown> => {
    const supabase = await createClient();

    const { data, error, status, statusText } = await supabase.from(resource).select(select).eq(column, value).single();

    if (error) {
      return { data: null, error, status, statusText };
    }

    return { data: data as T, error: null, status, statusText };
  };

  return { getAll, getOne };
};
