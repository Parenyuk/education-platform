'use client';

import { Button } from '@nextui-org/button';

import { verifyEmail } from '@/actions/auth/verifyEmail';
import { VerifyEmailProps } from '@/lib/types/components/units/VerifyEmail';

const VerifyEmail = ({ tokenHash, type }: VerifyEmailProps) => {
  const onClickHandler = async () => {
    return await verifyEmail(tokenHash, type);
  };

  return (
    <div className='container mx-auto mt-12 grid grid-cols-1 gap-y-8 md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-24 2xl:gap-24'>
      Click to verify the email:
      <Button onPress={onClickHandler}>Verify email</Button>
    </div>
  );
};

export default VerifyEmail;
