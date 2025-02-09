'use client';

import { Pagination } from '@heroui/react';
import { parseAsInteger, useQueryState } from 'nuqs';

import { ITEMS_PER_PAGE } from '@/lib/constants/itemsPerPage';
import { PaginationUnitProps } from '@/lib/types/components/units/PaginationUnit';

const PaginationUnit = ({ total = 0 }: PaginationUnitProps) => {
  const safeTotal = total ?? 0;
  const pageCount = Math.max(1, Math.ceil(safeTotal / ITEMS_PER_PAGE));
  const [page, setPage] = useQueryState('page', parseAsInteger.withOptions({ shallow: false }));

  const handlePageChange = async (page: number) => {
    await setPage(page);
  };

  return (
    <Pagination
      initialPage={1}
      total={pageCount}
      page={page ?? 1}
      onChange={handlePageChange}
      classNames={{ base: 'container mx-auto flex justify-center my-6 md:my-10 2xl:my-12' }}
    />
  );
};

export default PaginationUnit;
