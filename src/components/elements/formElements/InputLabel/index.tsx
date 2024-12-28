import cn from '@/helpers/cn';
import { InputLabelProps } from '@/lib/types/components/elements/formElements/InputLabel';


const InputLabel = ({ label, error }: InputLabelProps) => {
  return (<label className={cn({ 'text-red-500': error })}>{label}</label>);
};

export default InputLabel;
