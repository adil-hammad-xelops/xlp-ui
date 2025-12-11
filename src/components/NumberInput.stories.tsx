import type {Meta, StoryObj} from "@storybook/react";
import {XlpNumberInput} from "./NumberInput";

const meta: Meta<typeof XlpNumberInput> = {
    title: "Components/Form/NumberInput",
    component: XlpNumberInput,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["outline", "subtle", "flushed"],
        },
        disabled: {control: "boolean"},
        invalid: {control: "boolean"},
        showStepper: {control: "boolean"},
        allowMouseWheel: {control: "boolean"},
        min: {control: "number"},
        max: {control: "number"},
        step: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter a number",
        defaultValue: "10",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const WithMinMax: Story = {
    args: {
        min: 0,
        max: 100,
        defaultValue: "50",
        placeholder: "0-100",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const WithStep: Story = {
    args: {
        step: 5,
        defaultValue: "10",
        placeholder: "Step by 5",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "200px"}}>
            <XlpNumberInput size="xs" defaultValue="10" placeholder="Extra small"/>
            <XlpNumberInput size="sm" defaultValue="10" placeholder="Small"/>
            <XlpNumberInput size="md" defaultValue="10" placeholder="Medium"/>
            <XlpNumberInput size="lg" defaultValue="10" placeholder="Large"/>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "200px"}}>
            <XlpNumberInput variant="outline" defaultValue="10" placeholder="Outline"/>
            <XlpNumberInput variant="subtle" defaultValue="10" placeholder="Subtle"/>
            <XlpNumberInput variant="flushed" defaultValue="10" placeholder="Flushed"/>
        </div>
    ),
};

export const WithoutStepper: Story = {
    args: {
        showStepper: false,
        defaultValue: "42",
        placeholder: "No stepper",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: "10",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const Invalid: Story = {
    args: {
        invalid: true,
        defaultValue: "999",
        max: 100,
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

export const Currency: Story = {
    args: {
        min: 0,
        step: 0.01,
        defaultValue: "99.99",
        placeholder: "0.00",
    },
    decorators: [(Story) => <div style={{width: "200px"}}><Story/></div>],
};

