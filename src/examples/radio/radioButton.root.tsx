import { CodeData } from "@/components/helpers/examples/code-demo";
import dynamic from "next/dynamic";
// const Radio = dynamic(() => import("@/components/Radio/Radio"), { ssr: false, });
import { Radio } from "@/components/Radio/Radio";

const code = `
'use client';

import { Radio } from '@/components/Radio/items';

function Component() {
    return (
        <>
            <Radio label='Default1' name="radiolabel" /> //기본
            
            <Radio /> //라벨x
            
            <Radio defaultChecked label='red' color="red" /> // 색상
        </>
    );
}
`;

function Component() {
    return (
        <>
            <div className=' mb-2 flex items-center gap-4'>
                <h5 className='flex-none'>기본</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>

            <div className='mb-8 flex items-center gap-4'>
                <Radio label='Default1' name="radiolabel" defaultChecked />
                <Radio label='Default2' name="radiolabel" />
            </div>


            <div className='mb-2 flex items-center gap-4'>
                <h5 className='flex-none'>color 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <Radio defaultChecked label='red' color="red" />
                <Radio defaultChecked label='dark' color="dark" />
                <Radio defaultChecked label='purple' color="purple" />
                <Radio defaultChecked label='blue' color="blue" />
                <Radio defaultChecked label='cyan' color="cyan" />
                <Radio defaultChecked label='green' color="green" />
                <Radio defaultChecked label='yellow' color="yellow" />
            </div>
        </>
    );
}

export const radioButton: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'forms/forms.radioButton.tsx',
    component: <Component />,
};
