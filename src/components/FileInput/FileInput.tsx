'use client'

import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, useState, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteTextInputColors, FlowbiteTextInputSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from 'flowbite-react/lib/esm/types';
import { FlowbiteFileInputTheme } from './items';
import { getByteSize } from '@/utiles/file';


interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  color?: keyof FlowbiteTextInputColors;
  sizing?: keyof FlowbiteTextInputSizes;
  theme?: DeepPartial<FlowbiteFileInputTheme>;
}
interface IFile {
  name: string;
  size: number;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, color = 'gray', sizing = 'md', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme);

    const [fileList, setFileList] = useState<IFile[]>([]);

    const onLoadFile = (e: ChangeEvent<HTMLInputElement>): void => {
      let files: File[] = Array.from(e.target.files as unknown as File[]);
      e.target.value = '';

      const maxFileCnt: number = 5;
      const attFileCnt: number = document.querySelectorAll('.underline').length;
      const remainFileCnt: number = maxFileCnt - attFileCnt;
      const curFileCnt: number = files.length;

      if (curFileCnt > remainFileCnt) {
        alert(`첨부파일은 최대 ${maxFileCnt}개 까지 첨부 가능합니다.`);
        return;
      }

      for (const fileArray of fileList) {
        files = files.filter(item => item.name !== fileArray.name);
      }

      setFileList((prevFileList) => [...prevFileList, ...files]);
    }
    return (
      <>
        <div className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              {...props}
              type="file"
              ref={ref}
              onChange={e => { onLoadFile(e) }}
            />
          </div>
        </div>
        {fileList?.length > 0 ?
          <div className="filelistbox">
            {Array.from(fileList)?.map((item, index) => {

              const name = item.name
              const size = getByteSize(item.size)
              return (
                <div key={index} className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-700">{name}</span>
                    <span className="text-sm font-normal text-gray-400">{size}</span>
                  </div>
                </div>
              )
            })}
          </div>
          : <></>
        }
      </>
    );
  },
);

FileInput.displayName = 'FileInput';
