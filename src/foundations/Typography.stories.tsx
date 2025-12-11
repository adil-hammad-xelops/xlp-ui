// ============================================
// XLP UI - Foundations: Typography Story
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {Box, Code, Heading, HStack, Text, VStack} from "@chakra-ui/react";

const meta: Meta = {
    title: "Foundations/Typography",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "Typography foundations define the text styles used throughout the design system.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const FontSizes: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Font Sizes</Heading>
            <VStack align="start" gap={4}>
                {[
                    {size: "xs", label: "xs (12px)"},
                    {size: "sm", label: "sm (14px)"},
                    {size: "md", label: "md (16px)"},
                    {size: "lg", label: "lg (18px)"},
                    {size: "xl", label: "xl (20px)"},
                    {size: "2xl", label: "2xl (24px)"},
                    {size: "3xl", label: "3xl (30px)"},
                    {size: "4xl", label: "4xl (36px)"},
                    {size: "5xl", label: "5xl (48px)"},
                    {size: "6xl", label: "6xl (60px)"},
                ].map(({size, label}) => (
                    <HStack key={size} gap={4} align="baseline">
                        <Code minW="100px">{label}</Code>
                        <Text fontSize={size}>The quick brown fox jumps over the lazy dog</Text>
                    </HStack>
                ))}
            </VStack>
        </Box>
    ),
};

export const FontWeights: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Font Weights</Heading>
            <VStack align="start" gap={4}>
                {[
                    {weight: "hairline", value: 100},
                    {weight: "thin", value: 200},
                    {weight: "light", value: 300},
                    {weight: "normal", value: 400},
                    {weight: "medium", value: 500},
                    {weight: "semibold", value: 600},
                    {weight: "bold", value: 700},
                    {weight: "extrabold", value: 800},
                    {weight: "black", value: 900},
                ].map(({weight, value}) => (
                    <HStack key={weight} gap={4} align="baseline">
                        <Code minW="120px">{weight} ({value})</Code>
                        <Text fontWeight={weight} fontSize="xl">
                            The quick brown fox jumps over the lazy dog
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Box>
    ),
};

export const HeadingSizes: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Heading Sizes</Heading>
            <VStack align="start" gap={6}>
                <Box>
                    <Code mb={2}>size="4xl"</Code>
                    <Heading size="4xl">Heading 4XL</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="3xl"</Code>
                    <Heading size="3xl">Heading 3XL</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="2xl"</Code>
                    <Heading size="2xl">Heading 2XL</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="xl"</Code>
                    <Heading size="xl">Heading XL</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="lg"</Code>
                    <Heading size="lg">Heading LG</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="md"</Code>
                    <Heading size="md">Heading MD</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="sm"</Code>
                    <Heading size="sm">Heading SM</Heading>
                </Box>
                <Box>
                    <Code mb={2}>size="xs"</Code>
                    <Heading size="xs">Heading XS</Heading>
                </Box>
            </VStack>
        </Box>
    ),
};

export const LineHeights: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Line Heights</Heading>
            <VStack align="start" gap={6}>
                {[
                    {name: "none", value: "1"},
                    {name: "shorter", value: "1.25"},
                    {name: "short", value: "1.375"},
                    {name: "base", value: "1.5"},
                    {name: "tall", value: "1.625"},
                    {name: "taller", value: "2"},
                ].map(({name, value}) => (
                    <Box key={name} maxW="500px">
                        <Code mb={2}>{name} ({value})</Code>
                        <Box p={4} bg="bg.secondary" borderRadius="md">
                            <Text lineHeight={name}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.
                            </Text>
                        </Box>
                    </Box>
                ))}
            </VStack>
        </Box>
    ),
};

export const LetterSpacing: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Letter Spacing</Heading>
            <VStack align="start" gap={4}>
                {[
                    {name: "tighter", value: "-0.05em"},
                    {name: "tight", value: "-0.025em"},
                    {name: "normal", value: "0"},
                    {name: "wide", value: "0.025em"},
                    {name: "wider", value: "0.05em"},
                    {name: "widest", value: "0.1em"},
                ].map(({name, value}) => (
                    <HStack key={name} gap={4} align="baseline">
                        <Code minW="140px">{name} ({value})</Code>
                        <Text letterSpacing={name} fontSize="lg">
                            LETTER SPACING EXAMPLE
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Box>
    ),
};

export const TextStyles: Story = {
    render: () => (
        <Box>
            <Heading size="xl" mb={6}>Text Styles</Heading>
            <VStack align="start" gap={6}>
                <Box>
                    <Text fontSize="xs" color="text.tertiary" textTransform="uppercase" letterSpacing="wider"
                          fontWeight="semibold" mb={1}>
                        Overline
                    </Text>
                    <Code>fontSize="xs" textTransform="uppercase" letterSpacing="wider"</Code>
                </Box>

                <Box>
                    <Heading size="2xl" mb={1}>Display</Heading>
                    <Code>Heading size="2xl"</Code>
                </Box>

                <Box>
                    <Heading size="lg" mb={1}>Title</Heading>
                    <Code>Heading size="lg"</Code>
                </Box>

                <Box>
                    <Text fontSize="md" mb={1}>Body text - Default paragraph text used for main content.</Text>
                    <Code>Text fontSize="md"</Code>
                </Box>

                <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1}>Label</Text>
                    <Code>fontSize="sm" fontWeight="medium"</Code>
                </Box>

                <Box>
                    <Text fontSize="xs" color="text.secondary" mb={1}>Caption - Supplementary information</Text>
                    <Code>fontSize="xs" color="text.secondary"</Code>
                </Box>
            </VStack>
        </Box>
    ),
};

