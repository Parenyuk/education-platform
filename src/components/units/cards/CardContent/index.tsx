import { CardContentProps } from '@/lib/types/components/units/cards/CardContent';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const CardContent = ({ item }: CardContentProps) => {
  return (
    <div className='rounded-xl bg-white p-8 md:p-10 2xl:p-12'>
      <p>{item.short_content}</p>
      <div>
        <p>{item.author}</p>
        <LinkAsButton href='/'>Read Full Story</LinkAsButton>
      </div>
    </div>
  );
};

export default CardContent;
