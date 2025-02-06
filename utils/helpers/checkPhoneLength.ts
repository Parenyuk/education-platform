export const checkPhoneLength = (phone?: string) => {
  if (phone && phone.length <= 3) {
    return null;
  }
  return phone;
};
