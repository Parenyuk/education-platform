import { ITEMS_PER_PAGE } from '@/lib/constants/itemsPerPage';

export const paginationOffset = (currentPage: number) => (currentPage - 1) * ITEMS_PER_PAGE;
