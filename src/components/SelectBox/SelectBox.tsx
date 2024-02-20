'use client';

import type { ExtendedRefs } from '@floating-ui/react';
import { FloatingFocusManager, FloatingList, useListNavigation, useTypeahead } from '@floating-ui/react';
import type {
   ComponentProps,
   Dispatch,
   FC,
   HTMLProps,
   MutableRefObject,
   ReactElement,
   ReactNode,
   RefCallback,
   SetStateAction,
} from 'react';
import { cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { useBaseFLoating, useFloatingInteractions } from '../helpers/use-floating';
import type { FloatingProps, FlowbiteFloatingTheme } from './items/Floating';

import { mergeDeep } from "@/components/helpers/merge-deep";
import { Button, ButtonProps, getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import { buttonTheme } from '@styles/theme/dropdown.button.theme'
import { DropdownContext, DropdownDivider, DropdownHeader, DropdownItem, FlowbiteDropdownDividerTheme, FlowbiteDropdownHeaderTheme, FlowbiteDropdownItemTheme } from './items';


export interface FlowbiteDropdownFloatingTheme extends FlowbiteFloatingTheme, FlowbiteDropdownDividerTheme, FlowbiteDropdownHeaderTheme {
   item: FlowbiteDropdownItemTheme;
}

export interface FlowbiteDropdownTheme {
   arrowIcon: string;
   content: string;
   floating: FlowbiteDropdownFloatingTheme;
   inlineWrapper: string;
   width?: FlowbiteWidth;
}

interface FlowbiteWidth {
   [key: string]: string;
}
export interface SelectBoxProps extends Pick<FloatingProps, 'placement' | 'trigger'>, Omit<ButtonProps, 'theme'> {
   arrowIcon?: boolean;
   dismissOnClick?: boolean;
   floatingArrow?: boolean;
   inline?: boolean;
   label: ReactNode;
   theme?: DeepPartial<FlowbiteDropdownTheme>;
   renderTrigger?: (theme: FlowbiteDropdownTheme) => ReactElement;
   'data-testid'?: string;
   ring?: boolean;
   width?: keyof FlowbiteDropdownTheme['width'] | string;
}

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
   top: HiOutlineChevronUp,
   right: HiOutlineChevronRight,
   bottom: HiOutlineChevronDown,
   left: HiOutlineChevronLeft,
};

interface TriggerProps extends Omit<ButtonProps, 'theme'> {
   refs: ExtendedRefs<HTMLElement>;
   inline?: boolean;
   theme: FlowbiteDropdownTheme;
   ring?: boolean;
   setButtonWidth?: Dispatch<SetStateAction<number | undefined>>;
   getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
   renderTrigger?: (theme: FlowbiteDropdownTheme) => ReactElement;
}

const Trigger = ({
   refs,
   children,
   theme,
   disabled,
   setButtonWidth,
   getReferenceProps,
   renderTrigger,
   ...ButtonProps
}: TriggerProps) => {
   const ref = refs.reference as MutableRefObject<HTMLElement>;
   const a11yProps = getReferenceProps();

   useEffect(() => {
      if (ref.current) {
         setButtonWidth?.(ref.current.clientWidth);
      }
   }, [ref, setButtonWidth]);

   if (renderTrigger) {
      const triggerElement = renderTrigger(theme);
      return cloneElement(triggerElement, { ref: refs.setReference, disabled, ...a11yProps, ...triggerElement.props });
   }

   return (
      <Button
         {...ButtonProps}
         type="button"
         ref={refs.setReference as RefCallback<'button'>}
         theme={buttonTheme}
         disabled={disabled}
         {...a11yProps}
      >
         {children}
      </Button>
   );
};

const SelectBoxComponent: FC<SelectBoxProps> = ({
   children,
   className,
   dismissOnClick = true,
   theme: customTheme = {},
   ring = false,
   renderTrigger,
   width = 'auto',
   ...props
}) => {

   const [open, setOpen] = useState(false);
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);
   const elementsRef = useRef<Array<HTMLElement | null>>([]);
   const labelsRef = useRef<Array<string | null>>([]);

   const theme = mergeDeep(getTheme().dropdown, customTheme);
   const theirProps = props as Omit<SelectBoxProps, 'theme'>;
   const dataTestId = props['data-testid'] || 'flowbite-dropdown-target';
   const {
      placement = props.inline ? 'bottom-start' : 'bottom',
      trigger = 'click',
      label,
      inline,
      arrowIcon = true,
      ...ButtonProps
   } = theirProps;

   const handleSelect = useCallback((index: number | null) => {
      setSelectedIndex(index);
      setOpen(false);
   }, []);
   const handleTypeaheadMatch = useCallback(
      (index: number | null) => {
         if (open) {
            setActiveIndex(index);
         } else {
            handleSelect(index);
         }
      },
      [open, handleSelect],
   );
   const { context, floatingStyles, refs } = useBaseFLoating<HTMLButtonElement>({
      open,
      setOpen,
      placement,
   });
   const listNav = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex,
   });
   const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      activeIndex,
      selectedIndex,
      onMatch: handleTypeaheadMatch,
   });
   const { getReferenceProps, getFloatingProps, getItemProps } = useFloatingInteractions({
      context,
      role: 'menu',
      trigger,
      interactions: [listNav, typeahead],
   });

   const Icon = useMemo(() => {
      const [p] = placement.split('-');
      return icons[p] ?? HiOutlineChevronDown;
   }, [placement]);
   const isRing = ring ? '' : 'focus:ring-0'

   const widthClass = theme.width && theme.width[width] ? `${theme.width[width]}` : `${width}`;
   return (
      <DropdownContext.Provider value={{ theme, activeIndex, dismissOnClick, getItemProps, handleSelect }}>
         <Trigger
            {...ButtonProps}
            refs={refs}
            inline={inline}
            theme={theme}
            data-testid={dataTestId}
            className={twMerge(
               theme.floating.target,
               ButtonProps.className,
               isRing,
               widthClass,
            )}
            setButtonWidth={setButtonWidth}
            getReferenceProps={getReferenceProps}
            renderTrigger={renderTrigger}
         >
            {label}
            {arrowIcon && <Icon className={`${theme.arrowIcon} ${open && "rotate-180"} 'transition-all duration-200 ease'`} />}
         </Trigger>
         {open && (
            <FloatingFocusManager context={context} modal={false}>
               <div
                  ref={refs.setFloating}
                  style={{ ...floatingStyles, minWidth: buttonWidth }}
                  data-testid="flowbite-dropdown"
                  aria-expanded={open}
                  {...getFloatingProps({
                     className: twMerge(
                        theme.floating.base,
                        theme.floating.animation,
                        'duration-100',
                        !open && theme.floating.hidden,
                        theme.floating.style.auto,
                        className,
                     ),
                  })}
               >
                  <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                     <ul className={`${theme.content} overflow-y-auto max-h-80 `} tabIndex={-1}>
                        {children}
                     </ul>
                  </FloatingList>
               </div>
            </FloatingFocusManager>
         )}
      </DropdownContext.Provider>
   );
};

SelectBoxComponent.displayName = 'SelectBox';
DropdownHeader.displayName = 'SelectBox.Header';
DropdownDivider.displayName = 'SelectBox.Divider';

export const SelectBox = Object.assign(SelectBoxComponent, {
   Item: DropdownItem,
   Header: DropdownHeader,
   Divider: DropdownDivider,
});
