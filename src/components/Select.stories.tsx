import type {Meta, StoryObj} from "@storybook/react";
import {XlpSelect} from "./Select";

const meta: Meta<typeof XlpSelect> = {
    title: "Components/Form/Select",
    component: XlpSelect,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["outline", "subtle"],
        },
        disabled: {control: "boolean"},
        multiple: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
    {label: "Option 1", value: "1"},
    {label: "Option 2", value: "2"},
    {label: "Option 3", value: "3"},
    {label: "Disabled Option", value: "4", disabled: true},
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        placeholder: "Select an option",
    },
};

export const WithLabel: Story = {
    args: {
        options: sampleOptions,
        label: "Choose an option",
        placeholder: "Select...",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "250px"}}>
            <XlpSelect options={sampleOptions} size="xs" placeholder="Extra small"/>
            <XlpSelect options={sampleOptions} size="sm" placeholder="Small"/>
            <XlpSelect options={sampleOptions} size="md" placeholder="Medium"/>
            <XlpSelect options={sampleOptions} size="lg" placeholder="Large"/>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        options: sampleOptions,
        disabled: true,
        placeholder: "Disabled select",
    },
};

