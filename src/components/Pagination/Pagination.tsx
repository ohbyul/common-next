"use client"

import type { ComponentProps, FC, ReactNode } from 'react';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import type { FlowbitePaginationButtonTheme, PaginationButtonProps } from './items/PaginationButton';
import { PaginationButton, PaginationNavigation } from './items/PaginationButton';

export interface FlowbitePaginationTheme {
    base: string;
    layout: FlowbitePaginationLayoutTheme;
    pages: FlowbitePaginationPagesTheme;
}

interface FlowbitePaginationLayoutTheme {
    table: {
        base: string;
        span: string;
    };
}

interface FlowbitePaginationPagesTheme {
    base: string;
    showIcon: string;
    previous: FlowbitePaginationNavigationTheme;
    next: FlowbitePaginationNavigationTheme;
    selector: FlowbitePaginationButtonTheme;
    fastprevious: FlowbitePaginationNavigationTheme;
    fastnext: FlowbitePaginationNavigationTheme;
}

interface FlowbitePaginationNavigationTheme {
    base: string;
    icon: string;
}

interface PaginationProps extends ComponentProps<'nav'> {
    currentPage: number;
    layout?: 'navigation' | 'pagination' | 'table';
    nextLabel?: string;
    onPageChange: (page: number) => void;
    previousLabel?: string;
    renderPaginationButton?: (props: PaginationButtonProps) => ReactNode;
    showIcons?: boolean;
    theme?: DeepPartial<FlowbitePaginationTheme>;
    totalPages: number;
    totalCount: number;
}

const range: (start: number, end: number) => number[] = (start, end) => {
    if (start >= end) {
        return [];
    }

    return [...Array(end - start + 1).keys()].map((key: number): number => key + start);
};

const PaginationComponent: FC<PaginationProps> = ({
    className,
    currentPage,
    layout = 'pagination',
    nextLabel = 'Next',
    onPageChange,
    previousLabel = 'Previous',
    renderPaginationButton = (props) => <PaginationButton {...props} />,
    showIcons: showIcon = false,
    theme: customTheme = {},
    totalPages,
    totalCount,
    ...props
}) => {
    const theme = mergeDeep(getTheme().pagination, customTheme);

    const lastPage = Math.min(Math.max(layout === 'pagination' ? currentPage + 2 : currentPage + 4, 5), totalPages);
    const firstPage = Math.max(1, lastPage - 4);

    const goToNextPage = (): void => {
        onPageChange(Math.min(currentPage + 5, totalPages));
    };
    const goToFastNextPage = (): void => {
        onPageChange(Math.min(currentPage + totalPages, totalPages));
    };
    const goToPreviousPage = (): void => {
        onPageChange(Math.max(currentPage - 5, 1));
    };
    const goToFastPreviousPage = (): void => {
        onPageChange(Math.max(currentPage - totalPages, 1));
    };

    return (
        <nav className={twMerge(theme.base, className)} {...props}>
            {layout === 'table' && (
                <div className={theme.layout.table.base + " text-center"}>
                    총 <span className={theme.layout.table.span}>{totalPages}</span> 페이지 / <span className={theme.layout.table.span}>{totalCount}</span>건
                </div>
            )}
            <ul className={theme.pages.base}>
                <li>
                    <PaginationNavigation
                        className={twMerge(theme.pages.fastprevious?.base, showIcon && theme.pages.showIcon)}
                        onClick={goToFastPreviousPage}
                        disabled={currentPage === 1}
                    >
                        {showIcon && <HiOutlineChevronDoubleLeft aria-hidden className={theme.pages.fastprevious?.icon} />}
                    </PaginationNavigation>
                </li>
                <li>
                    <PaginationNavigation
                        className={twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                    >
                        {showIcon && <HiOutlineChevronLeft aria-hidden className={theme.pages.previous.icon} />}
                    </PaginationNavigation>
                </li>
                {
                    range(firstPage, lastPage).map((page: number) => (
                        <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
                            {renderPaginationButton({
                                className: twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
                                active: page === currentPage,
                                onClick: () => onPageChange(page),
                                children: page,
                            })}
                        </li>
                    ))
                }
                <li>
                    <PaginationNavigation
                        className={twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon)}
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                    >
                        {showIcon && <HiOutlineChevronRight aria-hidden className={theme.pages.next.icon} />}
                    </PaginationNavigation>
                </li>
                <li>
                    <PaginationNavigation
                        className={twMerge(theme.pages.fastnext?.base, showIcon && theme.pages.showIcon)}
                        onClick={goToFastNextPage}
                        disabled={currentPage === totalPages}
                    >
                        {showIcon && <HiOutlineChevronDoubleRight aria-hidden className={theme.pages.fastnext?.icon} />}
                    </PaginationNavigation>
                </li>
            </ul>
        </nav>
    );
};

PaginationComponent.displayName = 'Pagination';

export const Pagination = Object.assign(PaginationComponent, {
    Button: PaginationButton,
});
