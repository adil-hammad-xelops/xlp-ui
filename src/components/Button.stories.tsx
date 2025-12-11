import type {Meta, StoryObj} from "@storybook/react";
import {XlpButton} from "./Button";

const meta: Meta<typeof XlpButton> = {
    title: "Components/Form/Button",
    component: XlpButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["solid", "outline", "ghost", "subtle", "surface", "plain"],
            description: "The visual variant of the button",
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
            description: "The size of the button",
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange", "yellow"],
            description: "The color palette to use",
        },
        disabled: {
            control: "boolean",
            description: "Whether the button is disabled",
        },
        loading: {
            control: "boolean",
            description: "Whether the button is in loading state",
        },
        borderRadius: {
            control: "select",
            options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
            description: "The border radius of the button",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
        variant: "solid",
        size: "md",
        colorPalette: "blue",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpButton variant="solid">Solid</XlpButton>
            <XlpButton variant="outline">Outline</XlpButton>
            <XlpButton variant="ghost">Ghost</XlpButton>
            <XlpButton variant="subtle">Subtle</XlpButton>
            <XlpButton variant="surface">Surface</XlpButton>
            <XlpButton variant="plain">Plain</XlpButton>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpButton size="xs">Extra Small</XlpButton>
            <XlpButton size="sm">Small</XlpButton>
            <XlpButton size="md">Medium</XlpButton>
            <XlpButton size="lg">Large</XlpButton>
            <XlpButton size="xl">Extra Large</XlpButton>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpButton colorPalette="gray">Gray</XlpButton>
            <XlpButton colorPalette="red">Red</XlpButton>
            <XlpButton colorPalette="green">Green</XlpButton>
            <XlpButton colorPalette="blue">Blue</XlpButton>
            <XlpButton colorPalette="teal">Teal</XlpButton>
            <XlpButton colorPalette="pink">Pink</XlpButton>
            <XlpButton colorPalette="purple">Purple</XlpButton>
            <XlpButton colorPalette="cyan">Cyan</XlpButton>
            <XlpButton colorPalette="orange">Orange</XlpButton>
            <XlpButton colorPalette="yellow">Yellow</XlpButton>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        children: "Disabled Button",
        disabled: true,
    },
};

export const Loading: Story = {
    args: {
        children: "Loading...",
        loading: true,
    },
};

export const BorderRadius: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center"}}>
            <XlpButton borderRadius="none">None</XlpButton>
            <XlpButton borderRadius="sm">Small</XlpButton>
            <XlpButton borderRadius="md">Medium</XlpButton>
            <XlpButton borderRadius="lg">Large</XlpButton>
            <XlpButton borderRadius="xl">XL</XlpButton>
            <XlpButton borderRadius="2xl">2XL</XlpButton>
            <XlpButton borderRadius="full">Full</XlpButton>
        </div>
    ),
};

