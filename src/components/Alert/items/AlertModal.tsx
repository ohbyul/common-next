'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import type { MutableRefObject } from 'react';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import { AlertBody } from './AlertBody';
import { AlertFooter } from './AlertFooter';
import { AlertContext } from './AlertContext';

import { HiOutlineX } from 'react-icons/hi';

interface FlowbiteAlertBodyTheme {
  base: string;
}

interface FlowbiteAlertFooterTheme {
  base: string;
}

interface FlowbiteAlertHeaderTheme {
  base: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}


export interface FlowbiteAlertTheme {
  root: FlowbiteAlertRootTheme;
  content: FlowbiteAlertContentTheme;
  body: FlowbiteAlertBodyTheme;
  header: FlowbiteAlertHeaderTheme;
  footer: FlowbiteAlertFooterTheme;
}

interface FlowbiteAlertRootTheme {
  base: string;
  show: FlowbiteBoolean;
  sizes: AlertSizes;
  positions: AlertPositions;
}

interface FlowbiteAlertContentTheme {
  base: string;
  inner: string;
}

interface AlertPositions extends FlowbitePositions {
  [key: string]: string;
}

interface AlertSizes extends Omit<FlowbiteSizes, 'xs'> {
  [key: string]: string;
}

interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  position?: keyof AlertPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof AlertSizes;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteAlertTheme>;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      dismissible = false,
      onClose,
      popup,
      position = 'center',
      root,
      show,
      size = 'md',
      theme: customTheme = {},
      initialFocus,
      ...props
    },
    theirRef,
  ) => {
    const [headerId, setHeaderId] = useState<string | undefined>(undefined);
    const theme = mergeDeep(getTheme().modal, customTheme);

    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose(),
    });

    const ref = useMergeRefs([context.refs.setFloating, theirRef]);

    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown', enabled: dismissible });
    const role = useRole(context);

    const { getFloatingProps } = useInteractions([click, dismiss, role]);

    if (!show) {
      return null;
    }

    return (
      <AlertContext.Provider value={{ theme, popup, onClose, setHeaderId }}>
        <FloatingPortal root={root}>
          <FloatingOverlay
            lockScroll
            data-testid="modal-overlay"
            className={twMerge(
              theme.root.base,
              theme.root.positions[position],
              show ? theme.root.show.on : theme.root.show.off,
              className,

            )}
            {...props}
          >
            <FloatingFocusManager context={context} initialFocus={initialFocus}>
              <div
                ref={ref}
                {...getFloatingProps(props)}
                aria-labelledby={headerId}
                className={twMerge(theme.content.base, theme.root.sizes[size])}
              >
                <div className={
                  twMerge(
                    theme.content.inner,
                    'border-l-4 border-solid border-secondary-400',
                  )}>
                  <div className='absolute flex justify-end w-full'>
                    <button
                      type="button"
                      className='flex justify-center items-center w-11 h-11'
                      aria-label="Close"
                      onClick={onClose}>
                      <HiOutlineX aria-hidden className={theme.header.close.icon} />
                    </button>
                  </div>
                  {children}
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </AlertContext.Provider>
    );
  },
);

AlertComponent.displayName = 'AlertModal';
AlertBody.displayName = 'AlertModal.Body';
AlertFooter.displayName = 'AlertModal.Footer';

export const AlertModal = Object.assign(AlertComponent, {
  Body: AlertBody,
  Footer: AlertFooter,
});
