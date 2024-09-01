'use client';

import { format } from 'date-fns';
const now = new Date();
const formattedDate = format(now, "eeee, MMMM d, yyyy 'at' h:mm a");
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Script from 'next/script';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import success from "@/../public/Success Icon.svg"
import Image from 'next/image';

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: any) => void;
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    theme: {
        color: string;
    };
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

const features = [
    "10 Projects",
    "5 GB Storage",
    "Email Support",
    "Priority Support",
    "24/7 Support",
    "Unlimited Projects",
    "50 GB Storage",
];

const plans = [
    {
        name: "Basic",
        planPrice: "1999",
        features: [true, true, true, false, false, false, false],
    },
    {
        name: "Pro",
        planPrice: "2499",
        features: [true, true, true, true, false, false, false],
    },
    {
        name: "Enterprise",
        planPrice: "4999",
        features: [true, true, true, true, true, true, true],
    },
];

const PricingComparison = () => {
    const [responseDetails, setResponseDetails] = useState<any>(null);

    const { toast } = useToast();
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const [receipt, setReceipt] = useState<{ orderId: string; amount: number; paymentId: string } | null>(null);

    const createOrderId = async (price: string) => {
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(price) * 100, // Convert amount to paise
                    currency: "INR",
                }),
            });

            if (!response.ok) {

                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (!data.orderid) {
                toast({
                    title: 'Order ID not received',
                    description: `Current date and time: ${formattedDate}`,
                })
                throw new Error('Order ID not received');
            }

            return data.orderid;
        } catch (error) {
            toast({
                title: (error as Error).message,
                description: `Current date and time: ${formattedDate}`,
            })
            console.error('There was a problem with your fetch operation:', error);
            return null;
        }
    };

    const processPayment = async (e: React.MouseEvent<HTMLButtonElement>, plan: { name: string, planPrice: string, }) => {
        e.preventDefault();
        setLoadingPlan(plan.name);
        try {
            const orderId: string = await createOrderId(plan.planPrice);
            if (!orderId) {
                setLoadingPlan(null);
                toast({
                    title: 'Failed to create order',
                    description: `Current date and time: ${formattedDate}`,
                })
                throw new Error('Failed to create order');
            }

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
                amount: parseFloat(plan.planPrice) * 100,
                currency: "INR",
                name: 'DevDigest',
                description: 'Subscription',
                order_id: orderId,
                handler: async function (response: any) {
                    try {
                        const data = {
                            orderCreationId: orderId,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                        };

                        const result = await fetch('/api/verify', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: { 'Content-Type': 'application/json' },
                        });
                        const res = await result.json();
                        if (res.isOk) {
                            setResponseDetails(res);
                            // Show the receipt to the user
                            setReceipt({
                                orderId: res.receipt.orderId,
                                amount: res.receipt.amount,
                                paymentId: res.receipt.paymentId
                            });
                            toast({
                                title: 'Payment successful',
                                variant: "default",
                                style: {
                                    backgroundColor: '#4caf50', // Green background
                                    color: '#fff',              // White text
                                    borderRadius: '8px',        // Rounded corners
                                    padding: '16px',            // Padding
                                    fontFamily: 'Arial, sans-serif', // Font
                                    fontSize: '16px',           // Font size
                                },
                                description: `${formattedDate}`,
                            })
                            setLoadingPlan(null)
                        } else {
                            setLoadingPlan(null)
                            toast({
                                title: res.message,
                                color: "green",

                                description: `Current date and time: ${formattedDate}`,
                            })
                        }
                    } catch (error) {
                        setLoadingPlan(null)

                        console.error('Error during payment verification:', error);
                        toast({
                            title: 'Payment verification failed',
                            color: "green",

                            description: `Current date and time: ${formattedDate}`,
                        })
                    }
                },
                prefill: {
                    name: "Sumit Yadav",
                    email: "sy816120@gmail.com",
                    contact: '',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
            alert('An error occurred while processing payment');
        }
    };

    return (
        <>
            {!receipt && (
                <>
                    <div>
                        <h1 className="text-3xl font-bold text-center capitalize">Pricing details</h1>
                        <p className="text-center text-sm text-gray-500">
                            Choose the plan that suits your needs and budget.
                        </p>

                        <div className=" text-center text-sm text-gray-500">
                            * All prices are in INR (Indian Rupees)
                        </div>
                    </div>


                    <div className="p-8 max-h-screen flex items-center justify-center">
                        <Script
                            id="razorpay-checkout-js"
                            src="https://checkout.razorpay.com/v1/checkout.js"
                        />

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
                            {plans.map((plan, index) => (
                                <Card key={index} className="shadow-lg w-[350px]">
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <CardDescription>For {plan.name.toLowerCase()} users</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-center text-4xl font-bold mb-4">{plan.planPrice} INR</div>
                                        <div className="text-center mb-6">per month</div>
                                        <ul className="space-y-4 mb-6">
                                            {features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center space-x-2">
                                                    {plan.features[featureIndex] ? (
                                                        <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                                    ) : (
                                                        <XCircleIcon className="h-6 w-6 text-red-500" />
                                                    )}
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button id={plan.name} variant="outline" onClick={(e) => processPayment(e, plan)}>{loadingPlan === plan.name ? "Please wait ..." : "Choose Plan"}</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div></>
            )}
            {receipt && (

                <div className='h-screen justify-center  items-center flex'>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle className='mx-auto mb-8'>Payment Details</CardTitle>
                            <div className='mx-auto'>
                                <Image src={success} alt='success' />
                            </div>
                            <h1 className='text-green-500 text-md font-semibold mx-auto'>Payment success</h1>
                            <h1 className='text-lg font-bold mx-auto'>INR {receipt.amount / 100}</h1>
                            <Separator />
                            <CardDescription>
                                Please save your receipt for future reference.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between'>
                                <div className='text-sm text-muted-foreground'>
                                    Status
                                </div>

                                <div className='text-sm font-semibold'>
                                    <Badge variant="outline" style={{ color: 'green', backgroundColor: '#B5DBCB' }}> {responseDetails?.receipt.paymentStatus}</Badge>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-muted-foreground'>
                                    Order Id
                                </div>
                                <div className='text-sm font-semibold'>
                                    {responseDetails?.receipt.orderId}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-muted-foreground'>
                                    Amount
                                </div>
                                <div className='text-sm font-semibold'>
                                    {responseDetails?.receipt.amount} {responseDetails?.receipt.currency}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='text-sm text-muted-foreground'>
                                    Payment Id
                                </div>
                                <div className='text-sm font-semibold'>
                                    {responseDetails?.receipt.amount} {responseDetails?.receipt.paymentId}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {/* <Button variant="outline">Cancel</Button> */}
                            <Button className='mx-auto'>Download</Button>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </>
    );
};

export default PricingComparison;
