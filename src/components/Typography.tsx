import {Heading as ChakraHeading, Link as ChakraLink, Text as ChakraText} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

// ============================================
// Base Typography Props
// ============================================
interface BaseTypographyProps {
    children: ReactNode;
    /** Text color */
    color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info' | string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** Whether text should be truncated */
    truncate?: boolean;
    /** Number of lines to clamp */
    lineClamp?: number;
    /** Font weight */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    /** Additional className */
    className?: string;
}

// ============================================
// Heading Component
// ============================================
export interface XlpHeadingProps extends BaseTypographyProps {
    /** Heading level */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const colorMap: Record<string, string> = {
    primary: 'text.primary',
    secondary: 'text.secondary',
    tertiary: 'text.tertiary',
    success: 'green.500',
    warning: 'yellow.500',
    error: 'red.500',
    info: 'blue.500',
};

/**
 * XlpHeading - A heading typography component
 */
export const XlpHeading: FC<XlpHeadingProps> = ({
                                                    children,
                                                    as = 'h2',
                                                    size = 'xl',
                                                    color = 'primary',
                                                    align,
                                                    truncate,
                                                    lineClamp,
                                                    weight = 'bold',
                                                    className,
                                                }) => {
    const textColor = colorMap[color] || color;

    return (
        <ChakraHeading
            as={as}
            size={size}
            color={textColor}
            textAlign={align}
            truncate={truncate}
            lineClamp={lineClamp}
            fontWeight={weight}
            className={className}
        >
            {children}
        </ChakraHeading>
    );
};

// ============================================
// Text Component
// ============================================
export interface XlpTextProps extends BaseTypographyProps {
    /** Text size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Text variant */
    variant?: 'body' | 'label' | 'caption' | 'overline';
    /** Whether text is muted */
    muted?: boolean;
}

/**
 * XlpText - A text typography component
 */
export const XlpText: FC<XlpTextProps> = ({
                                              children,
                                              size = 'md',
                                              color = 'primary',
                                              align,
                                              truncate,
                                              lineClamp,
                                              weight = 'normal',
                                              variant = 'body',
                                              muted = false,
                                              className,
                                          }) => {
    const textColor = muted ? 'text.tertiary' : (colorMap[color] || color);

    const variantStyles: Record<string, object> = {
        body: {},
        label: {fontWeight: 'medium', fontSize: 'sm'},
        caption: {fontSize: 'xs', color: 'text.secondary'},
        overline: {fontSize: 'xs', textTransform: 'uppercase', letterSpacing: 'wider', fontWeight: 'semibold'},
    };

    return (
        <ChakraText
            fontSize={size}
            color={textColor}
            textAlign={align}
            truncate={truncate}
            lineClamp={lineClamp}
            fontWeight={weight}
            className={className}
            {...variantStyles[variant]}
        >
            {children}
        </ChakraText>
    );
};

// ============================================
// Display Component (for large headings)
// ============================================
export interface XlpDisplayProps extends BaseTypographyProps {
    /** Display size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * XlpDisplay - Large display text for hero sections
 */
export const XlpDisplay: FC<XlpDisplayProps> = ({
                                                    children,
                                                    size = 'lg',
                                                    color = 'primary',
                                                    align,
                                                    weight = 'bold',
                                                    className,
                                                }) => {
    const textColor = colorMap[color] || color;

    const sizeMap = {
        sm: '4xl',
        md: '5xl',
        lg: '6xl',
        xl: '7xl',
    };

    return (
        <ChakraHeading
            as="h1"
            fontSize={sizeMap[size]}
            color={textColor}
            textAlign={align}
            fontWeight={weight}
            letterSpacing="tight"
            lineHeight="shorter"
            className={className}
        >
            {children}
        </ChakraHeading>
    );
};

// ============================================
// Code Component
// ============================================
export interface XlpCodeProps {
    children: ReactNode;
    /** Whether it's a code block */
    block?: boolean;
    /** The color palette */
    colorPalette?: 'gray' | 'blue' | 'green' | 'red' | 'purple';
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * XlpCode - Inline or block code component
 */
export const XlpCode: FC<XlpCodeProps> = ({
                                              children,
                                              block = false,
                                              colorPalette = 'gray',
                                              borderRadius = 'md',
                                          }) => {
    if (block) {
        return (
            <ChakraText
                as="pre"
                fontFamily="mono"
                fontSize="sm"
                p={4}
                bg={`${colorPalette}.100`}
                _dark={{bg: `${colorPalette}.900`}}
                borderRadius={borderRadius}
                overflowX="auto"
                whiteSpace="pre-wrap"
            >
                <code>{children}</code>
            </ChakraText>
        );
    }

    return (
        <ChakraText
            as="code"
            fontFamily="mono"
            fontSize="sm"
            px={1.5}
            py={0.5}
            bg={`${colorPalette}.100`}
            _dark={{bg: `${colorPalette}.900`}}
            borderRadius={borderRadius}
        >
            {children}
        </ChakraText>
    );
};

// ============================================
// Link Component
// ============================================
export interface XlpLinkProps {
    children: ReactNode;
    /** The URL */
    href?: string;
    /** Whether to open in new tab */
    external?: boolean;
    /** The color palette */
    colorPalette?: 'blue' | 'teal' | 'purple' | 'gray';
    /** Underline behavior */
    underline?: 'always' | 'hover' | 'none';
    /** Click handler */
    onClick?: () => void;
}

/**
 * XlpLink - A styled link component
 */
export const XlpLink: FC<XlpLinkProps> = ({
                                              children,
                                              href,
                                              external = false,
                                              colorPalette = 'blue',
                                              underline = 'hover',
                                              onClick,
                                          }) => {
    return (
        <ChakraLink
            href={href}
            onClick={onClick}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            color={`${colorPalette}.500`}
            textDecoration={underline === 'always' ? 'underline' : 'none'}
            _hover={{
                color: `${colorPalette}.600`,
                textDecoration: underline === 'hover' ? 'underline' : undefined,
            }}
            _dark={{
                color: `${colorPalette}.400`,
                _hover: {color: `${colorPalette}.300`}
            }}
        >
            {children}
        </ChakraLink>
    );
};

