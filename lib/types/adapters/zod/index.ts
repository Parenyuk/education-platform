export type TError = {
  [key: string]: string;
};

export type TErrors = TError | null;

export type TZodParseData<T> = {
  data: T;
  errors: TErrors;
};
