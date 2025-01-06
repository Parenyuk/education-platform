import cn from '@/helpers/cn';
import { FormErrorProps } from '@/lib/types/components/elements/formElements/FormError';

const FormError = ({ error = '', className = '' }: FormErrorProps) => {
  return <span className={cn('absolute -bottom-1.5 text-xs text-red-500 md:text-sm', className)}>{error}</span>;
};

export default FormError;
