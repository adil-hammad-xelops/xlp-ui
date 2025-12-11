import type {Meta, StoryObj} from "@storybook/react";
import {XlpTable} from "./Table";
import {XlpBadge} from "./Badge";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    amount: number;

    [key: string]: unknown;
}

const meta: Meta<typeof XlpTable<User>> = {
    title: "Components/Data Display/Table",
    component: XlpTable,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["line", "outline"],
        },
        striped: {control: "boolean"},
        showColumnBorder: {control: "boolean"},
        stickyHeader: {control: "boolean"},
        interactive: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: User[] = [
    {id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active", amount: 1500},
    {id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "active", amount: 2300},
    {id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "inactive", amount: 800},
    {id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "pending", amount: 1200},
    {id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Admin", status: "active", amount: 3100},
];

const basicColumns = [
    {header: "Name", accessor: "name" as const},
    {header: "Email", accessor: "email" as const},
    {header: "Role", accessor: "role" as const},
];

export const Default: Story = {
    args: {
        columns: basicColumns,
        data: sampleData,
    },
};

const columnsWithStatus = [
    {header: "Name", accessor: "name" as const},
    {header: "Email", accessor: "email" as const},
    {header: "Role", accessor: "role" as const},
    {
        header: "Status",
        accessor: (row: User) => {
            const colorMap = {active: "green", inactive: "gray", pending: "yellow"};
            return <XlpBadge colorPalette={colorMap[row.status] as "green" | "gray" | "yellow"}>{row.status}</XlpBadge>;
        }
    },
    {header: "Amount", accessor: (row: User) => `$${row.amount.toLocaleString()}`, isNumeric: true},
];

export const WithCustomRenderers: Story = {
    args: {
        columns: columnsWithStatus,
        data: sampleData,
    },
};

export const Striped: Story = {
    args: {
        columns: basicColumns,
        data: sampleData,
        striped: true,
    },
};

export const WithColumnBorders: Story = {
    args: {
        columns: basicColumns,
        data: sampleData,
        showColumnBorder: true,
    },
};

export const Interactive: Story = {
    args: {
        columns: basicColumns,
        data: sampleData,
        interactive: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Small</p>
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="sm"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Medium</p>
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="md"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Large</p>
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="lg"/>
            </div>
        </div>
    ),
};

export const WithCaption: Story = {
    args: {
        columns: basicColumns,
        data: sampleData,
        caption: "Team Members",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Line</p>
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} variant="line"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Outline</p>
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} variant="outline"/>
            </div>
        </div>
    ),
};

