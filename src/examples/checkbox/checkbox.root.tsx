import { Checkbox } from '@/components/Checkbox/Checkbox';
import { CodeData } from "@/components/helpers/examples/code-demo";

const code = `
'use client';

import { Checkbox } from '@components/Checkbox/Checkbox';

function Component() {
    return (
        <>
            <Checkbox label='라벨내용' /> //기본
            
            <Checkbox /> //라벨x
            
            <Checkbox color="red"/> //색상
        </>
    );
}
`;


function Component() {
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-4'>
                <Checkbox label='라벨 내용'/>
            </div>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>color 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <Checkbox color="red" label='red'  defaultChecked />
                <Checkbox color="dark" label='dark'  defaultChecked />
                <Checkbox color="purple" label='purple'  defaultChecked />
                <Checkbox color="blue" label='blue'  defaultChecked />
                <Checkbox color="cyan" label='cyan'  defaultChecked />
                <Checkbox color="green" label='green'  defaultChecked />
                <Checkbox color="yellow" label='yellow'  defaultChecked />
            </div>
        </>
    );
}

export const checkbox: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'forms/forms.checkbox.tsx',
    component: <Component />,
};
