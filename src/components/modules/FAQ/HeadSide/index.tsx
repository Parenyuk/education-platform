import { HeadSideProps } from '@/lib/types/components/modules/FAQ/HeadSide';
import LinkAsButton from '@/src/components/elements/LinkAsButton';

const HeadSide = ({ title, description }: HeadSideProps) => {
  return (
    <div>
      <h2 className='text-3xl font-semibold md:text-5xl 2xl:text-6xl'>{title || 'Frequently Asked Questions'}</h2>
      <p className='mt-2 text-sm md:text-base 2xl:text-lg'>{description}</p>
      <LinkAsButton className='mt-5 md:mt-10 2xl:mt-12' type='tertiary' href='/'>
        See All FAQ’s
      </LinkAsButton>
    </div>
  );
};

export default HeadSide;
