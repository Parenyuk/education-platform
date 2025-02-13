'use client';

import { useState } from 'react';

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  planType: 'month' | 'year';
};

const PaymentModal = ({ isOpen, onClose, amount, planType }: PaymentModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify({ amount, planType }),
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
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Confirm Payment</h2>
        <p className='mb-2'>Plan: <strong>{planType.toUpperCase()}</strong></p>
        <p className='mb-4'>Amount: <strong>${amount}</strong></p>

        {message ? (
          <p className={`text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        ) : (
          <div className='flex gap-4'>
            <button onClick={handlePayment} className='bg-green-600 text-white px-4 py-2 rounded-md'
              disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Confirm'}
            </button>
            <button onClick={onClose} className='bg-gray-300 px-4 py-2 rounded-md'>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
