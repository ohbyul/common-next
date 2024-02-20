'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react';

const usePagination = (totalItems: number, itemsPerPage: number) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get("page") ?? 1)

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const createQueryString = useCallback((name: string, value: string | number) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value.toString())

        router.push(pathname + '?' + params.toString())
        return params.toString()
    }, [searchParams])

    const nextPage = () => {
        createQueryString("page", Math.min(Number(currentPage) + 1, totalPages))
    };

    const prevPage = () => {
        createQueryString("page", Math.max(Number(currentPage) - 1, 1))
    };

    const goToPage = (page: number) => {
        const pageNumber = Math.max(1, Math.min(page, totalPages));
        createQueryString("page", pageNumber)
    };

    return {
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
    };
};

export default usePagination;
