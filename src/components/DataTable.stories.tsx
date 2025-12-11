import type {Meta, StoryObj} from "@storybook/react";
import {createColumnHelper, XlpDataTable} from "./DataTable";
import {XlpBadge} from "./Badge";
import {XlpIconButton} from "./IconButton";
import {Box, HStack} from "@chakra-ui/react";
import {FiEdit, FiEye, FiTrash} from "react-icons/fi";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    department: string;
    joinDate: string;
}

const sampleData: User[] = Array.from({length: 50}, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'Editor', 'Viewer', 'Manager'][i % 4],
    status: (['active', 'inactive', 'pending'] as const)[i % 3],
    department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
    joinDate: new Date(2020 + (i % 5), i % 12, (i % 28) + 1).toLocaleDateString(),
}));

const columnHelper = createColumnHelper<User>();

const basicColumns = [
    columnHelper.accessor('id', {header: 'ID'}),
    columnHelper.accessor('name', {header: 'Name'}),
    columnHelper.accessor('email', {header: 'Email'}),
    columnHelper.accessor('role', {header: 'Role'}),
];

const meta: Meta<typeof XlpDataTable<User>> = {
    title: "Components/Data Display/DataTable",
    component: XlpDataTable,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        data: {
            control: false,
            description: "The data to display in the table",
        },
        columns: {
            control: false,
            description: "Column definitions using TanStack Table",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "The size of the table",
        },
        variant: {
            control: "select",
            options: ["line", "outline"],
            description: "The variant of the table",
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl"],
            description: "Border radius of the table container",
        },
        colorPalette: {
            control: "select",
            options: ["gray", "blue", "green", "purple", "teal"],
            description: "Color palette for pagination/sorting",
        },
        striped: {
            control: "boolean",
            description: "Whether the table has striped rows",
        },
        interactive: {
            control: "boolean",
            description: "Whether rows are hoverable",
        },
        pagination: {
            control: "boolean",
            description: "Enable pagination",
        },
        sortable: {
            control: "boolean",
            description: "Enable column sorting",
        },
        searchable: {
            control: "boolean",
            description: "Enable global search/filter",
        },
        pageSize: {
            control: "number",
            description: "Number of items per page",
        },
        searchPlaceholder: {
            control: "text",
            description: "Placeholder text for the search input",
        },
        caption: {
            control: "text",
            description: "Caption for the table",
        },
        emptyState: {
            control: false,
            description: "Custom empty state content",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: sampleData,
        columns: basicColumns,
        pagination: true,
        pageSize: 10,
    },
};

export const WithSearch: Story = {
    args: {
        data: sampleData,
        columns: basicColumns,
        searchable: true,
        searchPlaceholder: "Search users...",
    },
};

const getStatusColor = (status: string): 'green' | 'gray' | 'yellow' => {
    if (status === 'active') return 'green';
    if (status === 'inactive') return 'gray';
    return 'yellow';
};

const columnsWithStatus = [
    columnHelper.accessor('name', {header: 'Name'}),
    columnHelper.accessor('email', {header: 'Email'}),
    columnHelper.accessor('department', {header: 'Department'}),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (props) => {
            const status = String(props.getValue());
            return <XlpBadge colorPalette={getStatusColor(status)}>{status}</XlpBadge>;
        },
    }),
    columnHelper.accessor('joinDate', {header: 'Join Date'}),
];

export const WithStatusBadges: Story = {
    args: {
        data: sampleData.slice(0, 20),
        columns: columnsWithStatus,
        striped: true,
    },
};

const columnsWithActions = [
    columnHelper.accessor('name', {header: 'Name'}),
    columnHelper.accessor('email', {header: 'Email'}),
    columnHelper.accessor('role', {header: 'Role'}),
    columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: () => (
            <HStack gap={1}>
                <XlpIconButton icon={<FiEye/>} aria-label="View" size="sm" variant="ghost"/>
                <XlpIconButton icon={<FiEdit/>} aria-label="Edit" size="sm" variant="ghost"/>
                <XlpIconButton icon={<FiTrash/>} aria-label="Delete" size="sm" variant="ghost" colorPalette="red"/>
            </HStack>
        ),
    }),
];

export const WithActions: Story = {
    args: {
        data: sampleData.slice(0, 10),
        columns: columnsWithActions,
        pagination: false,
    },
};

export const Striped: Story = {
    args: {
        data: sampleData.slice(0, 15),
        columns: basicColumns,
        striped: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap={8}>
            <Box>
                <Box fontWeight="bold" mb={2}>Small</Box>
                <XlpDataTable data={sampleData.slice(0, 5)} columns={basicColumns} size="sm" pagination={false}/>
            </Box>
            <Box>
                <Box fontWeight="bold" mb={2}>Medium</Box>
                <XlpDataTable data={sampleData.slice(0, 5)} columns={basicColumns} size="md" pagination={false}/>
            </Box>
            <Box>
                <Box fontWeight="bold" mb={2}>Large</Box>
                <XlpDataTable data={sampleData.slice(0, 5)} columns={basicColumns} size="lg" pagination={false}/>
            </Box>
        </Box>
    ),
};

export const BorderRadiusVariants: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap={8}>
            {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
                <Box key={radius}>
                    <Box fontWeight="bold" mb={2}>borderRadius="{radius}"</Box>
                    <XlpDataTable
                        data={sampleData.slice(0, 3)}
                        columns={basicColumns}
                        borderRadius={radius}
                        variant="outline"
                        pagination={false}
                    />
                </Box>
            ))}
        </Box>
    ),
};

export const EmptyState: Story = {
    args: {
        data: [],
        columns: basicColumns,
        emptyState: (
            <Box textAlign="center" py={8}>
                <Box fontSize="lg" fontWeight="medium" mb={2}>No users found</Box>
                <Box color="text.tertiary">Try adjusting your search or filters</Box>
            </Box>
        ),
    },
};

export const FullFeatured: Story = {
    args: {
        data: sampleData,
        columns: columnsWithStatus,
        searchable: true,
        searchPlaceholder: "Search by name, email, department...",
        pagination: true,
        pageSize: 10,
        sortable: true,
        striped: true,
        interactive: true,
        borderRadius: "lg",
        variant: "outline",
        colorPalette: "blue",
    },
};

