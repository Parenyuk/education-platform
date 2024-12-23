import LinksBlock from '@/src/components/modules/Footer/LinksBlock';
import SocialProfiles from '@/src/components/units/SocialProfiles';

const RightBlock = ({}) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <LinksBlock />
      <SocialProfiles />
    </div>
  );
};

export default RightBlock;
