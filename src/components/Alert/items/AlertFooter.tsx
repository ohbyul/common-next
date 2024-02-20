'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { useModalContext } from './AlertContext';

interface FlowbiteAlertFooterTheme {
  base: string;
  popup: string;
}

interface AlertFooterProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteAlertFooterTheme>;
}

export const AlertFooter: FC<AlertFooterProps> = ({
  children,
  className,
  theme: customTheme = {},

  ...props
}) => {
  const { theme: rootTheme, popup } = useModalContext();

  const theme = mergeDeep(rootTheme.footer, customTheme);

  return (
    <div className={twMerge(theme.base, !popup && theme.popup, className,
      'border-0',
    )} {...props}>
      {children}
    </div>
  );
};
