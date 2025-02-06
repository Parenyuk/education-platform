export const checkNumber = (value: number): string => {
  return value >= 1 && value <= 9 ? `0${value}` : `${value}`;
};
