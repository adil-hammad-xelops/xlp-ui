// ============================================
// XLP UI - Charts: Area Chart Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpAreaChart} from "./AreaChart";
import {SimpleGrid} from "@chakra-ui/react";

const meta: Meta<typeof XlpAreaChart> = {
    title: "Components/Visualization/AreaChart",
    component: XlpAreaChart,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        showGrid: {control: "boolean"},
        showPoints: {control: "boolean"},
        stacked: {control: "boolean"},
        smooth: {control: "boolean"},
        showLegend: {control: "boolean"},
        gradient: {control: "boolean"},
        fillOpacity: {control: {type: "range", min: 0, max: 1, step: 0.1}},
        height: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const singleSeriesData = [{
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
}];

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
            {label: "Feb", value: 100},
            {label: "Mar", value: 90},
            {label: "Apr", value: 130},
            {label: "May", value: 110},
            {label: "Jun", value: 150},
        ]
    },
];

const stackedData = [
    {
        name: "Desktop",
        color: "#3B82F6",
        data: [
            {label: "Jan", value: 50},
            {label: "Feb", value: 60},
            {label: "Mar", value: 55},
            {label: "Apr", value: 70},
            {label: "May", value: 65},
            {label: "Jun", value: 80},
        ]
    },
    {
        name: "Mobile",
        color: "#10B981",
        data: [
            {label: "Jan", value: 30},
            {label: "Feb", value: 45},
            {label: "Mar", value: 40},
            {label: "Apr", value: 55},
            {label: "May", value: 50},
            {label: "Jun", value: 70},
        ]
    },
    {
        name: "Tablet",
        color: "#8B5CF6",
        data: [
            {label: "Jan", value: 20},
            {label: "Feb", value: 25},
            {label: "Mar", value: 22},
            {label: "Apr", value: 30},
            {label: "May", value: 28},
            {label: "Jun", value: 35},
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

export const Stacked: Story = {
    args: {
        series: stackedData,
        title: "Traffic by Device (Stacked)",
        stacked: true,
    },
};

export const WithPoints: Story = {
    args: {
        series: singleSeriesData,
        title: "With Data Points",
        showPoints: true,
    },
};

export const NoGradient: Story = {
    args: {
        series: singleSeriesData,
        title: "Solid Fill (No Gradient)",
        gradient: false,
        fillOpacity: 0.4,
    },
};

export const NotSmooth: Story = {
    args: {
        series: singleSeriesData,
        title: "Linear (Not Smooth)",
        smooth: false,
    },
};

export const Comparison: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2}} gap={8}>
            <XlpAreaChart
                series={singleSeriesData}
                title="Smooth with Gradient"
                height={200}
            />
            <XlpAreaChart
                series={singleSeriesData}
                title="Linear with Solid Fill"
                smooth={false}
                gradient={false}
                fillOpacity={0.3}
                height={200}
            />
            <XlpAreaChart
                series={multiSeriesData}
                title="Multi-Series"
                height={200}
            />
            <XlpAreaChart
                series={stackedData}
                title="Stacked"
                stacked
                height={200}
            />
        </SimpleGrid>
    ),
};

export const HighFillOpacity: Story = {
    args: {
        series: singleSeriesData,
        title: "High Fill Opacity",
        fillOpacity: 0.6,
        gradient: false,
    },
};

export const YearlyGrowth: Story = {
    args: {
        series: [{
            name: "Users",
            color: "#8B5CF6",
            data: [
                {label: "2019", value: 1200},
                {label: "2020", value: 2100},
                {label: "2021", value: 3500},
                {label: "2022", value: 5200},
                {label: "2023", value: 7800},
                {label: "2024", value: 11000},
            ]
        }],
        title: "User Growth Over Years",
        showPoints: true,
        height: 350,
    },
};

