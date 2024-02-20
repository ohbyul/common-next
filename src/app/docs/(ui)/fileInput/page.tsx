import * as root from "@/examples/fileInput";
import DocPage from "../../../../components/DocPage";

export default function FileinputDoc() {

   return (
      <>
         <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
            <h3 className='mt-8 mb-4'>파일업로드</h3>
            <div className='flex items-center gap-4 mb-4'>
               <h5 className='flex-none font-bold'>태그</h5>
               <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-col justify-center mb-8 p-8 bg-slate-800 rounded-lg text-white ">
               <div>
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500 pr-1">FileInput</span>
                  <span className="text-amber-400">multiple</span>
                  <span className="text-gray-400">/&#62;</span>
               </div>
            </div>
            <div className='flex items-center gap-4 mb-4'>
               <h5 className='flex-none font-bold'>속성</h5>
               <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='flex items-start gap-4 mb-4'>
               <div className="mb-2 font-medium">multiple : </div>
               <div>
                  <p className="font-medium mb-1">ex) &#60;FileInput multiple /&#62;</p>
                  <p>다중파일 업로드 사용하려면 태그안에 &#34;multiple&#34; 선언하여 사용합니다</p>
               </div>
            </div>


            <div className='flex items-center gap-4 mb-4'>
               <h5 className='flex-none font-bold'>드래그드랍 태그</h5>
               <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-col justify-center mb-8 p-8 bg-slate-800 rounded-lg text-white ">
               <div>
                  <span className="text-gray-400">&#60;</span>
                  <span className="text-pink-500 pr-1">FileDragAndDrop</span>
                  <span className="text-gray-400">/&#62;</span>
               </div>
            </div>
            
            <div className="font-medium mb-4">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
            <div className="w-full border-t border-solid border-gray-300" />
         </div>
         
         <DocPage root={root} />
      </>
   );
}