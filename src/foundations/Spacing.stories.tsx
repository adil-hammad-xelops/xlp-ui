// ============================================
// XLP UI - Foundations: Spacing Story
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {Box, Code, Flex, SimpleGrid, Text, VStack} from "@chakra-ui/react";

const meta: Meta = {
    title: "Foundations/Spacing",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "Spacing tokens provide consistent spacing values across the design system.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const spacingScale = [
    {token: "0", value: "0px"},
    {token: "0.5", value: "2px"},
    {token: "1", value: "4px"},
    {token: "1.5", value: "6px"},
    {token: "2", value: "8px"},
    {token: "2.5", value: "10px"},
    {token: "3", value: "12px"},
    {token: "3.5", value: "14px"},
    {token: "4", value: "16px"},
    {token: "5", value: "20px"},
    {token: "6", value: "24px"},
    {token: "7", value: "28px"},
    {token: "8", value: "32px"},
    {token: "9", value: "36px"},
    {token: "10", value: "40px"},
    {token: "12", value: "48px"},
    {token: "14", value: "56px"},
    {token: "16", value: "64px"},
    {token: "20", value: "80px"},
    {token: "24", value: "96px"},
];

export const SpacingScale: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Spacing Scale</Text>
            <VStack align="stretch" gap={2}>
                {spacingScale.map(({token, value}) => (
                    <Flex key={token} align="center" gap={4}>
                        <Code minW="60px">{token}</Code>
                        <Text minW="60px" fontSize="sm" color="text.secondary">{value}</Text>
                        <Box
                            bg="blue.500"
                            h="24px"
                            w={token}
                            borderRadius="sm"
                        />
                    </Flex>
                ))}
            </VStack>
        </Box>
    ),
};

export const PaddingExamples: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Padding Examples</Text>
            <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
                {["2", "4", "6", "8"].map((p) => (
                    <Box key={p} bg="bg.secondary" borderRadius="md">
                        <Box p={p} bg="blue.100" _dark={{bg: "blue.900"}} borderRadius="md">
                            <Box bg="bg.primary" p={4} borderRadius="md">
                                <Text fontWeight="medium">p={p}</Text>
                                <Text fontSize="sm" color="text.secondary">
                                    {p === "2" && "8px"}
                                    {p === "4" && "16px"}
                                    {p === "6" && "24px"}
                                    {p === "8" && "32px"}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    ),
};

export const MarginExamples: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Margin Examples</Text>
            <Box bg="bg.secondary" p={4} borderRadius="md">
                <VStack align="start" gap={0}>
                    {["2", "4", "6", "8"].map((m) => (
                        <Box key={m} bg="blue.500" p={3} borderRadius="md" mb={m} color="white">
                            <Text fontWeight="medium">mb={m}</Text>
                        </Box>
                    ))}
                    <Box bg="green.500" p={3} borderRadius="md" color="white">
                        <Text fontWeight="medium">Last item (no margin)</Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    ),
};

export const GapExamples: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Gap Examples (Flex/Grid)</Text>
            <VStack align="stretch" gap={8}>
                {["2", "4", "6", "8"].map((gap) => (
                    <Box key={gap}>
                        <Code mb={2}>gap={gap}</Code>
                        <Flex gap={gap} bg="bg.secondary" p={4} borderRadius="md">
                            {[1, 2, 3, 4].map((i) => (
                                <Box key={i} bg="blue.500" p={3} borderRadius="md" color="white">
                                    Item {i}
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                ))}
            </VStack>
        </Box>
    ),
};

export const ResponsiveSpacing: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Responsive Spacing</Text>
            <Text mb={4} color="text.secondary">
                Spacing can be responsive using object syntax or array syntax.
            </Text>
            <Box mb={8}>
                <Code mb={2}>{"p={{ base: 2, md: 4, lg: 8 }}"}</Code>
                <Box
                    bg="blue.500"
                    color="white"
                    p={{base: 2, md: 4, lg: 8}}
                    borderRadius="md"
                >
                    <Text>Resize the window to see padding change</Text>
                </Box>
            </Box>
            <Box>
                <Code mb={2}>{"gap={{ base: 2, md: 4, lg: 6 }}"}</Code>
                <Flex
                    gap={{base: 2, md: 4, lg: 6}}
                    bg="bg.secondary"
                    p={4}
                    borderRadius="md"
                    flexWrap="wrap"
                >
                    {[1, 2, 3, 4].map((i) => (
                        <Box key={i} bg="green.500" p={3} borderRadius="md" color="white">
                            Item {i}
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    ),
};

export const NegativeSpacing: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Negative Spacing</Text>
            <Text mb={4} color="text.secondary">
                Use negative values for overlapping elements.
            </Text>
            <Box position="relative" h="100px" w="300px">
                <Box
                    position="absolute"
                    bg="blue.500"
                    w="80px"
                    h="80px"
                    borderRadius="md"
                    left="0"
                />
                <Box
                    position="absolute"
                    bg="green.500"
                    w="80px"
                    h="80px"
                    borderRadius="md"
                    left="60px"
                />
                <Box
                    position="absolute"
                    bg="purple.500"
                    w="80px"
                    h="80px"
                    borderRadius="md"
                    left="120px"
                />
            </Box>
            <Code mt={4}>Using negative margin: ml="-4"</Code>
        </Box>
    ),
};

