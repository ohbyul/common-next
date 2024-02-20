'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { useModalContext } from './AlertContext';
import { BsInfoCircleFill } from "react-icons/bs";

interface FlowbiteAlertBodyTheme {
  base: string;
  popup: string;
}

export interface AlertBodyProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteAlertBodyTheme>;
}

export const AlertBody: FC<AlertBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();

  const theme = mergeDeep(rootTheme.body, customTheme);

  return (
    <div className={twMerge(theme.base, popup && [theme.popup], className, 'px-6 py-2')} {...props}>
      <div className='flex justify-start items-center gap-4 pt-8'>
        <BsInfoCircleFill className='w-10 h-10 min-h-10 min-w-10 text-secondary-400' />
        {children}
      </div>
    </div>
  );
};
