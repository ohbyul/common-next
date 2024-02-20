'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAccordionContext } from './AccordionPanelContext';
import { DeepPartial } from '@reduxjs/toolkit';
import { getTheme } from 'flowbite-react';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteAccordionComponentTheme } from '.';


interface AccordionContentProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const theme = mergeDeep(getTheme().accordion.content, customTheme);

  return (
    <div
      className={twMerge(theme.base, className)}
      data-testid="flowbite-accordion-content"
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
