import * as root from "@/examples/button";
import DocPage from "../../../../components/DocPage";

export default function ButtonDoc() {

    return (
        <>
            <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
                <h3 className='mt-8 mb-4'>버튼</h3>
                <div className='flex items-center gap-4 mb-4'>
                    <h5 className='flex-none font-bold'>태그</h5>
                    <div className="w-full border-t border-solid border-gray-300"></div>
                </div>

                <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
                    <div>
                        <span className="text-gray-400">&#60;</span>
                        <span className="text-pink-500 pr-1">Button</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">color</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-sky-300 px-1">색상</span>
                        <span className="text-gray-400">&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 색상설정</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-400">width</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-sky-300 px-1">&#34;32&#34; (string값으로 입력하되 &#34;w-&#34;빼고 입력) 이외 px값은 &#34;w-[숫자px]&#34;</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; width 설정</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-300">outline</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 테두리만 보이는 설정</span>
                    </div>
                    <div className="px-4">
                        <span className="text-amber-300">pill</span>
                        <span className="text-gray-400 pl-3">&#47;&#47; 배경색상이 들어간 설정</span>
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
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">pill : </div>
                    <div>
                        <p className="font-medium mb-1">ex) &#60;Button pill /&#62;</p>
                        <p>둥근 모서리를 가진 버튼을 사용하려면 태그안에 &#34;pil&#34; 선언하여 사용한다</p>
                        <p>기본 버튼은 각진 모서리가 나오는 버튼입니다</p>
                        <p>기본 색상이 없을경우 Theme추가 합니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">outline : </div>
                    <div>
                        <p className="font-medium">ex) &#60;Button outline /&#62;</p>
                        <p>배경이 없고 윤각선만 나오는 버튼을 사용하려면 &#34;outline&#34; 선언하여 사용합니다</p>
                        <p>기본 버튼은 배경이 채워진 버튼입니다</p>
                        <p>기본 색상이 없을경우 Theme추가 합니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">icon : </div>
                    <div>
                        <p className="font-medium">ex) &#60;Button&#62; &#60;아이콘이름&#62; &#60;/&#62;</p>
                        <p>텍스트 근처의 구성 요소 내부에 아이콘 사용할때는 &#34;icon&#34; 선언하여 사용합니다</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 mb-4'>
                    <div className="mb-2 font-medium">color : </div>
                    <div>
                        <p className="font-medium">ex) color= &#34;red&#34; | &#34;dark&#34; | &#34;purple&#34; | &#34;blue&#34; | &#34;cyan&#34; | &#34;green&#34; | &#34;yellow&#34;</p>
                        <p></p>
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