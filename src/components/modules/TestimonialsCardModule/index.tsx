import { TestimonialsType } from '@/lib/types/components/modules/TestimonialsCardModule';
import CardContent from '@/src/components/units/cards/CardContent';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const TestimonialsCardModule = async () => {
  const { getAll } = await fetchData();

  const { data: testimonials, error } = await getAll<TestimonialsType>('get_testimonials_with_metadata', {
    isRpc: true,
  });

  console.log('testimonials data', testimonials);

  if (error) return null;

  return (
    <CardsBlock
      title={testimonials?.title}
      description={testimonials?.description}
      itemContainerStyles={'md:grid-cols-2'}
    >
      {testimonials?.data.map((item) => {
        return <CardContent key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default TestimonialsCardModule;
