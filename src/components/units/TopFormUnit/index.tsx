import { TopFormUnitProps } from '@/lib/types/components/units/TopFormUnit';

const TopFormUnit = ({ title, text }: TopFormUnitProps) => {
  return (
    <>
      {title && <h2 className='mb-2 text-center text-xl font-semibold md:text-5xl 2xl:text-5xl'>{title}</h2>}
      {text && <p className='text-center'>{text}</p>}
    </>
  );
};

export default TopFormUnit;
