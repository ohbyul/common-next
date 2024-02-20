'use client'
import {
    Dropdown,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
} from 'flowbite-react';
import React, { CSSProperties } from 'react';
export interface NavItem {
    name: string
    link: string
    children?: NavItem[]
}

import { usePathname } from 'next/navigation'
export default function Nav({ brand, navItems }: { brand: { img?: string, title: string }, navItems: NavItem[] }) {
    const pathname = usePathname()
    const active = 'text-primary-500'
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                {brand?.img && <img src={brand.img} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{brand.title}</span>
            </NavbarBrand>
            <NavbarCollapse>
                {navItems.map(navItem =>
                    <React.Fragment key={navItem.name}>
                        {navItem.children && navItem.children.length ?
                            <Dropdown
                                arrowIcon={true}
                                inline
                                label={navItem.name ?? ''}
                            >
                                {navItem.children.map(item =>
                                    <DropdownItem href={`/docs${item.link}`} key={item.name} className={item.link === pathname ? active : ''}>
                                        {item.name}
                                    </DropdownItem >
                                )}
                            </Dropdown>
                            :
                            <NavbarLink href={`/docs${navItem.link}`} key={navItem.name} active={navItem.link === pathname}>
                                {navItem.name}
                            </NavbarLink>
                        }
                    </React.Fragment>
                )}
            </NavbarCollapse>
        </Navbar>
    );
}
