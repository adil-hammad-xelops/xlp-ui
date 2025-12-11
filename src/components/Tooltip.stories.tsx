import type {Meta, StoryObj} from "@storybook/react";
import {XlpTooltip} from "./Tooltip";
import {XlpButton} from "./Button";

const meta: Meta<typeof XlpTooltip> = {
    title: "Components/Overlay/Tooltip",
    component: XlpTooltip,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        placement: {
            control: "select",
            options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"],
        },
        hasArrow: {control: "boolean"},
        openDelay: {control: "number"},
        closeDelay: {control: "number"},
        disabled: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: "This is a tooltip",
        children: <XlpButton>Hover me</XlpButton>,
    },
};

export const Placements: Story = {
    render: () => (
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", padding: "4rem"}}>
            <div/>
            <XlpTooltip content="Top tooltip" placement="top">
                <XlpButton>Top</XlpButton>
            </XlpTooltip>
            <div/>

            <XlpTooltip content="Left tooltip" placement="left">
                <XlpButton>Left</XlpButton>
            </XlpTooltip>
            <div/>
            <XlpTooltip content="Right tooltip" placement="right">
                <XlpButton>Right</XlpButton>
            </XlpTooltip>

            <div/>
            <XlpTooltip content="Bottom tooltip" placement="bottom">
                <XlpButton>Bottom</XlpButton>
            </XlpTooltip>
            <div/>
        </div>
    ),
};

export const WithDelay: Story = {
    args: {
        content: "This tooltip has a 500ms delay",
        openDelay: 500,
        children: <XlpButton>Hover me (with delay)</XlpButton>,
    },
};

export const WithoutArrow: Story = {
    args: {
        content: "No arrow tooltip",
        hasArrow: false,
        children: <XlpButton>No arrow</XlpButton>,
    },
};

export const LongContent: Story = {
    args: {
        content: "This is a longer tooltip with more detailed information that might span multiple lines.",
        children: <XlpButton>Long tooltip</XlpButton>,
    },
};

export const OnDifferentElements: Story = {
    render: () => (
        <div style={{display: "flex", gap: "2rem", alignItems: "center"}}>
            <XlpTooltip content="Button tooltip">
                <XlpButton>Button</XlpButton>
            </XlpTooltip>
            <XlpTooltip content="Text tooltip">
                <span style={{textDecoration: "underline", cursor: "help"}}>Hover this text</span>
            </XlpTooltip>
            <XlpTooltip content="Icon tooltip">
                <span style={{cursor: "help", fontSize: "24px"}}>ℹ️</span>
            </XlpTooltip>
        </div>
    ),
};

