import { parseAsString, parseAsFloat, createLoader } from 'nuqs/server';

export const coursesSearchParams = {
  page: parseAsFloat.withDefault(1),
  level: parseAsString.withDefault('all-levels'),
};

export const loadSearchParams = createLoader(coursesSearchParams);
