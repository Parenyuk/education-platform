export const isFormValid = (cardNumber: string, cvv: string) => cardNumber.length === 19 && cvv.length === 3;
