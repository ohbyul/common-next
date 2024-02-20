import * as root from "@/examples/table";
import dynamic from "next/dynamic";

export default function TableDoc() {
   const DocPage = dynamic(
      () => import('@/components/DocPage'),
      { ssr: false }
   )
   return (
      <>
         <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
            <h3 className='mt-8 mb-4'>테이블</h3>

            <div className='flex items-center gap-4 mb-4'>
               <h5 className='flex-none font-bold'>태그</h5>
               <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-col justify-center mb-8 p-4 justify-content bg-slate-800 rounded-lg text-white ">
               <div className="mb-2">
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500 pr-1">Table</span>
                  <span className="text-amber-400">striped</span>
                  <span className="text-gray-400 pr-3">&#62;</span>
                  <span className="text-gray-400">&#47;&#47; striped 테이블의 두 번째 행마다 배경을 번갈아 보여지지는 옵션입니다</span>
               </div>

               {/* ---- */}
               <div className="mb-2 px-4">
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500">TableHead</span>
                  <span className="text-gray-400">&#62;</span>
               </div>


               <div className="px-8">
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500 pr-1">TableRow</span>
                  <span className="text-amber-400">height</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-sky-300 px-1">&#34;32&#34; (string값으로 입력하되 &#34;h-&#34;빼고 입력) 이외 px값은 &#34;h-[숫자px]&#34;</span>
                  <span className="text-gray-400 pl-3">&#47;&#47; height 설정</span>
               </div>

               <div className="px-12">
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500">TableHeadCell</span>
               </div>
               <div className="px-16">
                  <span className="text-amber-400 pr-3">sortedStatus</span>
                  <span className="text-gray-400">&#47;&#47; 오름차준/내림차순 정렬 화살표 유무</span>
               </div>
               <div className="px-16">
                  <span className="text-amber-400">width</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-sky-300 px-1">&#34;32&#34; (string값으로 입력하되 &#34;w-&#34;빼고 입력) 이외 px값은 &#34;w-[숫자px]&#34;</span>
                  <span className="text-gray-400 pr-3">&#47;&#47; colgroup 역할을 하며 TableHeadCell 안에 선언합니다</span>
               </div>
               <div className="px-12">
                  <span className="text-gray-400 pr-2">&#62;</span>제목
               </div>
               <div className="px-12">
                  <span className="text-gray-400">&#60;/</span>
                  <span className="text-pink-500">TableHeadCell</span>
                  <span className="text-gray-400">&#62;</span>
               </div>
               <div className="mb-2 px-8">
                  <span className="text-gray-400">&#60;/</span>
                  <span className="text-pink-500">TableRow</span>
                  <span className="text-gray-400">&#62;</span>
               </div>
               <div className="mb-8 px-4">
                  <span className="text-gray-400">&#60;/</span>
                  <span className="text-pink-500">TableHead</span>
                  <span className="text-gray-400">&#62;</span>
               </div>


               {/* ---- */}
               <div className="px-4">
                  <span className="text-gray-400">&#60;</span><span className="text-pink-500">TableBody</span><span className="text-gray-400">&#62;</span>
               </div>
               <div className="px-8">
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500">TableRow</span>
                  <span className="text-gray-400">&#62;</span>
               </div>
               <div className="px-12">
                  <span className="text-gray-400">&#60;</span><span className="text-pink-500">TableCell</span><span className="text-gray-400">&#62;</span>
                  내용
                  <span className="text-gray-400">&#60;/</span><span className="text-pink-500">TableCell</span><span className="text-gray-400">&#62;</span>
               </div>
               <div className="px-8">
                  <span className="text-gray-400">&#60;/</span><span className="text-pink-500">TableRow</span><span className="text-gray-400">&#62;</span>
               </div>
               <div className="mb-2 px-4">
                  <span className="text-gray-400">&#60;/</span>
                  <span className="text-pink-500">TableBody</span>
                  <span className="text-gray-400">&#62;</span>
               </div>
               <div>
                  <span className="text-gray-400">&#60;/</span>
                  <span className="text-pink-500">Tabs</span>
                  <span className="text-gray-400">&#62;</span>
               </div>
            </div>

            <div className='flex items-center gap-4 mb-4'>
               <h5 className='flex-none font-bold'>속성</h5>
               <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='flex items-start gap-4 mb-4'>
               <div className="mb-2 font-medium">테일윈드 제공클래스 : </div>
               <div>
                  <p>
                     <span className="font-semibold">1~12,14,16부터 4의 배수로 96까지</span> / 문자열값은 <span className="font-semibold">auto (width:auto)</span>와 <span className="font-semibold">full (width:100%)</span><br />
                     퍼센트값은 <span className="font-semibold">1/2(width:50%),1/3(width:33.3%),1/4(width: 25%;),1/5(width: 20%;),1/6(width: 16.7%;),1/12(width: 8.3%;)</span><br />
                     그리고 높이 클래스는 <span className="font-semibold">1/12(width: 8.3%;)</span> 없음
                  </p>
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
               <div className="mb-2 font-medium">height : </div>
               <div>
                  <p className="font-semibold">ex) height=클래스 네이밍 값 &#34;h-&#34;빼고 입력 또는 &#34;h-[숫자값px]&#34;</p>
                  <p>height 값이 없을 때는 &#34;h-auto&#34;로 설정됩니다</p>
                  <p className="mb-2">height 설정값은 테일윈드에 제공하는 클래스값으로 &#34;h-&#34;빼고 입력하면 됩니다</p>
                  <p>테일윈드에 제공하는 클래스 값이 없고 숫자값을 입력해야하는 경우</p>
                  <p><span className="font-semibold">h-[숫자px]</span> 대괄호안에 숫자를 입력한값으로 너비 px값으로 설정됩니다</p>
               </div>
            </div>
            <div className='flex items-start gap-4 mb-4'>
               <div className="mb-2 font-medium">sortedStatus : </div>
               <div>
                  <p>TableHeadCell의 오름차준/내림차순 정렬 화살표 유무 옵션입니다</p>
                  <p>체크박스 또는 오름차순을 안쓸경우 사용합니다</p>
               </div>
            </div>
            <div className='flex items-start gap-4 mb-4'>
               <div className="mb-2 font-medium">hoverable : </div>
               <div>
                  <p>Table 행 위로 마우스 호버 효과가 보여지는 옵션입니다</p>
                  <p>안쓸경우 hoverable값의 false를 선언하면됩니다</p>
               </div>
            </div>
            <div className='flex items-start gap-4'>
               <div className="mb-2 font-medium">striped : </div>
               <div>
                  <p>테이블의 두 번째 행마다 배경을 번갈아 보여지지는 옵션입니다</p>
               </div>
            </div>

            <div className="font-medium mt-4">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
            <div className="font-medium mb-4">기본 속성(Attributes)인 title도 적용이 됩니다</div>
            <div className="w-full border-t border-solid border-gray-300" />
         </div>
         <DocPage root={root} />
      </>
   );
}