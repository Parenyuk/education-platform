import { UserDataAdapter } from '@/adapters/supabase/UserDataAdapter';

export type ContactFormUnitProps = {
  user: ReturnType<typeof UserDataAdapter>;
};
