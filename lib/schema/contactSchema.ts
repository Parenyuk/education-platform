import * as z from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string()
    .nonempty('Full name is required')
    .min(8, 'Full name should be at least 8 letters long.')
    .max(50, 'Full name should be max 50 letters long.'),
  email: z.string().nonempty('Email is required').email('Invalid email format'),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value || value.length <= 3) return true;
        return value.length >= 12;
      },
      { message: 'Invalid phone number length' }
    ),
  subject: z.string().nonempty('Subject name is required').min(5, 'Subject should be at least 5 letters long.'),
  message: z
    .string()
    .nonempty('Message name is required')
    .min(5, 'Message should be at least 5 letters long.')
    .max(500, 'Message should be max 500 letters long.'),
});
