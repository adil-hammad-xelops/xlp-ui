import type {Meta, StoryObj} from "@storybook/react";
import {XlpBadge} from "./Badge";

const meta: Meta<typeof XlpBadge> = {
    title: "Components/Data Display/Badge",
    component: XlpBadge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        colorPalette: {
            control: "select",
            options: ["green", "red", "gray", "blue", "yellow", "purple", "orange"],
            description: "The color scheme of the badge",
        },
        children: {
            control: "text",
            description: "The content to display in the badge",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Badge",
        colorPalette: "gray",
    },
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpBadge colorPalette="gray">Gray</XlpBadge>
            <XlpBadge colorPalette="green">Green</XlpBadge>
            <XlpBadge colorPalette="red">Red</XlpBadge>
            <XlpBadge colorPalette="blue">Blue</XlpBadge>
            <XlpBadge colorPalette="yellow">Yellow</XlpBadge>
            <XlpBadge colorPalette="purple">Purple</XlpBadge>
            <XlpBadge colorPalette="orange">Orange</XlpBadge>
        </div>
    ),
};

export const StatusBadges: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpBadge colorPalette="green">Success</XlpBadge>
            <XlpBadge colorPalette="red">Error</XlpBadge>
            <XlpBadge colorPalette="yellow">Warning</XlpBadge>
            <XlpBadge colorPalette="blue">Info</XlpBadge>
        </div>
    ),
};

export const CustomContent: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpBadge colorPalette="green">• Online</XlpBadge>
            <XlpBadge colorPalette="gray">• Offline</XlpBadge>
            <XlpBadge colorPalette="blue">v1.0.0</XlpBadge>
            <XlpBadge colorPalette="purple">New</XlpBadge>
        </div>
    ),
};

