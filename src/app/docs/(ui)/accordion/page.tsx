import * as root from "@/examples/accordion";
import { Parameter } from "../ObjectParameter";
import DocPage from "../../../../components/DocPage";

export default function AccordionDoc() {

  return (
    <>
      <div className='mx-auto lg:px-12 max-w-2xl lg:max-w-7xl'>
        <h3 className='mt-8 mb-4'>아코디언</h3>
        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>태그</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>
        <div className="flex flex-col justify-center px-8 py-8 justify-content bg-slate-800 rounded-lg text-white ">
          <div>
            <span className="text-gray-400">&#60;</span>
            <span className="text-pink-500">Accordion</span>
            <span className="text-gray-400">&#62;</span>
          </div>
          <div className="px-4"><span className="text-gray-400">--반복--</span></div>
          <div className="px-4">
            <span className="text-gray-400">&#60;</span>
            <span className="text-pink-500">AccordionPanel</span>
            <span className="text-amber-400  pl-1">collapseAll</span>
            <span className="text-gray-400">&#62;</span>
            <span className="text-gray-400 pl-3">&#47;&#47; // collapseAll 아코디언 패널을 자동으로 축소 설정</span>
          </div>
          <div className="px-8">
            <span className="text-gray-400">&#60;</span>
            <span className="text-pink-500">AccordionTitle</span>
            <span className="text-gray-400">&#62;</span>
            제목제목제목제목제목제목
            <span className="text-gray-400">&#60;/</span>
            <span className="text-pink-500">AccordionTitle</span>
            <span className="text-gray-400">&#62;</span>
          </div>
          <div className="px-8">
            <span className="text-gray-400">&#60;</span>
            <span className="text-pink-500">AccordionContent</span>
            <span className="text-gray-400">&#62;</span>
            내용내용내용내용내용내용
            <span className="text-gray-400">&#60;/</span>
            <span className="text-pink-500">AccordionContent</span>
            <span className="text-gray-400">&#62;</span>
          </div>
          <div className="px-4">
            <span className="text-gray-400">&#60;/</span>
            <span className="text-pink-500">AccordionPanel</span>
            <span className="text-gray-400">&#62;</span>
          </div>
          <div className="px-4"><span className="text-gray-400">--반복--</span></div>
          <div>
            <span className="text-gray-400">&#60;/</span>
            <span className="text-pink-500">Accordion</span>
            <span className="text-gray-400">&#62;</span>
          </div>
        </div>
        <div className='flex items-start gap-4 my-4'>
          <div className="mb-2 font-medium">Accordion : </div>
          <div>
            <p>기본 Accordion 입니다</p>
            <p>전체 닫기를 할경우 Accordion 태그안에 <b>collapseAll</b> 선언합니다</p>
            <p>label 안쓸때는 기본 Checkbox만 적용됩니다</p>
          </div>
        </div>
        <div className='flex items-start gap-4 mb-4'>
          <div className="mb-2 font-medium">AccordionAllOpen : </div>
          <div>
            <p>AccordionAllOpen 전체 오픈을 한 Accordion 입니다</p>
            <p>Accordion 감싸는 태그를 AccordionAllOpen로 감싸줍니다</p>
          </div>
        </div>
      </div>
      <DocPage root={root} />
    </>
  );
}