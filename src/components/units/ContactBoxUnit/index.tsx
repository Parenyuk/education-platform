import ContactItem from '@/src/components/units/ContactBoxUnit/ContactItem';
import MessageIcon from 'public/svg/message.svg';

const ContactBoxUnit = ({}) => {
  return (
    <div className='md:border-gray-15 flex flex-col gap-5 border-t p-7 md:gap-6 md:border-l md:border-t-0 md:p-8 lg:p-15 2xl:gap-12 2xl:p-20'>
      <ContactItem icon={MessageIcon}>support@skillbridge.com</ContactItem>
      <ContactItem icon={MessageIcon}>+91 00000 00000</ContactItem>
      <ContactItem icon={MessageIcon}>Some Where in the World</ContactItem>
    </div>
  );
};

export default ContactBoxUnit;
