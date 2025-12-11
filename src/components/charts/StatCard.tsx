// ============================================
// XLP UI - Charts: Stat Card Component
// ============================================

import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";
import {FiMinus, FiTrendingDown, FiTrendingUp} from "react-icons/fi";

export interface XlpStatCardProps {
    /** The stat label */
    label: string;
    /** The stat value */
    value: string | number;
    /** Change percentage */
    change?: number;
    /** Change label (e.g., "vs last month") */
    changeLabel?: string;
    /** Icon to display */
    icon?: ReactNode;
    /** Color palette */
    colorPalette?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';
    /** Variant */
    variant?: 'solid' | 'outline' | 'subtle';
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Whether to show trend icon */
    showTrend?: boolean;
}

/**
 * XlpStatCard - A statistics card component
 */
export const XlpStatCard: FC<XlpStatCardProps> = ({
                                                      label,
                                                      value,
                                                      change,
                                                      changeLabel = "vs last period",
                                                      icon,
                                                      colorPalette = 'blue',
                                                      variant = 'outline',
                                                      borderRadius = 'lg',
                                                      showTrend = true,
                                                  }) => {
    const getTrendColor = () => {
        if (!change || change === 0) return 'text.secondary';
        return change > 0 ? 'green.500' : 'red.500';
    };

    const getTrendIcon = () => {
        if (!change || change === 0) return <FiMinus/>;
        return change > 0 ? <FiTrendingUp/> : <FiTrendingDown/>;
    };

    const variantStyles = {
        solid: {
            bg: `${colorPalette}.500`,
            color: 'white',
            border: 'none',
        },
        outline: {
            bg: 'bg.primary',
            border: '1px solid',
            borderColor: 'border.default',
        },
        subtle: {
            bg: `${colorPalette}.50`,
            _dark: {bg: `${colorPalette}.900`},
            border: 'none',
        },
    };

    return (
        <Box
            p={6}
            borderRadius={borderRadius}
            {...variantStyles[variant]}
        >
            <Flex justify="space-between" align="flex-start">
                <Box>
                    <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color={variant === 'solid' ? 'whiteAlpha.800' : 'text.secondary'}
                        mb={1}
                    >
                        {label}
                    </Text>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color={variant === 'solid' ? 'white' : 'text.primary'}
                    >
                        {value}
                    </Text>
                    {change !== undefined && (
                        <HStack
                            mt={2}
                            gap={1}
                            color={variant === 'solid' ? 'whiteAlpha.800' : getTrendColor()}
                        >
                            {showTrend && getTrendIcon()}
                            <Text fontSize="sm" fontWeight="medium">
                                {change > 0 ? '+' : ''}{change}%
                            </Text>
                            <Text
                                fontSize="sm"
                                color={variant === 'solid' ? 'whiteAlpha.600' : 'text.tertiary'}
                            >
                                {changeLabel}
                            </Text>
                        </HStack>
                    )}
                </Box>
                {icon && (
                    <Box
                        p={3}
                        borderRadius="lg"
                        bg={variant === 'solid' ? 'whiteAlpha.200' : `${colorPalette}.100`}
                        _dark={variant !== 'solid' ? {bg: `${colorPalette}.800`} : undefined}
                        color={variant === 'solid' ? 'white' : `${colorPalette}.500`}
                    >
                        {icon}
                    </Box>
                )}
            </Flex>
        </Box>
    );
};

// ============================================
// Mini Sparkline Component
// ============================================

export interface XlpSparklineProps {
    /** Data values */
    data: number[];
    /** Width of the sparkline */
    width?: number;
    /** Height of the sparkline */
    height?: number;
    /** Line color */
    color?: string;
    /** Whether to fill area */
    filled?: boolean;
}

/**
 * XlpSparkline - A mini sparkline chart
 */
export const XlpSparkline: FC<XlpSparklineProps> = ({
                                                        data,
                                                        width = 100,
                                                        height = 30,
                                                        color = '#3B82F6',
                                                        filled = false,
                                                    }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
    }).join(' ');

    const fillPath = `M 0,${height} L ${points} L ${width},${height} Z`;

    return (
        <svg width={width} height={height}>
            {filled && (
                <path
                    d={fillPath}
                    fill={color}
                    fillOpacity={0.1}
                />
            )}
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

