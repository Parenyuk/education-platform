import { CourseType } from '@/lib/types/actions/getCourses';
import { SupabaseResponse } from '@/lib/types/supabase';
import { createClient } from '@/utils/supabase/server';

export const getCourses = async (): Promise<SupabaseResponse<CourseType[]>> => {
  const supabase = await createClient();

  const response = await supabase.from('courses').select();

  return response;
};
