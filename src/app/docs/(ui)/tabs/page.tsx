import * as root from "@/examples/tabs";
import DocPage from "../../../../components/DocPage";

export default function tabslDoc() {
    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>탭</h3>

                <div className='flex items-center gap-4 mb-2'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>

                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500">TabItemContent</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">tabsData</span>
                        <span className="text-gray-400 px-1">=</span>
                        <span className="text-gray-400">&#123;</span>
                        <span className="text-sky-300 px-1">tabsData</span>
                        <span className="text-gray-400">&#125;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; tabsData에 데이터 전달</span>
                    </div>
                    <div><span className="text-gray-400">/&#62;</span></div>
                </div>

                <div className='flex items-center gap-4 mb-2'>
                    <h5 className='flex-none font-bold'>속성</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>
                <div className='flex items-start gap-4 mb-2'>
                    <div className="font-medium">tabsData : </div>
                    <div>
                        <p>ex) tabsData=&#123;tabsData&#125;</p>
                        <p>tabsData에 데이터를 전달 합니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4'>
                    <div className="font-medium">title : </div>
                    <div>
                        <p>탭명을 적을때 사용합니다</p>
                        <p>Tabs.Item 태그안에 선언하여 사용합니다</p>
                    </div>
                </div>
                <div className="mt-4 w-full border-t border-solid border-gray-300" />
            </div>
            <DocPage root={root} />
        </>
    );
}