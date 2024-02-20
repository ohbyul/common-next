'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import { TableBody, type FlowbiteTableBodyTheme } from './TableBody';
import { TableCell } from './TableCell';
import { TableContext } from './items/TableContext';
import { TableHead, type FlowbiteTableHeadTheme } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow, type FlowbiteTableRowTheme } from './TableRow';

export interface FlowbiteTableTheme {
  root: FlowbiteTableRootTheme;
  head: FlowbiteTableHeadTheme;
  row: FlowbiteTableRowTheme;
  body: FlowbiteTableBodyTheme;
}

export interface FlowbiteTableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}
// ComponentProps: 이 타입은 React 컴포넌트의 props를 나타냅니다.
// 일반적으로 TypeScript로 React를 개발할 때, 컴포넌트의 props에 대한 타입을 명시적으로 지정하는 경우가 많습니다.
// ComponentProps를 사용하면 특정 컴포넌트에 전달할 수 있는 props의 종류를 추론할 수 있습니다.
// 예를 들어, ComponentProps<MyComponent>는 MyComponent에 전달될 수 있는 props의 타입을 나타냅니다.
export interface TableProps extends ComponentProps<'table'> {
  striped?: boolean;
  hoverable?: boolean;
  theme?: DeepPartial<FlowbiteTableTheme>;
}

// FC는 Functional Component의 약자로, 함수 컴포넌트를 정의할 때 사용됩니다.
// 이것은 React 컴포넌트를 정의하는 함수의 타입을 나타냅니다.
// 보통 함수 컴포넌트를 만들 때 사용되며,
// 컴포넌트의 props를 명시적으로 타입으로 지정할 수 있습니다.
// 예를 들어, FC<Props>는 Props라는 타입의 props를 받는 함수 컴포넌트를 나타냅니다.
const TableComponent: FC<TableProps> = ({
  children,
  className,
  striped,
  hoverable = true,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().table, customTheme);

  return (
    <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>

      {/*
      에러명---테이블헤더영역에 th태그에 width 추가 했는데 상위태그 테이블에서 
      'head.cell.width'의 형식은 해당 형식 간에 호환되지 않습니다.
      'DeepPartial<FlowbiteWidth> | undefined' 형식은 'FlowbiteWidth' 형식에 할당할 수 없습니다.
      발생하여 하여
      theme을 명시적으로 FlowbiteTableTheme으로 캐스팅하여 오류를 방지하기위해
      'theme: theme as FlowbiteTableTheme' 으로수정하였습니다
      */}
      <TableContext.Provider value={{ theme: theme as FlowbiteTableTheme, striped, hoverable }}>
        <div className={twMerge(theme.root.shadow, className)}></div>
        <table className={twMerge(theme.root.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
