import { Control } from 'react-hook-form';

import { ContactSchema } from '@/lib/types/schema/ContactSchema';

export type PhoneFormInputProps = {
  control: Control<ContactSchema>;
};
