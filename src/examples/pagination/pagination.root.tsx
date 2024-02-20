'use client';

import { useState } from 'react';
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Pagination } from '@/components/Pagination/Pagination';



const code = `
'use client';
import { useState } from 'react';
import { Pagination } from "@components/Pagination";

function Component() {
	// 현재 페이지 상태를 관리하는 상태 변수
	const [currentPage, setCurrentPage] = useState(1);

	// 페이지 변경 시 호출되는 함수
	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<>
			<Pagination
				layout="table"
				totalPages={50} //총페이지
				totalCount={500} //총건수
				currentPage={currentPage}	//현재 페이지를 나타내는 상태 변수
				onPageChange={onPageChange}	//페이지가 변경될 때 호출되는 콜백 함수
				showIcons
			/>
		</>
	);
}
`;

function Component() {
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<>
			<div className='flex items-center gap-4 mb-4'>
				<h5 className='flex-none'>기본 예시</h5>
				<div className="w-full border-t border-solid border-gray-300"></div>
			</div>

			<Pagination
				layout="table"
				totalPages={50}
				totalCount={500}
				currentPage={currentPage}
				onPageChange={onPageChange}
				showIcons />
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
	githubSlug: 'pagination/pagination.root.tsx',
	component: <Component />,
};
