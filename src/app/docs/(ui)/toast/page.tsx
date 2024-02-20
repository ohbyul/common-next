import * as root from "@/examples/toast";
import DocPage from "../../../../components/DocPage";

export default function ToastDoc() {

    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>토스트 모달</h3>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>

                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-violet-400">const</span>
                        <span className="text-blue-500 px-1">dispatch</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-blue-500 pl-1">useDispatch</span>
                        <span className="text-amber-300">&#40;</span>
                        <span className="text-amber-300">&#41;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져옵니다.</span>
                    </div>
                    <div>
                        <span className="text-violet-400">const</span>
                        <span className="text-blue-500 px-1">handleOpenToast</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-amber-300 px-1">&#40;</span>
                        <span className="text-gray-300">type : </span>
                        <span className="text-amber-300 px-1">string</span>
                        <span className="text-amber-300">&#41;</span>
                        <span className="text-violet-300 px-1">= &#62;</span>
                        <span className="text-amber-300">&#123;</span>
                    </div>
                    <div className="px-4">
                        <span className="text-violet-400">const</span>
                        <span className="text-blue-500 px-1">content</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-amber-300 px-1">&#40;</span>
                    </div>
                    <div className="px-8">
                        <span className="text-sky-300">&#60;&#62;</span>
                        <span className="text-gray-400 px-1">표시될 내용</span>
                        <span className="text-sky-300">&#60;/&#62;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 토스트 메시지에 표시될 내용을 설정합니다.</span>
                    </div>
                    <div className="px-4"><span className="text-amber-300 px-1">&#41;;</span></div>
                    <div className="px-4">
                        <span className="text-blue-500">dispatch</span>
                        <span className="text-amber-300">&#40;</span>
                        <span className="text-blue-500">openToast</span>
                        <span className="text-red-400">&#40;</span>
                        <span className="text-amber-300">&#123;</span>
                        <span className="text-gray-400">content, toastType: type</span>
                        <span className="text-amber-300">&#125;</span>
                        <span className="text-red-400">&#41;</span>
                        <span className="text-amber-300">&#41;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; openToast 액션을 디스패치하여 토스트 메시지를 엽니다.</span>
                    </div>
                    <div><span className="text-amber-300 px-1">&#125;;</span></div>
                    <div className="mt-4">
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500 pr-1">ToastModal</span>
                        <span className="text-gray-400">/&#62;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 토스트 모달.</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>속성</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">토스트 타입 : </div>
                    <div>
                        <p className="font-medium">ex) handleOpenToast=&#40; &#34;success&#34; | &#34;failure&#34; | &#34;warning&#34; &#41;</p>
                        <p>토스트타입의 값에 따라 아이콘 및 색상이 바뀝니다</p>
                    </div>
                </div>
            </div>
            <DocPage root={root} />
        </>
    );
}