import * as z from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(8, 'Full name should be at least 8 letters long.')
    .max(50, 'Full name should be max 50 letters long.'),
  email: z.string().email(),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value || value.length <= 3) return true; // Пропускаємо, якщо тільки код країни
        return value.replace(/\D+/g, '').length >= 7; // Валідація довжини без нецифрових символів
      },
      { message: 'Phone number must be at least 7 digits long.' }
    ),
  subject: z.string().min(5, 'Subject should be at least 5 letters long.'),
  message: z
    .string()
    .min(5, 'Message should be at least 5 letters long.')
    .max(500, 'Message should be max 500 letters long.'),
});
