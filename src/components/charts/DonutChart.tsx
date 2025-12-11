// ============================================
// XLP UI - Charts: Donut/Pie Chart Component
// ============================================

import {Box, Flex, HStack, Text, VStack} from "@chakra-ui/react";
import type {FC} from "react";

export interface DonutChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

export interface XlpDonutChartProps {
    /** Chart data points */
    data: DonutChartDataPoint[];
    /** Chart title */
    title?: string;
    /** Size of the chart */
    size?: number;
    /** Thickness of the donut (0-1, where 0 is full pie) */
    thickness?: number;
    /** Whether to show legend */
    showLegend?: boolean;
    /** Legend position */
    legendPosition?: 'right' | 'bottom';
    /** Whether to show center label */
    showCenterLabel?: boolean;
    /** Center label text */
    centerLabel?: string;
    /** Center value text */
    centerValue?: string;
    /** Color palette */
    colorPalette?: 'blue' | 'green' | 'purple' | 'rainbow';
}

const defaultColors = [
    '#3B82F6', // blue
    '#10B981', // green
    '#8B5CF6', // purple
    '#F59E0B', // amber
    '#EF4444', // red
    '#06B6D4', // cyan
    '#EC4899', // pink
    '#84CC16', // lime
];

const paletteColors: Record<string, string[]> = {
    blue: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'],
    green: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
    purple: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'],
    rainbow: defaultColors,
};

/**
 * XlpDonutChart - A donut/pie chart component
 */
export const XlpDonutChart: FC<XlpDonutChartProps> = ({
                                                          data,
                                                          title,
                                                          size = 200,
                                                          thickness = 0.6,
                                                          showLegend = true,
                                                          legendPosition = 'right',
                                                          showCenterLabel = true,
                                                          centerLabel,
                                                          centerValue,
                                                          colorPalette = 'rainbow',
                                                      }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const colors = paletteColors[colorPalette] || defaultColors;

    // Calculate SVG paths for each segment
    const segments: { path: string; color: string; item: DonutChartDataPoint }[] = [];
    let currentAngle = -90; // Start from top

    data.forEach((item, index) => {
        const percentage = (item.value / total) * 100;
        const angle = (percentage / 100) * 360;
        const color = item.color || colors[index % colors.length];

        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;

        const largeArcFlag = angle > 180 ? 1 : 0;

        const outerRadius = size / 2;
        const innerRadius = outerRadius * (1 - thickness);
        const centerX = size / 2;
        const centerY = size / 2;

        const startOuterX = centerX + outerRadius * Math.cos((startAngle * Math.PI) / 180);
        const startOuterY = centerY + outerRadius * Math.sin((startAngle * Math.PI) / 180);
        const endOuterX = centerX + outerRadius * Math.cos((endAngle * Math.PI) / 180);
        const endOuterY = centerY + outerRadius * Math.sin((endAngle * Math.PI) / 180);

        const startInnerX = centerX + innerRadius * Math.cos((endAngle * Math.PI) / 180);
        const startInnerY = centerY + innerRadius * Math.sin((endAngle * Math.PI) / 180);
        const endInnerX = centerX + innerRadius * Math.cos((startAngle * Math.PI) / 180);
        const endInnerY = centerY + innerRadius * Math.sin((startAngle * Math.PI) / 180);

        const path = thickness > 0
            ? `M ${startOuterX} ${startOuterY}
         A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
         L ${startInnerX} ${startInnerY}
         A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${endInnerX} ${endInnerY}
         Z`
            : `M ${centerX} ${centerY}
         L ${startOuterX} ${startOuterY}
         A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
         Z`;

        segments.push({path, color, item});
        currentAngle = endAngle;
    });

    const Legend = () => (
        <VStack align="start" gap={2}>
            {data.map((item, index) => (
                <HStack key={index} gap={2}>
                    <Box
                        w="12px"
                        h="12px"
                        borderRadius="sm"
                        bg={item.color || colors[index % colors.length]}
                    />
                    <Text fontSize="sm">{item.label}</Text>
                    <Text fontSize="sm" color="text.secondary">
                        ({((item.value / total) * 100).toFixed(1)}%)
                    </Text>
                </HStack>
            ))}
        </VStack>
    );

    const ChartContent = () => (
        <Box position="relative" w={`${size}px`} h={`${size}px`}>
            <svg width={size} height={size}>
                {segments.map((segment, index) => (
                    <path
                        key={index}
                        d={segment.path}
                        fill={segment.color}
                        style={{transition: 'opacity 0.2s'}}
                        opacity={1}
                    >
                        <title>{`${segment.item.label}: ${segment.item.value}`}</title>
                    </path>
                ))}
            </svg>
            {showCenterLabel && thickness > 0 && (
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                >
                    {centerValue && (
                        <Text fontSize="2xl" fontWeight="bold" lineHeight="1">
                            {centerValue}
                        </Text>
                    )}
                    {centerLabel && (
                        <Text fontSize="sm" color="text.secondary">
                            {centerLabel}
                        </Text>
                    )}
                </Box>
            )}
        </Box>
    );

    return (
        <Box>
            {title && (
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    {title}
                </Text>
            )}
            {legendPosition === 'right' ? (
                <Flex gap={8} align="center" flexWrap="wrap">
                    <ChartContent/>
                    {showLegend && <Legend/>}
                </Flex>
            ) : (
                <VStack gap={4}>
                    <ChartContent/>
                    {showLegend && <Legend/>}
                </VStack>
            )}
        </Box>
    );
};

