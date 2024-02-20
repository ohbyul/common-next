'use client'

import { CodeData } from "@/components/helpers/examples/code-demo";
import Button from '@/components/Button/Button';
import ToastModal from '@components/Toast/ToastModal'
import React from 'react';
import { useDispatch } from 'react-redux';
import { openToast } from '@/redux/features/toastSlice';

const code = `
'use client'
import Button from '@components//Button/CustomerButton';
import ToastModal from '@components/Toast/ToastModal'
import React from 'react';
import { useDispatch } from 'react-redux';
import { openToast } from '@/redux/features/toastSlice';

function Component() {
    // useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져옵니다.
    const dispatch = useDispatch();

    // 토스트 메시지를 열기 위한 함수
    const handleOpenToast = (type: string) => {
        
        //toastType - 토스트타입/성공/실패/경고 나눠서 아이콘 및 색상이 바뀜
        //success | failure | warning

        if (type === 'success') {

            // 토스트 메시지에 표시될 내용을 설정합니다.
            const content = (
                <>successfully</>
            );

            // openToast 액션을 디스패치하여 토스트 메시지를 엽니다.
            dispatch(openToast({ content, toastType: type })); //content(메시지), toastType(토스트타입)
        }
        else if (type === 'failure') {
            const content = (
                <>실패실패실패실패실패실패실패실패실패실패실패</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
        else if (type === 'warning') {
            const content = (
                <>경고경고경고경고경고경고경고경고경고경고경고</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
    };
    return (
        <>
            //성공 값을 success으로 보냄
            <Button onClick={() => handleOpenToast('success')}>Toast success</Button>

            //실패 값을 failure으로 보냄
            <Button onClick={() => handleOpenToast('failure')}>Toast failure</Button>

            //경고 값을 warning으로 보냄
            <Button onClick={() => handleOpenToast('warning')}>Toast warning</Button>

            <ToastModal />
        </>
    );
}
`;

function Component() {
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져옵니다.
    // 토스트 메시지를 열기 위한 함수
    const handleOpenToast = (type: string) => {
        if (type === 'success') {
            // 토스트 메시지에 표시될 내용을 설정합니다.
            const content = (
                <>successfully</>
            );

            // openToast 액션을 디스패치하여 토스트 메시지를 엽니다.
            dispatch(openToast({ content, toastType: type }));
        }
        else if (type === 'failure') {
            const content = (
                <>실패실패실패실패실패실패실패실패실패실패실패</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
        else if (type === 'warning') {
            const content = (
                <>경고경고경고경고경고경고경고경고경고경고경고</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
    };
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='flex items-center gap-4'>
                <Button onClick={() => handleOpenToast('success')}>성공</Button>
                <Button onClick={() => handleOpenToast('failure')}>실패</Button>
                <Button onClick={() => handleOpenToast('warning')}>경고</Button>
            </div>
            <ToastModal />
        </>
    );
}

export const root: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'toast/toast.root.tsx',
    component: <Component />,
};
