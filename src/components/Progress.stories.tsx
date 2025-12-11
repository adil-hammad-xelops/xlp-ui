import type {Meta, StoryObj} from "@storybook/react";
import {XlpProgress} from "./Progress";

const meta: Meta<typeof XlpProgress> = {
    title: "Components/Feedback/Progress",
    component: XlpProgress,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        value: {control: {type: "range", min: 0, max: 100}},
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        striped: {control: "boolean"},
        animated: {control: "boolean"},
        showValueLabel: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
    },
    decorators: [(Story) => <div style={{width: "300px"}}><Story/></div>],
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1.5rem", width: "300px"}}>
            <XlpProgress value={60} size="xs"/>
            <XlpProgress value={60} size="sm"/>
            <XlpProgress value={60} size="md"/>
            <XlpProgress value={60} size="lg"/>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "300px"}}>
            <XlpProgress value={80} colorPalette="blue"/>
            <XlpProgress value={80} colorPalette="green"/>
            <XlpProgress value={80} colorPalette="red"/>
            <XlpProgress value={80} colorPalette="purple"/>
            <XlpProgress value={80} colorPalette="orange"/>
        </div>
    ),
};

export const Striped: Story = {
    args: {
        value: 70,
        striped: true,
    },
    decorators: [(Story) => <div style={{width: "300px"}}><Story/></div>],
};

export const StripedAnimated: Story = {
    args: {
        value: 70,
        striped: true,
        animated: true,
    },
    decorators: [(Story) => <div style={{width: "300px"}}><Story/></div>],
};

export const WithValueLabel: Story = {
    args: {
        value: 45,
        showValueLabel: true,
    },
    decorators: [(Story) => <div style={{width: "300px"}}><Story/></div>],
};

