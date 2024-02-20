import { z } from 'zod';

export const FormSchema = z.object({
    email: z.string().describe('Email').email({ message: 'Invalid Email' }),
    password: z.string().describe('Password').min(1, 'Password is required'),
<<<<<<< HEAD
  });

  
=======
  });
>>>>>>> e77342e0c499f3f16a6faccbdbc103fc22b66daf
