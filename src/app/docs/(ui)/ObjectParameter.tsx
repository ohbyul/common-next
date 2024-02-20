'use client';

import { Table } from 'flowbite-react';

export interface Parameter {
    parameter: string
    type: string
    required: 'Required' | 'Optional'
    description: string
}

export default function ObjectParameter({ parameters }: { parameters: Parameter[] }) {
    return (
        <div className="overflow-x-auto w-full">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>parameter</Table.HeadCell>
                    <Table.HeadCell>type</Table.HeadCell>
                    <Table.HeadCell>required</Table.HeadCell>
                    <Table.HeadCell>description</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {parameters.map((parameter: Parameter) =>
                        <Table.Row key={parameter.parameter} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {parameter.parameter}
                            </Table.Cell>
                            <Table.Cell>{parameter.type}</Table.Cell>
                            <Table.Cell>{parameter.required}</Table.Cell>
                            <Table.Cell>{parameter.description}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    );
}
