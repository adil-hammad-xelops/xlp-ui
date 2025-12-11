import type {Meta, StoryObj} from "@storybook/react";
import {XlpTabs} from "./Tabs";
import {Box} from "@chakra-ui/react";

const meta: Meta<typeof XlpTabs> = {
    title: "Components/Disclosure/Tabs",
    component: XlpTabs,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        items: {
            control: false,
            description: "Array of tab items with value, label, content, and optional disabled flag",
        },
        defaultValue: {
            control: "text",
            description: "Default selected tab value",
        },
        value: {
            control: "text",
            description: "Current selected tab value (controlled)",
        },
        onValueChange: {
            action: "valueChanged",
            description: "Callback when tab changes",
        },
        variant: {
            control: "select",
            options: ["line", "enclosed", "outline", "plain"],
            description: "The variant of the tabs",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "The size of the tabs",
        },
        colorPalette: {
            control: "select",
            options: ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange"],
            description: "The color palette",
        },
        fitted: {
            control: "boolean",
            description: "Whether tabs take full width",
        },
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
            description: "The orientation of tabs",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        value: "tab1",
        label: "Account",
        content: <Box p={4}>Account settings and preferences. Manage your profile, email, and password here.</Box>,
    },
    {
        value: "tab2",
        label: "Notifications",
        content: <Box p={4}>Notification preferences. Control how and when you receive alerts.</Box>,
    },
    {
        value: "tab3",
        label: "Security",
        content: <Box p={4}>Security settings. Enable two-factor authentication and manage sessions.</Box>,
    },
];

export const Default: Story = {
    render: (args) => (
        <div style={{width: "500px"}}>
            <XlpTabs
                items={sampleItems}
                variant={args.variant}
                size={args.size}
                colorPalette={args.colorPalette}
                fitted={args.fitted}
                orientation={args.orientation}
            />
        </div>
    ),
    args: {
        variant: "line",
        size: "md",
        colorPalette: "blue",
        fitted: false,
        orientation: "horizontal",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", width: "500px"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Line</p>
                <XlpTabs items={sampleItems} variant="line"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Enclosed</p>
                <XlpTabs items={sampleItems} variant="enclosed"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Outline</p>
                <XlpTabs items={sampleItems} variant="outline"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Plain</p>
                <XlpTabs items={sampleItems} variant="plain"/>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", width: "500px"}}>
            <XlpTabs items={sampleItems} size="sm"/>
            <XlpTabs items={sampleItems} size="md"/>
            <XlpTabs items={sampleItems} size="lg"/>
        </div>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", width: "500px"}}>
            <XlpTabs items={sampleItems} colorPalette="blue"/>
            <XlpTabs items={sampleItems} colorPalette="green"/>
            <XlpTabs items={sampleItems} colorPalette="purple"/>
        </div>
    ),
};

export const Fitted: Story = {
    render: () => (
        <div style={{width: "500px"}}>
            <XlpTabs items={sampleItems} fitted/>
        </div>
    ),
};

const itemsWithDisabled = [
    ...sampleItems.slice(0, 2),
    {value: "disabled", label: "Disabled", content: <Box p={4}>This is disabled</Box>, disabled: true},
];

export const WithDisabledTab: Story = {
    render: () => (
        <div style={{width: "500px"}}>
            <XlpTabs items={itemsWithDisabled}/>
        </div>
    ),
};

