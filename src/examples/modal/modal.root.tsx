'use client';

import { CodeData } from "@/components/helpers/examples/code-demo";
import { useState } from 'react';
import { Modal } from "@/components/Modal/index";
import Button from '@/components/Button/Button';


import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/features/alertSlice";
import { closeConfirm, openConfirm } from "@/redux/features/confirmSlice";

const code = `
'use client';
import { useState } from 'react';
import { Modal } from "@components/Modal/index";
import Button from '@components//Button/CustomerButton';
import ConfirmDialogComponent from './ConfirmDialogComponent';
import AlertDialogComponent from './AlertDialogComponent';

function Component() {
    const [openModal, setOpenModal] = useState(false);

    //------------------ 컨펌 ------------------
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [confirmDialogObject, setConfirmDialogObject] = useState({
        description: '',
        leftText: '',
        rightText: '',
        leftClick: () => { },
        rightClick: () => { },
    })
    const handleOpenModal = () => {
        setConfirmDialogObject({
            description: '알림 내용?',  // 컨펌알럿에 표시될 내용
            leftText: '확인', // leftText 버튼에 표시될 텍스트
            rightText: '취소',  // rightText 버튼에 표시될 텍스트
            leftClick: () => { 
                setShowConfirmDialog(false); // '확인' 버튼 클릭 시 실행
            },
            rightClick: () => {  
                setShowConfirmDialog(false); // '취소' 버튼 클릭 시 실행
            },
        })
        setShowConfirmDialog(true);  // 모달 열림 상태를 업데이트
    }

    //------------------ 알림 ------------------
    const [showAlertDialog, setShowAlertDialog] = useState(false);
    const [AlertDialogObj, setAlertDialogObj] = useState({
        description: '',
    })
    const handleOpenAlert = () => {
        setAlertDialogObj({
            description: 'AlertAlertAlertAlertAlert?', // 컨펌알럿에 표시될 내용
        })
        setShowAlertDialog(true);
    }


    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <Button width='sm' onClick={() => setOpenModal(true)}>모달호출버튼</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Modal.Header</Modal.Header>
                <Modal.Body>
                    <div>
                        Modal.Body
                        <p className="text-base leading-relaxed text-gray-500">
                            나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 전차로 어린 백셩이 니르고져 홇베이셔도
                            마참네 제 뜨들 시러펴디 몯핧 노미하니아 내 이랄 윙하야 어엿비너겨 새로 스믈 여듫 짜랄 맹가노니 사람마다 해여 수비니겨 날로 쑤메 뻔한킈 하고져 할따라미니라
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} color="blue" >확인</Button>
                    <Button onClick={() => setOpenModal(false)}>닫기</Button>
                </Modal.Footer>
            </Modal>

            {/* ------------------ */}
            <div className='flex items-center gap-4 my-4'>
                <h5 className='flex-none'>컨펌창</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            {/* ------------------ */}
            <Button width='sm' onClick={handleOpenModal}>컨펌창</Button>
            {/* ------------------ */}
            <ConfirmDialogComponent
                openConfirm={showConfirmDialog}              // useState의 열림/닫힘 상태를 나타내는 변수
                setOpenConfirm={setShowConfirmDialog}   // useState 열림/닫힘 상태를 업데이트하는 함수
                content={confirmDialogObject.description}   // 컨펌알럿에 표시될 내용
                leftClick={confirmDialogObject.leftClick}       // '확인' 버튼 클릭 시 실행되는 함수
                rightClick={confirmDialogObject.rightClick}  // '취소' 버튼 클릭 시 실행되는 함수
                leftText={confirmDialogObject.leftText}         // '확인' 버튼에 표시될 텍스트
                rightText={confirmDialogObject.rightText}    // '취소' 버튼에 표시될 텍스트
            />

            {/* ------------------ */}
            <div className='flex items-center gap-4 my-4'>
                <h5 className='flex-none'>알럿창</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            {/* ------------------ */}
            <Button width='sm' onClick={handleOpenAlert}>알럿창</Button>
            {/* ------------------ */}
            <AlertDialogComponent
                openAlert={showAlertDialog} // useState의 열림/닫힘 상태를 나타내는 변수
                setOpenAlert={setShowAlertDialog}   // useState 열림/닫힘 상태를 업데이트하는 함수
                content={AlertDialogObj.description}    // 알럿에 표시될 내용
            />
        </>
    );
}

`;

function Component() {
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(openAlert({ content: '알림창', alertType: 3 }));
    }

    const handleConfirm = () => {
        dispatch(openConfirm({
            content: 'zz',
            leftText: '저장멘트',
            leftClick: () => {
                console.log('save');
                dispatch(closeConfirm());
            }
        }))
    }
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <Button width='sm' onClick={() => setOpenModal(true)}>모달호출버튼</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Modal.Header</Modal.Header>
                <Modal.Body>
                    <div>
                        Modal.Body
                        <p className="text-base leading-relaxed text-gray-500">
                            나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 전차로 어린 백셩이 니르고져 홇베이셔도
                            마참네 제 뜨들 시러펴디 몯핧 노미하니아 내 이랄 윙하야 어엿비너겨 새로 스믈 여듫 짜랄 맹가노니 사람마다 해여 수비니겨 날로 쑤메 뻔한킈 하고져 할따라미니라
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} color="blue" >확인</Button>
                    <Button onClick={() => setOpenModal(false)}>닫기</Button>
                </Modal.Footer>
            </Modal>

            {/* ------------------ */}
            <div className='flex items-center gap-4 my-4'>
                <h5 className='flex-none'>컨펌창</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            {/* ------------------ */}
            <Button width='sm' onClick={handleConfirm}>컨펌창</Button>

            {/* ------------------ */}
            <div className='flex items-center gap-4 my-4'>
                <h5 className='flex-none'>알럿창</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            {/* ------------------ */}
            <Button width='sm' onClick={handleClick}>알럿창</Button>

        </>
    );
}

export const root: CodeData = {
    type: 'single',
    code: {
        fileName: 'client',
        language: 'tsx',
        code,
    },
    githubSlug: 'modal/modal.root.tsx',
    component: <Component />,
};
