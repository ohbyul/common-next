"use client"

import { DeepPartial } from 'flowbite-react/lib/esm/types';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { Button } from 'flowbite-react';
import { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from 'flowbite-react';
import type {
    FlowbiteBoolean,
    FlowbiteColors,
    FlowbiteSizes,
} from 'flowbite-react';

export interface FlowbiteButtonTheme {
    base: string;
    fullSized: string;
    disabled: string;
    label: string;
    color: FlowbiteColors;
    outline: FlowbiteButtonOutlineTheme;
    pill: FlowbiteBoolean;
    width: FlowbiteWidth;
}

interface FlowbiteButtonOutlineTheme extends FlowbiteBoolean {
    color: ButtonOutlineColors;
    pill: FlowbiteBoolean;
}
interface ButtonOutlineColors extends Pick<FlowbiteColors, 'gray'> {
    [key: string]: string;
}
interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'lg' | 'xl'> {
    [key: string]: string;
}
interface FlowbiteWidth {
    [key: string]: string;
}

export type ButtonProps<T extends ElementType = 'button'> = {
    pill?: boolean;
    color?: string;
    outline?: boolean;
    isProcessing?: boolean;
    ring?: boolean;
    // processingSpinner?: ReactNode,
    icon?: { direction: 'right' | 'left' | 'up' | 'down', Icon: any };
    size?: keyof ButtonSizes;
    children?: JSX.Element | string | ReactNode;
    theme?: DeepPartial<FlowbiteButtonTheme>;
    width?: keyof FlowbiteButtonTheme['width'];
} & ComponentPropsWithoutRef<T>;

const ButtonComponent = <T extends ElementType = 'button'>(
    {
        pill = false,
        color = 'default',
        icon,
        children,
        size,
        outline = false,
        isProcessing = false,
        className,
        theme: customTheme = {},
        width = 'auto',
        ring = false,
        ...props
    }: ButtonProps, ref: ForwardedRef<T>) => {

    const theme = mergeDeep(getTheme().button, customTheme);
    const widthClass = theme.width && theme.width[width] ? `${theme.width[width]}` : `${width}`;
    const isRing = ring ? '' : 'focus:ring-0'
    return (
        <>
            <Button
                pill={pill}
                outline={outline}
                color={color}
                isProcessing={isProcessing}
                className={twMerge(
                    theme.base,
                    className,
                    widthClass,
                    isRing
                )}
                {...props}
            >
                {icon?.direction === 'left' && <icon.Icon />}
                {children}
                {icon?.direction === 'right' && <icon.Icon />}
            </Button>
        </>
    );
}

export default ButtonComponent