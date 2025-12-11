import type {Meta, StoryObj} from "@storybook/react";
import {XlpInput} from "./Input";

const meta: Meta<typeof XlpInput> = {
    title: "Components/Form/Input",
    component: XlpInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
            description: "The size of the input",
        },
        variant: {
            control: "select",
            options: ["outline", "subtle", "flushed"],
            description: "The variant of the input",
        },
        placeholder: {
            control: "text",
            description: "Placeholder text",
        },
        disabled: {
            control: "boolean",
            description: "Whether the input is disabled",
        },
        borderRadius: {
            control: "select",
            options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
            description: "The border radius of the input",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text...",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpInput variant="outline" placeholder="Outline variant"/>
            <XlpInput variant="subtle" placeholder="Subtle variant"/>
            <XlpInput variant="flushed" placeholder="Flushed variant"/>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpInput size="xs" placeholder="Extra small"/>
            <XlpInput size="sm" placeholder="Small"/>
            <XlpInput size="md" placeholder="Medium"/>
            <XlpInput size="lg" placeholder="Large"/>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
};

export const BorderRadius: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpInput borderRadius="none" placeholder="No radius"/>
            <XlpInput borderRadius="sm" placeholder="Small radius"/>
            <XlpInput borderRadius="md" placeholder="Medium radius"/>
            <XlpInput borderRadius="lg" placeholder="Large radius"/>
            <XlpInput borderRadius="xl" placeholder="XL radius"/>
            <XlpInput borderRadius="full" placeholder="Full radius"/>
        </div>
    ),
};

