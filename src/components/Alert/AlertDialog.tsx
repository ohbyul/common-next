'use client'

import { closeAlert } from "@/redux/features/alertSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";



import { AlertModal } from "./items";
import Button from '@/components/Button/Button';


export default function AlertDialog() {
    const dispatch = useAppDispatch();
    const alertInfo = useAppSelector((state) => state.alertReducer);
    const { id, isOpen, content } = alertInfo

    const onCloseAlert = () => {
        dispatch(closeAlert())
    }
    return (
        <>
            {
                alertInfo &&
                <AlertModal show={isOpen} onClose={onCloseAlert}>
                    <AlertModal.Body>
                        {content}
                    </AlertModal.Body>
                    <AlertModal.Footer>
                        <Button className="bg-secondary-400 enabled:hover:bg-primary-600 text-white" onClick={onCloseAlert} width='sm'>
                            확인
                        </Button>
                    </AlertModal.Footer>
                </AlertModal>
            }
        </>
    );
}