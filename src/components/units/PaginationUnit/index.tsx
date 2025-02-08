'use client';

import { Pagination } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { ROUTES } from '@/lib/constants/routes';


const PaginationUnit = ({ total }) => {
  const itemsPerPage = 5;
  const pageCount = Math.ceil(total / itemsPerPage);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      router.replace(ROUTES.COURSES({ page }), { scroll: false });
    }
  };

  return (<Pagination initialPage={1}
    total={pageCount}
    onChange={handlePageChange}
    classNames={{ base: 'container mx-auto flex justify-center my-6 md:my-10 2xl:my-12' }} />);
};

export default PaginationUnit;
