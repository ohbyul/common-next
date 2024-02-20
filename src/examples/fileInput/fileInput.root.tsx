'use client'
import { CodeData } from "@/components/helpers/examples/code-demo";

import { FileDragAndDrop, IFileTypes } from "@/components/FileInput/FileDragAndDrop";
import { useState } from "react";
import { FileInput } from "@/components/FileInput/FileInput";

const code = `
'use client'
import { FileInput, FileDragAndDrop } from "@components/FileInput";
import { IFileTypes } from "@components/FileInput/FileDragAndDrop";
import { useState } from "react";

function Component() {
    const [files, setFiles] = useState<IFileTypes[]>([]);
    
    return (
        <>
            <FileInput />  // 기본
            <FileInput multiple />  // 다중파일 예시
            <FileDragAndDrop /> // 파일 드롭 예시
        </>
    );
}
    
`;

function Component() {
    const [files, setFiles] = useState<IFileTypes[]>([]);

    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>다중파일 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-8'>
                <FileInput multiple />
            </div>


            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>파일 드롭 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <FileDragAndDrop />
            {/* 
            <form action={async (formData: FormData) => console.log(formData.get('FileDrag'))}>
                <FileDragAndDrop files={files} setFiles={setFiles} name="FileDrag" />
                <button type="submit">제출</button>
            </form>
             */}
        </>
    );
}

export const root: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'fileInput/fileInput.root.tsx',
    component: <Component />,
};
