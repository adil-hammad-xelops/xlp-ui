import type {Meta, StoryObj} from "@storybook/react";
import {XlpCheckbox} from "./Checkbox";

const meta: Meta<typeof XlpCheckbox> = {
    title: "Components/Form/Checkbox",
    component: XlpCheckbox,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        disabled: {control: "boolean"},
        invalid: {control: "boolean"},
        defaultChecked: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Accept terms and conditions",
    },
};

export const Checked: Story = {
    args: {
        children: "Checked checkbox",
        defaultChecked: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpCheckbox size="sm">Small checkbox</XlpCheckbox>
            <XlpCheckbox size="md">Medium checkbox</XlpCheckbox>
            <XlpCheckbox size="lg">Large checkbox</XlpCheckbox>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpCheckbox colorPalette="blue" defaultChecked>Blue</XlpCheckbox>
            <XlpCheckbox colorPalette="green" defaultChecked>Green</XlpCheckbox>
            <XlpCheckbox colorPalette="red" defaultChecked>Red</XlpCheckbox>
            <XlpCheckbox colorPalette="purple" defaultChecked>Purple</XlpCheckbox>
            <XlpCheckbox colorPalette="orange" defaultChecked>Orange</XlpCheckbox>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpCheckbox>Normal</XlpCheckbox>
            <XlpCheckbox disabled>Disabled</XlpCheckbox>
            <XlpCheckbox disabled defaultChecked>Disabled checked</XlpCheckbox>
            <XlpCheckbox invalid>Invalid</XlpCheckbox>
        </div>
    ),
};

