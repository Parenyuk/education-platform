import LogoItem from '@/src/components/units/PartnersLogo/LogoItem';
import getPartnerLogos from '@/utils/helpers/getPartnerLogos';

const PartnersLogo = ({}) => {
  const logos = getPartnerLogos();

  return (
    <section className='container mx-auto mt-8 grid grid-cols-2 rounded-xl bg-white p-6 md:mt-24 md:flex 2xl:p-8'>
      {logos.map((logo, index) => (
        <LogoItem logo={logo} key={index} index={index} />
      ))}
    </section>
  );
};

export default PartnersLogo;
