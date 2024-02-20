'use client';
import { CodeData } from "@/components/helpers/examples/code-demo";
import Accordion from '@/components/Accordion/Accordion';

const code = `
'use client';
import Accordion from '@components/Accordion/Accordion';

function Component() {
    const accordionsData = [
        {
            title: '인터넷 사용중인 방을 옮기고 싶은데 따로 비용을 부담해야 하나요?',
            content:
                (<>
                    <p className="mb-2 text-gray-500 text-md">
                        댁내에서 PC의 위치를 변경하시고자 하는 경우에는 댁내 이전(이사)를 신청을 하시면 됩니다.<br/>
                        댁내이전 신청은 KT고객센터(국번 없이 100번)를 통해 신청하실 수 있으며,<br/>
                        인터넷을 이전하는 경우, 아래와 같이 출동비가 부과됩니다.
                    </p>
                    <p className="text-gray-500 text-md">
                        Check out this guide to learn how to&nbsp;
                        <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-cyan-600 hover:underline dark:text-cyan-500">get started&nbsp;</a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </>
                )
        },
        {
            title: '휴대폰요금 납기일은 언제인가요?',
            content: '콘텐츠2입니다.'
        },
    ];
    return (
        <>
            <AccordionComponent accordionsData={accordionsData}/> //기본
            <AccordionComponent accordionsData={accordionsData} allOpen/> //전체오픈
        </>
    );
}

`;

function Component() {
    const accordionsData = [
        {
            title: '인터넷 사용중인 방을 옮기고 싶은데 따로 비용을 부담해야 하나요?',
            content:
                <>
                    <p className="mb-2 text-gray-500 text-md">
                        댁내에서 PC의 위치를 변경하시고자 하는 경우에는 댁내 이전(이사)를 신청을 하시면 됩니다.<br />
                        댁내이전 신청은 KT고객센터(국번 없이 100번)를 통해 신청하실 수 있으며,<br />
                        인터넷을 이전하는 경우, 아래와 같이 출동비가 부과됩니다.
                    </p>
                    <p className="text-gray-500 text-md">
                        Check out this guide to learn how to&nbsp;
                        <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-cyan-600 hover:underline dark:text-cyan-500">get started&nbsp;</a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </>
        },
        {
            title: '휴대폰요금 납기일은 언제인가요?',
            content: '콘텐츠2입니다.'
        },
    ];
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <Accordion data={accordionsData} />

            <hr className="my-8"></hr>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>전체 오픈</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <Accordion data={accordionsData} allOpen />
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
    githubSlug: 'accordion/accordion.root.tsx',
    component: <Component />,
};
