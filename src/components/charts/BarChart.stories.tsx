// ============================================
// XLP UI - Charts: Bar Chart Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpBarChart} from "./BarChart";
import {Box, SimpleGrid} from "@chakra-ui/react";

const meta: Meta<typeof XlpBarChart> = {
    title: "Components/Visualization/BarChart",
    component: XlpBarChart,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: "select",
            options: ["vertical", "horizontal"],
        },
        colorPalette: {
            control: "select",
            options: ["blue", "green", "purple", "orange", "teal", "red"],
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "full"],
        },
        showValues: {control: "boolean"},
        showLabels: {control: "boolean"},
        animated: {control: "boolean"},
        height: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
    {label: "Jan", value: 120},
    {label: "Feb", value: 180},
    {label: "Mar", value: 150},
    {label: "Apr", value: 220},
    {label: "May", value: 190},
    {label: "Jun", value: 280},
];

export const Default: Story = {
    args: {
        data: sampleData,
        title: "Monthly Sales",
    },
};

export const Horizontal: Story = {
    args: {
        data: sampleData,
        title: "Monthly Sales",
        orientation: "horizontal",
    },
};

export const ColorPalettes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2}} gap={8}>
            <XlpBarChart data={sampleData} title="Blue" colorPalette="blue" height={200}/>
            <XlpBarChart data={sampleData} title="Green" colorPalette="green" height={200}/>
            <XlpBarChart data={sampleData} title="Purple" colorPalette="purple" height={200}/>
            <XlpBarChart data={sampleData} title="Orange" colorPalette="orange" height={200}/>
        </SimpleGrid>
    ),
};

export const BorderRadius: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={8}>
            <XlpBarChart data={sampleData} title="None" borderRadius="none" height={200}/>
            <XlpBarChart data={sampleData} title="Medium" borderRadius="md" height={200}/>
            <XlpBarChart data={sampleData} title="Full" borderRadius="full" height={200}/>
        </SimpleGrid>
    ),
};

export const CustomColors: Story = {
    args: {
        data: [
            {label: "Product A", value: 120, color: "#3B82F6"},
            {label: "Product B", value: 180, color: "#10B981"},
            {label: "Product C", value: 150, color: "#8B5CF6"},
            {label: "Product D", value: 220, color: "#F59E0B"},
        ],
        title: "Product Sales",
    },
};

export const WithoutLabels: Story = {
    args: {
        data: sampleData,
        title: "Minimal Bar Chart",
        showLabels: false,
        showValues: false,
    },
};

export const ComparisonChart: Story = {
    render: () => (
        <Box>
            <XlpBarChart
                data={[
                    {label: "Q1 2024", value: 45000},
                    {label: "Q2 2024", value: 52000},
                    {label: "Q3 2024", value: 48000},
                    {label: "Q4 2024", value: 61000},
                ]}
                title="Quarterly Revenue"
                colorPalette="teal"
                height={250}
            />
        </Box>
    ),
};

