'use client'
import { Toast, ToastToggle } from '@/components/Toast/items';

import { closeToast } from '@/redux/features/toastSlice';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function ToastModal() {
    const dispatch = useAppDispatch();
    const toastInfo = useAppSelector((state) => state.toastReducer);

    useEffect(() => {
        if (toastInfo.length > 0) {
            const timer = setTimeout(() => {
                dispatch(closeToast());
            }, toastInfo[0].timeout);
            return () => {
                clearTimeout(timer);
            };
        }
    })
    // 
    return (
        <div className="fixed inset-x-1/2 bottom-10 translate-x-neg-1/2 flex flex-col flex-nowrap justify-end items-center gap-4 w-full z-50">
            {toastInfo.map(Item =>
                <Toast
                    key={Item.id}
                    toastType={Item.toastType}
                >
                    <div className="text-sm font-normal">
                        {Item.content}
                    </div>
                    <ToastToggle />
                </Toast>
            )}
        </div>
    );
}