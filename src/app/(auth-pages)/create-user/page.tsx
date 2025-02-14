import { Link } from '@heroui/link';

import { ROUTES } from '@/lib/constants/routes';
import Arrow from '@/src/components/elements/svgElements/Arrow';

export default async function CreateUserPage() {
  return (
    <div className='container mx-auto mt-12 grid grid-cols-1 gap-y-8 md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-24 2xl:gap-24'>
      New user successfully registered. Please check your email and
      <Link
        href={ROUTES.LOGIN()}
        showAnchorIcon
        className='underline'
        color='secondary'
        anchorIcon={<Arrow color='#262626' className='-rotate-45' />}
      >
        Login
      </Link>
      .
    </div>
  );
}
