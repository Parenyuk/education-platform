import { LoginFormTop } from '@/lib/constants/LoginFormTop';
import FormDivider from '@/src/components/elements/formElements/FormDivider';
import FormBottom from '@/src/components/modules/Login/FormBottom';
import LoginForm from '@/src/components/modules/Login/LoginForm';
import TopFormUnit from '@/src/components/units/TopFormUnit';

const Login = () => {
  return (
    <>
      <TopFormUnit title='Login' text={LoginFormTop} />
      <LoginForm />
      <FormDivider />
      <FormBottom />
    </>
  );
};

export default Login;
