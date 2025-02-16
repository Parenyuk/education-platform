import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Course page',
  description: 'Course page details',
};

export default function CoursePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex min-h-screen flex-col'>{children}</div>;
}
