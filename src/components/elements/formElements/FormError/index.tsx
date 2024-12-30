const FormError = ({ error = '' }: { error?: string }) => {
  return <span className='text-[12px] text-red-500 md:text-lg'>{error}</span>;
};

export default FormError;
