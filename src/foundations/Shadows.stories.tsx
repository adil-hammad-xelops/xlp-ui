// ============================================
// XLP UI - Foundations: Shadows Story
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {Box, Code, SimpleGrid, Text, VStack} from "@chakra-ui/react";

const meta: Meta = {
    title: "Foundations/Shadows",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "Shadow tokens provide elevation and depth to UI elements.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const shadowTokens = [
    {token: "xs", description: "Subtle shadow for small elements"},
    {token: "sm", description: "Light shadow for cards"},
    {token: "md", description: "Medium shadow for dropdowns"},
    {token: "lg", description: "Large shadow for modals"},
    {token: "xl", description: "Extra large shadow for popovers"},
    {token: "2xl", description: "Maximum elevation"},
];

export const ShadowScale: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow Scale</Text>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={8}>
                {shadowTokens.map(({token, description}) => (
                    <VStack key={token} align="start">
                        <Box
                            bg="bg.primary"
                            p={6}
                            borderRadius="lg"
                            shadow={token}
                            w="100%"
                        >
                            <Text fontWeight="bold" mb={1}>shadow="{token}"</Text>
                            <Text fontSize="sm" color="text.secondary">{description}</Text>
                        </Box>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    ),
};

export const NoShadow: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>No Shadow</Text>
            <Box
                bg="bg.primary"
                p={6}
                borderRadius="lg"
                border="1px solid"
                borderColor="border.default"
                maxW="300px"
            >
                <Text fontWeight="bold" mb={1}>shadow="none"</Text>
                <Text fontSize="sm" color="text.secondary">
                    Use borders instead of shadows for a flat design
                </Text>
            </Box>
        </Box>
    ),
};

export const InnerShadow: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Inner Shadow</Text>
            <Box
                bg="bg.secondary"
                p={6}
                borderRadius="lg"
                boxShadow="inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
                maxW="300px"
            >
                <Text fontWeight="bold" mb={1}>Inner Shadow</Text>
                <Text fontSize="sm" color="text.secondary">
                    Used for pressed states or inset elements
                </Text>
            </Box>
            <Code mt={4} display="block">
                boxShadow="inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
            </Code>
        </Box>
    ),
};

export const ShadowOnCards: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow on Cards</Text>
            <SimpleGrid columns={{base: 1, md: 3}} gap={6}>
                <Box
                    bg="bg.primary"
                    p={6}
                    borderRadius="xl"
                    shadow="sm"
                >
                    <Text fontWeight="bold" mb={2}>Basic Card</Text>
                    <Text fontSize="sm" color="text.secondary">
                        shadow="sm" - Good for default cards
                    </Text>
                </Box>
                <Box
                    bg="bg.primary"
                    p={6}
                    borderRadius="xl"
                    shadow="md"
                    transition="shadow 0.2s"
                    _hover={{shadow: "lg"}}
                    cursor="pointer"
                >
                    <Text fontWeight="bold" mb={2}>Hover Card</Text>
                    <Text fontSize="sm" color="text.secondary">
                        Hover to see shadow change
                    </Text>
                </Box>
                <Box
                    bg="bg.primary"
                    p={6}
                    borderRadius="xl"
                    shadow="xl"
                >
                    <Text fontWeight="bold" mb={2}>Elevated Card</Text>
                    <Text fontSize="sm" color="text.secondary">
                        shadow="xl" - For important elements
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    ),
};

export const ShadowOnModals: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow on Modals/Dialogs</Text>
            <Box position="relative" h="300px" bg="bg.secondary" borderRadius="lg" p={8}>
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="bg.primary"
                    p={8}
                    borderRadius="xl"
                    shadow="2xl"
                    maxW="400px"
                    w="90%"
                >
                    <Text fontWeight="bold" fontSize="lg" mb={2}>Modal Title</Text>
                    <Text fontSize="sm" color="text.secondary" mb={4}>
                        Modals use shadow="2xl" to create depth and focus attention.
                    </Text>
                    <Box
                        as="button"
                        bg="blue.500"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="md"
                        fontWeight="medium"
                    >
                        Close Modal
                    </Box>
                </Box>
            </Box>
        </Box>
    ),
};

export const ColoredShadows: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Colored Shadows</Text>
            <Text mb={4} color="text.secondary">
                Custom colored shadows for special effects.
            </Text>
            <SimpleGrid columns={{base: 1, md: 3}} gap={6}>
                <Box
                    bg="blue.500"
                    color="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="0 10px 40px -10px rgba(59, 130, 246, 0.5)"
                >
                    <Text fontWeight="bold">Blue Shadow</Text>
                </Box>
                <Box
                    bg="green.500"
                    color="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="0 10px 40px -10px rgba(16, 185, 129, 0.5)"
                >
                    <Text fontWeight="bold">Green Shadow</Text>
                </Box>
                <Box
                    bg="purple.500"
                    color="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="0 10px 40px -10px rgba(139, 92, 246, 0.5)"
                >
                    <Text fontWeight="bold">Purple Shadow</Text>
                </Box>
            </SimpleGrid>
        </Box>
    ),
};

