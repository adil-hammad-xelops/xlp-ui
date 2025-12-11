import type {Meta, StoryObj} from "@storybook/react";
import {XlpIconButton} from "./IconButton";
import {FiEdit, FiHeart, FiMenu, FiPlus, FiSearch, FiSettings, FiStar, FiTrash, FiX} from "react-icons/fi";

const meta: Meta<typeof XlpIconButton> = {
    title: "Components/Form/IconButton",
    component: XlpIconButton,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["solid", "outline", "ghost", "subtle"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        rounded: {control: "boolean"},
        disabled: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: <FiSearch/>,
        "aria-label": "Search",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" size="xs"/>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" size="sm"/>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" size="md"/>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" size="lg"/>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpIconButton icon={<FiEdit/>} aria-label="Edit" variant="solid" colorPalette="blue"/>
            <XlpIconButton icon={<FiEdit/>} aria-label="Edit" variant="outline" colorPalette="blue"/>
            <XlpIconButton icon={<FiEdit/>} aria-label="Edit" variant="ghost" colorPalette="blue"/>
            <XlpIconButton icon={<FiEdit/>} aria-label="Edit" variant="subtle" colorPalette="blue"/>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpIconButton icon={<FiHeart/>} aria-label="Like" variant="solid" colorPalette="red"/>
            <XlpIconButton icon={<FiStar/>} aria-label="Favorite" variant="solid" colorPalette="orange"/>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" variant="solid" colorPalette="green"/>
            <XlpIconButton icon={<FiSettings/>} aria-label="Settings" variant="solid" colorPalette="purple"/>
        </div>
    ),
};

export const Rounded: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem"}}>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add" variant="solid" colorPalette="blue" rounded/>
            <XlpIconButton icon={<FiHeart/>} aria-label="Like" variant="solid" colorPalette="red" rounded/>
            <XlpIconButton icon={<FiStar/>} aria-label="Star" variant="outline" colorPalette="orange" rounded/>
        </div>
    ),
};

export const CommonUseCases: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <XlpIconButton icon={<FiMenu/>} aria-label="Open menu" variant="ghost"/>
            <XlpIconButton icon={<FiX/>} aria-label="Close" variant="ghost"/>
            <XlpIconButton icon={<FiSearch/>} aria-label="Search" variant="outline"/>
            <XlpIconButton icon={<FiTrash/>} aria-label="Delete" variant="ghost" colorPalette="red"/>
            <XlpIconButton icon={<FiPlus/>} aria-label="Add new" variant="solid" colorPalette="blue" rounded/>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        icon: <FiEdit/>,
        "aria-label": "Edit",
        disabled: true,
    },
};

