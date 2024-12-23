import cn from '@/helpers/cn';
import { ContactLinkProps } from '@/lib/types/components/elements/ContactLink';

const ContactLink = ({ children, text, className }: ContactLinkProps) => {
  return (
    <div className={cn('flex space-x-1.5 pb-3.5 2xl:pb-5', className)}>
      {children}
      <p>{text}</p>
    </div>
  );
};

export default ContactLink;
