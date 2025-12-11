import {Box} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

// ============================================
// Spacing Tokens
// ============================================
export const spacingTokens = {
    '0': '0',
    '0.5': '0.125rem',  // 2px
    '1': '0.25rem',     // 4px
    '1.5': '0.375rem',  // 6px
    '2': '0.5rem',      // 8px
    '2.5': '0.625rem',  // 10px
    '3': '0.75rem',     // 12px
    '3.5': '0.875rem',  // 14px
    '4': '1rem',        // 16px
    '5': '1.25rem',     // 20px
    '6': '1.5rem',      // 24px
    '7': '1.75rem',     // 28px
    '8': '2rem',        // 32px
    '9': '2.25rem',     // 36px
    '10': '2.5rem',     // 40px
    '12': '3rem',       // 48px
    '14': '3.5rem',     // 56px
    '16': '4rem',       // 64px
    '20': '5rem',       // 80px
    '24': '6rem',       // 96px
    '28': '7rem',       // 112px
    '32': '8rem',       // 128px
    '36': '9rem',       // 144px
    '40': '10rem',      // 160px
    '44': '11rem',      // 176px
    '48': '12rem',      // 192px
    '52': '13rem',      // 208px
    '56': '14rem',      // 224px
    '60': '15rem',      // 240px
    '64': '16rem',      // 256px
    '72': '18rem',      // 288px
    '80': '20rem',      // 320px
    '96': '24rem',      // 384px
} as const;

export type SpacingValue = keyof typeof spacingTokens | number | string;

// ============================================
// Spacer Component
// ============================================
export interface XlpSpacerProps {
    /** Size of the spacer */
    size?: SpacingValue;
    /** Direction of the spacer */
    axis?: 'horizontal' | 'vertical';
}

/**
 * XlpSpacer - A component that adds space between elements
 */
export const XlpSpacer: FC<XlpSpacerProps> = ({
                                                  size = '4',
                                                  axis = 'vertical',
                                              }) => {
    const dimension = axis === 'vertical' ? 'height' : 'width';
    const spacingValue = typeof size === 'number' ? `${size}px` : spacingTokens[size as keyof typeof spacingTokens] || size;

    return (
        <Box
            {...{[dimension]: spacingValue}}
            flexShrink={0}
            aria-hidden="true"
        />
    );
};

// ============================================
// Stack with Gap Component
// ============================================
export interface XlpStackProps {
    children: ReactNode;
    /** Gap between items */
    gap?: SpacingValue;
    /** Direction of the stack */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Alignment */
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    /** Justification */
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    /** Whether to wrap items */
    wrap?: boolean;
    /** Padding */
    padding?: SpacingValue;
    /** Margin */
    margin?: SpacingValue;
    /** Additional className */
    className?: string;
}

/**
 * XlpStack - A flexible stack component with configurable gap
 */
export const XlpStack: FC<XlpStackProps> = ({
                                                children,
                                                gap = '4',
                                                direction = 'column',
                                                align,
                                                justify,
                                                wrap = false,
                                                padding,
                                                margin,
                                                className,
                                            }) => {
    return (
        <Box
            display="flex"
            flexDirection={direction}
            gap={gap}
            alignItems={align}
            justifyContent={justify}
            flexWrap={wrap ? 'wrap' : 'nowrap'}
            p={padding}
            m={margin}
            className={className}
        >
            {children}
        </Box>
    );
};

// ============================================
// Container Component
// ============================================
export interface XlpContainerProps {
    children: ReactNode;
    /** Maximum width */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;
    /** Center the container */
    centerContent?: boolean;
    /** Horizontal padding */
    paddingX?: SpacingValue;
    /** Vertical padding */
    paddingY?: SpacingValue;
    /** Additional className */
    className?: string;
}

const maxWidthMap = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
};

/**
 * XlpContainer - A centered container with max width
 */
export const XlpContainer: FC<XlpContainerProps> = ({
                                                        children,
                                                        maxWidth = 'xl',
                                                        centerContent = false,
                                                        paddingX = '4',
                                                        paddingY,
                                                        className,
                                                    }) => {
    const maxW = maxWidthMap[maxWidth as keyof typeof maxWidthMap] || maxWidth;

    return (
        <Box
            maxW={maxW}
            mx="auto"
            px={paddingX}
            py={paddingY}
            display={centerContent ? 'flex' : undefined}
            flexDirection={centerContent ? 'column' : undefined}
            alignItems={centerContent ? 'center' : undefined}
            className={className}
        >
            {children}
        </Box>
    );
};

// ============================================
// Inset Component (for padding)
// ============================================
export interface XlpInsetProps {
    children: ReactNode;
    /** All sides padding */
    all?: SpacingValue;
    /** Horizontal padding */
    x?: SpacingValue;
    /** Vertical padding */
    y?: SpacingValue;
    /** Top padding */
    top?: SpacingValue;
    /** Right padding */
    right?: SpacingValue;
    /** Bottom padding */
    bottom?: SpacingValue;
    /** Left padding */
    left?: SpacingValue;
    /** Additional className */
    className?: string;
}

/**
 * XlpInset - A component for adding padding around content
 */
export const XlpInset: FC<XlpInsetProps> = ({
                                                children,
                                                all,
                                                x,
                                                y,
                                                top,
                                                right,
                                                bottom,
                                                left,
                                                className,
                                            }) => {
    return (
        <Box
            p={all}
            px={x}
            py={y}
            pt={top}
            pr={right}
            pb={bottom}
            pl={left}
            className={className}
        >
            {children}
        </Box>
    );
};

