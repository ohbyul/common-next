'use client'
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";

import Button from '@/components/Button/Button';
import { AlertModal } from "./items";
import { closeConfirm } from "@/redux/features/confirmSlice";



export default function ConfirmDialog() {
    const dispatch = useDispatch();
    const confirmInfo = useAppSelector((state) => state.confirmReducer);
    const { content, isOpen, leftText, leftClick, rightText, rightClick, title } = confirmInfo

    const onCloseConfirm = () => {
        dispatch(closeConfirm())
    }
    return (
        <>
            {
                confirmInfo &&
                <AlertModal show={isOpen} onClose={onCloseConfirm}>
                    <AlertModal.Body>
                        {content}
                    </AlertModal.Body>
                    <AlertModal.Footer>

                        {/* 확인 */}
                        <Button
                            className="bg-secondary-400 enabled:hover:bg-secondary-500 text-white"
                            onClick={leftClick}
                            width='sm'>
                            {leftText}
                        </Button>

                        {/* 취소 */}
                        <Button onClick={rightClick ?? onCloseConfirm} width='sm'>
                            {rightText}
                        </Button>

                    </AlertModal.Footer>
                </AlertModal>

            }
        </>
    );
}
