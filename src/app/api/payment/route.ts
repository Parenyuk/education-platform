import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { amount, planType } = await req.json();

    const isSuccess = Math.random() > 0.5;

    return NextResponse.json({
      success: isSuccess,
      message: isSuccess ? 'Payment successful!' : 'Payment failed!',
      amount,
      planType,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error }, { status: 500 });
  }
}
