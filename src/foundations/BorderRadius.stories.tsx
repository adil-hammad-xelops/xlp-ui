// ============================================
// XLP UI - Foundations: Border Radius Story
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {Box, Code, HStack, Input, SimpleGrid, Text, VStack} from "@chakra-ui/react";

const meta: Meta = {
    title: "Foundations/Radii",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "Border radius tokens provide consistent rounding across the design system.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const radiusTokens = [
    {token: "none", value: "0"},
    {token: "xs", value: "2px"},
    {token: "sm", value: "4px"},
    {token: "md", value: "6px"},
    {token: "lg", value: "8px"},
    {token: "xl", value: "12px"},
    {token: "2xl", value: "16px"},
    {token: "3xl", value: "24px"},
    {token: "full", value: "9999px"},
];

export const RadiusScale: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Border Radius Scale</Text>
            <SimpleGrid columns={{base: 2, md: 3, lg: 5}} gap={6}>
                {radiusTokens.map(({token, value}) => (
                    <VStack key={token} align="center">
                        <Box
                            bg="blue.500"
                            w="80px"
                            h="80px"
                            borderRadius={token}
                        />
                        <Text fontWeight="medium">{token}</Text>
                        <Text fontSize="sm" color="text.secondary">{value}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    ),
};

export const RadiusOnCards: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Cards</Text>
            <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
                {["none", "md", "lg", "xl", "2xl"].map((radius) => (
                    <Box
                        key={radius}
                        bg="bg.secondary"
                        p={6}
                        borderRadius={radius}
                        border="1px solid"
                        borderColor="border.default"
                    >
                        <Text fontWeight="bold" mb={2}>Card Title</Text>
                        <Text fontSize="sm" color="text.secondary" mb={4}>
                            This card uses borderRadius="{radius}"
                        </Text>
                        <Code fontSize="xs">borderRadius="{radius}"</Code>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    ),
};

export const RadiusOnButtons: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Buttons</Text>
            <HStack gap={4} flexWrap="wrap">
                {["none", "sm", "md", "lg", "xl", "full"].map((radius) => (
                    <Box
                        key={radius}
                        as="button"
                        bg="blue.500"
                        color="white"
                        px={6}
                        py={3}
                        borderRadius={radius}
                        fontWeight="medium"
                        _hover={{bg: "blue.600"}}
                    >
                        {radius}
                    </Box>
                ))}
            </HStack>
        </Box>
    ),
};

export const RadiusOnAvatars: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Avatars/Images</Text>
            <HStack gap={6} flexWrap="wrap">
                {["none", "md", "lg", "xl", "full"].map((radius) => (
                    <VStack key={radius}>
                        <Box
                            bg="purple.500"
                            w="64px"
                            h="64px"
                            borderRadius={radius}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="white"
                            fontWeight="bold"
                        >
                            JD
                        </Box>
                        <Code fontSize="xs">{radius}</Code>
                    </VStack>
                ))}
            </HStack>
        </Box>
    ),
};

export const RadiusOnInputs: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Inputs</Text>
            <VStack align="stretch" gap={4} maxW="400px">
                {["none", "sm", "md", "lg", "xl", "full"].map((radius) => (
                    <Box key={radius}>
                        <Code fontSize="xs" mb={1}>{radius}</Code>
                        <Input
                            placeholder={`borderRadius="${radius}"`}
                            borderRadius={radius}
                        />
                    </Box>
                ))}
            </VStack>
        </Box>
    ),
};

export const MixedRadius: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Mixed Border Radius</Text>
            <Text mb={4} color="text.secondary">
                You can apply different radius to each corner.
            </Text>
            <SimpleGrid columns={{base: 1, md: 2}} gap={6}>
                <Box>
                    <Code mb={2}>borderTopRadius="xl"</Code>
                    <Box
                        bg="blue.500"
                        h="80px"
                        borderTopRadius="xl"
                    />
                </Box>
                <Box>
                    <Code mb={2}>borderBottomRadius="xl"</Code>
                    <Box
                        bg="green.500"
                        h="80px"
                        borderBottomRadius="xl"
                    />
                </Box>
                <Box>
                    <Code mb={2}>borderLeftRadius="xl"</Code>
                    <Box
                        bg="purple.500"
                        h="80px"
                        borderLeftRadius="xl"
                    />
                </Box>
                <Box>
                    <Code mb={2}>borderRightRadius="xl"</Code>
                    <Box
                        bg="orange.500"
                        h="80px"
                        borderRightRadius="xl"
                    />
                </Box>
            </SimpleGrid>
        </Box>
    ),
};

