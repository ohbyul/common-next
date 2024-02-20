'use client'
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textarea } from "@/components/Textarea/Textarea";
import { Label } from 'flowbite-react';
const code = `
'use client'

import { Textarea } from "@components/Form/Textarea";

function Component() {
	return (
		<>
			// style = resize:none
			<Textarea id="resize-none" placeholder="텍스트 입력" resize="none" width="w-[202px]" height="y-[202px]" />
		
			// style = resize: both
			<Textarea placeholder="텍스트 입력" resize="resize" width="auto" height="auto" />
		
			//style = resize: horizontal
			<Textarea placeholder="텍스트 입력" resize='x-axis' width="48" height="48" />
		
			//style = resize: vertical
			<Textarea placeholder="텍스트 입력" resize='y-axis' width="1/2" height="1/2" />
		</>
	);
}
`;

function Component() {
	return (
		<>
			<div className='flex items-center gap-4 mb-4'>
				<h5 className='flex-none'>예시</h5>
				<div className="w-full border-t border-solid border-gray-300"></div>
			</div>

			<div className="mb-2">
				<p>style = resize:none / 클래스명:resize-none</p>
				<p>테일윈드에서 제공하는 클래스 네이밍 기준으로 적용</p>
				<p>ex)width:auto -- 클래스명:w-auto</p>
				<p>ex)height:auto -- 클래스명:h-auto</p>
				<Textarea id="resize-none" placeholder="텍스트 입력" resize='none' width="w-[202px]" height="y-[202px]" />
			</div>
			<div className="mb-2">
				<Label value="style = resize: both / 클래스명:resize" />
				<Textarea placeholder="텍스트 입력" resize='resize' width="auto" height="auto" />
			</div>
			<div className="mb-2">
				<Label value="style = resize: horizontal / 클래스명:resize-x" />
				<Textarea placeholder="텍스트 입력" resize='x-axis' width="48" height="48" />
			</div>
			<div className="mb-2">
				<Label value="style = resize: vertical / 클래스명:resize-y" />
				<Textarea placeholder="텍스트 입력" resize='y-axis' width="1/2" height="1/2" />
			</div>
			{/* <div className="mb-8 block bg-black w-[800px] h-[210px]"></div> */}
		</>
	);
}

export const textarea: CodeData = {
	type: 'single',
	code: [
		{
			fileName: 'client',
			language: 'tsx',
			code: code,
		},
	],
	githubSlug: 'forms/forms.textarea.tsx',
	component: <Component />,
};
