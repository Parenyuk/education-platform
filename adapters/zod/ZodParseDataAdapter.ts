/* eslint-disable @typescript-eslint/no-explicit-any */

import { redirect } from 'next/navigation';

import { TErrors, TZodParseData } from '@/lib/types/adapters/zod';

export default function ZodParseDataAdapter<T>(zodSchema: any, data: any): TZodParseData<T> {
  let errors = null;
  const result = zodSchema.safeParse(data);

  if (!result.success) {
    errors = {};
    result.error.issues.forEach((issue: any) => {
      errors[issue.path[0]] = issue.message;
    });
    redirect('/error');
  }

  return {
    data: result.data as T,
    errors: errors as TErrors,
  };
}
