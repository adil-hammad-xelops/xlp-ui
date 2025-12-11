// ============================================
// XLP UI - Charts: Line Chart Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpLineChart} from "./LineChart";
import {SimpleGrid} from "@chakra-ui/react";

const meta: Meta<typeof XlpLineChart> = {
    title: "Components/Visualization/LineChart",
    component: XlpLineChart,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        showGrid: {control: "boolean"},
        showPoints: {control: "boolean"},
        filled: {control: "boolean"},
        smooth: {control: "boolean"},
        showLegend: {control: "boolean"},
        height: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const singleSeriesData = [
    {
        data: [
            {label: "Jan", value: 120},
            {label: "Feb", value: 180},
            {label: "Mar", value: 150},
            {label: "Apr", value: 220},
            {label: "May", value: 190},
            {label: "Jun", value: 280},
        ], name: "Revenue", color: "#3B82F6"
    }
];

const multiSeriesData = [
    {
        name: "Revenue",
        color: "#3B82F6",
        data: [
            {label: "Jan", value: 120},
            {label: "Feb", value: 180},
            {label: "Mar", value: 150},
            {label: "Apr", value: 220},
            {label: "May", value: 190},
            {label: "Jun", value: 280},
        ]
    },
    {
        name: "Expenses",
        color: "#EF4444",
        data: [
            {label: "Jan", value: 80},
            {label: "Feb", value: 120},
            {label: "Mar", value: 100},
            {label: "Apr", value: 140},
            {label: "May", value: 130},
            {label: "Jun", value: 160},
        ]
    },
];

export const Default: Story = {
    args: {
        series: singleSeriesData,
        title: "Monthly Revenue",
    },
};

export const MultiSeries: Story = {
    args: {
        series: multiSeriesData,
        title: "Revenue vs Expenses",
    },
};

export const Filled: Story = {
    args: {
        series: singleSeriesData,
        title: "Monthly Revenue",
        filled: true,
    },
};

export const Smooth: Story = {
    args: {
        series: singleSeriesData,
        title: "Monthly Revenue (Smooth)",
        smooth: true,
        filled: true,
    },
};

export const WithoutPoints: Story = {
    args: {
        series: singleSeriesData,
        title: "Monthly Revenue",
        showPoints: false,
    },
};

export const WithoutGrid: Story = {
    args: {
        series: singleSeriesData,
        title: "Monthly Revenue",
        showGrid: false,
    },
};

export const Comparison: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2}} gap={8}>
            <XlpLineChart
                series={singleSeriesData}
                title="Standard"
                height={200}
            />
            <XlpLineChart
                series={singleSeriesData}
                title="Smooth"
                smooth
                height={200}
            />
            <XlpLineChart
                series={singleSeriesData}
                title="Filled"
                filled
                height={200}
            />
            <XlpLineChart
                series={singleSeriesData}
                title="Smooth + Filled"
                smooth
                filled
                height={200}
            />
        </SimpleGrid>
    ),
};

export const ThreeSeries: Story = {
    args: {
        series: [
            ...multiSeriesData,
            {
                name: "Profit",
                color: "#10B981",
                data: [
                    {label: "Jan", value: 40},
                    {label: "Feb", value: 60},
                    {label: "Mar", value: 50},
                    {label: "Apr", value: 80},
                    {label: "May", value: 60},
                    {label: "Jun", value: 120},
                ]
            },
        ],
        title: "Financial Overview",
    },
};

export const YearlyData: Story = {
    args: {
        series: [{
            name: "Users",
            color: "#8B5CF6",
            data: [
                {label: "2019", value: 1200},
                {label: "2020", value: 1800},
                {label: "2021", value: 2400},
                {label: "2022", value: 3200},
                {label: "2023", value: 4100},
                {label: "2024", value: 5500},
            ]
        }],
        title: "User Growth Over Years",
        smooth: true,
        filled: true,
        height: 350,
    },
};

