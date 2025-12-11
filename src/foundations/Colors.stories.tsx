// ============================================
// XLP UI - Foundations: Color Palette Story
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {Box, Flex, SimpleGrid, Text} from "@chakra-ui/react";

const ColorSwatch = ({
                         color,
                         name,
                         hex
                     }: {
    color: string;
    name: string;
    hex?: string;
}) => (
    <Box>
        <Box
            bg={color}
            h="60px"
            w="100%"
            borderRadius="md"
            border="1px solid"
            borderColor="border.default"
        />
        <Text fontSize="sm" fontWeight="medium" mt={2}>
            {name}
        </Text>
        {hex && (
            <Text fontSize="xs" color="text.tertiary">
                {hex}
            </Text>
        )}
    </Box>
);

const ColorScale = ({
                        colorName,
                        shades
                    }: {
    colorName: string;
    shades: number[];
}) => (
    <Box mb={8}>
        <Text fontSize="lg" fontWeight="bold" mb={4} textTransform="capitalize">
            {colorName}
        </Text>
        <SimpleGrid columns={{base: 5, md: 10}} gap={2}>
            {shades.map((shade) => (
                <ColorSwatch
                    key={shade}
                    color={`${colorName}.${shade}`}
                    name={`${shade}`}
                />
            ))}
        </SimpleGrid>
    </Box>
);

const meta: Meta = {
    title: "Foundations/Colors",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "The color system provides a consistent palette across the design system.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const ColorPalette: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Color Palette
            </Text>
            <ColorScale colorName="gray" shades={shades}/>
            <ColorScale colorName="red" shades={shades}/>
            <ColorScale colorName="orange" shades={shades}/>
            <ColorScale colorName="yellow" shades={shades}/>
            <ColorScale colorName="green" shades={shades}/>
            <ColorScale colorName="teal" shades={shades}/>
            <ColorScale colorName="blue" shades={shades}/>
            <ColorScale colorName="cyan" shades={shades}/>
            <ColorScale colorName="purple" shades={shades}/>
            <ColorScale colorName="pink" shades={shades}/>
        </Box>
    ),
};

export const SemanticColors: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Semantic Colors
            </Text>

            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Background
            </Text>
            <SimpleGrid columns={{base: 2, md: 4}} gap={4} mb={8}>
                <ColorSwatch color="bg.primary" name="bg.primary"/>
                <ColorSwatch color="bg.secondary" name="bg.secondary"/>
                <ColorSwatch color="bg.tertiary" name="bg.tertiary"/>
                <ColorSwatch color="bg.muted" name="bg.muted"/>
            </SimpleGrid>

            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Text
            </Text>
            <SimpleGrid columns={{base: 2, md: 4}} gap={4} mb={8}>
                <Box>
                    <Box bg="bg.tertiary" p={4} borderRadius="md">
                        <Text color="text.primary">text.primary</Text>
                    </Box>
                </Box>
                <Box>
                    <Box bg="bg.tertiary" p={4} borderRadius="md">
                        <Text color="text.secondary">text.secondary</Text>
                    </Box>
                </Box>
                <Box>
                    <Box bg="bg.tertiary" p={4} borderRadius="md">
                        <Text color="text.tertiary">text.tertiary</Text>
                    </Box>
                </Box>
                <Box>
                    <Box bg="bg.tertiary" p={4} borderRadius="md">
                        <Text color="text.muted">text.muted</Text>
                    </Box>
                </Box>
            </SimpleGrid>

            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Border
            </Text>
            <SimpleGrid columns={{base: 2, md: 4}} gap={4} mb={8}>
                <Box p={4} border="2px solid" borderColor="border.default" borderRadius="md">
                    <Text fontSize="sm">border.default</Text>
                </Box>
                <Box p={4} border="2px solid" borderColor="border.hover" borderRadius="md">
                    <Text fontSize="sm">border.hover</Text>
                </Box>
                <Box p={4} border="2px solid" borderColor="border.focus" borderRadius="md">
                    <Text fontSize="sm">border.focus</Text>
                </Box>
            </SimpleGrid>

            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Accent / Status
            </Text>
            <SimpleGrid columns={{base: 2, md: 6}} gap={4}>
                <ColorSwatch color="accent.primary" name="Primary"/>
                <ColorSwatch color="accent.secondary" name="Secondary"/>
                <ColorSwatch color="accent.success" name="Success"/>
                <ColorSwatch color="accent.warning" name="Warning"/>
                <ColorSwatch color="accent.error" name="Error"/>
                <ColorSwatch color="accent.info" name="Info"/>
            </SimpleGrid>
        </Box>
    ),
};

export const DarkModePreview: Story = {
    render: () => (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Dark Mode Comparison
            </Text>
            <Flex gap={4} flexWrap="wrap">
                <Box flex="1" minW="300px">
                    <Text fontWeight="semibold" mb={4}>Light Mode</Text>
                    <Box bg="white" p={6} borderRadius="lg" border="1px solid" borderColor="gray.200">
                        <Box bg="#F8FAFC" p={4} borderRadius="md" mb={4}>
                            <Text color="#0F172A" fontWeight="medium">Primary Text</Text>
                            <Text color="#475569" fontSize="sm">Secondary Text</Text>
                            <Text color="#94A3B8" fontSize="xs">Tertiary Text</Text>
                        </Box>
                        <Flex gap={2}>
                            <Box bg="#3B82F6" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Primary</Box>
                            <Box bg="#10B981" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Success</Box>
                            <Box bg="#EF4444" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Error</Box>
                        </Flex>
                    </Box>
                </Box>
                <Box flex="1" minW="300px">
                    <Text fontWeight="semibold" mb={4}>Dark Mode</Text>
                    <Box bg="#0F172A" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                        <Box bg="#1E293B" p={4} borderRadius="md" mb={4}>
                            <Text color="#F8FAFC" fontWeight="medium">Primary Text</Text>
                            <Text color="#CBD5E1" fontSize="sm">Secondary Text</Text>
                            <Text color="#64748B" fontSize="xs">Tertiary Text</Text>
                        </Box>
                        <Flex gap={2}>
                            <Box bg="#60A5FA" color="#0F172A" px={3} py={1} borderRadius="md"
                                 fontSize="sm">Primary</Box>
                            <Box bg="#34D399" color="#0F172A" px={3} py={1} borderRadius="md"
                                 fontSize="sm">Success</Box>
                            <Box bg="#F87171" color="#0F172A" px={3} py={1} borderRadius="md" fontSize="sm">Error</Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    ),
};

