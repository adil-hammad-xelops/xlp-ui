// ============================================
// XLP UI - Charts: Radar Chart Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpRadarChart} from "./RadarChart";
import {SimpleGrid} from "@chakra-ui/react";

const meta: Meta<typeof XlpRadarChart> = {
    title: "Components/Visualization/RadarChart",
    component: XlpRadarChart,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        size: {control: "number"},
        levels: {control: {type: "range", min: 3, max: 10}},
        showLabels: {control: "boolean"},
        showLegend: {control: "boolean"},
        fill: {control: "boolean"},
        fillOpacity: {control: {type: "range", min: 0, max: 1, step: 0.1}},
        showDots: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const skillsData = [{
    name: "Skills",
    color: "#3B82F6",
    data: [
        {label: "JavaScript", value: 90},
        {label: "TypeScript", value: 85},
        {label: "React", value: 95},
        {label: "Node.js", value: 75},
        {label: "CSS", value: 80},
        {label: "Testing", value: 70},
    ]
}];

const comparisonData = [
    {
        name: "Team A",
        color: "#3B82F6",
        data: [
            {label: "Speed", value: 85},
            {label: "Quality", value: 90},
            {label: "Communication", value: 75},
            {label: "Teamwork", value: 88},
            {label: "Innovation", value: 82},
            {label: "Reliability", value: 95},
        ]
    },
    {
        name: "Team B",
        color: "#10B981",
        data: [
            {label: "Speed", value: 78},
            {label: "Quality", value: 85},
            {label: "Communication", value: 92},
            {label: "Teamwork", value: 95},
            {label: "Innovation", value: 70},
            {label: "Reliability", value: 88},
        ]
    },
];

const productData = [
    {
        name: "Product A",
        color: "#8B5CF6",
        data: [
            {label: "Performance", value: 85},
            {label: "Design", value: 92},
            {label: "Price", value: 70},
            {label: "Features", value: 88},
            {label: "Support", value: 75},
        ]
    },
    {
        name: "Product B",
        color: "#F59E0B",
        data: [
            {label: "Performance", value: 78},
            {label: "Design", value: 80},
            {label: "Price", value: 95},
            {label: "Features", value: 72},
            {label: "Support", value: 90},
        ]
    },
    {
        name: "Product C",
        color: "#EF4444",
        data: [
            {label: "Performance", value: 95},
            {label: "Design", value: 75},
            {label: "Price", value: 60},
            {label: "Features", value: 98},
            {label: "Support", value: 65},
        ]
    },
];

export const Default: Story = {
    args: {
        series: skillsData,
        title: "Developer Skills",
    },
};

export const Comparison: Story = {
    args: {
        series: comparisonData,
        title: "Team Performance Comparison",
    },
};

export const ThreeSeries: Story = {
    args: {
        series: productData,
        title: "Product Comparison",
        size: 350,
    },
};

export const NoFill: Story = {
    args: {
        series: comparisonData,
        title: "Lines Only",
        fill: false,
    },
};

export const HighFillOpacity: Story = {
    args: {
        series: skillsData,
        title: "High Fill Opacity",
        fillOpacity: 0.5,
    },
};

export const NoDots: Story = {
    args: {
        series: skillsData,
        title: "Without Data Points",
        showDots: false,
    },
};

export const MoreLevels: Story = {
    args: {
        series: skillsData,
        title: "With 8 Levels",
        levels: 8,
    },
};

export const Sizes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={8}>
            <XlpRadarChart series={skillsData} title="Small (200px)" size={200}/>
            <XlpRadarChart series={skillsData} title="Medium (300px)" size={300}/>
            <XlpRadarChart series={skillsData} title="Large (400px)" size={400}/>
        </SimpleGrid>
    ),
};

export const GameStats: Story = {
    args: {
        series: [{
            name: "Player Stats",
            color: "#EC4899",
            data: [
                {label: "Attack", value: 88},
                {label: "Defense", value: 75},
                {label: "Speed", value: 92},
                {label: "Stamina", value: 80},
                {label: "Magic", value: 65},
                {label: "Luck", value: 70},
            ]
        }],
        title: "Character Stats",
        maxValue: 100,
        fillOpacity: 0.3,
    },
};

export const SurveyResults: Story = {
    args: {
        series: [
            {
                name: "2023",
                color: "#6B7280",
                data: [
                    {label: "Satisfaction", value: 72},
                    {label: "Engagement", value: 68},
                    {label: "Productivity", value: 75},
                    {label: "Work-Life", value: 65},
                    {label: "Growth", value: 70},
                ]
            },
            {
                name: "2024",
                color: "#10B981",
                data: [
                    {label: "Satisfaction", value: 85},
                    {label: "Engagement", value: 82},
                    {label: "Productivity", value: 88},
                    {label: "Work-Life", value: 78},
                    {label: "Growth", value: 90},
                ]
            },
        ],
        title: "Employee Survey: Year over Year",
        maxValue: 100,
    },
};

