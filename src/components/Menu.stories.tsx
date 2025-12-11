import type {Meta, StoryObj} from "@storybook/react";
import {XlpMenu} from "./Menu";
import {XlpButton} from "./Button";
import {FiCopy, FiEdit, FiLogOut, FiSettings, FiTrash, FiUser} from "react-icons/fi";

const meta: Meta<typeof XlpMenu> = {
    title: "Components/Navigation/Menu",
    component: XlpMenu,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        placement: {
            control: "select",
            options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const simpleItems = [
    {label: "Profile", value: "profile"},
    {label: "Settings", value: "settings"},
    {label: "Help", value: "help"},
    {label: "Logout", value: "logout"},
];

export const Default: Story = {
    args: {
        trigger: <XlpButton>Open Menu</XlpButton>,
        items: simpleItems,
    },
};

const itemsWithIcons = [
    {label: "Profile", value: "profile", icon: <FiUser/>},
    {label: "Settings", value: "settings", icon: <FiSettings/>},
    {label: "Logout", value: "logout", icon: <FiLogOut/>},
];

export const WithIcons: Story = {
    args: {
        trigger: <XlpButton>Menu with Icons</XlpButton>,
        items: itemsWithIcons,
    },
};

const groupedItems = [
    {
        label: "Account",
        items: [
            {label: "Profile", value: "profile", icon: <FiUser/>},
            {label: "Settings", value: "settings", icon: <FiSettings/>},
        ],
    },
    {
        label: "Actions",
        items: [
            {label: "Edit", value: "edit", icon: <FiEdit/>},
            {label: "Copy", value: "copy", icon: <FiCopy/>},
            {label: "Delete", value: "delete", icon: <FiTrash/>},
        ],
    },
];

export const Grouped: Story = {
    args: {
        trigger: <XlpButton>Grouped Menu</XlpButton>,
        items: groupedItems,
    },
};

const itemsWithDisabled = [
    {label: "Edit", value: "edit"},
    {label: "Duplicate", value: "duplicate"},
    {label: "Archive", value: "archive", disabled: true},
    {label: "Delete", value: "delete"},
];

export const WithDisabledItem: Story = {
    args: {
        trigger: <XlpButton>Menu with Disabled</XlpButton>,
        items: itemsWithDisabled,
    },
};

export const Placements: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpMenu trigger={<XlpButton>Bottom Start</XlpButton>} items={simpleItems} placement="bottom-start"/>
            <XlpMenu trigger={<XlpButton>Bottom End</XlpButton>} items={simpleItems} placement="bottom-end"/>
            <XlpMenu trigger={<XlpButton>Top Start</XlpButton>} items={simpleItems} placement="top-start"/>
            <XlpMenu trigger={<XlpButton>Top End</XlpButton>} items={simpleItems} placement="top-end"/>
        </div>
    ),
};

export const ContextMenu: Story = {
    render: () => (
        <XlpMenu
            trigger={
                <XlpButton variant="outline">
                    ⋮
                </XlpButton>
            }
            items={[
                {label: "Edit", value: "edit", icon: <FiEdit/>},
                {label: "Copy", value: "copy", icon: <FiCopy/>},
                {label: "Delete", value: "delete", icon: <FiTrash/>},
            ]}
        />
    ),
};

