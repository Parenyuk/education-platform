import { benefitsMockData } from '@/helpers/mockData/homePage';
import { BenefitsCardModuleProps } from '@/lib/types/components/modules/BenefitsCardModule';
import CardNumeric from '@/src/components/units/cards/CardNumeric';
import CardsBlock from '@/src/components/units/CardsBlock';

const BenefitsCardModule = ({ title, description }: BenefitsCardModuleProps) => {
  return (
    <CardsBlock title={title} description={description}>
      {benefitsMockData.map((item) => {
        return <CardNumeric key={item.id} item={item} />;
      })}
    </CardsBlock>
  );
};

export default BenefitsCardModule;
