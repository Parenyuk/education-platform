import { footerLinks } from '@/helpers/mockData/footerLinks';
import SimpleLink from '@/src/components/elements/SimpleLink';

const LinksBlock = ({}) => {
  return (
    <div className='flex'>
      {footerLinks.map((link) => (
        <div key={link.id} className='mr-6 2xl:mr-8'>
          <h6 className='mb-3.5 text-lg font-semibold 2xl:text-xl'>{link.name}</h6>
          <div className='flex flex-col space-y-1.5'>
            {link.items.map((item) => (
              <SimpleLink key={item.id} href={item.href} target='_blank'>
                {item.title}
              </SimpleLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksBlock;
