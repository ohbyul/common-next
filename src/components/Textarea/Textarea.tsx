'use client'

import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean, FlowbiteColors, HelperText, getTheme } from 'flowbite-react';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";

export interface FlowbiteTextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: FlowbiteBoolean;
  width: FlowbiteWidth;
  height: FlowbiteHeight;
}
interface FlowbiteWidth {
  [key: string]: string;
}
interface FlowbiteHeight {
  [key: string]: string;
}
interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  color?: keyof TextareaColors;
  shadow?: boolean;
  theme?: DeepPartial<FlowbiteTextareaTheme>;
  resize?: "none" | "resize" | "x-axis" | "y-axis";
  width?: keyof FlowbiteTextareaTheme['width'];
  height?: keyof FlowbiteTextareaTheme['height'];
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    color = 'gray',
    theme: customTheme = {},
    resize = 'resize',
    width = 'auto',
    height = 'auto',
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);

    const resizeObject = {
      "none": "resize-none",
      "resize": "resize",
      "x-axis": "resize-x",
      "y-axis": "resize-y"
    }

    const widthClass = theme.width && theme.width[width] ? `${theme.width[width]}` : `${width}`;
    const heightClass = theme.height && theme.height[height] ? `${theme.height[height]}` : `${height}`;

    return (
      <>
        <textarea
          ref={ref}
          className={twMerge(
            theme.base,
            theme.colors[color],
            className,
            resizeObject[resize],
            widthClass,
            heightClass,
          )}
          {...props}
        />
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
