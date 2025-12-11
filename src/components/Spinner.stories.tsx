import type {Meta, StoryObj} from "@storybook/react";
import {XlpSpinner} from "./Spinner";

const meta: Meta<typeof XlpSpinner> = {
    title: "Components/Feedback/Spinner",
    component: XlpSpinner,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "2rem", alignItems: "center"}}>
            <XlpSpinner size="xs"/>
            <XlpSpinner size="sm"/>
            <XlpSpinner size="md"/>
            <XlpSpinner size="lg"/>
            <XlpSpinner size="xl"/>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "2rem", alignItems: "center"}}>
            <XlpSpinner colorPalette="blue"/>
            <XlpSpinner colorPalette="green"/>
            <XlpSpinner colorPalette="red"/>
            <XlpSpinner colorPalette="purple"/>
            <XlpSpinner colorPalette="orange"/>
            <XlpSpinner colorPalette="teal"/>
        </div>
    ),
};

