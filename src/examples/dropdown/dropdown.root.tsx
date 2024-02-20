'use client';

import { CodeData } from "@/components/helpers/examples/code-demo";
import { useState } from 'react';
import { SelectBox } from '@/components/SelectBox/SelectBox';

const code = `
'use client';
import { useState } from 'react';
import { SelectBox } from '@/components/SelectBox/SelectBox';

function Component() {
    // 상태 변수 설정: 선택된 값과 그 값을 변경할 함수
    const [selectedValue, setSelectedValue] = useState('선택1');

    // 항목 클릭 시 호출되는 함수
    const handleItemClick = (value: string) => {
        setSelectedValue(value); // 선택된 값 업데이트
    };
    return (
        <>
            // SelectBox 컴포넌트에 전달되는 label 속성
            // - label은 드롭다운 버튼에 표시되는 텍스트로, 현재 선택된 값을 나타냅니다.
            // - selectedValue 변수의 값이 변경될 때마다 업데이트됩니다
            <SelectBox label={selectedValue} width="101">
                <SelectBox.Item onClick={() => handleItemClick('선택')}>선택</SelectBox.Item>
                <SelectBox.Item onClick={() => handleItemClick('제목')}>제목</SelectBox.Item>
                <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
            </SelectBox>
        </>
    );
}
`;

function Component() {
    const [selectedValue, setSelectedValue] = useState('선택1');

    const options = [
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
    ]
    const handleItemClick = (value: string) => {
        setSelectedValue(value);
    };
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>

            <div>
                <SelectBox label={selectedValue} width="20">
                    <SelectBox.Item onClick={() => handleItemClick('선택')}>선택</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('제목')}>제목2</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용2</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                    <SelectBox.Item onClick={() => handleItemClick('내용')}>내용</SelectBox.Item>
                </SelectBox>
            </div>
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
    githubSlug: 'dropdown/dropdown.root.tsx',
    component: <Component />,
};
