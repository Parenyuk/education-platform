import { TestimonialsT } from '@/lib/types/common/tables';
import CardContent from '@/src/components/units/cards/CardContent';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const TestimonialsCardModule = async () => {
  const { data: testimonials, error } = await fetchData().getAll<TestimonialsT[]>('testimonials');

  if (error || !testimonials?.length) return null;

  return (
    <CardsBlock tableName='testimonials' itemContainerStyles={'md:grid-cols-2'}>
      {testimonials?.map((item) => {
        return <CardContent key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default TestimonialsCardModule;
