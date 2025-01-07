import * as z from 'zod';

import { contactSchema } from '@/lib/schema/contactSchema';

export type ContactSchema = z.infer<typeof contactSchema>;
