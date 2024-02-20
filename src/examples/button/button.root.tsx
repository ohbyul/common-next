import { CodeData } from "@/components/helpers/examples/code-demo";
import Button from "@/components/Button/Button";
import { SlLike } from "react-icons/sl"; //아이콘 -SlLike 아이콘이름
import { Label } from 'flowbite-react';

const code = `
'use client';
import Button from "@components/Button/CustomerButton";
import { SlLike } from "react-icons/sl";

function Component() {
    return (
        <>

            // Default
            // 테일윈드에서 제공하는 클래스 네이밍 기준으로 적용 ex)width : auto -- strung값 : auto
            <Button width="auto">Default</Button>

            // width: 8rem; -- 128px -- strung값 : 32
            <Button width="32">Default</Button>

            // width: 8.333333% -- strung값 : 1/12
            <Button width="1/12">Default</Button>
            
            // 테일윈드에서 제공하는 클래스 네이밍값이 없고 숫자를 입력해야하는 경우 -- strung값:w-[202px]
            <Button width='w-[202px]'>Default</Button>

            // pills
            <Button pill>Default</Button>

            // outline
            <Button outline>Default</Button>

            // icons
            <Button><SlLike className="w-8 h-4" /></Button>

            <Button pill><SlLike className="w-8 h-4" /></Button>

            <Button outline className='flex flex-wrap items-center gap-2'>
                <SlLike className="h-4" />좋아요
            </Button>

            <Button pill outline className='flex flex-wrap items-center gap-2'>
                <SlLike className="h-4" />좋아요
            </Button>

        </>
    );
}
`;

function Component() {
    return (
        <>
            {/* Default */}
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 버튼 / width 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-2'>
                <Label value="테일윈드에서 제공하는 클래스 네이밍 기준으로 적용 ex)width : auto -- strung값 : auto " />
                <Button width="auto">Default</Button>
            </div>
            <div className='mb-2'>
                <Label value="width: 8rem; -- 128px -- strung값 : 32" />
                <Button width="32">Default</Button>
            </div>
            <div className='mb-2'>
                <Label value="width: 25% -- strung값 : 1/4" />
                <Button width="1/4">Default</Button>
            </div>
            <div className='mb-2'>
                <Label value="width: 8.333333% -- strung값 : 1/12" />
                <Button width="1/12">Default</Button>
            </div>
            <div className='mb-8'>
                <Label value="테일윈드에서 제공하는 클래스 네이밍값이 없고 숫자를 입력해야하는 경우 -- strung값:w-[202px]" />
                <Button width='w-[202px]'>Default</Button>
            </div>

            {/* pills */}
            <div className='flex items-center gap-4 mb-2'>
                <h5 className='flex-none'>pills 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-8 flex flex-wrap gap-2'>
                <Button pill>Default</Button>
            </div>

            {/* outline   */}
            <div className='flex items-center gap-4 mb-2'>
                <h5 className='flex-none'>outline 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-8 flex flex-wrap gap-2'>
                <Button outline>Default</Button>
            </div>

            {/* icons */}
            <div className='flex items-center gap-4 mb-2'>
                <h5 className='flex-none'>icons 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='flex items-start gap-4'>
                <Button><SlLike className="w-8 h-4" /></Button>
                <Button pill><SlLike className="w-8 h-4" /></Button>
                <Button outline className='flex flex-wrap items-center gap-2'>
                    <SlLike className="h-4" />좋아요
                </Button>
                <Button pill outline className='flex flex-wrap items-center gap-2'>
                    <SlLike className="h-4" />좋아요
                </Button>
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
    githubSlug: 'button/button.root.tsx',
    component: <Component />,
};