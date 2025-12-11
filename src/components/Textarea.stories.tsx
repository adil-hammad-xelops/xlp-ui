import type {Meta, StoryObj} from "@storybook/react";
import {XlpTextarea} from "./Textarea";

const meta: Meta<typeof XlpTextarea> = {
    title: "Components/Form/Textarea",
    component: XlpTextarea,
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
        rows: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter your message...",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpTextarea variant="outline" placeholder="Outline variant"/>
            <XlpTextarea variant="subtle" placeholder="Subtle variant"/>
            <XlpTextarea variant="flushed" placeholder="Flushed variant"/>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpTextarea size="xs" placeholder="Extra small"/>
            <XlpTextarea size="sm" placeholder="Small"/>
            <XlpTextarea size="md" placeholder="Medium"/>
            <XlpTextarea size="lg" placeholder="Large"/>
        </div>
    ),
};

