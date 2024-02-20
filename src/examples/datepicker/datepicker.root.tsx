'use client';

import { CodeData } from "@/components/helpers/examples/code-demo";
import React from 'react';
import locale from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import { DatePicker } from 'antd';

const code = `
'use client';
import React from 'react';
import locale from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import { DatePicker } from 'antd';

function Component() {
  const dateFormat = 'YYYY-MM-DD';

  return (
    <>
      <DatePicker format={dateFormat} locale={locale}/>
    </>
  );
}
`;

function Component() {
  const dateFormat = 'YYYY-MM-DD';

  return (
    <>
      <div className='flex items-center gap-4 mb-4'>
        <h5 className='flex-none'>타사 예시</h5>
        <div className="w-full border-t border-solid border-gray-300"></div>
      </div>
      <DatePicker format={dateFormat} locale={locale}/>
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
  githubSlug: 'datepicker/datepicker.root.tsx',
  component: <Component />,
};
