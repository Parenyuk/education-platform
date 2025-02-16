import { SignUpFormTop } from '@/lib/constants/SignUpFormTop';
import FormBottom from '@/src/components/modules/SignUp/FormBottom';
import SignUpForm from '@/src/components/modules/SignUp/SignUpForm';
import TopFormUnit from '@/src/components/units/TopFormUnit';
import FormDivider from 'src/components/elements/formElements/FormDivider';

const SignUp = ({}) => {
  return (
    <>
      <TopFormUnit title='Sign Up' text={SignUpFormTop} />
      <SignUpForm />
      <FormDivider />
      <FormBottom />
    </>
  );
};

export default SignUp;
