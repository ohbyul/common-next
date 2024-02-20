'use client';

import type { FC } from 'react';
import { AccordionComponent, AccordionContent, AccordionPanel, AccordionTitle } from "@/components/Accordion/items";

interface AccodionProps<T> {
    data: T[];
    allOpen?: boolean;
}

interface AccodionData {
    title: string;
    content: any;
}


const Accordion: FC<AccodionProps<AccodionData>> = ({ data, allOpen }) => {
    return (
        <>
            <AccordionComponent allOpen={allOpen}>
                {data.map((item, idx) => (
                    <AccordionPanel key={idx}>
                        <AccordionTitle>{item.title}</AccordionTitle>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionPanel>
                ))}
            </AccordionComponent>
        </>
    );
};

export default Accordion;
