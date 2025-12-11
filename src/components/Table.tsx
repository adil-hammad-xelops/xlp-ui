import {Table as ChakraTable} from "@chakra-ui/react";
import type {ReactElement, ReactNode} from "react";

export interface TableColumn<T> {
    /** The header label */
    header: ReactNode;
    /** The accessor key or render function */
    accessor: keyof T | ((row: T) => ReactNode);
    /** Whether the column is numeric (right-aligned) */
    isNumeric?: boolean;
}

export interface XlpTableProps<T> {
    /** The columns configuration */
    columns: TableColumn<T>[];
    /** The data rows */
    data: T[];
    /** The size of the table */
    size?: 'sm' | 'md' | 'lg';
    /** The variant of the table */
    variant?: 'line' | 'outline';
    /** Whether the table has striped rows */
    striped?: boolean;
    /** Whether to show column borders */
    showColumnBorder?: boolean;
    /** Whether the table has sticky header */
    stickyHeader?: boolean;
    /** Whether rows are interactive/hoverable */
    interactive?: boolean;
    /** Caption for the table */
    caption?: string;
}

/**
 * XlpTable - A data table component
 */
export const XlpTable = <T extends Record<string, unknown>>({
                                                                columns,
                                                                data,
                                                                size = 'md',
                                                                variant = 'line',
                                                                striped = false,
                                                                showColumnBorder = false,
                                                                stickyHeader = false,
                                                                interactive = false,
                                                                caption,
                                                            }: XlpTableProps<T>): ReactElement => {
    const getCellValue = (row: T, column: TableColumn<T>): ReactNode => {
        if (typeof column.accessor === 'function') {
            return column.accessor(row);
        }
        return row[column.accessor] as ReactNode;
    };

    return (
        <ChakraTable.Root
            size={size}
            variant={variant}
            striped={striped}
            showColumnBorder={showColumnBorder}
            stickyHeader={stickyHeader}
            interactive={interactive}
        >
            {caption && <ChakraTable.Caption>{caption}</ChakraTable.Caption>}
            <ChakraTable.Header>
                <ChakraTable.Row>
                    {columns.map((column, index) => (
                        <ChakraTable.ColumnHeader key={index} textAlign={column.isNumeric ? 'end' : 'start'}>
                            {column.header}
                        </ChakraTable.ColumnHeader>
                    ))}
                </ChakraTable.Row>
            </ChakraTable.Header>
            <ChakraTable.Body>
                {data.map((row, rowIndex) => (
                    <ChakraTable.Row key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <ChakraTable.Cell key={colIndex} textAlign={column.isNumeric ? 'end' : 'start'}>
                                {getCellValue(row, column)}
                            </ChakraTable.Cell>
                        ))}
                    </ChakraTable.Row>
                ))}
            </ChakraTable.Body>
        </ChakraTable.Root>
    );
};

