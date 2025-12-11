import type {Meta, StoryObj} from "@storybook/react";
import {XlpModal} from "./Modal";
import {XlpButton} from "./Button";
import {useState} from "react";

const meta: Meta<typeof XlpModal> = {
    title: "Components/Overlay/Modal",
    component: XlpModal,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "full"],
        },
        placement: {
            control: "select",
            options: ["center", "top", "bottom"],
        },
        closeOnInteractOutside: {control: "boolean"},
        showCloseButton: {control: "boolean"},
        centered: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalDemo = ({size = "md", title = "Modal Title"}: { size?: string; title?: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <XlpButton onClick={() => setOpen(true)}>Open Modal</XlpButton>
            <XlpModal
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                title={title}
                size={size as "md"}
                footer={
                    <div style={{display: "flex", gap: "0.5rem", justifyContent: "flex-end"}}>
                        <XlpButton variant="ghost" onClick={() => setOpen(false)}>Cancel</XlpButton>
                        <XlpButton colorPalette="blue" onClick={() => setOpen(false)}>Confirm</XlpButton>
                    </div>
                }
            >
                <p>This is the modal content. You can put any content here including forms, images, or complex
                    layouts.</p>
            </XlpModal>
        </>
    );
};

export const Default: Story = {
    render: () => <ModalDemo/>,
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <ModalDemo size="xs" title="Extra Small Modal"/>
            <ModalDemo size="sm" title="Small Modal"/>
            <ModalDemo size="md" title="Medium Modal"/>
            <ModalDemo size="lg" title="Large Modal"/>
            <ModalDemo size="xl" title="Extra Large Modal"/>
        </div>
    ),
};

const SimpleModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <XlpButton onClick={() => setOpen(true)}>Simple Modal</XlpButton>
            <XlpModal
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                title="Simple Modal"
            >
                <p>This modal has no footer, just content.</p>
            </XlpModal>
        </>
    );
};

export const NoFooter: Story = {
    render: () => <SimpleModal/>,
};

const AlertModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <XlpButton colorPalette="red" onClick={() => setOpen(true)}>Delete Item</XlpButton>
            <XlpModal
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                title="Confirm Deletion"
                size="sm"
                footer={
                    <div style={{display: "flex", gap: "0.5rem", justifyContent: "flex-end"}}>
                        <XlpButton variant="ghost" onClick={() => setOpen(false)}>Cancel</XlpButton>
                        <XlpButton colorPalette="red" onClick={() => setOpen(false)}>Delete</XlpButton>
                    </div>
                }
            >
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            </XlpModal>
        </>
    );
};

export const AlertDialog: Story = {
    render: () => <AlertModal/>,
};

