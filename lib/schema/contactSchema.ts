import * as z from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Full name should be at least 8 letters long.')
    .max(50, 'Full name should be max 50 letters long.'),
  email: z.string().email(),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string(),
  message: z.string(),
});
