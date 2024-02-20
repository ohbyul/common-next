"use client"

import { DeepPartial } from '@reduxjs/toolkit';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteColors, getTheme } from 'flowbite-react';
import { Label } from "flowbite-react";
import { v4 as uuidv4 } from 'uuid';

export interface FlowbiteCheckboxTheme {
    root: FlowbiteCheckboxRootTheme;
}

interface FlowbiteCheckboxRootTheme {
    base: string;
    color?: FlowbiteColors;
    ring?: boolean;
}

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    theme?: DeepPartial<FlowbiteCheckboxTheme>;
    color?: keyof FlowbiteColors;
    ring?: boolean;
    label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, color = 'default', theme: customTheme = {}, ring = false, label = '', ...props }, ref) => {
        const theme = mergeDeep(getTheme().checkbox, customTheme);
        const isRing = ring ? '' : 'focus:ring-0'
        const themeColor = theme.root.color ? theme.root.color[color] : '';
        const uuid = props.id ? props.id : uuidv4();

        return (
            <>
                <div className='flex justify-center items-center gap-2 '>
                    <input ref={ref} type="checkbox"
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

Checkbox.displayName = 'Checkbox';


