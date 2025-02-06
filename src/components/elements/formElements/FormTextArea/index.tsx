import { Textarea } from '@heroui/input';

import { FormTextAreaProps } from '@/lib/types/components/elements/formElements/FormTextArea';
import FormError from '@/src/components/elements/formElements/FormError';
import cn from '@/utils/helpers/cn';

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
