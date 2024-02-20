'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAccordionContext } from './AccordionPanelContext';
import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean, FlowbiteHeadingLevel, getTheme } from 'flowbite-react';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteAccordionTitleTheme } from '.';



interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  as?: FlowbiteHeadingLevel;
  theme?: DeepPartial<FlowbiteAccordionTitleTheme>;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = 'h6',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== 'undefined' && setOpen();

  const theme = mergeDeep(getTheme().accordion.title, customTheme);

  return (
    <button
      className={twMerge(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[isOpen ? 'on' : 'off'], className)}
      onClick={onClick}
      type="button"
      {...props}
    >
      <Heading className={theme.heading} data-testid="flowbite-accordion-heading">
        {children}
      </Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={twMerge(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off'])}
          data-testid="flowbite-accordion-arrow"
        />
      )}
    </button>
  );
};
