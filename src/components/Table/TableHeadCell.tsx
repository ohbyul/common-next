'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { useTableHeadContext } from './items/TableHeadContext';

import React, { useState } from 'react';
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

export interface FlowbiteTableHeadCellTheme {
  base: string;
  width: FlowbiteWidth;
}
interface FlowbiteWidth {
  [key: string]: string;
}
export interface TableHeadCellProps extends ComponentProps<'th'> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
  sortedStatus?: boolean;
  width?: keyof FlowbiteTableHeadCellTheme['width'];
}


export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  theme: customTheme = {},
  sortedStatus,
  width = 'auto',
  ...props
}) => {
  const { theme: headTheme } = useTableHeadContext();

  const theme = mergeDeep(headTheme.cell, customTheme);
  const [isToggleSort, setToggleSort] = useState(false);

  const toggleHandler = () => {
    setToggleSort(!isToggleSort); // 현재 상태의 반대값으로 토글
  };

  const widthClass = theme.width && theme.width[width] ? `${theme.width[width]}` : `${width}`;

  return (
    <th className={twMerge(theme.base, className, widthClass)} {...props} onClick={() => toggleHandler()}>
      <span className="flex justify-center items-center gap-1">
        {children}
        {!sortedStatus &&
          <>
            {/* {isToggleSort ? <FaArrowUpLong className='w-3 h-3' /> : <FaArrowDownLong  className='w-3 h-3'/>} */}
            {isToggleSort ? <TbArrowBigUpLineFilled className='w-3 h-3' /> : <TbArrowBigDownLineFilled className='w-3 h-3' />}
          </>
        }
      </span>
    </th>
  );
};
