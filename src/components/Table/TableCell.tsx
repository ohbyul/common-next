'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { useTableBodyContext } from './items/TableBodyContext';

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentProps<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: bodyTheme } = useTableBodyContext();
  const theme = mergeDeep(bodyTheme.cell, customTheme);

  return (
    <td className={twMerge(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
