import * as z from 'zod';

import { loginSchema } from '@/lib/schema/LoginSchema';

export type LoginSchema = z.infer<typeof loginSchema>;
