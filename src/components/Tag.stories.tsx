import type {Meta, StoryObj} from "@storybook/react";
import {XlpTag} from "./Tag";
import {FiCheck, FiStar, FiUser} from "react-icons/fi";

const meta: Meta<typeof XlpTag> = {
    title: "Components/Data Display/Tag",
    component: XlpTag,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange", "yellow"],
        },
        variant: {
            control: "select",
            options: ["solid", "subtle", "outline", "surface"],
        },
        closable: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Tag",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpTag size="sm">Small</XlpTag>
            <XlpTag size="md">Medium</XlpTag>
            <XlpTag size="lg">Large</XlpTag>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "0.5rem", flexWrap: "wrap"}}>
            <XlpTag colorPalette="gray">Gray</XlpTag>
            <XlpTag colorPalette="blue">Blue</XlpTag>
            <XlpTag colorPalette="green">Green</XlpTag>
            <XlpTag colorPalette="red">Red</XlpTag>
            <XlpTag colorPalette="purple">Purple</XlpTag>
            <XlpTag colorPalette="orange">Orange</XlpTag>
            <XlpTag colorPalette="yellow">Yellow</XlpTag>
            <XlpTag colorPalette="teal">Teal</XlpTag>
            <XlpTag colorPalette="pink">Pink</XlpTag>
            <XlpTag colorPalette="cyan">Cyan</XlpTag>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpTag variant="solid" colorPalette="blue">Solid</XlpTag>
            <XlpTag variant="subtle" colorPalette="blue">Subtle</XlpTag>
            <XlpTag variant="outline" colorPalette="blue">Outline</XlpTag>
            <XlpTag variant="surface" colorPalette="blue">Surface</XlpTag>
        </div>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpTag startElement={<FiUser/>} colorPalette="blue">User</XlpTag>
            <XlpTag startElement={<FiStar/>} colorPalette="yellow">Featured</XlpTag>
            <XlpTag startElement={<FiCheck/>} colorPalette="green">Verified</XlpTag>
        </div>
    ),
};

export const Closable: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpTag closable colorPalette="blue">Removable</XlpTag>
            <XlpTag closable colorPalette="green">Click X to close</XlpTag>
            <XlpTag closable colorPalette="red">Delete</XlpTag>
        </div>
    ),
};

export const StatusTags: Story = {
    render: () => (
        <div style={{display: "flex", gap: "0.5rem"}}>
            <XlpTag colorPalette="green" variant="solid">Active</XlpTag>
            <XlpTag colorPalette="yellow" variant="solid">Pending</XlpTag>
            <XlpTag colorPalette="red" variant="solid">Inactive</XlpTag>
            <XlpTag colorPalette="blue" variant="solid">New</XlpTag>
        </div>
    ),
};

