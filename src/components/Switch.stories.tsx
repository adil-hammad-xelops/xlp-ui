import type {Meta, StoryObj} from "@storybook/react";
import {XlpSwitch} from "./Switch";

const meta: Meta<typeof XlpSwitch> = {
    title: "Components/Form/Switch",
    component: XlpSwitch,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        disabled: {control: "boolean"},
        defaultChecked: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Enable notifications",
    },
};

export const Checked: Story = {
    args: {
        children: "Active",
        defaultChecked: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpSwitch size="xs">Extra small</XlpSwitch>
            <XlpSwitch size="sm">Small</XlpSwitch>
            <XlpSwitch size="md">Medium</XlpSwitch>
            <XlpSwitch size="lg">Large</XlpSwitch>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpSwitch colorPalette="blue" defaultChecked>Blue</XlpSwitch>
            <XlpSwitch colorPalette="green" defaultChecked>Green</XlpSwitch>
            <XlpSwitch colorPalette="red" defaultChecked>Red</XlpSwitch>
            <XlpSwitch colorPalette="purple" defaultChecked>Purple</XlpSwitch>
            <XlpSwitch colorPalette="orange" defaultChecked>Orange</XlpSwitch>
            <XlpSwitch colorPalette="teal" defaultChecked>Teal</XlpSwitch>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpSwitch>Normal</XlpSwitch>
            <XlpSwitch disabled>Disabled</XlpSwitch>
            <XlpSwitch disabled defaultChecked>Disabled checked</XlpSwitch>
        </div>
    ),
};

