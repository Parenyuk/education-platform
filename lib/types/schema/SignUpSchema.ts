import * as z from 'zod';

import { signUpSchema } from '@/lib/schema/SignUpSchema';

export type SignUpSchema = z.infer<typeof signUpSchema>;
