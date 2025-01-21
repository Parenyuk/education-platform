import { ComponentProps } from 'react';

import { Textarea } from "@heroui/input";
import { UseFormRegisterReturn } from 'react-hook-form';

export type FormTextAreaProps = {
  label: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
} & ComponentProps<typeof Textarea>;
