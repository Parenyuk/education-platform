import { CardContentType } from '@/lib/types/components/modules/TestimonialsCardModule';
import CardContent from '@/src/components/units/cards/CardContent';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const TestimonialsCardModule = async () => {
  const { data: testimonials, error } = await fetchData().getAll<CardContentType[]>('testimonials');

  if (error || testimonials?.length === 0) return null;

  return (
    <CardsBlock
      tableName='testimonials'
      itemContainerStyles={'md:grid-cols-2'}
    >
      {testimonials?.map((item) => {
        return <CardContent key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default TestimonialsCardModule;
