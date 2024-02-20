import * as root from "@/examples/modal";
import DocPage from "../../../../components/DocPage";

export default function ModalDoc() {

	return (
		<>
			<div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
				<h3 className='mt-8 mb-4'>모달</h3>
				<div className='flex items-center gap-4 mb-4'>
					<h5 className='flex-none font-bold'>기본 모달 태그</h5>
					<div className="w-full border-t border-solid border-gray-300"></div>
				</div>
				<div className="mb-8 flex flex-col justify-center px-8 py-8 justify-content bg-slate-800 rounded-lg text-white ">
					<div>
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500">Modal</span>
					</div>
                    <div className="px-4">
                        <span className="text-amber-400">show</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#123;</span>
                        <span className="text-sky-300 px-1">openModal</span>
                        <span className="text-gray-400">&#125;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 모달의 상태(열림 또는 닫힘)를 제어</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">onClose</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#123; &#40;&#41; &#61;&#62; </span>
                        <span className="text-sky-300 px-1">setOpenModal(false)</span>
                        <span className="text-gray-400">&#125;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 모달의 상태(열림 또는 닫힘) 상태를 업데이트</span>
                    </div>
					<div><span className="text-gray-400">&#62;</span></div>
					<div className="px-4">
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500">Modal.Header</span>
						<span className="text-gray-400">&#62;</span>
						모달제목
						<span className="text-gray-400">&#60;/</span>
						<span className="text-pink-500">Modal.Header</span>
						<span className="text-gray-400">&#62;</span>
					</div>
					<div className="px-4">
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500">Modal.Body</span>
						<span className="text-gray-400">&#62;</span>
						모달내용
						<span className="text-gray-400">&#60;/</span>
						<span className="text-pink-500">Modal.Body</span>
						<span className="text-gray-400">&#62;</span>
					</div>
					<div className="px-4">
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500">Modal.Footer</span>
						<span className="text-gray-400">&#62;</span>
						모달버튼
						<span className="text-gray-400">&#60;/</span>
						<span className="text-pink-500">Modal.Footer</span>
						<span className="text-gray-400">&#62;</span>
					</div>
					<div>
						<span className="text-gray-400">&#60;/</span>
						<span className="text-pink-500">Modal</span>
						<span className="text-gray-400">&#62;</span>
					</div>
				</div>

				<div className='flex items-center gap-4 mb-4'>
					<h5 className='flex-none font-bold'>속성</h5>
					<div className="w-full border-t border-solid border-gray-300"></div>
				</div>
				<div className='flex items-start gap-4 mb-4'>
					<div className="mb-2 font-medium">show : </div>
					<div>
						<p>show는 모달의 상태(열림 또는 닫힘)를  제어하는대 데 사용합니다</p>
						<p className="font-medium mb-2">ex) show=&#123;&#34;상태변수&#34;&#125; 입력합니다</p>
					</div>
				</div>
				<div className='flex items-start gap-4 mb-8'>
					<div className="mb-2 font-medium">onClose : </div>
					<div>
						<p>onClose는 모달이 닫힐 때 실행되어야 하는 콜백 함수를 나타냅니다</p>
						<p className="font-medium mb-2">ex) onClose=&#123;&#34;함수&#34;&#125; 입력합니다</p>
					</div>
				</div>



				<div className='flex items-center gap-4 mb-4'>
					<h5 className='flex-none font-bold'>컨펌알럿 태그</h5>
					<div className="w-full border-t border-solid border-gray-300"></div>
				</div>
				<div className="mb-8 flex flex-col justify-center px-8 py-8 justify-content bg-slate-800 rounded-lg text-white ">
					<div>
						<span className="text-gray-400">&#60;</span>
						<span className="text-pink-500">ConfirmDialogComponent</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">openConfirm</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">showConfirmDialog</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; useState의 열림/닫힘 상태를 나타내는 변수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">setOpenConfirm</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">setShowConfirmDialog</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; useState 열림/닫힘 상태를 업데이트하는 함수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">content</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">confirmDialogObject.description</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; 컨펌알럿에 표시될 내용</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">leftClick</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">confirmDialogObject.leftClick</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; 확인 버튼 클릭 시 실행되는 함수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">rightClick</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">confirmDialogObject.rightClick</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; 취소 버튼 클릭 시 실행되는 함수</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">leftText</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">confirmDialogObject.leftText</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; 확인 버튼 표시될 텍스트</span>
					</div>
					<div className="px-4">
						<span className="text-amber-400">rightText</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-400 pr-1">&#123;</span>
						<span className="text-sky-300 pr-1">confirmDialogObject.rightText</span>
						<span className="text-gray-400 pr-3">&#125;</span>
						<span className="text-gray-400 pr-3">&#47;&#47; 확인 버튼 표시될 텍스트</span>
					</div>



					<div>
						<span className="text-gray-400">&#62;</span>
					</div>
				</div>
			</div>

			<DocPage root={root} />
		</>
	);
}