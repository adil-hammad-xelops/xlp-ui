import type {FC, ReactNode} from "react";
import {useState} from "react";
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type PaginationState,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {Box, Button, Flex, Input, Table as ChakraTable, Text} from "@chakra-ui/react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

/** Custom SortIcon component to replace missing FiChevronsUpDown */
const SortIcon: FC<{ opacity?: number }> = ({opacity = 1}) => (
    <Box as="span" display="inline-flex" flexDirection="column" opacity={opacity} lineHeight="0">
        <FiChevronUp size={10} style={{marginBottom: '-3px'}}/>
        <FiChevronDown size={10} style={{marginTop: '-3px'}}/>
    </Box>
);

export interface XlpDataTableProps<TData> {
    /** The data to display */
    data: TData[];
    /** Column definitions */
    columns: ColumnDef<TData, unknown>[];
    /** Enable pagination */
    pagination?: boolean;
    /** Items per page */
    pageSize?: number;
    /** Enable sorting */
    sortable?: boolean;
    /** Enable global search/filter */
    searchable?: boolean;
    /** Search placeholder */
    searchPlaceholder?: string;
    /** The size of the table */
    size?: 'sm' | 'md' | 'lg';
    /** The variant of the table */
    variant?: 'line' | 'outline';
    /** Whether the table has striped rows */
    striped?: boolean;
    /** Whether rows are interactive/hoverable */
    interactive?: boolean;
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    /** Caption for the table */
    caption?: string;
    /** Empty state content */
    emptyState?: ReactNode;
    /** Color palette for pagination/sorting */
    colorPalette?: 'gray' | 'blue' | 'green' | 'purple' | 'teal';
}

/**
 * XlpDataTable - A powerful data table built with TanStack Table
 */
export const XlpDataTable = <TData extends object>({
                                                       data,
                                                       columns,
                                                       pagination = true,
                                                       pageSize = 10,
                                                       sortable = true,
                                                       searchable = false,
                                                       searchPlaceholder = "Search...",
                                                       size = 'md',
                                                       variant = 'line',
                                                       striped = false,
                                                       interactive = true,
                                                       borderRadius = 'md',
                                                       caption,
                                                       emptyState,
                                                       colorPalette = 'blue',
                                                   }: XlpDataTableProps<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [paginationState, setPaginationState] = useState<PaginationState>({
        pageIndex: 0,
        pageSize,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            pagination: paginationState,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPaginationState,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: sortable ? getSortedRowModel() : undefined,
        getFilteredRowModel: searchable ? getFilteredRowModel() : undefined,
        getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    });

    const pageCount = table.getPageCount();
    const currentPage = paginationState.pageIndex + 1;

    return (
        <Box>
            {searchable && (
                <Box mb={4}>
                    <Input
                        placeholder={searchPlaceholder}
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        maxW="300px"
                        size={size}
                        borderRadius={borderRadius}
                    />
                </Box>
            )}

            <Box
                borderRadius={borderRadius}
                overflow="hidden"
                borderWidth={variant === 'outline' ? '1px' : '0'}
                borderColor="border.default"
            >
                <ChakraTable.Root
                    size={size}
                    variant={variant}
                    striped={striped}
                    interactive={interactive}
                >
                    {caption && <ChakraTable.Caption>{caption}</ChakraTable.Caption>}

                    <ChakraTable.Header>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <ChakraTable.Row key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    const canSort = sortable && header.column.getCanSort();
                                    const sortDirection = header.column.getIsSorted();

                                    return (
                                        <ChakraTable.ColumnHeader
                                            key={header.id}
                                            onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                                            cursor={canSort ? 'pointer' : 'default'}
                                            userSelect={canSort ? 'none' : undefined}
                                            _hover={canSort ? {bg: 'bg.secondary'} : undefined}
                                        >
                                            <Flex align="center" gap={2}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {canSort && (
                                                    <Box color="text.tertiary">
                                                        {sortDirection === 'asc' ? (
                                                            <FiChevronUp/>
                                                        ) : sortDirection === 'desc' ? (
                                                            <FiChevronDown/>
                                                        ) : (
                                                            <SortIcon opacity={0.5}/>
                                                        )}
                                                    </Box>
                                                )}
                                            </Flex>
                                        </ChakraTable.ColumnHeader>
                                    );
                                })}
                            </ChakraTable.Row>
                        ))}
                    </ChakraTable.Header>

                    <ChakraTable.Body>
                        {table.getRowModel().rows.length === 0 ? (
                            <ChakraTable.Row>
                                <ChakraTable.Cell
                                    colSpan={columns.length}
                                    textAlign="center"
                                    py={8}
                                >
                                    {emptyState || (
                                        <Text color="text.tertiary">No data available</Text>
                                    )}
                                </ChakraTable.Cell>
                            </ChakraTable.Row>
                        ) : (
                            table.getRowModel().rows.map((row) => (
                                <ChakraTable.Row key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <ChakraTable.Cell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </ChakraTable.Cell>
                                    ))}
                                </ChakraTable.Row>
                            ))
                        )}
                    </ChakraTable.Body>
                </ChakraTable.Root>
            </Box>

            {pagination && pageCount > 1 && (
                <Flex
                    mt={4}
                    justify="space-between"
                    align="center"
                    flexWrap="wrap"
                    gap={4}
                >
                    <Text fontSize="sm" color="text.secondary">
                        Page {currentPage} of {pageCount}
                    </Text>

                    <Flex gap={2}>
                        <Button
                            size="sm"
                            variant="outline"
                            colorPalette={colorPalette}
                            borderRadius={borderRadius}
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            First
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            colorPalette={colorPalette}
                            borderRadius={borderRadius}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            colorPalette={colorPalette}
                            borderRadius={borderRadius}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            colorPalette={colorPalette}
                            borderRadius={borderRadius}
                            onClick={() => table.setPageIndex(pageCount - 1)}
                            disabled={!table.getCanNextPage()}
                        >
                            Last
                        </Button>
                    </Flex>
                </Flex>
            )}
        </Box>
    );
};

// Helper to create column definitions
export const createColumnHelper = <TData extends object>() => {
    return {
        accessor: <TValue, >(
            accessor: keyof TData | ((row: TData) => TValue),
            column: Partial<ColumnDef<TData, TValue>> & { header: string }
        ): ColumnDef<TData, TValue> => ({
            ...(typeof accessor === 'function'
                ? {accessorFn: accessor}
                : {accessorKey: accessor as string}),
            ...column,
        } as ColumnDef<TData, TValue>),

        display: (
            column: Partial<ColumnDef<TData, unknown>> & { id: string; header: string }
        ): ColumnDef<TData, unknown> => ({
            ...column,
        }),
    };
};

