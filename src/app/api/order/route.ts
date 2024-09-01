import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const rzpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY!,
    key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const { amount, currency } = await request.json();

        // Validate the input
        if (!amount || !currency) {
            return NextResponse.json(
                { success: false, message: 'Invalid input' },
                { status: 400 }
            );
        }

        // Create the order with Razorpay
        const options = {
            amount: Number(amount), // Ensure amount is a number in paise
            currency,
            receipt: 'rcpl',
        };
        const order = await rzpay.orders.create(options);
        console.log('order is ', order)

        // Respond with the order ID
        return NextResponse.json({
            orderid: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error('Server error during order creation:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create order' },
            { status: 500 }
        );
    }
}
