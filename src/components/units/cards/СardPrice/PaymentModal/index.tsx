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
      setMessage(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50'>
      <div ref={modalRef} className='w-96 rounded-lg bg-white p-6 shadow-lg'>
        <div className='flex items-center justify-between'>
          <h2 className='mb-4 text-xl font-semibold'>Confirm Payment</h2>
          <Button className='-mt-5 max-h-10 min-w-10 max-w-10' onPress={onClose}>
            <Cross />
          </Button>
        </div>
        <p className='mb-2'>
          Plan: <strong>{planType.toUpperCase()}</strong>
        </p>
        <p className='mb-4'>
          Amount: <strong>${amount}</strong>
        </p>

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

        {message ? (
          <p className={`text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        ) : (
          <div className='flex items-center justify-center gap-4'>
            <Button
              onPress={handlePayment}
              className={`rounded-md bg-orange-50 px-4 py-2 text-white ${!isFormValid ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm'}
            </Button>
            <Button onPress={onClose} className='rounded-md bg-gray-300 px-4 py-2'>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
