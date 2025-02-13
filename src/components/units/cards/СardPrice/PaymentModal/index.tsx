'use client';

import { useRef, useState } from 'react';

import { Button } from '@heroui/button';

import useOnClickOutside from '@/lib/hooks/useOnClickOutside';
import Cross from '@/src/components/elements/svgElements/Cross';

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  planType: 'month' | 'year';
};

const PaymentModal = ({ isOpen, onClose, amount, planType }: PaymentModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const modalRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(modalRef, onClose);

  const isFormValid = cardNumber.length === 19 && cvv.length === 3;

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
      .slice(0, 19);
  };

  const handlePayment = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify({ amount, planType, cardNumber: cardNumber.replace(/\s/g, ''), cvv }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div ref={modalRef} className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold mb-4'>Confirm Payment</h2>
          <Button className='min-w-10 max-w-10 max-h-10 -mt-5' onPress={onClose}>
            <Cross />
          </Button>
        </div>
        <p className='mb-2'>Plan: <strong>{planType.toUpperCase()}</strong></p>
        <p className='mb-4'>Amount: <strong>${amount}</strong></p>

        <div className='relative bg-gray-100 p-4 rounded-lg shadow-md mb-4'>
          <p className='text-sm text-gray-600 mb-1'>Card Number</p>
          <input
            type='text'
            placeholder='XXXX XXXX XXXX XXXX'
            className='w-full p-3 text-lg font-mono tracking-wide border border-gray-300 rounded bg-white'
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />
        </div>

        <div className='relative bg-gray-100 p-4 rounded-lg shadow-md mb-4 w-32'>
          <p className='text-sm text-gray-600 mb-1'>CVV</p>
          <input
            type='text'
            placeholder='XXX'
            maxLength={3}
            className='w-full p-3 text-lg font-mono tracking-wide border border-gray-300 rounded bg-white'
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
          />
        </div>

        {message ? (
          <p className={`text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        ) : (
          <div className='flex items-center justify-center gap-4'>
            <Button
              onPress={handlePayment}
              className={`bg-orange-50 text-white px-4 py-2 rounded-md ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm'}
            </Button>
            <Button onPress={onClose} className='bg-gray-300 px-4 py-2 rounded-md'>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
