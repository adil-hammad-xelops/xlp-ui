// ============================================
// XLP UI - Charts: Line Chart Component
// ============================================

import {Box, Flex, Text} from "@chakra-ui/react";
import type {FC} from "react";

export interface LineChartDataPoint {
    label: string;
    value: number;
}

export interface LineChartSeries {
    name: string;
    data: LineChartDataPoint[];
    color?: string;
}

export interface XlpLineChartProps {
    /** Chart series data */
    series: LineChartSeries[];
    /** Chart title */
    title?: string;
    /** Height of the chart */
    height?: number;
    /** Whether to show grid lines */
    showGrid?: boolean;
    /** Whether to show data points */
    showPoints?: boolean;
    /** Whether to fill area under line */
    filled?: boolean;
    /** Whether to smooth the line */
    smooth?: boolean;
    /** Whether to show legend */
    showLegend?: boolean;
    /** Color palette */
    colorPalette?: 'blue' | 'multi';
}

const defaultColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

/**
 * XlpLineChart - A line chart component
 */
export const XlpLineChart: FC<XlpLineChartProps> = ({
                                                        series,
                                                        title,
                                                        height = 300,
                                                        showGrid = true,
                                                        showPoints = true,
                                                        filled = false,
                                                        smooth = false,
                                                        showLegend = true,
                                                    }) => {
    const padding = {top: 20, right: 20, bottom: 40, left: 50};
    const chartWidth = 600;
    const chartHeight = height;

    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;

    // Get all values to determine scale
    const allValues = series.flatMap(s => s.data.map(d => d.value));
    const maxValue = Math.max(...allValues);
    const minValue = Math.min(0, Math.min(...allValues));

    // Get labels from first series
    const labels = series[0]?.data.map(d => d.label) || [];

    const getX = (index: number) => padding.left + (index / (labels.length - 1)) * innerWidth;
    const getY = (value: number) => padding.top + innerHeight - ((value - minValue) / (maxValue - minValue)) * innerHeight;

    const createPath = (data: LineChartDataPoint[], close = false) => {
        const points = data.map((d, i) => ({x: getX(i), y: getY(d.value)}));

        if (smooth && points.length > 2) {
            // Bezier curve smoothing
            let path = `M ${points[0].x} ${points[0].y}`;
            for (let i = 0; i < points.length - 1; i++) {
                const p0 = points[Math.max(0, i - 1)];
                const p1 = points[i];
                const p2 = points[i + 1];
                const p3 = points[Math.min(points.length - 1, i + 2)];

                const cp1x = p1.x + (p2.x - p0.x) / 6;
                const cp1y = p1.y + (p2.y - p0.y) / 6;
                const cp2x = p2.x - (p3.x - p1.x) / 6;
                const cp2y = p2.y - (p3.y - p1.y) / 6;

                path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
            }
            if (close) {
                path += ` L ${points[points.length - 1].x} ${padding.top + innerHeight}`;
                path += ` L ${points[0].x} ${padding.top + innerHeight} Z`;
            }
            return path;
        }

        let path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        if (close) {
            path += ` L ${points[points.length - 1].x} ${padding.top + innerHeight}`;
            path += ` L ${points[0].x} ${padding.top + innerHeight} Z`;
        }
        return path;
    };

    const gridLines = [];
    const yAxisLabels = [];
    const steps = 5;
    for (let i = 0; i <= steps; i++) {
        const value = minValue + ((maxValue - minValue) / steps) * i;
        const y = getY(value);
        gridLines.push(
            <line
                key={`grid-${i}`}
                x1={padding.left}
                y1={y}
                x2={chartWidth - padding.right}
                y2={y}
                stroke="currentColor"
                strokeOpacity={0.1}
            />
        );
        yAxisLabels.push(
            <text
                key={`label-${i}`}
                x={padding.left - 10}
                y={y}
                textAnchor="end"
                alignmentBaseline="middle"
                fontSize="12"
                fill="currentColor"
                opacity={0.6}
            >
                {Math.round(value)}
            </text>
        );
    }

    return (
        <Box>
            {title && (
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    {title}
                </Text>
            )}
            <Box overflowX="auto">
                <svg
                    width={chartWidth}
                    height={chartHeight}
                    style={{color: 'var(--chakra-colors-text-primary)'}}
                >
                    {/* Grid */}
                    {showGrid && gridLines}
                    {yAxisLabels}

                    {/* X-axis labels */}
                    {labels.map((label, i) => (
                        <text
                            key={`x-${i}`}
                            x={getX(i)}
                            y={chartHeight - padding.bottom + 20}
                            textAnchor="middle"
                            fontSize="12"
                            fill="currentColor"
                            opacity={0.6}
                        >
                            {label}
                        </text>
                    ))}

                    {/* Series */}
                    {series.map((s, seriesIndex) => {
                        const color = s.color || defaultColors[seriesIndex % defaultColors.length];
                        return (
                            <g key={seriesIndex}>
                                {/* Fill */}
                                {filled && (
                                    <path
                                        d={createPath(s.data, true)}
                                        fill={color}
                                        fillOpacity={0.1}
                                    />
                                )}
                                {/* Line */}
                                <path
                                    d={createPath(s.data)}
                                    fill="none"
                                    stroke={color}
                                    strokeWidth={2}
                                />
                                {/* Points */}
                                {showPoints && s.data.map((d, i) => (
                                    <circle
                                        key={i}
                                        cx={getX(i)}
                                        cy={getY(d.value)}
                                        r={4}
                                        fill={color}
                                    >
                                        <title>{`${s.name}: ${d.value}`}</title>
                                    </circle>
                                ))}
                            </g>
                        );
                    })}
                </svg>
            </Box>

            {/* Legend */}
            {showLegend && series.length > 1 && (
                <Flex gap={4} mt={4} justify="center" flexWrap="wrap">
                    {series.map((s, i) => (
                        <Flex key={i} align="center" gap={2}>
                            <Box
                                w="12px"
                                h="3px"
                                borderRadius="full"
                                bg={s.color || defaultColors[i % defaultColors.length]}
                            />
                            <Text fontSize="sm">{s.name}</Text>
                        </Flex>
                    ))}
                </Flex>
            )}
        </Box>
    );
};

