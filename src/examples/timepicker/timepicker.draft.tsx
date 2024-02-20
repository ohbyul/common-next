'use client';
import { CodeData } from "@/components/helpers/examples/code-demo";
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const code = `
'use client';
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

function Component() {
  return (
    <>
      
      <TimePicker defaultValue={dayjs('13:30', 'HH:mm')} className='w-28'/> // 기본
      <TimePicker use12Hours format='h:mm a' className='w-28'/> // 12시간제 표기
      <TimePicker use12Hours format='h:mm a' minuteStep={10} className='w-28' />  // 분단위 예시(ex:10분씩)
    </>
  );
}
`;

const codeRSC = `
`;
function Component() {
  const format = 'HH:mm';
  return (
    <>
      <div className='flex items-center gap-4 mb-4'>
        <h5 className='flex-none'>기본 예시</h5>
        <div className="w-full border-t border-solid border-gray-300"></div>
      </div>
      <TimePicker defaultValue={dayjs('13:30', format )} format={format} className='mb-8 w-28' />

      <div className='flex items-center gap-4 mb-4'>
        <h5 className='flex-none'>12시간표기 예시</h5>
        <div className="w-full border-t border-solid border-gray-300"></div>
      </div>
      <TimePicker use12Hours format='h:mm a' className='mb-8 w-28'/>

      <div className='flex items-center gap-4 mb-4'>
        <h5 className='flex-none'>분단위 예시(ex:10분씩)</h5>
        <div className="w-full border-t border-solid border-gray-300"></div>
      </div>
      <TimePicker use12Hours format='h:mm a' minuteStep={10} className='w-28' />
    </>
  );
}



export const draft: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    // {
    //   fileName: 'server',
    //   language: 'tsx',
    //   code: codeRSC,
    // },
  ],
  githubSlug: 'button/button.root.tsx',
  component: <Component />,
};

