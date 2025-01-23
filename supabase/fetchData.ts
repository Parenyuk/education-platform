import { SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const fetchData = async () => {
  const supabase = await createClient();

  const getAll = async <T>(
    resource: string,
    options: {
      isRpc?: boolean;
      table_name?: string;
    } = { isRpc: false }
  ): Promise<SupabaseResponse<T>> => {
    const { isRpc = false, table_name } = options;

    if (isRpc) {
      const { data, error, status, statusText } = await supabase.rpc(resource, { table_name });

      if (error) {
        console.error(error);
        return { data: null, error, status, statusText };
      }

      return { data: data as T, error: null, status, statusText };
    }

    const { data, error, status, statusText } = await supabase.from(resource).select();

    if (error) {
      console.error(error);
      return { data: null, error, status, statusText };
    }

    return { data: data as T, error: null, status, statusText };
  };

  // const getOne = async <T>(resource: string, id: string): Promise<SupabaseResponse<T | null>> => {
  //   const { data, error, status, statusText } = await supabase
  //     .from(resource)
  //     .select('*')
  //     .eq('id', id)
  //     .single(); // Повертає один запис
  //
  //   if (error) {
  //     return { data: null, error, status, statusText };
  //   }
  //   return { data: data || null, error: null, status, statusText };
  // };
  //
  // const create = async <T>(resource: string, data: T): Promise<SupabaseResponse<T>> => {
  //   const { data: insertedData, error } = await supabase
  //     .from(resource)
  //     .insert([data]);
  //
  //   if (error) throw new Error(error.message);
  //   return insertedData[0]; // Повертаємо перший запис
  // };
  //
  // const update = async <T>(resource: string, id: string, data: T): Promise<SupabaseResponse<T>> => {
  //   const { data: updatedData, error } = await supabase
  //     .from(resource)
  //     .update(data)
  //     .eq('id', id);
  //
  //   if (error) throw new Error(error.message);
  //   return updatedData[0]; // Повертаємо оновлений запис
  // };
  //
  // const remove = async (resource: string, id: string): Promise<void> => {
  //   const { error } = await supabase
  //     .from(resource)
  //     .delete()
  //     .eq('id', id);
  //
  //   if (error) throw new Error(error.message);
  // };

  // return { getAll, getOne, create, update, remove };

  return { getAll };
};
