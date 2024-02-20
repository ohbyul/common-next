'use client'

import type { ComponentProps, ReactNode, } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from 'flowbite-react/lib/esm/types';

export interface FlowbiteTextInputTheme {
    base: string;
    field: {
        base: string;
        input: {
            base: string;
            sizes: FlowbiteTextInputSizes;
            colors: FlowbiteTextInputColors;
            withAddon: FlowbiteBoolean;
        };
    };
    width: FlowbiteTextInputWidth;
}
interface FlowbiteTextInputWidth {
    [key: string]: string;
}
export interface FlowbiteTextInputColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface FlowbiteTextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}

interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
    addon?: ReactNode;
    theme?: DeepPartial<FlowbiteTextInputTheme>;
    type: "text" | "number" | "password";
    width?: keyof FlowbiteTextInputTheme['width'];
}

export const Text = forwardRef<HTMLInputElement, TextInputProps>(
    ({
        addon,
        className,
        theme: customTheme = {},
        type = "text",
        width = 'auto',
        ...props
    }, ref,
    ) => {
        const theme = mergeDeep(getTheme().textInput, customTheme);

        // theme.width가 존재하지 않거나 theme.width[width]가 존재하지 않을 경우 기본 width:auto로 전달
        const widthClass = theme.width && theme.width[width] ?
            // theme.width[width] 값을 문자열로 변환하여 widthClass에 할당
            //테일윈드에 제공하는 클래스 네이밍값 기준으로 테마에 들어가있음
            `${theme.width[width]}`
            : `${width}`; // theme.width[width]가 존재하지 않을 경우 width 변수를 문자열로 변환하여 widthClass에 할당

        return (
            <>
                <div className={twMerge(theme.base, className)}>
                    <div className={theme.field.base}>
                        <input
                            ref={ref}
                            type={type}
                            className={twMerge(
                                theme.field.input.base,
                                theme.field.input.withAddon[addon ? 'on' : 'off'],
                                widthClass,
                            )}
                            {...props}
                        />
                    </div>
                </div>
            </>
        );
    },
);

Text.displayName = 'Text';
