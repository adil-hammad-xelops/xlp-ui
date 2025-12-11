import {Box, Button, Flex, Text} from "@chakra-ui/react";
import type {FC} from "react";
import {FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight} from "react-icons/fi";

export interface XlpPaginationProps {
    /** Current page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Number of page buttons to show */
    siblingCount?: number;
    /** The size of pagination buttons */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'blue' | 'green' | 'red' | 'purple' | 'teal';
    /** Border radius of buttons */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Whether to show first/last buttons */
    showFirstLast?: boolean;
    /** Whether to show page info */
    showPageInfo?: boolean;
    /** Total items (for display) */
    totalItems?: number;
    /** Items per page (for display) */
    itemsPerPage?: number;
}

const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({length}, (_, idx) => idx + start);
};

/**
 * XlpPagination - A pagination component for navigating through pages
 */
export const XlpPagination: FC<XlpPaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          onPageChange,
                                                          siblingCount = 1,
                                                          size = 'md',
                                                          colorPalette = 'blue',
                                                          borderRadius = 'md',
                                                          showFirstLast = true,
                                                          showPageInfo = false,
                                                          totalItems,
                                                          itemsPerPage,
                                                      }) => {
    const generatePagination = (): (number | string)[] => {
        const totalPageNumbers = siblingCount * 2 + 5;

        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, '...', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPages - rightItemCount + 1, totalPages);
            return [1, '...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [1, '...', ...middleRange, '...', totalPages];
        }

        return range(1, totalPages);
    };

    const pages = generatePagination();

    const sizeStyles = {
        xs: {h: '24px', minW: '24px', fontSize: 'xs'},
        sm: {h: '32px', minW: '32px', fontSize: 'sm'},
        md: {h: '40px', minW: '40px', fontSize: 'md'},
        lg: {h: '48px', minW: '48px', fontSize: 'lg'},
    };

    const buttonStyle = sizeStyles[size];

    const startItem = totalItems && itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : null;
    const endItem = totalItems && itemsPerPage ? Math.min(currentPage * itemsPerPage, totalItems) : null;

    return (
        <Flex align="center" gap={2} wrap="wrap">
            {showPageInfo && totalItems && (
                <Text fontSize={buttonStyle.fontSize} color="text.secondary" mr={4}>
                    {startItem}-{endItem} of {totalItems}
                </Text>
            )}

            {showFirstLast && (
                <Button
                    variant="ghost"
                    colorPalette={colorPalette}
                    size={size}
                    borderRadius={borderRadius}
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First page"
                    p={1}
                >
                    <FiChevronsLeft/>
                </Button>
            )}

            <Button
                variant="ghost"
                colorPalette={colorPalette}
                size={size}
                borderRadius={borderRadius}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                p={1}
            >
                <FiChevronLeft/>
            </Button>

            <Flex gap={1}>
                {pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <Box
                                key={`dots-${index}`}
                                {...buttonStyle}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                ...
                            </Box>
                        );
                    }

                    const pageNumber = page as number;
                    const isActive = pageNumber === currentPage;

                    return (
                        <Button
                            key={pageNumber}
                            variant={isActive ? 'solid' : 'ghost'}
                            colorPalette={colorPalette}
                            size={size}
                            borderRadius={borderRadius}
                            onClick={() => onPageChange(pageNumber)}
                            aria-label={`Page ${pageNumber}`}
                            aria-current={isActive ? 'page' : undefined}
                            {...buttonStyle}
                        >
                            {pageNumber}
                        </Button>
                    );
                })}
            </Flex>

            <Button
                variant="ghost"
                colorPalette={colorPalette}
                size={size}
                borderRadius={borderRadius}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                p={1}
            >
                <FiChevronRight/>
            </Button>

            {showFirstLast && (
                <Button
                    variant="ghost"
                    colorPalette={colorPalette}
                    size={size}
                    borderRadius={borderRadius}
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last page"
                    p={1}
                >
                    <FiChevronsRight/>
                </Button>
            )}
        </Flex>
    );
};

