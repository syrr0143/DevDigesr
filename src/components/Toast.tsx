// components/Toast.tsx
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

type ToastProps = {
    show: boolean;
    title?: string; // Optional title
    message: string;
    onClose: () => void;
    variant?: 'success' | 'error' | 'info' | 'warning'; // Add more variants as needed
};

const Toast: React.FC<ToastProps> = ({ show, title, message, onClose, variant = 'info' }) => {
    // Define color classes based on the variant
    const variantClasses: Record<string, string> = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500',
    };

    // Get the color class for the given variant
    const colorClass = variantClasses[variant] || 'bg-gray-800';

    return (
        <Transition
            as={Fragment}
            show={show}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className={`fixed top-5 right-5 ${colorClass} text-white p-5 rounded-xl`}
                role="alert"
                aria-live="assertive"
            >
                <div className="flex flex-col">
                    {title && <div className="text-lg font-bold mb-1">{title}</div>}
                    <div className="flex items-center text-lg">
                        <span>{message}</span>
                        <button onClick={onClose} className="ml-4">
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Toast;
