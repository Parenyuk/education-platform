import { rpcFunction } from '@/lib/constants/tableFunctions';
import { CardContentType } from '@/lib/types/components/modules/TestimonialsCardModule';
import { CardsCommonT } from '@/lib/types/components/units/CardsBlock';
import CardContent from '@/src/components/units/cards/CardContent';
import CardsBlock from '@/src/components/units/CardsBlock';
import { fetchData } from '@/supabase/fetchData';

const TestimonialsCardModule = async () => {
  const { getAll } = await fetchData();

  const { data: testimonials, error } = await getAll<CardsCommonT<CardContentType>>(rpcFunction.getTableWithMetadata, {
    isRpc: true,
    table_name: 'testimonials',
  });

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
