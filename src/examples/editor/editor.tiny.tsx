'use client'
import { CodeData } from "@/components/helpers/examples/code-demo";
import { useState } from "react";
import Editor from "@/components/Editor/Ckeditor5";

const code = `
'use client';
import Editor from "@components/editor/Tiny";
import { useState } from "react";

function Component() {
  return (
    <div>
      <Editor setContent={setConent} />
    </div>
  );
}
`;

const codeRSC = `
`;

function Component() {
  const [content, setConent] = useState('')
  return (
    <div>
      {/* {content} */}
      <Editor initialData="" setContent={setConent} />
    </div>
  );
}

export const tiny: CodeData = {
  title: 'Tiny',
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    // {
    //     fileName: 'server',
    //     language: 'tsx',
    //     code: codeRSC,
    // },
  ],
  githubSlug: 'button/button.root.tsx',
  component: <Component />,
};