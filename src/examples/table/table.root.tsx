'use client';

import { CodeData } from "@/components/helpers/examples/code-demo";

import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "@/components/Table";

const code = `
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "@components//Table";
import { Checkbox } from '@components//Checkbox/Checkbox';

function Component() {
    return (
        <>
            // 기본 예시
            <Table striped>
                <TableHead>
                    <TableRow>
                        <TableHeadCell width='1/12' rowSpan={2} sortedStatus><Checkbox /></TableHeadCell>
                        <TableHeadCell width='auto' rowSpan={2}>1단계</TableHeadCell>
                        <TableHeadCell width='1/4' rowSpan={2} colSpan={2} sortedStatus>1단계</TableHeadCell>
                        <TableHeadCell width='1/6' sortedStatus>1단계</TableHeadCell>
                    </TableRow>
                    <TableRow>
                        <TableHeadCell>2단계</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17">
                            Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17">
                            Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17">
                            Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}
`;

function Component() {
    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>기본 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <Table striped>
                <TableHead>
                    <TableRow>
                        <TableHeadCell width='1/12' rowSpan={2} sortedStatus><Checkbox /></TableHeadCell>
                        <TableHeadCell width='auto' rowSpan={2}>1단계</TableHeadCell>
                        <TableHeadCell width='1/4' rowSpan={2} colSpan={2} sortedStatus>1단계</TableHeadCell>
                        <TableHeadCell width='1/6' sortedStatus>1단계</TableHeadCell>
                    </TableRow>
                    <TableRow>
                        <TableHeadCell>2단계</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17">
                            Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>Laptop</TableCell>
                    </TableRow>
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17">
                            Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow height='12'>
                        <TableCell><Checkbox name="agree" /></TableCell>
                        <TableCell className="text-left" title="Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17">
                            Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17Apple MacBook Pro 17
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export const root: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
        // {
        //     fileName: 'server',
        //     language: 'tsx',
        //     code: codeRSC,
        // },
    ],
    githubSlug: 'table/table.root.tsx',
    component: <Component />,
};
