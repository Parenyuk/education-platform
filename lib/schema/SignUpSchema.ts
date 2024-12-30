import * as z from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
      .regex(/\d/, 'Password must contain at least one digit.')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
      .regex(/\d/, 'Password must contain at least one digit.')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
    checkbox: z.boolean().refine((value) => value, {
      message: 'You must accept the Terms of Use and Privacy Policy.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
