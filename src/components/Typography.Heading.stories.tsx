import type {Meta, StoryObj} from "@storybook/react";
import {XlpHeading} from "./Typography";
import {Box, VStack} from "@chakra-ui/react";

const meta: Meta<typeof XlpHeading> = {
    title: "Components/Typography/Heading",
    component: XlpHeading,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        as: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "tertiary", "success", "warning", "error", "info"],
        },
        weight: {
            control: "select",
            options: ["normal", "medium", "semibold", "bold", "extrabold"],
        },
        align: {
            control: "select",
            options: ["left", "center", "right", "justify"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a heading",
        as: "h2",
        size: "xl",
    },
};

export const AllSizes: Story = {
    render: () => (
        <VStack align="start" gap={4}>
            <XlpHeading size="5xl">Heading 5XL</XlpHeading>
            <XlpHeading size="4xl">Heading 4XL</XlpHeading>
            <XlpHeading size="3xl">Heading 3XL</XlpHeading>
            <XlpHeading size="2xl">Heading 2XL</XlpHeading>
            <XlpHeading size="xl">Heading XL</XlpHeading>
            <XlpHeading size="lg">Heading LG</XlpHeading>
            <XlpHeading size="md">Heading MD</XlpHeading>
            <XlpHeading size="sm">Heading SM</XlpHeading>
            <XlpHeading size="xs">Heading XS</XlpHeading>
        </VStack>
    ),
};

export const SemanticHeadings: Story = {
    render: () => (
        <VStack align="start" gap={4}>
            <XlpHeading as="h1" size="4xl">H1 - Page Title</XlpHeading>
            <XlpHeading as="h2" size="2xl">H2 - Section Title</XlpHeading>
            <XlpHeading as="h3" size="xl">H3 - Subsection Title</XlpHeading>
            <XlpHeading as="h4" size="lg">H4 - Card Title</XlpHeading>
            <XlpHeading as="h5" size="md">H5 - Small Title</XlpHeading>
            <XlpHeading as="h6" size="sm">H6 - Tiny Title</XlpHeading>
        </VStack>
    ),
};

export const Colors: Story = {
    render: () => (
        <VStack align="start" gap={4}>
            <XlpHeading color="primary">Primary Color</XlpHeading>
            <XlpHeading color="secondary">Secondary Color</XlpHeading>
            <XlpHeading color="tertiary">Tertiary Color</XlpHeading>
            <XlpHeading color="success">Success Color</XlpHeading>
            <XlpHeading color="warning">Warning Color</XlpHeading>
            <XlpHeading color="error">Error Color</XlpHeading>
            <XlpHeading color="info">Info Color</XlpHeading>
        </VStack>
    ),
};

export const Weights: Story = {
    render: () => (
        <VStack align="start" gap={4}>
            <XlpHeading weight="normal">Normal Weight</XlpHeading>
            <XlpHeading weight="medium">Medium Weight</XlpHeading>
            <XlpHeading weight="semibold">Semibold Weight</XlpHeading>
            <XlpHeading weight="bold">Bold Weight</XlpHeading>
            <XlpHeading weight="extrabold">Extrabold Weight</XlpHeading>
        </VStack>
    ),
};

export const Truncated: Story = {
    render: () => (
        <Box maxW="300px">
            <XlpHeading truncate>
                This is a very long heading that should be truncated when it exceeds the container width
            </XlpHeading>
        </Box>
    ),
};

