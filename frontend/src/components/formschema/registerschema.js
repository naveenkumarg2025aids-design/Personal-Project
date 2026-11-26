import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),

  email: z.string().email('Enter a valid email'),

  phone: z.string().regex(/^[0-9]{10}$/, 'Enter a valid 10 digit phone number'),

  dateOfBirth: z.string().min(1, 'Date of birth is required'),

  licenseNumber: z.string().min(5, 'Enter a valid driving licence number'),

  password: z.string().min(8, 'Password must be at least 8 characters'),

  confirmPassword: z.string().min(8, 'Confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});