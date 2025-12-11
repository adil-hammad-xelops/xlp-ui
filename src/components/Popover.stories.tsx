import type {Meta, StoryObj} from "@storybook/react";
import {XlpPopover} from "./Popover";
import {XlpButton} from "./Button";
import {XlpInput} from "./Input";
import {Box, Stack} from "@chakra-ui/react";

const meta: Meta<typeof XlpPopover> = {
    title: "Components/Overlay/Popover",
    component: XlpPopover,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        placement: {
            control: "select",
            options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"],
        },
        hasArrow: {control: "boolean"},
        closeOnInteractOutside: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        trigger: <XlpButton>Click me</XlpButton>,
        title: "Popover Title",
        children: "This is the popover content. Click outside to close.",
    },
};

export const Placements: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", padding: "2rem"}}>
            <XlpPopover trigger={<XlpButton>Top</XlpButton>} placement="top" title="Top Popover">
                Content positioned at top
            </XlpPopover>
            <XlpPopover trigger={<XlpButton>Bottom</XlpButton>} placement="bottom" title="Bottom Popover">
                Content positioned at bottom
            </XlpPopover>
            <XlpPopover trigger={<XlpButton>Left</XlpButton>} placement="left" title="Left Popover">
                Content positioned at left
            </XlpPopover>
            <XlpPopover trigger={<XlpButton>Right</XlpButton>} placement="right" title="Right Popover">
                Content positioned at right
            </XlpPopover>
        </div>
    ),
};

export const WithForm: Story = {
    render: () => (
        <XlpPopover
            trigger={<XlpButton colorPalette="blue">Edit Settings</XlpButton>}
            title="Settings"
        >
            <Stack gap={3}>
                <Box>
                    <label style={{fontSize: "14px", fontWeight: 500}}>Width</label>
                    <XlpInput size="sm" placeholder="100%"/>
                </Box>
                <Box>
                    <label style={{fontSize: "14px", fontWeight: 500}}>Height</label>
                    <XlpInput size="sm" placeholder="auto"/>
                </Box>
                <XlpButton size="sm" colorPalette="blue">Apply</XlpButton>
            </Stack>
        </XlpPopover>
    ),
};

export const NoArrow: Story = {
    args: {
        trigger: <XlpButton>No Arrow</XlpButton>,
        title: "Popover",
        hasArrow: false,
        children: "This popover has no arrow.",
    },
};

export const NoTitle: Story = {
    args: {
        trigger: <XlpButton>Simple Popover</XlpButton>,
        children: "This popover has no title, just content.",
    },
};

export const InfoPopover: Story = {
    render: () => (
        <XlpPopover
            trigger={
                <span style={{cursor: "help", color: "blue", textDecoration: "underline"}}>
          What is this?
        </span>
            }
            title="Information"
        >
            <p style={{maxWidth: "250px"}}>
                This feature allows you to customize your experience.
                Click on the settings icon to access more options.
            </p>
        </XlpPopover>
    ),
};

