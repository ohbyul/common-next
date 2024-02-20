'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { AccordionPanelContext } from './AccordionPanelContext';
import { AccordionPanelProps } from '.';



export const AccordionPanel: FC<AccordionPanelProps> = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = useState(props.isOpen);

  const provider = alwaysOpen
    ? {
      ...props,
      isOpen,
      setOpen: () => setOpen(!isOpen),
    }
    : props;

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>;
};
