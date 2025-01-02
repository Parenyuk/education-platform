import { EmailOtpType } from '@supabase/supabase-js';

export type VerifyEmailProps = {
  tokenHash: string;
  type: EmailOtpType;
};
