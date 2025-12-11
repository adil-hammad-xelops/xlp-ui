// ============================================
// XLP UI - Charts: Area Chart Component
// ============================================

import {Box, Flex, Text} from "@chakra-ui/react";
import type {FC} from "react";

export interface AreaChartDataPoint {
    label: string;
    value: number;
}

export interface AreaChartSeries {
    name: string;
    data: AreaChartDataPoint[];
    color?: string;
}

export interface XlpAreaChartProps {
    /** Chart series data */
    series: AreaChartSeries[];
    /** Chart title */
    title?: string;
    /** Height of the chart */
    height?: number;
    /** Whether to show grid lines */
    showGrid?: boolean;
    /** Whether to show data points */
    showPoints?: boolean;
    /** Whether to stack areas */
    stacked?: boolean;
    /** Whether to smooth the line */
    smooth?: boolean;
    /** Whether to show legend */
    showLegend?: boolean;
    /** Fill opacity (0-1) */
    fillOpacity?: number;
    /** Whether to show gradient fill */
    gradient?: boolean;
}

const defaultColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

/**
 * XlpAreaChart - An area chart component
 */
export const XlpAreaChart: FC<XlpAreaChartProps> = ({
                                                        series,
                                                        title,
                                                        height = 300,
                                                        showGrid = true,
                                                        showPoints = false,
                                                        stacked = false,
                                                        smooth = true,
                                                        showLegend = true,
                                                        fillOpacity = 0.3,
                                                        gradient = true,
                                                    }) => {
    const padding = {top: 20, right: 20, bottom: 40, left: 50};
    const chartWidth = 600;
    const chartHeight = height;

    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;

    // Get all values to determine scale
    let allValues: number[];
    if (stacked) {
        const labels = series[0]?.data.map(d => d.label) || [];
        allValues = labels.map((_, i) =>
            series.reduce((sum, s) => sum + (s.data[i]?.value || 0), 0)
        );
    } else {
        allValues = series.flatMap(s => s.data.map(d => d.value));
    }

    const maxValue = Math.max(...allValues);
    const minValue = 0;

    const labels = series[0]?.data.map(d => d.label) || [];

    const getX = (index: number) => padding.left + (index / (labels.length - 1)) * innerWidth;
    const getY = (value: number) => padding.top + innerHeight - ((value - minValue) / (maxValue - minValue)) * innerHeight;

    const createPath = (data: AreaChartDataPoint[], offset = 0) => {
        const points = data.map((d, i) => ({
            x: getX(i),
            y: getY(d.value + offset)
        }));

        if (smooth && points.length > 2) {
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
            return path;
        }

        return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    };

    const createAreaPath = (data: AreaChartDataPoint[], baseOffset = 0) => {
        const linePath = createPath(data, baseOffset);
        const lastX = getX(data.length - 1);
        const firstX = getX(0);
        const baseY = getY(baseOffset);
        return `${linePath} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
    };

    // Grid lines
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

    // Calculate cumulative data for stacking
    const cumulativeData = stacked ? series.map((s, seriesIndex) => {
        return s.data.map((d, dataIndex) => {
            const previousSum = series
                .slice(0, seriesIndex)
                .reduce((sum, prevS) => sum + (prevS.data[dataIndex]?.value || 0), 0);
            return {...d, offset: previousSum};
        });
    }) : null;

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
                    <defs>
                        {series.map((s, i) => {
                            const color = s.color || defaultColors[i % defaultColors.length];
                            return gradient ? (
                                <linearGradient
                                    key={`gradient-${i}`}
                                    id={`area-gradient-${i}`}
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor={color} stopOpacity={fillOpacity}/>
                                    <stop offset="100%" stopColor={color} stopOpacity={0.05}/>
                                </linearGradient>
                            ) : null;
                        })}
                    </defs>

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

                    {/* Series (render in reverse for proper stacking) */}
                    {[...series].reverse().map((s, reversedIndex) => {
                        const seriesIndex = series.length - 1 - reversedIndex;
                        const color = s.color || defaultColors[seriesIndex % defaultColors.length];
                        const data = stacked && cumulativeData
                            ? cumulativeData[seriesIndex]
                            : s.data.map(d => ({...d, offset: 0}));

                        return (
                            <g key={seriesIndex}>
                                {/* Area fill */}
                                <path
                                    d={createAreaPath(
                                        data.map(d => ({label: d.label, value: d.value})),
                                        stacked ? (data[0]?.offset || 0) : 0
                                    )}
                                    fill={gradient ? `url(#area-gradient-${seriesIndex})` : color}
                                    fillOpacity={gradient ? 1 : fillOpacity}
                                />
                                {/* Line */}
                                <path
                                    d={createPath(
                                        data.map(d => ({label: d.label, value: d.value + (d.offset || 0)}))
                                    )}
                                    fill="none"
                                    stroke={color}
                                    strokeWidth={2}
                                />
                                {/* Points */}
                                {showPoints && data.map((d, i) => (
                                    <circle
                                        key={i}
                                        cx={getX(i)}
                                        cy={getY(d.value + (d.offset || 0))}
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
                                h="12px"
                                borderRadius="sm"
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

