import type {Meta, StoryObj} from "@storybook/react";
import {XlpSkeleton, XlpSkeletonCircle, XlpSkeletonText} from "./Skeleton";
import {Box, Flex} from "@chakra-ui/react";

const meta: Meta<typeof XlpSkeleton> = {
    title: "Components/Feedback/Skeleton",
    component: XlpSkeleton,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        height: {control: "text"},
        width: {control: "text"},
        loading: {control: "boolean"},
        variant: {
            control: "select",
            options: ["pulse", "shine", "none"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: "20px",
        width: "200px",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "200px"}}>
            <XlpSkeleton variant="pulse" height="20px"/>
            <XlpSkeleton variant="shine" height="20px"/>
            <XlpSkeleton variant="none" height="20px"/>
        </div>
    ),
};

export const TextSkeleton: Story = {
    render: () => (
        <Box width="300px">
            <XlpSkeletonText noOfLines={4}/>
        </Box>
    ),
};

export const CircleSkeleton: Story = {
    render: () => (
        <Flex gap={4}>
            <XlpSkeletonCircle size="32px"/>
            <XlpSkeletonCircle size="48px"/>
            <XlpSkeletonCircle size="64px"/>
        </Flex>
    ),
};

export const CardSkeleton: Story = {
    render: () => (
        <Box width="300px" p={4} borderWidth="1px" borderRadius="lg">
            <Flex gap={4} mb={4}>
                <XlpSkeletonCircle size="48px"/>
                <Box flex="1">
                    <XlpSkeleton height="16px" width="120px" mb={2}/>
                    <XlpSkeleton height="12px" width="80px"/>
                </Box>
            </Flex>
            <XlpSkeletonText noOfLines={3}/>
        </Box>
    ),
};

export const LoadedState: Story = {
    render: () => (
        <Box width="200px">
            <XlpSkeleton loading={false} height="20px">
                <p>Content loaded!</p>
            </XlpSkeleton>
        </Box>
    ),
};

