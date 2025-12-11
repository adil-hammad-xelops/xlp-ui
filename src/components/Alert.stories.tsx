import type {Meta, StoryObj} from "@storybook/react";
import {XlpAlert} from "./Alert";
import {useState} from "react";

const meta: Meta<typeof XlpAlert> = {
    title: "Components/Feedback/Alert",
    component: XlpAlert,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        status: {
            control: "select",
            options: ["info", "warning", "success", "error"],
            description: "The status/type of the alert",
        },
        variant: {
            control: "select",
            options: ["subtle", "solid", "outline"],
            description: "The variant of the alert",
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl"],
            description: "The border radius of the alert",
        },
        title: {
            control: "text",
            description: "The title of the alert",
        },
        children: {
            control: "text",
            description: "The description/content of the alert",
        },
        closable: {
            control: "boolean",
            description: "Whether the alert can be closed",
        },
        onClose: {
            action: "closed",
            description: "Callback when alert is closed",
        },
        icon: {
            control: false,
            description: "Custom icon element",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Information",
        children: "This is an informational alert message.",
        status: "info",
    },
};

export const Statuses: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "400px"}}>
            <XlpAlert status="info" title="Info">
                This is an info alert.
            </XlpAlert>
            <XlpAlert status="success" title="Success">
                Operation completed successfully!
            </XlpAlert>
            <XlpAlert status="warning" title="Warning">
                Please review your input.
            </XlpAlert>
            <XlpAlert status="error" title="Error">
                Something went wrong.
            </XlpAlert>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "400px"}}>
            <XlpAlert status="success" variant="subtle" title="Subtle">
                Subtle variant alert
            </XlpAlert>
            <XlpAlert status="success" variant="solid" title="Solid">
                Solid variant alert
            </XlpAlert>
            <XlpAlert status="success" variant="outline" title="Outline">
                Outline variant alert
            </XlpAlert>
        </div>
    ),
};

export const TitleOnly: Story = {
    args: {
        title: "Your session will expire in 5 minutes",
        status: "warning",
    },
};

export const DescriptionOnly: Story = {
    args: {
        children: "Your account has been created successfully. Check your email for verification.",
        status: "success",
    },
};

const ClosableAlertDemo = () => {
    const [show, setShow] = useState(true);

    if (!show) {
        return (
            <button
                onClick={() => setShow(true)}
                style={{padding: '8px 16px', cursor: 'pointer'}}
            >
                Show Alert Again
            </button>
        );
    }

    return (
        <div style={{width: "400px"}}>
            <XlpAlert
                status="success"
                title="File uploaded"
                closable
                onClose={() => setShow(false)}
            >
                Your file has been uploaded successfully.
            </XlpAlert>
        </div>
    );
};

export const Closable: Story = {
    render: () => <ClosableAlertDemo/>,
};

export const BorderRadius: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "400px"}}>
            <XlpAlert status="info" title="None" borderRadius="none">
                borderRadius="none"
            </XlpAlert>
            <XlpAlert status="info" title="Small" borderRadius="sm">
                borderRadius="sm"
            </XlpAlert>
            <XlpAlert status="info" title="Medium" borderRadius="md">
                borderRadius="md"
            </XlpAlert>
            <XlpAlert status="info" title="Large" borderRadius="lg">
                borderRadius="lg"
            </XlpAlert>
            <XlpAlert status="info" title="Extra Large" borderRadius="xl">
                borderRadius="xl"
            </XlpAlert>
        </div>
    ),
};

