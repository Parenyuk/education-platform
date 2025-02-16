import { CardComponentProps } from '@/lib/types/components/units/cards/CardPrice/PaymentModal/CardComponent';
import { formatCardNumber } from '@/utils/helpers/formatCardNumber';

const CardComponent = ({ cardNumber, setCardNumber, cvv, setCvv }: CardComponentProps) => {
  return (
    <>
      <div className='relative mb-4 rounded-lg bg-gray-100 p-4 shadow-md'>
        <p className='mb-1 text-sm text-gray-600'>Card Number</p>
        <input
          type='text'
          placeholder='XXXX XXXX XXXX XXXX'
          className='w-full rounded border border-gray-300 bg-white p-3 font-mono text-lg tracking-wide'
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        />
      </div>

      <div className='relative mb-4 w-32 rounded-lg bg-gray-100 p-4 shadow-md'>
        <p className='mb-1 text-sm text-gray-600'>CVV</p>
        <input
          type='text'
          placeholder='XXX'
          maxLength={3}
          className='w-full rounded border border-gray-300 bg-white p-3 font-mono text-lg tracking-wide'
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
        />
      </div>
    </>
  );
};

export default CardComponent;
