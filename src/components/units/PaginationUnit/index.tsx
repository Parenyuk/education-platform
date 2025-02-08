'use client';

import { Pagination } from '@heroui/react';
import { parseAsInteger, useQueryState } from 'nuqs';


const PaginationUnit = ({ total }) => {
  const itemsPerPage = 5;
  const pageCount = Math.ceil(total / itemsPerPage);
  const [page, setPage] = useQueryState('page', parseAsInteger.withOptions({ shallow: false }));

  const handlePageChange = async (page: number) => {
    await setPage(page);
  };

  return (<Pagination initialPage={1}
    total={pageCount}
    onChange={handlePageChange}
    classNames={{ base: 'container mx-auto flex justify-center my-6 md:my-10 2xl:my-12' }} />);
};

export default PaginationUnit;
