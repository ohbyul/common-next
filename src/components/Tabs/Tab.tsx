'use client';

import type { FC, ReactNode } from 'react';
import { Tabs } from "@/components/Tabs/items";


interface TabProps<T> {
    data: T[];
}

const Tab: FC<TabProps<{
    title: string;
    content: ReactNode;
    disabled: boolean;
}>> = ({ data }) => {

    return (
        <Tabs>
            {data.map((tab, idx) => (
                <Tabs.Item key={idx} title={tab.title} disabled={tab.disabled} >
                    <div className='font-medium text-sm text-gray-600 '>
                        {tab.content}
                    </div>
                </Tabs.Item>
            ))}
        </Tabs>
    );
};

export default Tab;
