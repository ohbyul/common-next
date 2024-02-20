"use client"

import { DeepPartial } from 'flowbite-react/lib/esm/types';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteColors, getTheme } from 'flowbite-react';
import { Label } from "flowbite-react";
import { v4 as uuidv4 } from 'uuid';

export interface FlowbiteRadioTheme {
    root: FlowbiteRadioRootTheme;
}

interface FlowbiteRadioRootTheme {
    base: string;
    color?: FlowbiteColors;
    ring?: boolean;
}

interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    theme?: DeepPartial<FlowbiteRadioTheme>;
    color?: keyof FlowbiteColors;
    ring?: boolean;
    label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({
        className,
        color = 'default',
        theme: customTheme = {},
        ring = false,
        label = '',
        ...props
    }, ref) => {
        const theme = mergeDeep(getTheme().radio, customTheme);
        const themeColor = theme.root.color ? theme.root.color[color] : '';
        const isRing = ring ? '' : 'focus:ring-0'
        const uuid = props.id ? props.id : uuidv4();

        return (
            <>
                <div className='flex items-center gap-2'>
                    <input ref={ref} type="radio"
                        id={uuid}
                        className={twMerge(
                            theme.root.base,
                            themeColor,
                            className,
                            isRing
                        )}
                        {...props}
                    />
                    {label && <Label htmlFor={uuid} className='text-base cursor-pointer'>{label}</Label>}
                </div>
            </>
        );
    },
);

Radio.displayName = 'Radio';
// export default Radio;