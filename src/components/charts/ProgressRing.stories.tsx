// ============================================
// XLP UI - Charts: Progress Ring Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpLabeledProgress, XlpProgressRing, XlpSegmentedProgress} from "./ProgressRing";
import {Box, SimpleGrid, Text, VStack} from "@chakra-ui/react";

const meta: Meta<typeof XlpProgressRing> = {
    title: "Components/Visualization/ProgressRing",
    component: XlpProgressRing,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        value: {control: {type: "range", min: 0, max: 100}},
        size: {control: "number"},
        thickness: {control: "number"},
        colorPalette: {
            control: "select",
            options: ["blue", "green", "purple", "orange", "red"],
        },
        showValue: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 75,
        label: "Completed",
    },
};

export const Sizes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 2, md: 4}} gap={8}>
            <XlpProgressRing value={75} size={80} label="Small"/>
            <XlpProgressRing value={75} size={120} label="Medium"/>
            <XlpProgressRing value={75} size={160} label="Large"/>
            <XlpProgressRing value={75} size={200} label="XL"/>
        </SimpleGrid>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 2, md: 5}} gap={6}>
            <XlpProgressRing value={75} colorPalette="blue" label="Blue"/>
            <XlpProgressRing value={75} colorPalette="green" label="Green"/>
            <XlpProgressRing value={75} colorPalette="purple" label="Purple"/>
            <XlpProgressRing value={75} colorPalette="orange" label="Orange"/>
            <XlpProgressRing value={75} colorPalette="red" label="Red"/>
        </SimpleGrid>
    ),
};

export const Thickness: Story = {
    render: () => (
        <SimpleGrid columns={{base: 2, md: 4}} gap={6}>
            <XlpProgressRing value={75} thickness={4} label="Thin (4px)"/>
            <XlpProgressRing value={75} thickness={10} label="Medium (10px)"/>
            <XlpProgressRing value={75} thickness={20} label="Thick (20px)"/>
            <XlpProgressRing value={75} thickness={30} label="Extra Thick"/>
        </SimpleGrid>
    ),
};

export const CustomCenter: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={6}>
            <XlpProgressRing
                value={65}
                centerContent={
                    <VStack gap={0}>
                        <Text fontSize="2xl" fontWeight="bold">65</Text>
                        <Text fontSize="xs" color="text.secondary">Tasks</Text>
                    </VStack>
                }
                label="Tasks Completed"
            />
            <XlpProgressRing
                value={42}
                colorPalette="green"
                centerContent={
                    <VStack gap={0}>
                        <Text fontSize="xl" fontWeight="bold">$4.2K</Text>
                        <Text fontSize="xs" color="text.secondary">Revenue</Text>
                    </VStack>
                }
                label="Monthly Goal"
            />
            <XlpProgressRing
                value={88}
                colorPalette="purple"
                centerContent={
                    <VStack gap={0}>
                        <Text fontSize="2xl" fontWeight="bold">88%</Text>
                        <Text fontSize="xs" color="text.secondary">Score</Text>
                    </VStack>
                }
                label="Performance"
            />
        </SimpleGrid>
    ),
};

export const DifferentValues: Story = {
    render: () => (
        <SimpleGrid columns={{base: 3, md: 6}} gap={6}>
            {[0, 25, 50, 75, 90, 100].map((value) => (
                <XlpProgressRing key={value} value={value} size={80}/>
            ))}
        </SimpleGrid>
    ),
};

// Labeled Progress Stories
export const LabeledProgress: Story = {
    render: () => (
        <VStack gap={6} maxW="400px">
            <XlpLabeledProgress value={75} label="Project Progress"/>
            <XlpLabeledProgress value={45} label="Storage Used" colorPalette="purple"/>
            <XlpLabeledProgress value={90} label="Goal Achieved" colorPalette="green"/>
            <XlpLabeledProgress value={25} label="Tasks Completed" colorPalette="orange"/>
        </VStack>
    ),
};

export const LabeledProgressSizes: Story = {
    render: () => (
        <VStack gap={6} maxW="400px">
            <XlpLabeledProgress value={75} label="Small" size="sm"/>
            <XlpLabeledProgress value={75} label="Medium" size="md"/>
            <XlpLabeledProgress value={75} label="Large" size="lg"/>
        </VStack>
    ),
};

export const LabeledProgressRadius: Story = {
    render: () => (
        <VStack gap={6} maxW="400px">
            <XlpLabeledProgress value={75} label="No Radius" borderRadius="none"/>
            <XlpLabeledProgress value={75} label="Small Radius" borderRadius="sm"/>
            <XlpLabeledProgress value={75} label="Full Radius" borderRadius="full"/>
        </VStack>
    ),
};

// Segmented Progress Stories
export const SegmentedProgress: Story = {
    render: () => (
        <Box maxW="500px">
            <XlpSegmentedProgress
                segments={[
                    {value: 30, label: "Completed", color: "#10B981"},
                    {value: 45, label: "In Progress", color: "#3B82F6"},
                    {value: 25, label: "Pending", color: "#F59E0B"},
                ]}
            />
        </Box>
    ),
};

export const SegmentedProgressVariants: Story = {
    render: () => (
        <VStack gap={8} maxW="500px">
            <Box w="100%">
                <Text fontWeight="medium" mb={3}>Task Status</Text>
                <XlpSegmentedProgress
                    segments={[
                        {value: 45, label: "Done"},
                        {value: 30, label: "In Progress"},
                        {value: 25, label: "Todo"},
                    ]}
                />
            </Box>
            <Box w="100%">
                <Text fontWeight="medium" mb={3}>Budget Allocation</Text>
                <XlpSegmentedProgress
                    segments={[
                        {value: 40, label: "Marketing", color: "#8B5CF6"},
                        {value: 35, label: "Development", color: "#06B6D4"},
                        {value: 25, label: "Operations", color: "#F59E0B"},
                    ]}
                    height={12}
                    borderRadius="md"
                />
            </Box>
            <Box w="100%">
                <Text fontWeight="medium" mb={3}>Storage Usage</Text>
                <XlpSegmentedProgress
                    segments={[
                        {value: 50, label: "Documents", color: "#3B82F6"},
                        {value: 30, label: "Images", color: "#10B981"},
                        {value: 15, label: "Videos", color: "#EF4444"},
                        {value: 5, label: "Other", color: "#6B7280"},
                    ]}
                />
            </Box>
        </VStack>
    ),
};

export const Dashboard: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <XlpProgressRing
                    value={78}
                    colorPalette="blue"
                    centerContent={
                        <VStack gap={0}>
                            <Text fontSize="xl" fontWeight="bold">78%</Text>
                        </VStack>
                    }
                    label="CPU Usage"
                />
            </Box>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <XlpProgressRing
                    value={45}
                    colorPalette="green"
                    centerContent={
                        <VStack gap={0}>
                            <Text fontSize="xl" fontWeight="bold">45%</Text>
                        </VStack>
                    }
                    label="Memory"
                />
            </Box>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <XlpProgressRing
                    value={92}
                    colorPalette="orange"
                    centerContent={
                        <VStack gap={0}>
                            <Text fontSize="xl" fontWeight="bold">92%</Text>
                        </VStack>
                    }
                    label="Disk Space"
                />
            </Box>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <XlpProgressRing
                    value={23}
                    colorPalette="purple"
                    centerContent={
                        <VStack gap={0}>
                            <Text fontSize="xl" fontWeight="bold">23%</Text>
                        </VStack>
                    }
                    label="Bandwidth"
                />
            </Box>
        </SimpleGrid>
    ),
};

