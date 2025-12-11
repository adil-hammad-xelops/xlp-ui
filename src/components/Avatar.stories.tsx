import type {Meta, StoryObj} from "@storybook/react";
import {XlpAvatar, XlpAvatarGroup} from "./Avatar";

const meta: Meta<typeof XlpAvatar> = {
    title: "Components/Media and Icons/Avatar",
    component: XlpAvatar,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        variant: {
            control: "select",
            options: ["solid", "subtle", "outline"],
        },
        shape: {
            control: "select",
            options: ["circle", "square", "rounded"],
        },
        borderRadius: {
            control: "select",
            options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "John Doe",
    },
};

export const WithImage: Story = {
    args: {
        name: "Jane Smith",
        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpAvatar name="XS" size="xs"/>
            <XlpAvatar name="SM" size="sm"/>
            <XlpAvatar name="MD" size="md"/>
            <XlpAvatar name="LG" size="lg"/>
            <XlpAvatar name="XL" size="xl"/>
            <XlpAvatar name="2XL" size="2xl"/>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpAvatar name="Gray" colorPalette="gray"/>
            <XlpAvatar name="Blue" colorPalette="blue"/>
            <XlpAvatar name="Green" colorPalette="green"/>
            <XlpAvatar name="Red" colorPalette="red"/>
            <XlpAvatar name="Purple" colorPalette="purple"/>
            <XlpAvatar name="Orange" colorPalette="orange"/>
        </div>
    ),
};

export const Shapes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpAvatar name="Full" shape="full"/>
            <XlpAvatar name="Square" shape="square"/>
            <XlpAvatar name="Rounded" shape="rounded"/>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpAvatar name="Solid" variant="solid" colorPalette="blue"/>
            <XlpAvatar name="Subtle" variant="subtle" colorPalette="blue"/>
            <XlpAvatar name="Outline" variant="outline" colorPalette="blue"/>
        </div>
    ),
};

export const Group: Story = {
    render: () => (
        <XlpAvatarGroup max={3}>
            <XlpAvatar name="John Doe" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
            <XlpAvatar name="Jane Smith" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
            <XlpAvatar name="Bob Wilson" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
            <XlpAvatar name="Alice Brown" src="https://i.pravatar.cc/150?u=a048581f4e29026701d"/>
            <XlpAvatar name="Extra User"/>
        </XlpAvatarGroup>
    ),
};

export const BorderRadius: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpAvatar name="None" shape="square" borderRadius="none"/>
            <XlpAvatar name="SM" shape="square" borderRadius="sm"/>
            <XlpAvatar name="MD" shape="square" borderRadius="md"/>
            <XlpAvatar name="LG" shape="square" borderRadius="lg"/>
            <XlpAvatar name="XL" shape="square" borderRadius="xl"/>
            <XlpAvatar name="2XL" shape="square" borderRadius="2xl"/>
            <XlpAvatar name="Full" shape="square" borderRadius="full"/>
        </div>
    ),
};

