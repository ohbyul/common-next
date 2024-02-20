import { DeepPartial } from "@reduxjs/toolkit";
import type { ComponentProps, FC, ReactElement } from 'react';
import { FlowbiteBoolean } from "flowbite-react";

// [Props]
export interface AccordionProps extends ComponentProps<'div'> {
    alwaysOpen?: boolean;
    arrowIcon?: FC<ComponentProps<'svg'>>;
    children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
    flush?: boolean;
    collapseAll?: boolean;
    theme?: DeepPartial<FlowbiteAccordionTheme>;
    allOpen?: boolean;
}

export interface AccordionPanelProps extends AccordionProps {
    isOpen?: boolean;
    setOpen?: () => void;
}

// [Theme]
export interface FlowbiteAccordionTheme {
    root: FlowbiteAccordionRootTheme;
    content: FlowbiteAccordionComponentTheme;
    title: FlowbiteAccordionTitleTheme;
}

export interface FlowbiteAccordionComponentTheme {
    base: string;
}


interface FlowbiteAccordionRootTheme {
    base: string;
    flush: FlowbiteBoolean;
}

export interface FlowbiteAccordionTitleTheme {
    arrow: {
        base: string;
        open: FlowbiteBoolean;
    };
    base: string;
    flush: FlowbiteBoolean;
    heading: string;
    open: FlowbiteBoolean;
}