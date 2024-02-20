import * as root from "@/examples/pagination";
import DocPage from "../../../../components/DocPage";

export default function PaginationDoc() {

	return (
		<>
			<div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
				<h3 className='mt-8 mb-4'>페이지네이션</h3>

				<div className='flex items-center gap-4 mb-4'>
					<h5 className='flex-none font-bold'>태그</h5>
					<div className="w-full border-t border-solid border-gray-300"></div>
				</div>

				<div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
					<div>
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500 pr-1">Pagination</span>
					</div>
					<div className="px-4">
                        <span className="text-amber-400">layout</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">table</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 페이지네이션위에 탐색내용 유무설정</span>
                    </div>
					<div className="px-4">
                        <span className="text-amber-400">totalPages</span>
                        <span className="text-gray-400">=</span>
						<span className="text-gray-400">&#123;</span>
						<span className="text-sky-300 px-1">50</span>
						<span className="text-gray-400">&#125;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 전체 페이지 수</span>
                    </div>
					<div className="px-4">
						<span className="text-amber-300">totalCount</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400">&#123;</span>
						<span className="text-sky-300  px-1">500</span>
						<span className="text-gray-400">&#125;</span>
						<span className="text-gray-400 pl-3">&#47;&#47; 전체 건수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-300">currentPage</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400">&#123;</span>
						<span className="text-sky-300  px-1">currentPage</span>
						<span className="text-gray-400">&#125;</span>
						<span className="text-gray-400 pl-3">&#47;&#47; 페이지가 변경될 때 호출되는 콜백 함수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-300">showIcons</span>
						<span className="text-gray-400 pl-3">&#47;&#47; 좌우 넘기는 버튼 아이콘 설정</span>
					</div>
					<div>
						<span className="text-gray-400">/&#62;</span>
					</div>

				</div>
				<div className='flex items-center gap-4 mb-4'>
					<h5 className='flex-none font-bold'>속성</h5>
					<div className="w-full border-t border-solid border-gray-300"></div>
				</div>
				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">showIcons : </div>
					<div>
						<p>좌우 넘기는 버튼을 아이콘으로 설정합니다</p>
					</div>
				</div>

				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">layout : </div>
					<div>
						<p className="font-medium">ex) layout=&#34;table&#34;</p>
						<p>페이지네이션 위에 탐색내용 설정입니다</p>
					</div>
				</div>

				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">totalPages : </div>
					<div>
						<p className="font-medium">ex) totalPages=&#123;페이지수&#125;</p>
						<p>전체 페이지 수를 나타냅니다</p>
					</div>
				</div>
				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">totalCount : </div>
					<div>
						<p className="font-medium">ex) totalCount=&#123;건수&#125;</p>
						<p>전체 건수를 나타냅니다</p>
					</div>
				</div>
				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">currentPage : </div>
					<div>
						<p className="font-medium">ex) currentPage=&#123;상태변수&#125;</p>
						<p>현재 선택된 페이지를 나타냅니다</p>
					</div>
				</div>
				<div className='flex items-start gap-4'>
					<div className="mb-2 font-medium">onPageChange : </div>
					<div>
						<p className="font-medium">ex) onPageChange=&#123;콜백 함수&#125;</p>
						<p>페이지가 변경될 때 호출되는 콜백 함수입니다</p>
					</div>
				</div>

			</div>
			<DocPage root={root} />
		</>
	);
}