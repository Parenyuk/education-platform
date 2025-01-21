import { ComponentProps } from 'react';

import { Input } from "@heroui/input";
import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps = {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
} & ComponentProps<typeof Input>;
