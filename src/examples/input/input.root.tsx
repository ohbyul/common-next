'use client'

import { Text } from "@/components/Input/Text";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Label } from 'flowbite-react';
const code = `
'use client'
import { Text } from '@components/Form/Input';

function Component() {
    return (
        <>
            //테일윈드에 제공하는 클래스 네이밍값 기준으로 input 테마파일에에 들어가있음
            //width:auto -- 클래스명 w-auto 
            <Text type='text' width="auto" />

            //width: 5rem; -- 80px -- 클래스명 w-20
            <Text type='text' width="20" />

            // width: 25%;  -- 클래스명 w-1/4
            <Text type='text' width="1/4" />
            
            // width: 8.333333% -- 클래스명 w-1/12
            <Text type='text' width="1/12" />

            // 테일윈드에서 제공하는 클래스 네이밍값이 없고 숫자를 입력해야하는 경우 -- 클래스명:w-[202px]
            <Text type='text' id="number" width="w-[202px]" />
        </>
    );
}
`;

function Component() {

    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>width 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-2'>
                <Label value="" />
                <Text type='text' width="auto" />
            </div>
            <div className='mb-2'>
                <Label value="width: 5rem -- 80px -- 클래스명:w-20" />
                <Text type='text' width="20" />
            </div>
            <div className='mb-2'>
                <Label value="width: 25% -- 클래스명:w-1/4" />
                <Text type='text' width="1/4" />
            </div>
            <div className='mb-2'>
                <Label value="width: 8.333333% -- 클래스명:w-1/12" />
                <Text type='text' width="1/12" />
            </div>
            <div>
                <Label htmlFor="number" value="width-number" />
                <Text type='text' id="number" width="w-[202px]" />
            </div>
            {/* <div>
                플로바이트 안쓸때
                <input type='text' className='w-[2px]' />
            </div> */}
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
    githubSlug: 'forms/forms.root.tsx',
    component: <Component />,
};