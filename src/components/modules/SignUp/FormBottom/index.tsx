import { Button } from '@heroui/button';
import { Link } from '@heroui/link';

import { ROUTES } from '@/lib/constants/routes';
import GoogleIcon from '@/public/svg/google.svg';
import Arrow from '@/src/components/elements/svgElements/Arrow';

const FormBottom = () => {
  return (
    <>
      <Button startContent={<GoogleIcon />} size='lg' className='my-6 min-h-14 w-full' color='default'>
        Sign Up with Google
      </Button>
      <p className='text-center'>
        Already have an account?{' '}
        <Link
          href={ROUTES.LOGIN()}
          showAnchorIcon
          className='underline'
          color='secondary'
          anchorIcon={<Arrow color={'#262626'} className='-rotate-45' />}
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default FormBottom;
