import type { ComponentProps, FC, ReactEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';

export interface FlowbitePaginationButtonTheme {
  base: string;
  active: string;
  disabled: string;
}

export interface PaginationButtonProps extends ComponentProps<'button'> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  theme?: DeepPartial<FlowbitePaginationButtonTheme>;
}

interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, 'active'> {
  disabled?: boolean;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);

  return (
    <button
      type="button"
      className={twMerge(active && theme.pages.selector.active, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

PaginationButton.displayName = 'Pagination.Button';

export const PaginationNavigation: FC<PaginationPrevButtonProps> = ({
  children,
  className,
  onClick,
  theme: customTheme = {},
  disabled = false,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);

  return (
    <button
      type="button"
      className={twMerge(disabled && theme.pages.selector.disabled, className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

PaginationNavigation.displayName = 'Pagination.Navigation';
