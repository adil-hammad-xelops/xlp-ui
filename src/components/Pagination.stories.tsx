import type {Meta, StoryObj} from "@storybook/react";
import {XlpPagination} from "./Pagination";
import {useState} from "react";
import {Box} from "@chakra-ui/react";

const meta: Meta<typeof XlpPagination> = {
    title: "Components/Navigation/Pagination",
    component: XlpPagination,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
        colorPalette: {
            control: "select",
            options: ["gray", "blue", "green", "red", "purple", "teal"],
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl", "full"],
        },
        showFirstLast: {control: "boolean"},
        showPageInfo: {control: "boolean"},
        siblingCount: {control: "number"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationDemo = (props: Partial<React.ComponentProps<typeof XlpPagination>>) => {
    const [page, setPage] = useState(1);
    return (
        <XlpPagination
            currentPage={page}
            totalPages={10}
            onPageChange={setPage}
            {...props}
        />
    );
};

export const Default: Story = {
    render: () => <PaginationDemo/>,
};

export const WithPageInfo: Story = {
    render: () => (
        <PaginationDemo
            showPageInfo
            totalItems={100}
            itemsPerPage={10}
        />
    ),
};

export const Sizes: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap={6}>
            <PaginationDemo size="xs"/>
            <PaginationDemo size="sm"/>
            <PaginationDemo size="md"/>
            <PaginationDemo size="lg"/>
        </Box>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap={6}>
            <PaginationDemo colorPalette="blue"/>
            <PaginationDemo colorPalette="green"/>
            <PaginationDemo colorPalette="purple"/>
            <PaginationDemo colorPalette="teal"/>
        </Box>
    ),
};

export const BorderRadius: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" gap={6}>
            <PaginationDemo borderRadius="none"/>
            <PaginationDemo borderRadius="sm"/>
            <PaginationDemo borderRadius="md"/>
            <PaginationDemo borderRadius="lg"/>
            <PaginationDemo borderRadius="full"/>
        </Box>
    ),
};

export const ManyPages: Story = {
    render: () => {
        const [page, setPage] = useState(25);
        return (
            <XlpPagination
                currentPage={page}
                totalPages={50}
                onPageChange={setPage}
                siblingCount={2}
            />
        );
    },
};

export const WithoutFirstLast: Story = {
    render: () => <PaginationDemo showFirstLast={false}/>,
};

export const FewPages: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <XlpPagination
                currentPage={page}
                totalPages={3}
                onPageChange={setPage}
            />
        );
    },
};

