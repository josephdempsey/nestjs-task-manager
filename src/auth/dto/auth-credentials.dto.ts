import * as z from 'zod';
import isStrongPassword from 'validator/lib/isStrongPassword';

const strongPasswordDetails = `{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }`;

export const AuthCredentialsSchema = z.object({
  username: z.string().min(4).max(20),
  password: z
    .string()
    .refine(isStrongPassword, { message: strongPasswordDetails }),
});

export type AuthCredentialsDtoType = z.infer<typeof AuthCredentialsSchema>;
