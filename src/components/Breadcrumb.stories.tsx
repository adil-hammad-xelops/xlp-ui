import type {Meta, StoryObj} from "@storybook/react";
import {XlpBreadcrumb} from "./Breadcrumb";
import {FiChevronRight, FiHome} from "react-icons/fi";

const meta: Meta<typeof XlpBreadcrumb> = {
    title: "Components/Navigation/Breadcrumb",
    component: XlpBreadcrumb,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
    {label: "Home", href: "/"},
    {label: "Products", href: "/products"},
    {label: "Category", href: "/products/category"},
    {label: "Current Page", current: true},
];

export const Default: Story = {
    args: {
        items: basicItems,
    },
};

export const WithCustomSeparator: Story = {
    args: {
        items: basicItems,
        separator: <FiChevronRight/>,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <XlpBreadcrumb items={basicItems} size="sm"/>
            <XlpBreadcrumb items={basicItems} size="md"/>
            <XlpBreadcrumb items={basicItems} size="lg"/>
        </div>
    ),
};

const itemsWithIcons = [
    {label: <><FiHome style={{marginRight: "4px"}}/> Home</>, href: "/"},
    {label: "Dashboard", href: "/dashboard"},
    {label: "Settings", current: true},
];

export const WithIcons: Story = {
    args: {
        items: itemsWithIcons,
        separator: <FiChevronRight/>,
    },
};

export const ShortBreadcrumb: Story = {
    args: {
        items: [
            {label: "Home", href: "/"},
            {label: "Page", current: true},
        ],
    },
};

export const LongBreadcrumb: Story = {
    args: {
        items: [
            {label: "Home", href: "/"},
            {label: "Category", href: "/category"},
            {label: "Subcategory", href: "/category/sub"},
            {label: "Section", href: "/category/sub/section"},
            {label: "Item", href: "/category/sub/section/item"},
            {label: "Details", current: true},
        ],
        separator: <FiChevronRight/>,
    },
};

