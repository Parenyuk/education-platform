import { ComponentProps } from 'react';

import { Input } from '@nextui-org/input';
import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps = {
  label: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
} & ComponentProps<typeof Input>;
