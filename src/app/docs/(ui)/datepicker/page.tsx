import * as root from "@/examples/datepicker";
import DocPage from "../../../../components/DocPage";

export default function DatepickerDoc() {

  return (
    <>
      <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
        <h3 className='mt-8 mb-4'>데이트 피커</h3>
        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>태그</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col justify-center mb-8 p-8 justify-content bg-slate-800 rounded-lg text-white ">
          <div>
            <span className="text-pink-500 pr-1">
              <span className="text-gray-400">&#60;</span>Datepicker
            </span>
            <span className="text-amber-400">width</span>
            <span className="text-gray-400">=</span>
            <span className="text-sky-300 px-1">&#34;full&#34; | &#123;number(숫자값)&#125;</span>
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
            <p className="font-medium">ex) width=&#34;full&#34; | &#123;number(숫자값)&#125;</p>
            <p>width 값이 없을때는 기본값인 &#34;full&#34;로 설정됩니다</p>
            <p><span className="font-medium">full:</span> 너비 100%로 설정 됩니다</p>
            <p><span className="font-medium">number(숫자값):</span> 해당 숫자를 입력한 값만큼 너비가 설정됩니다</p>
          </div>
        </div>
        <div className='flex items-start gap-4 mb-4'>
          <div className="mb-2 font-medium">defaultDate : </div>
          <div>
            <p className="font-medium">ex) defaultDate=&#123; new Date&#40;&#34;2024-01-11T12:30:00&#34;&#41; &#125;</p>
            <p>임의 날짜값을 입력할때 는 defaultDate 사용하여 날짜값을 입력하면 됩니다</p>
          </div>
        </div>
        <div className="font-medium mb-4">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
        <div className="w-full border-t border-solid border-gray-300" />
      </div>

      <DocPage root={root} />
    </>
  );
}