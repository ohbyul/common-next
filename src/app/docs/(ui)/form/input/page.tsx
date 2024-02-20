
import * as root from "@/examples/input";
import DocPage from "@/components/DocPage";

export default function InputDoc() {

    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>Input</h3>

                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>
                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500">Text</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">type</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">text | number | password</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; input type 설정</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">width</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-sky-300 px-1">&#34;32&#34; (string값으로 입력하되 &#34;w-&#34;빼고 입력) 이외 px값은 &#34;w-[숫자px]&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; input width 설정</span>
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
                    <div className="mb-2 font-medium">type : </div>
                    <div>
                        <p className="font-semibold">ex) type=&#34;text&#34; | &#34;number&#34; | &#34;password&#34;</p>
                        <p>type설정 없을때 기본값인 &#34;text&#34;로 설정됩니다</p>
                        <p>number: 숫자만 입력할때 number로 선언하면 됩니다</p>
                        <p>password: 비밀번호 표기 하려면 password로 선언하면 됩니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">width : </div>
                    <div>
                        <p className="font-semibold">ex) width=string값으로 입력하되 &#34;w-&#34;빼고 입력 이외 px값은 &#34;w-[숫자값px]&#34;</p>
                        <p>width 값이 없을 때는 &#34;w-auto&#34;로 설정됩니다</p>
                        <p className="mb-2">width 설정값은 테일윈드에 제공하는 클래스값으로 &#34;w-&#34;빼고 입력하면 됩니다</p>
                        <p>테일윈드에 제공하는 클래스 값이 없고 숫자값을 입력해야하는 경우</p>
                        <p><span className="font-semibold">w-[숫자px]</span> 대괄호안에 숫자를 입력한값으로 너비 px값으로 설정됩니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">테일윈드 제공클래스 : </div>
                    <div>
                        <p>
                            <span className="font-semibold">1~12,14,16부터 4의 배수로 96까지</span> / 문자열값은 <span className="font-semibold">auto (width:auto)</span>와 <span className="font-semibold">full (width:100%)</span><br/>
                            퍼센트값은 <span className="font-semibold">1/2(width:50%),1/3(width:33.3%),1/4(width: 25%;),1/5(width: 20%;),1/6(width: 16.7%;),1/12(width: 8.3%;)</span>
                        </p>
                    </div>
                </div>
                <div className="font-medium mb-4">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
                <div className="w-full border-t border-solid border-gray-300" />
            </div>
            <DocPage root={root}/>
        </>
    );
}