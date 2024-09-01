// import { NextRequest, NextResponse } from 'next/server';
// import Razorpay from 'razorpay';
// import crypto from 'crypto';

// const rzpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY!,
//     key_secret: process.env.RAZORPAY_SECRET!,
// });

// export async function POST(request: NextRequest) {
//     try {
//         const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = await request.json();

//         const body = `${orderCreationId}|${razorpayPaymentId}`;
//         const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET!)
//             .update(body.toString())
//             .digest('hex');

//         if (razorpaySignature === expectedSignature) {
//             return NextResponse.json({ isOk: true });
//         } else {
//             return NextResponse.json({ isOk: false, message: 'Signature mismatch' });
//         }
//     } catch (error) {
//         console.error('Error during payment verification:', error);
//         return NextResponse.json({ isOk: false, message: 'Verification failed' }, { status: 500 });
//     }
// }


import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const rzpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY!,
    key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = await request.json();

        // Validate the input
        if (!orderCreationId || !razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
            return NextResponse.json(
                { success: false, message: 'Invalid input' },
                { status: 400 }
            );
        }

        // Verify the payment signature
        const generatedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET!)
            .update(orderCreationId + '|' + razorpayPaymentId)
            .digest('hex');

        if (generatedSignature !== razorpaySignature) {
            return NextResponse.json(
                { success: false, message: 'Signature mismatch' },
                { status: 400 }
            );
        }

        // Fetch order details from Razorpay
        const order = await rzpay.orders.fetch(orderCreationId);

        // Generate a receipt or confirmation message
        const receipt = {
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            paymentId: razorpayPaymentId,
            paymentStatus: 'Success',
            // Add more details as needed
        };

        // Respond with the receipt
        return NextResponse.json({
            isOk: true,
            receipt,
        });
    } catch (error) {
        console.error('Server error during payment verification:', error);
        return NextResponse.json(
            { success: false, message: 'Payment verification failed' },
            { status: 500 }
        );
    }
}
