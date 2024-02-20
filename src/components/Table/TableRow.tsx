'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { useTableContext } from './items/TableContext';

export interface FlowbiteTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
  height: FlowbiteHeight;
}
interface FlowbiteHeight {
  [key: string]: string;
}
export interface TableRowProps extends ComponentProps<'tr'> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
  height?: keyof FlowbiteTableRowTheme['height'];
}

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  theme: customTheme = {},
  height = 'auto',
  ...props
}) => {
  const { theme: rootTheme, hoverable, striped } = useTableContext();
  const theme = mergeDeep(rootTheme.row, customTheme);

  const heightClass = theme.height && theme.height[height] ? `${theme.height[height]}` : `${height}`;

  return (
    <tr data-testid="table-row-element"
      className={twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className, heightClass)}
      {...props}
    >
      {children}
    </tr>
  );
};
