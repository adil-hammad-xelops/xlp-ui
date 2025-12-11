// ============================================
// XLP UI - Charts: Bar Chart Component
// ============================================

import {Box, Flex, Text, VStack} from "@chakra-ui/react";
import type {FC} from "react";

export interface BarChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

export interface XlpBarChartProps {
    /** Chart data points */
    data: BarChartDataPoint[];
    /** Chart title */
    title?: string;
    /** Height of the chart */
    height?: number;
    /** Whether to show values on bars */
    showValues?: boolean;
    /** Whether to show labels */
    showLabels?: boolean;
    /** Bar color palette */
    colorPalette?: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'red';
    /** Bar border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /** Orientation of the chart */
    orientation?: 'vertical' | 'horizontal';
    /** Whether to animate on load */
    animated?: boolean;
    /** Gap between bars */
    gap?: number;
}

/**
 * XlpBarChart - A simple bar chart component
 */
export const XlpBarChart: FC<XlpBarChartProps> = ({
                                                      data,
                                                      title,
                                                      height = 300,
                                                      showValues = true,
                                                      showLabels = true,
                                                      colorPalette = 'blue',
                                                      borderRadius = 'md',
                                                      orientation = 'vertical',
                                                      animated = true,
                                                      gap = 2,
                                                  }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    const getBarColor = (index: number, customColor?: string) => {
        if (customColor) return customColor;
        const shades = [500, 400, 600, 300, 700];
        return `${colorPalette}.${shades[index % shades.length]}`;
    };

    if (orientation === 'horizontal') {
        return (
            <Box>
                {title && (
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        {title}
                    </Text>
                )}
                <VStack align="stretch" gap={gap}>
                    {data.map((item, index) => (
                        <Flex key={index} align="center" gap={3}>
                            {showLabels && (
                                <Text fontSize="sm" minW="80px" textAlign="right">
                                    {item.label}
                                </Text>
                            )}
                            <Box flex="1" h="32px" bg="bg.secondary" borderRadius={borderRadius} overflow="hidden">
                                <Box
                                    h="100%"
                                    w={`${(item.value / maxValue) * 100}%`}
                                    bg={getBarColor(index, item.color)}
                                    borderRadius={borderRadius}
                                    transition={animated ? "width 0.5s ease-out" : undefined}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    pr={2}
                                >
                                    {showValues && (
                                        <Text fontSize="xs" fontWeight="medium" color="white">
                                            {item.value}
                                        </Text>
                                    )}
                                </Box>
                            </Box>
                        </Flex>
                    ))}
                </VStack>
            </Box>
        );
    }

    return (
        <Box>
            {title && (
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    {title}
                </Text>
            )}
            <Box h={`${height}px`}>
                <Flex h="100%" align="flex-end" gap={gap}>
                    {data.map((item, index) => (
                        <VStack key={index} flex="1" h="100%" justify="flex-end" gap={1}>
                            {showValues && (
                                <Text fontSize="xs" fontWeight="medium">
                                    {item.value}
                                </Text>
                            )}
                            <Box
                                w="100%"
                                h={`${(item.value / maxValue) * 100}%`}
                                bg={getBarColor(index, item.color)}
                                borderRadius={borderRadius}
                                borderBottomRadius="none"
                                transition={animated ? "height 0.5s ease-out" : undefined}
                                minH="4px"
                            />
                            {showLabels && (
                                <Text fontSize="xs" color="text.secondary" textAlign="center">
                                    {item.label}
                                </Text>
                            )}
                        </VStack>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

