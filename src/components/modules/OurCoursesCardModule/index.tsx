import { getCourses } from '@/actions/courses';
import { BenefitsCardModuleProps } from '@/lib/types/components/modules/BenefitsCardModule';
import CardImage from '@/src/components/units/cards/CardImage';
import CardsBlock from '@/src/components/units/CardsBlock';

const OurCoursesCardModule = async ({ title, description }: BenefitsCardModuleProps) => {
  const { data: courses, error } = await getCourses();

  if (error) return null;

  console.log('data', courses);
  console.log('error', error);

  return (
    <CardsBlock title={title} description={description} itemContainerStyles='md:grid-cols-2'>
      {courses?.map((item) => {
        return <CardImage key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default OurCoursesCardModule;
