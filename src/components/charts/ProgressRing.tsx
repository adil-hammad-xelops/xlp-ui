// ============================================
// XLP UI - Charts: Progress/Gauge Components
// ============================================

import {Box, Flex, Text, VStack} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpProgressRingProps {
    /** Progress value (0-100) */
    value: number;
    /** Size of the ring */
    size?: number;
    /** Thickness of the ring */
    thickness?: number;
    /** Color of the progress */
    color?: string;
    /** Color palette */
    colorPalette?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
    /** Background track color */
    trackColor?: string;
    /** Whether to show value in center */
    showValue?: boolean;
    /** Custom center content */
    centerContent?: ReactNode;
    /** Label below the ring */
    label?: string;
}

/**
 * XlpProgressRing - A circular progress indicator
 */
export const XlpProgressRing: FC<XlpProgressRingProps> = ({
                                                              value,
                                                              size = 120,
                                                              thickness = 10,
                                                              color,
                                                              colorPalette = 'blue',
                                                              trackColor,
                                                              showValue = true,
                                                              centerContent,
                                                              label,
                                                          }) => {
    const normalizedValue = Math.min(100, Math.max(0, value));
    const radius = (size - thickness) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (normalizedValue / 100) * circumference;

    const progressColor = color || `var(--chakra-colors-${colorPalette}-500)`;
    const bgColor = trackColor || 'var(--chakra-colors-bg-secondary)';

    return (
        <VStack gap={2}>
            <Box position="relative" w={`${size}px`} h={`${size}px`}>
                <svg width={size} height={size}>
                    {/* Background track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={bgColor}
                        strokeWidth={thickness}
                    />
                    {/* Progress arc */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={progressColor}
                        strokeWidth={thickness}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        style={{transition: 'stroke-dashoffset 0.5s ease'}}
                    />
                </svg>
                {(showValue || centerContent) && (
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center"
                    >
                        {centerContent || (
                            <Text fontSize="xl" fontWeight="bold">
                                {Math.round(normalizedValue)}%
                            </Text>
                        )}
                    </Box>
                )}
            </Box>
            {label && (
                <Text fontSize="sm" color="text.secondary">
                    {label}
                </Text>
            )}
        </VStack>
    );
};

// ============================================
// Progress Bar with Label
// ============================================

export interface XlpLabeledProgressProps {
    /** Progress value (0-100) */
    value: number;
    /** Label text */
    label: string;
    /** Whether to show percentage */
    showPercentage?: boolean;
    /** Color palette */
    colorPalette?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'full';
}

/**
 * XlpLabeledProgress - A progress bar with label
 */
export const XlpLabeledProgress: FC<XlpLabeledProgressProps> = ({
                                                                    value,
                                                                    label,
                                                                    showPercentage = true,
                                                                    colorPalette = 'blue',
                                                                    size = 'md',
                                                                    borderRadius = 'full',
                                                                }) => {
    const normalizedValue = Math.min(100, Math.max(0, value));

    const sizeStyles = {
        sm: {h: '6px', fontSize: 'xs'},
        md: {h: '8px', fontSize: 'sm'},
        lg: {h: '12px', fontSize: 'md'},
    };

    return (
        <Box w="100%">
            <Flex justify="space-between" mb={1}>
                <Text fontSize={sizeStyles[size].fontSize} fontWeight="medium">
                    {label}
                </Text>
                {showPercentage && (
                    <Text fontSize={sizeStyles[size].fontSize} color="text.secondary">
                        {Math.round(normalizedValue)}%
                    </Text>
                )}
            </Flex>
            <Box
                h={sizeStyles[size].h}
                bg="bg.secondary"
                borderRadius={borderRadius}
                overflow="hidden"
            >
                <Box
                    h="100%"
                    w={`${normalizedValue}%`}
                    bg={`${colorPalette}.500`}
                    borderRadius={borderRadius}
                    transition="width 0.5s ease"
                />
            </Box>
        </Box>
    );
};

// ============================================
// Multi-segment Progress
// ============================================

export interface ProgressSegment {
    value: number;
    color?: string;
    label?: string;
}

export interface XlpSegmentedProgressProps {
    /** Progress segments */
    segments: ProgressSegment[];
    /** Total value (if not 100) */
    total?: number;
    /** Height of the bar */
    height?: number;
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'full';
    /** Whether to show legend */
    showLegend?: boolean;
}

const segmentColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

/**
 * XlpSegmentedProgress - A multi-segment progress bar
 */
export const XlpSegmentedProgress: FC<XlpSegmentedProgressProps> = ({
                                                                        segments,
                                                                        total = 100,
                                                                        height = 8,
                                                                        borderRadius = 'full',
                                                                        showLegend = true,
                                                                    }) => {
    const totalValue = segments.reduce((sum, s) => sum + s.value, 0);

    return (
        <Box>
            <Box
                h={`${height}px`}
                bg="bg.secondary"
                borderRadius={borderRadius}
                overflow="hidden"
                display="flex"
            >
                {segments.map((segment, index) => (
                    <Box
                        key={index}
                        h="100%"
                        w={`${(segment.value / total) * 100}%`}
                        bg={segment.color || segmentColors[index % segmentColors.length]}
                        transition="width 0.5s ease"
                    />
                ))}
            </Box>
            {showLegend && (
                <Flex gap={4} mt={3} flexWrap="wrap">
                    {segments.map((segment, index) => (
                        <Flex key={index} align="center" gap={2}>
                            <Box
                                w="10px"
                                h="10px"
                                borderRadius="sm"
                                bg={segment.color || segmentColors[index % segmentColors.length]}
                            />
                            <Text fontSize="sm">
                                {segment.label || `Segment ${index + 1}`}
                            </Text>
                            <Text fontSize="sm" color="text.secondary">
                                ({((segment.value / totalValue) * 100).toFixed(1)}%)
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            )}
        </Box>
    );
};

