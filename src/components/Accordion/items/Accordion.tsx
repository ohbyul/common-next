'use client';

import type { ComponentProps, FC, ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';
import { getTheme } from 'flowbite-react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import { mergeDeep } from "@/components/helpers/merge-deep";

// [components]
import { AccordionContent } from './AccordionContent';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionProps } from '.';


const Accordion: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  allOpen = false,
  ...props
}) => {

  const allIndex = Array.isArray(children) ? children?.map((_, index) => index) : []
  const fristIndex = [0]

  const [isOpen, setOpen] = useState(allOpen ? allIndex : fristIndex);

  const funcSetOpen = (i: number) => {
    if (allOpen) {
      setOpen((prevOpen) =>
        (prevOpen.includes(i) ? prevOpen.filter((idx) => idx !== i) : [...prevOpen, i])
      );
    } else {
      setOpen(isOpen.includes(i) ? [] : [i])
    }
  }

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          flush,
          isOpen: isOpen.includes(i),
          setOpen: () => {
            funcSetOpen(i)
          },
        }),
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen],
  );

  const theme = mergeDeep(getTheme().accordion.root, customTheme);

  return (
    <div
      className={twMerge(theme.base, theme.flush[flush ? 'on' : 'off'], className)}
      data-testid="flowbite-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

Accordion.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const AccordionComponent = Object.assign(Accordion, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
