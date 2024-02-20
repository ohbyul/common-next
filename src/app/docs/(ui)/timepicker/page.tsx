import * as root from "@/examples/timepicker";
import DocPage from "../../../../components/DocPage";
import dynamic from "next/dynamic";

export default function ButtonDoc() {
    // const DocPage = dynamic(
    //     () => import('@/components/DocPage'),
    //     { ssr: false }
    // )

    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>TimePicker</h3>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>

                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500 pr-1">TimePicker</span>
                        <span className="text-gray-400">format</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-blue-300"></span>
                        <span className="text-gray-400 pr-1">&#34;</span>
                        <span className="text-gray-400">/&#62;</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">format</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">HH:mm | HH:mm:ss | h:mm a</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 시간 포멧 설정</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">minuteStep</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#123;</span>
                        <span className="text-sky-300 px-1">10</span>
                        <span className="text-gray-400">&#125;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 분단위 설정</span>
                    </div>
                    {/* minuteStep={10}  */}
                    <div className="px-4">
                        <span className="text-amber-400">use12Hours</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 12시간제 설정</span>
                    </div>

                </div>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>속성</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">format : </div>
                    <div>
                        <p className="font-medium">ex) format=&#34;HH:mm | HH:mm:ss | h:mm a&#34;</p>
                        <p>시간 포멧을 설정합니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">use12Hours : </div>
                    <div className="">
                        <p className="font-medium">
                            ex) &#60;TimePicker <b>use12Hours format=&#34;h:mm a&#34;</b> /&#62;</p>
                        <p>12시간제 형식을 사용합니다.</p>
                        <p>use12Hours 선언하고 format을 &#34;h:mm a&#34; 사용하면 됩니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">minuteStep : </div>
                    <div className="">
                        <p className="font-medium">ex) minuteStep=&#123;10&#125;/&#62;</p>
                        <p>분단위 설정합니다</p>
                    </div>
                </div>
                <div className="w-full border-t border-solid border-gray-300" />
            </div>

            <DocPage root={root} />
        </>
    );
}