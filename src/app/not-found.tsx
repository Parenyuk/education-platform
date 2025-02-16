import Link from 'next/link';

import { ROUTES } from '@/lib/constants/routes';

export default async function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 text-center'>
      <h2 className='text-5xl font-semibold md:text-6xl'>404 Not Found</h2>
      <p className='text-3xl font-medium'>Could not find requested resource</p>
      <p className='text-5xl font-medium'>
        Go to{' '}
        <Link href={ROUTES.HOME()} className='text-blue-500 hover:underline'>
          {' '}
          home page
        </Link>
      </p>
    </div>
  );
}
