import { Textarea } from '@nextui-org/input';

import cn from '@/helpers/cn';
import { FormTextAreaProps } from '@/lib/types/components/elements/formElements/FormTextArea';
import FormError from '@/src/components/elements/formElements/FormError';

const FormTextArea = ({ label, placeholder, register, error, classNames, ...restProps }: FormTextAreaProps) => {
  return (
    <div className='relative'>
      <Textarea
        label={label}
        labelPlacement='outside'
        placeholder={placeholder}
        classNames={{
          base: cn({ 'text-red-500': !!error }),
          ...classNames,
        }}
        {...register}
        {...restProps}
      />
      {error && <FormError error={error} className='bottom-2' />}
    </div>
  );
};

export default FormTextArea;
