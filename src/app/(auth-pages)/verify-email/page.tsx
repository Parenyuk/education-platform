import VerifyEmail from '@/src/components/units/VerifyEmail';

export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<never> }) {
  const { token_hash: tokenHash, type } = await searchParams;

  return <VerifyEmail tokenHash={tokenHash} type={type} />;
}
