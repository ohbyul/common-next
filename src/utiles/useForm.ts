"use client"

import React, { useState } from 'react'


export function useFormFields<T>(initialValues: T, FORM_VALID: any | undefined)
    : [T, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] {

    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const { target } = event;
        const { name, value } = target;

        if (FORM_VALID && FORM_VALID[name]) {
            const regexType = FORM_VALID[name][0]
            const regexRepalce = FORM_VALID[name][1]

            setValues({ ...values, [name]: value.replace(regexType, regexRepalce) });
        }

        else {
            setValues({ ...values, [name]: value });
        }

    }
    const resetFormFields = () => setValues(initialValues);

    return [values, handleChange, resetFormFields];
}

export type MessageType = "default" | "success" | "error";

export type MessageProps = {
    type: MessageType;
    payload: string;
};

export function useMessage<MessageProps>(initialValues: MessageProps): [MessageProps, (mes: MessageProps) => void] {
    const [message, setMessage] = useState<MessageProps>(initialValues);

    const handleMessage = (mes: MessageProps) => setMessage(mes);
    return [message, handleMessage];

}