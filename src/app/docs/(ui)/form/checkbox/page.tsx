import * as root from "@/examples/checkbox";
import DocPage from "@/components/DocPage";
import { Parameter } from "../../ObjectParameter";

export default function CheckboxDoc() {

    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>체크박스</h3>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>

                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500 pr-1">CheckboxLabel</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">label</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">문구</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 라벨문구</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">color</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">dark</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 색상설정</span>
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
                    <div className="mb-2 font-medium">label : </div>
                    <div>
                        <p className="font-medium mb-1">ex) label=&#34;문구&#34;</p>
                        <p>label 안쓸때는 기본 Checkbox만 적용됩니다</p>
                        <p>
                            label의 htmlFor값은 id값과 동일한 값으로 자동으로 만들어지며<br />
                            특정이름의 id를 써야하는 경우 CheckboxLabel에 id값을 선언하시면<br />
                            입력한 id값이 상속되어 자동으로 만들어진 id값은 없어집니다
                        </p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">color : </div>
                    <div>
                        <p className="font-medium">ex) color=&#34;red&#34; | &#34;dark&#34; | &#34;purple&#34; | &#34;blue&#34; | &#34;cyan&#34; | &#34;green&#34; | &#34;yellow&#34;</p>
                        <p>색상값이 없을때는 기본값인 &#34;blue&#34;로 설정됩니다</p>
                        <p>기본 색상이 없을경우 Theme추가 합니다</p>
                    </div>
                </div>
                <div className="font-medium mb-4">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
                <div className="w-full border-t border-solid border-gray-300" />


            </div>
            <DocPage root={root} />
        </>
    );
}