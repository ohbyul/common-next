'use client';

import type { ComponentProps, FC } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import type { Duration } from './ToastContext';
import { ToastContext } from './ToastContext';
import { ToastToggle } from './ToastToggle';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';

export interface FlowbiteToastTheme {
  root: {
    base: string;
    closed: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
}

export type toastType = 'success' | 'failure' | 'warning';

export interface ToastProps extends ComponentProps<'div'> {
  duration?: Duration;
  theme?: DeepPartial<FlowbiteToastTheme>;
  toastType?: toastType;
}

const durationClasses: Record<Duration, string> = {
  75: 'duration-75',
  100: 'duration-100',
  150: 'duration-150',
  200: 'duration-200',
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
};

const ToastComponent: FC<ToastProps> = ({
  children,
  className,
  duration = 300,
  theme: customTheme = {},
  toastType = '', // success-성공 / failure-실패 / warning- 경고 값 받아오기
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const theme = mergeDeep(getTheme().toast, customTheme);

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider value={{ theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}>
      <div
        data-testid="flowbite-toast"
        role="alert"
        className={twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className)}
        {...props}
      >
        <div className="w-full flex items-center gap-2">
          {/* 아이콘영역 */}
          {toastType === "success" &&
            <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-green-100 text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
          }
          {toastType === "failure" &&
            <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-red-100 text-red-500">
              <HiX className="h-5 w-5" />
            </div>
          }
          {toastType === "warning" &&
            <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-orange-100 text-orange-500">
              <HiExclamation className="h-5 w-5" />
            </div>
          }
          {/* 아이콘영역 */}

          {children}
        </div>
      </div>
    </ToastContext.Provider>
  );
};

ToastComponent.displayName = 'Toast';
ToastToggle.displayName = 'Toast.Toggle';

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle,
});
