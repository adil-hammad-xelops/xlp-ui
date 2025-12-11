// ============================================
// XLP UI - Charts: Radar Chart Component
// ============================================

import {Box, Flex, Text} from "@chakra-ui/react";
import type {FC} from "react";

export interface RadarChartDataPoint {
    label: string;
    value: number;
}

export interface RadarChartSeries {
    name: string;
    data: RadarChartDataPoint[];
    color?: string;
}

export interface XlpRadarChartProps {
    /** Chart series data */
    series: RadarChartSeries[];
    /** Chart title */
    title?: string;
    /** Size of the chart */
    size?: number;
    /** Maximum value for the scale */
    maxValue?: number;
    /** Number of levels/rings to show */
    levels?: number;
    /** Whether to show labels */
    showLabels?: boolean;
    /** Whether to show legend */
    showLegend?: boolean;
    /** Whether to fill the area */
    fill?: boolean;
    /** Fill opacity */
    fillOpacity?: number;
    /** Whether to show dots on data points */
    showDots?: boolean;
}

const defaultColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

/**
 * XlpRadarChart - A radar/spider chart component
 */
export const XlpRadarChart: FC<XlpRadarChartProps> = ({
                                                          series,
                                                          title,
                                                          size = 300,
                                                          maxValue,
                                                          levels = 5,
                                                          showLabels = true,
                                                          showLegend = true,
                                                          fill = true,
                                                          fillOpacity = 0.2,
                                                          showDots = true,
                                                      }) => {
    const center = size / 2;
    const radius = (size - 80) / 2; // Leave space for labels

    const categories = series[0]?.data.map(d => d.label) || [];
    const numCategories = categories.length;
    const angleSlice = (Math.PI * 2) / numCategories;

    // Calculate max value from data if not provided
    const calculatedMax = maxValue || Math.max(
        ...series.flatMap(s => s.data.map(d => d.value))
    ) * 1.1;

    // Create scale
    const rScale = (value: number) => (value / calculatedMax) * radius;

    // Calculate point coordinates
    const getPoint = (value: number, index: number) => {
        const angle = angleSlice * index - Math.PI / 2;
        return {
            x: center + rScale(value) * Math.cos(angle),
            y: center + rScale(value) * Math.sin(angle),
        };
    };

    // Create polygon path for a series
    const createPolygonPath = (data: RadarChartDataPoint[]) => {
        const points = data.map((d, i) => {
            const point = getPoint(d.value, i);
            return `${point.x},${point.y}`;
        });
        return `M ${points.join(' L ')} Z`;
    };

    // Create web/grid
    const webLevels = [];
    for (let level = 1; level <= levels; level++) {
        const levelRadius = (radius / levels) * level;
        const levelPoints = categories.map((_, i) => {
            const angle = angleSlice * i - Math.PI / 2;
            return {
                x: center + levelRadius * Math.cos(angle),
                y: center + levelRadius * Math.sin(angle),
            };
        });
        const path = `M ${levelPoints.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        webLevels.push(
            <path
                key={`level-${level}`}
                d={path}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth={1}
            />
        );
    }

    // Create axis lines
    const axisLines = categories.map((_, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const endX = center + radius * Math.cos(angle);
        const endY = center + radius * Math.sin(angle);
        return (
            <line
                key={`axis-${i}`}
                x1={center}
                y1={center}
                x2={endX}
                y2={endY}
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth={1}
            />
        );
    });

    // Create labels
    const labels = categories.map((label, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const labelRadius = radius + 20;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);

        // Adjust text anchor based on position
        let textAnchor: 'start' | 'middle' | 'end' = 'middle';
        if (Math.abs(Math.cos(angle)) > 0.1) {
            textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
        }

        return (
            <text
                key={`label-${i}`}
                x={x}
                y={y}
                textAnchor={textAnchor}
                alignmentBaseline="middle"
                fontSize="12"
                fill="currentColor"
                opacity={0.8}
            >
                {label}
            </text>
        );
    });

    return (
        <Box>
            {title && (
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    {title}
                </Text>
            )}
            <Flex direction="column" align="center">
                <svg
                    width={size}
                    height={size}
                    style={{color: 'var(--chakra-colors-text-primary)'}}
                >
                    {/* Web/Grid */}
                    {webLevels}
                    {axisLines}

                    {/* Series */}
                    {series.map((s, seriesIndex) => {
                        const color = s.color || defaultColors[seriesIndex % defaultColors.length];
                        return (
                            <g key={seriesIndex}>
                                {/* Area */}
                                <path
                                    d={createPolygonPath(s.data)}
                                    fill={fill ? color : 'none'}
                                    fillOpacity={fill ? fillOpacity : 0}
                                    stroke={color}
                                    strokeWidth={2}
                                />
                                {/* Dots */}
                                {showDots && s.data.map((d, i) => {
                                    const point = getPoint(d.value, i);
                                    return (
                                        <circle
                                            key={i}
                                            cx={point.x}
                                            cy={point.y}
                                            r={4}
                                            fill={color}
                                        >
                                            <title>{`${d.label}: ${d.value}`}</title>
                                        </circle>
                                    );
                                })}
                            </g>
                        );
                    })}

                    {/* Labels */}
                    {showLabels && labels}
                </svg>

                {/* Legend */}
                {showLegend && series.length > 1 && (
                    <Flex gap={4} mt={4} justify="center" flexWrap="wrap">
                        {series.map((s, i) => (
                            <Flex key={i} align="center" gap={2}>
                                <Box
                                    w="12px"
                                    h="12px"
                                    borderRadius="sm"
                                    bg={s.color || defaultColors[i % defaultColors.length]}
                                />
                                <Text fontSize="sm">{s.name}</Text>
                            </Flex>
                        ))}
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

