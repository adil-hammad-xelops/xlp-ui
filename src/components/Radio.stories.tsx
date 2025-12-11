import type {Meta, StoryObj} from "@storybook/react";
import {XlpRadioGroup} from "./Radio";

const meta: Meta<typeof XlpRadioGroup> = {
    title: "Components/Form/RadioGroup",
    component: XlpRadioGroup,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
        },
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
        },
        disabled: {control: "boolean"},
        gap: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
    {label: "Option A", value: "a"},
    {label: "Option B", value: "b"},
    {label: "Option C", value: "c"},
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        defaultValue: "a",
    },
};

export const Horizontal: Story = {
    args: {
        options: sampleOptions,
        orientation: "horizontal",
        defaultValue: "b",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Small</p>
                <XlpRadioGroup options={sampleOptions} size="sm" defaultValue="a"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Medium</p>
                <XlpRadioGroup options={sampleOptions} size="md" defaultValue="a"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Large</p>
                <XlpRadioGroup options={sampleOptions} size="lg" defaultValue="a"/>
            </div>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "2rem", flexWrap: "wrap"}}>
            <XlpRadioGroup options={sampleOptions} colorPalette="blue" defaultValue="a"/>
            <XlpRadioGroup options={sampleOptions} colorPalette="green" defaultValue="a"/>
            <XlpRadioGroup options={sampleOptions} colorPalette="purple" defaultValue="a"/>
        </div>
    ),
};

export const WithDisabledOption: Story = {
    args: {
        options: [
            {label: "Available", value: "1"},
            {label: "Disabled", value: "2", disabled: true},
            {label: "Available", value: "3"},
        ],
        defaultValue: "1",
    },
};

export const CustomGap: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 1 (small)</p>
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={1}/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 4 (medium)</p>
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={4}/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 8 (large)</p>
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={8}/>
            </div>
        </div>
    ),
};

export const HorizontalWithGap: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 2</p>
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={2}/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 6</p>
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={6}/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Gap: 10</p>
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={10}/>
            </div>
        </div>
    ),
};

