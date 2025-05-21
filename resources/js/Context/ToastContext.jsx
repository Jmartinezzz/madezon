import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const toast = useRef(null);
    const [message, setMessage] = useState(null);

    const showToast = (severity, summary, detail, life = 3000) => {
        setMessage({ severity, summary, detail, life });
    };

    useEffect(() => {
        if (message && toast.current) {
            toast.current.show(message);
        }
    }, [message]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);