import {Skeleton as ChakraSkeleton, Stack} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpSkeletonProps {
    /** Height of the skeleton */
    height?: string | number;
    /** Width of the skeleton */
    width?: string | number;
    /** Border radius */
    borderRadius?: string;
    /** Whether the skeleton is loaded (will show children when true) */
    loading?: boolean;
    /** The variant of the skeleton */
    variant?: 'pulse' | 'shine' | 'none';
    /** Content to show when loaded */
    children?: ReactNode;
    /** Margin bottom */
    mb?: number | string;
}

/**
 * XlpSkeleton - A placeholder loading component
 */
export const XlpSkeleton: FC<XlpSkeletonProps> = ({
                                                      height = "20px",
                                                      width = "100%",
                                                      borderRadius = "md",
                                                      loading = true,
                                                      variant = 'pulse',
                                                      children,
                                                      mb,
                                                  }) => {
    return (
        <ChakraSkeleton
            height={height}
            width={width}
            borderRadius={borderRadius}
            loading={loading}
            variant={variant}
            marginBottom={mb}
        >
            {children}
        </ChakraSkeleton>
    );
};

export interface XlpSkeletonTextProps {
    /** Number of lines */
    noOfLines?: number;
    /** Gap between lines */
    gap?: string | number;
    /** Whether the skeleton is loaded */
    loading?: boolean;
}

/**
 * XlpSkeletonText - A text placeholder loading component
 */
export const XlpSkeletonText: FC<XlpSkeletonTextProps> = ({
                                                              noOfLines = 3,
                                                              gap = 2,
                                                              loading = true,
                                                          }) => {
    return (
        <Stack gap={gap}>
            {Array.from({length: noOfLines}).map((_, index) => (
                <ChakraSkeleton
                    key={index}
                    height="16px"
                    width={index === noOfLines - 1 ? "80%" : "100%"}
                    loading={loading}
                />
            ))}
        </Stack>
    );
};

export interface XlpSkeletonCircleProps {
    /** Size of the circle */
    size?: string | number;
    /** Whether the skeleton is loaded */
    loading?: boolean;
}

/**
 * XlpSkeletonCircle - A circular placeholder loading component
 */
export const XlpSkeletonCircle: FC<XlpSkeletonCircleProps> = ({
                                                                  size = "48px",
                                                                  loading = true,
                                                              }) => {
    return (
        <ChakraSkeleton
            height={size}
            width={size}
            borderRadius="full"
            loading={loading}
        />
    );
};

