import { ContactItemProps } from '@/lib/types/units/ContactBoxUnit/ContactItem';

const ContactItem = ({ children, icon: Icon }: ContactItemProps) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-3.5 rounded-md bg-white-97 py-12 md:w-72 2xl:w-90'>
      <div className='border-gray-15 justify-self-center rounded-md border bg-white-95 p-3 2xl:px-3.5'>
        <Icon className='' />
      </div>
      {children}
    </div>
  );
};

export default ContactItem;
