// ============================================
// XLP UI - Charts: Donut Chart Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpDonutChart} from "./DonutChart";
import {SimpleGrid} from "@chakra-ui/react";

const meta: Meta<typeof XlpDonutChart> = {
    title: "Components/Visualization/DonutChart",
    component: XlpDonutChart,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        size: {control: "number"},
        thickness: {control: {type: "range", min: 0, max: 1, step: 0.1}},
        showLegend: {control: "boolean"},
        legendPosition: {
            control: "select",
            options: ["right", "bottom"],
        },
        showCenterLabel: {control: "boolean"},
        colorPalette: {
            control: "select",
            options: ["blue", "green", "purple", "rainbow"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
    {label: "Desktop", value: 45},
    {label: "Mobile", value: 35},
    {label: "Tablet", value: 15},
    {label: "Other", value: 5},
];

export const Default: Story = {
    args: {
        data: sampleData,
        title: "Device Usage",
        centerValue: "100%",
        centerLabel: "Total",
    },
};

export const PieChart: Story = {
    args: {
        data: sampleData,
        title: "Device Usage (Pie)",
        thickness: 0,
        showCenterLabel: false,
    },
};

export const ColorPalettes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2}} gap={8}>
            <XlpDonutChart data={sampleData} title="Rainbow" colorPalette="rainbow"/>
            <XlpDonutChart data={sampleData} title="Blue" colorPalette="blue"/>
            <XlpDonutChart data={sampleData} title="Green" colorPalette="green"/>
            <XlpDonutChart data={sampleData} title="Purple" colorPalette="purple"/>
        </SimpleGrid>
    ),
};

export const Sizes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={8}>
            <XlpDonutChart data={sampleData} title="Small" size={120}/>
            <XlpDonutChart data={sampleData} title="Medium" size={180}/>
            <XlpDonutChart data={sampleData} title="Large" size={240}/>
        </SimpleGrid>
    ),
};

export const Thickness: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={8}>
            <XlpDonutChart data={sampleData} title="Thin (0.3)" thickness={0.3}/>
            <XlpDonutChart data={sampleData} title="Medium (0.5)" thickness={0.5}/>
            <XlpDonutChart data={sampleData} title="Thick (0.8)" thickness={0.8}/>
        </SimpleGrid>
    ),
};

export const LegendBottom: Story = {
    args: {
        data: sampleData,
        title: "Device Usage",
        legendPosition: "bottom",
        centerValue: "100%",
        centerLabel: "Total",
    },
};

export const CustomColors: Story = {
    args: {
        data: [
            {label: "Completed", value: 65, color: "#10B981"},
            {label: "In Progress", value: 25, color: "#F59E0B"},
            {label: "Not Started", value: 10, color: "#EF4444"},
        ],
        title: "Project Status",
        centerValue: "65%",
        centerLabel: "Complete",
    },
};

export const BudgetAllocation: Story = {
    args: {
        data: [
            {label: "Marketing", value: 30000},
            {label: "Development", value: 45000},
            {label: "Operations", value: 25000},
            {label: "HR", value: 15000},
            {label: "R&D", value: 35000},
        ],
        title: "Budget Allocation",
        centerValue: "$150K",
        centerLabel: "Total Budget",
        colorPalette: "rainbow",
    },
};

