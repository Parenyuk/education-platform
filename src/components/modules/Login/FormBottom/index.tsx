import { Button } from '@heroui/button';
import { Link } from '@heroui/link';

import { googleAuth } from '@/actions/auth/GoogleAuth';
import { ROUTES } from '@/lib/constants/routes';
import GoogleIcon from '@/public/svg/google.svg';
import Arrow from '@/src/components/elements/svgElements/Arrow';

const FormBottom = () => {
  const onPressHandler = async () => {
    return await googleAuth();
  };

  return (
    <>
      <Button
        onPress={onPressHandler}
        startContent={<GoogleIcon />}
        size='lg'
        className='my-6 min-h-14 w-full'
        color='default'
      >
        Login with Google
      </Button>
      <p className='text-center'>
        Don’t have an account?{' '}
        <Link
          href={ROUTES.SIGN_UP()}
          showAnchorIcon
          className='underline'
          color='secondary'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default FormBottom;
