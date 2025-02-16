import NavigationElements from '@/src/components/units/AuthSlider/NavigationElements';
import SliderTop from '@/src/components/units/AuthSlider/SliderTop';
import { sliderMockData } from '@/utils/mockData/slider';
import SliderComponent from 'src/components/units/AuthSlider/SliderComponent';

const AuthSlider = () => {
  return (
    <div className='order-last mb-32 flex flex-col justify-center md:order-none'>
      <SliderTop />
      <SliderComponent data={sliderMockData} />
      <NavigationElements />
    </div>
  );
};

export default AuthSlider;
