import type {Meta, StoryObj} from "@storybook/react";
import {XlpDrawer} from "./Drawer";
import {XlpButton} from "./Button";
import {XlpInput} from "./Input";
import {useState} from "react";
import {Box, Stack} from "@chakra-ui/react";

const meta: Meta<typeof XlpDrawer> = {
    title: "Components/Overlay/Drawer",
    component: XlpDrawer,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        placement: {
            control: "select",
            options: ["start", "end", "top", "bottom"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "full"],
        },
        closeOnInteractOutside: {control: "boolean"},
        showCloseButton: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerDemo = ({placement = "end", size = "md"}: {
    placement?: "start" | "end" | "top" | "bottom";
    size?: string
}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <XlpButton onClick={() => setOpen(true)}>Open Drawer ({placement})</XlpButton>
            <XlpDrawer
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                title="Drawer Title"
                placement={placement}
                size={size as "md"}
                footer={
                    <div style={{display: "flex", gap: "0.5rem", justifyContent: "flex-end"}}>
                        <XlpButton variant="ghost" onClick={() => setOpen(false)}>Cancel</XlpButton>
                        <XlpButton colorPalette="blue" onClick={() => setOpen(false)}>Save</XlpButton>
                    </div>
                }
            >
                <p>This is the drawer content. Drawers are useful for navigation, filters, or forms that don't require
                    full page context.</p>
            </XlpDrawer>
        </>
    );
};

export const Default: Story = {
    render: () => <DrawerDemo/>,
};

export const Placements: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <DrawerDemo placement="start"/>
            <DrawerDemo placement="end"/>
            <DrawerDemo placement="top"/>
            <DrawerDemo placement="bottom"/>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <DrawerDemo size="xs"/>
            <DrawerDemo size="sm"/>
            <DrawerDemo size="md"/>
            <DrawerDemo size="lg"/>
        </div>
    ),
};

const FormDrawer = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <XlpButton onClick={() => setOpen(true)}>Edit Profile</XlpButton>
            <XlpDrawer
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                title="Edit Profile"
                footer={
                    <div style={{display: "flex", gap: "0.5rem", justifyContent: "flex-end"}}>
                        <XlpButton variant="ghost" onClick={() => setOpen(false)}>Cancel</XlpButton>
                        <XlpButton colorPalette="blue" onClick={() => setOpen(false)}>Save Changes</XlpButton>
                    </div>
                }
            >
                <Stack gap={4}>
                    <Box>
                        <label>Name</label>
                        <XlpInput placeholder="Enter your name"/>
                    </Box>
                    <Box>
                        <label>Email</label>
                        <XlpInput placeholder="Enter your email"/>
                    </Box>
                    <Box>
                        <label>Bio</label>
                        <XlpInput placeholder="Tell us about yourself"/>
                    </Box>
                </Stack>
            </XlpDrawer>
        </>
    );
};

export const WithForm: Story = {
    render: () => <FormDrawer/>,
};

