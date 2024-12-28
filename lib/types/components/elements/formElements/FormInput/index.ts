import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
};
