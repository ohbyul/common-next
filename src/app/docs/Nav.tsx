'use client'
import { Container } from "@/components/Container";
import Nav, { NavItem } from "@/components/examples/Nav";

export default function Navbar() {
    const brand = {
        title: 'URBAN DOCS',
        img: ''
    }
    const navItems: NavItem[] = [
        {
            name: 'home',
            link: '/form/input',
            children: []
        },
        {
            name: 'component',
            link: '',
            children: [
                { name: 'Input', link: '/form/input', },
                { name: 'Textarea', link: '/form/textarea', },
                { name: 'Checkbox', link: '/form/checkbox', },
                { name: 'Radio', link: '/form/radio', },
                { name: 'button', link: '/button', },
                { name: 'Table', link: '/table', },
                { name: 'SelectBox', link: '/dropdown', },
                { name: 'FileUpload', link: '/fileInput', },
                { name: 'Tab', link: '/tabs', },
                { name: 'Accordion', link: '/accordion', },
                { name: 'Modal', link: '/modal', },
                { name: 'Toast', link: '/toast', },
                { name: 'Pagination', link: '/pagination', },
                { name: 'Datepicker', link: '/datepicker', },
                { name: 'Timepicker', link: '/timepicker', },
                { name: 'Editor', link: '/editor', },
            ]
        },
    ]
    return (
        <Container>
            <Nav brand={brand} navItems={navItems} />
        </Container>
    );
}
