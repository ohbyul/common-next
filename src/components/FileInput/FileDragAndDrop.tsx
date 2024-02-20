'use client'

import React, {
    ChangeEvent,
    useCallback,
    useRef,
    useState,
    useEffect,
    ComponentProps,
    ReactNode,
    forwardRef
} from "react";
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteTextInputColors, FlowbiteTextInputSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from 'flowbite-react/lib/esm/types';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { FlowbiteFileInputTheme } from "./items";
import { getByteSize } from "@/utiles";


interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    color?: keyof FlowbiteTextInputColors;
    helperText?: ReactNode;
    sizing?: keyof FlowbiteTextInputSizes;
    theme?: DeepPartial<FlowbiteFileInputTheme>;
    files?: IFileTypes[]
    setFiles?: React.Dispatch<React.SetStateAction<IFileTypes[]>>
}

interface IFileTypes {
    id: number;
    object: File;
}

const FileDragAndDrop = forwardRef<HTMLInputElement, FileInputProps>(
    ({
        className,
        color = 'gray',
        helperText,
        sizing = 'md',
        theme: customTheme = {},
        files,
        setFiles,
        ...props
    }, ref) => {
        const [filesinfo, setFilesinfo] = useState<IFileTypes[]>([]);
        const theme = mergeDeep(getTheme().fileInput, customTheme);
        const [isDragging, setIsDragging] = useState<boolean>(false);

        const dragRef = useRef<HTMLLabelElement | null>(null);
        const fileId = useRef<number>(0);
        const onChangeFiles = useCallback(
            (e: ChangeEvent<HTMLInputElement> | any): void => {
                let selectFiles: File[] = [];
                let tempFiles: IFileTypes[] = filesinfo;

                if (e.type === "drop") {
                    selectFiles = e.dataTransfer.files;
                } else {
                    selectFiles = e.target.files;
                }
                for (const file of selectFiles) {
                    tempFiles = [
                        ...tempFiles,
                        {
                            id: fileId.current++,
                            object: file
                        }
                    ];
                }
                setFilesinfo(tempFiles)
            },
            [filesinfo]
        );

        const handleFilterFile = useCallback(
            (id: number): void => {
                setFilesinfo(filesinfo.filter((file: IFileTypes) => file.id !== id));
            },
            [filesinfo, setFilesinfo]
        );

        const handleDragIn = useCallback((e: DragEvent): void => {
            e.preventDefault();
            e.stopPropagation();
        }, []);

        const handleDragOut = useCallback((e: DragEvent): void => {
            e.preventDefault();
            e.stopPropagation();

            setIsDragging(false);
        }, []);

        const handleDragOver = useCallback((e: DragEvent): void => {
            e.preventDefault();
            e.stopPropagation();

            if (e.dataTransfer!.files) {
                setIsDragging(true);
            }
        }, []);

        const handleDrop = useCallback(
            (e: DragEvent): void => {
                e.preventDefault();
                e.stopPropagation();

                onChangeFiles(e);
                setIsDragging(false);
            },
            [onChangeFiles]
        );

        const initDragEvents = useCallback((): void => {
            if (dragRef.current !== null) {
                dragRef.current.addEventListener("dragenter", handleDragIn);
                dragRef.current.addEventListener("dragleave", handleDragOut);
                dragRef.current.addEventListener("dragover", handleDragOver);
                dragRef.current.addEventListener("drop", handleDrop);
            }
        }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

        const resetDragEvents = useCallback((): void => {
            if (dragRef.current !== null) {
                dragRef.current.removeEventListener("dragenter", handleDragIn);
                dragRef.current.removeEventListener("dragleave", handleDragOut);
                dragRef.current.removeEventListener("dragover", handleDragOver);
                dragRef.current.removeEventListener("drop", handleDrop);
            }
        }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

        useEffect(() => {
            initDragEvents();
            return () => resetDragEvents();
        }, [initDragEvents, resetDragEvents]);


        useEffect(() => {
            if (setFiles) setFiles(filesinfo)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [filesinfo])
        const id = props.id ? props.id : 'dragdrop'

        return (
            <>
                <div className="DragDrop flex items-center justify-center flex-wrap gap-2 w-full">
                    <input type="file" ref={ref}
                        multiple={true}
                        id={id}
                        className={twMerge(
                            theme.field.input.base,
                            theme.field.input.colors[color],
                            theme.field.input.sizes[sizing],
                            'hidden'
                        )}

                        onChange={onChangeFiles}
                        {...props}
                    />

                    <label htmlFor={id} ref={dragRef}
                        className={twMerge(
                            theme.field.input.label,
                            isDragging ? "border-blue-500 " : ""
                        )}
                    >
                        <div className="flex items-center justify-center gap-1 pb-3 pt-3">
                            <AiOutlineCloudUpload className="w-6 h-6 text-slate-800" />
                            <p className="text-md text-slate-800"><span className="pr-1 text-blue-500 underline underline-offset-4">내 PC</span>에서 첨부하거나, 파일을 끌어오세요.</p>
                        </div>
                    </label>
                </div>
                {filesinfo.length > 0 ?
                    <>
                        <div className="my-4 w-full border-t border-solid border-gray-300"></div>
                        <div className="DragDrop-Files">
                            {
                                filesinfo.map((file: IFileTypes) => {
                                    const { id, object: { name, size } } = file;
                                    return (
                                        <div key={id} className="mb-1 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-base font-medium text-gray-700">{name}</span>
                                                <span className="text-sm font-normal text-gray-400">{getByteSize(size)}</span>
                                            </div>
                                            <button onClick={() => handleFilterFile(id)} className="px-1 py-1 rounded-md border border-gray-300">
                                                <HiX />
                                            </button>
                                        </div>
                                    );
                                })
                            }
                        </div>


                    </>
                    : ''
                }
            </>
        );
    },
)
FileDragAndDrop.displayName = 'FileDragAndDrop';
export { FileDragAndDrop, type IFileTypes };