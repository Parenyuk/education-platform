import { InputLabelProps } from '@/lib/types/components/elements/formElements/InputLabel';
import cn from '@/utils/helpers/cn';

const InputLabel = ({ label, error }: InputLabelProps) => {
  return <label className={cn({ 'text-red-500': error })}>{label}</label>;
};

export default InputLabel;
