import { FormErrorProps } from '@/lib/types/components/elements/formElements/FormError';
import cn from '@/utils/helpers/cn';

const FormError = ({ error = '', className = '' }: FormErrorProps) => {
  return <span className={cn('absolute -bottom-1.5 text-xs text-red-500 md:text-sm', className)}>{error}</span>;
};

export default FormError;
