'use client'
import React, { createContext, useContext, ReactNode } from 'react';
import { ToastContainer, toast, ToastOptions, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationContextType {
    notify: (message: string, type?: 'success' | 'error', options?: ToastOptions) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const defaultOptions: ToastOptions = {
        hideProgressBar: true,
        icon: false && undefined
    };

    const notify = (message: string, type: 'success' | 'error' = 'success', options?: ToastOptions) => {
        const mergedOptions: ToastOptions = {
            ...defaultOptions,
            ...options
        };

        if (type === 'success') {
            if (options && options.icon === undefined) {
                toast.success(message, mergedOptions); 
            } else {
                toast.success(message, mergedOptions); 
            }
        } else if (type === 'error') {
            toast.error(message, mergedOptions);
        }
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                pauseOnHover
                className="toast-container"
                transition={Slide}
            />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
