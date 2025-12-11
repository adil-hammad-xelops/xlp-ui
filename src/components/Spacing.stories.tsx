import type {Meta, StoryObj} from "@storybook/react";
import {spacingTokens, XlpContainer, XlpInset, XlpSpacer, XlpStack} from "./Spacing";
import {Box, Text} from "@chakra-ui/react";

const meta: Meta<typeof XlpStack> = {
    title: "Components/Layout/Spacing",
    component: XlpStack,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorBox = ({children, color = "blue.100"}: { children?: React.ReactNode; color?: string }) => (
    <Box bg={color} _dark={{bg: "blue.800"}} p={4} borderRadius="md">
        {children || <Text>Box</Text>}
    </Box>
);

export const SpacingTokens: Story = {
    render: () => (
        <Box>
            <Text fontWeight="bold" mb={4}>Spacing Scale (showing gap sizes)</Text>
            {['1', '2', '4', '6', '8', '12', '16'].map((size) => (
                <Box key={size} mb={4}>
                    <Text fontSize="sm" mb={2}>gap={size} ({spacingTokens[size as keyof typeof spacingTokens]})</Text>
                    <XlpStack direction="row" gap={size as keyof typeof spacingTokens}>
                        <ColorBox/>
                        <ColorBox/>
                        <ColorBox/>
                    </XlpStack>
                </Box>
            ))}
        </Box>
    ),
};

export const StackVertical: Story = {
    render: () => (
        <XlpStack gap="4">
            <ColorBox>Item 1</ColorBox>
            <ColorBox>Item 2</ColorBox>
            <ColorBox>Item 3</ColorBox>
        </XlpStack>
    ),
};

export const StackHorizontal: Story = {
    render: () => (
        <XlpStack direction="row" gap="4">
            <ColorBox>Item 1</ColorBox>
            <ColorBox>Item 2</ColorBox>
            <ColorBox>Item 3</ColorBox>
        </XlpStack>
    ),
};

export const StackWithAlignment: Story = {
    render: () => (
        <Box>
            <Text fontWeight="bold" mb={4}>Different Alignments</Text>
            <XlpStack gap="8">
                <Box>
                    <Text fontSize="sm" mb={2}>align="flex-start"</Text>
                    <XlpStack direction="row" gap="4" align="flex-start">
                        <Box bg="blue.100" _dark={{bg: "blue.800"}} p={2}>Small</Box>
                        <Box bg="blue.100" _dark={{bg: "blue.800"}} p={6}>Large</Box>
                        <Box bg="blue.100" _dark={{bg: "blue.800"}} p={4}>Medium</Box>
                    </XlpStack>
                </Box>
                <Box>
                    <Text fontSize="sm" mb={2}>align="center"</Text>
                    <XlpStack direction="row" gap="4" align="center">
                        <Box bg="green.100" _dark={{bg: "green.800"}} p={2}>Small</Box>
                        <Box bg="green.100" _dark={{bg: "green.800"}} p={6}>Large</Box>
                        <Box bg="green.100" _dark={{bg: "green.800"}} p={4}>Medium</Box>
                    </XlpStack>
                </Box>
                <Box>
                    <Text fontSize="sm" mb={2}>align="flex-end"</Text>
                    <XlpStack direction="row" gap="4" align="flex-end">
                        <Box bg="purple.100" _dark={{bg: "purple.800"}} p={2}>Small</Box>
                        <Box bg="purple.100" _dark={{bg: "purple.800"}} p={6}>Large</Box>
                        <Box bg="purple.100" _dark={{bg: "purple.800"}} p={4}>Medium</Box>
                    </XlpStack>
                </Box>
            </XlpStack>
        </Box>
    ),
};

export const Spacer: Story = {
    render: () => (
        <Box>
            <Text fontWeight="bold" mb={4}>Using XlpSpacer</Text>
            <Box bg="gray.100" _dark={{bg: "gray.800"}} p={4} borderRadius="md">
                <ColorBox>First Item</ColorBox>
                <XlpSpacer size="8"/>
                <ColorBox color="green.100">Second Item (with 2rem gap)</ColorBox>
                <XlpSpacer size="4"/>
                <ColorBox color="purple.100">Third Item (with 1rem gap)</ColorBox>
            </Box>
        </Box>
    ),
};

export const Container: Story = {
    render: () => (
        <Box>
            <Text fontWeight="bold" mb={4}>Container Widths</Text>
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <Box key={size} mb={4}>
                    <Text fontSize="sm" mb={2}>maxWidth="{size}"</Text>
                    <XlpContainer maxWidth={size}>
                        <Box bg="blue.100" _dark={{bg: "blue.800"}} p={4} borderRadius="md">
                            Container content (maxWidth: {size})
                        </Box>
                    </XlpContainer>
                </Box>
            ))}
        </Box>
    ),
};

export const Inset: Story = {
    render: () => (
        <Box>
            <Text fontWeight="bold" mb={4}>Inset (Padding)</Text>
            <XlpStack gap="4">
                <Box>
                    <Text fontSize="sm" mb={2}>all="4"</Text>
                    <Box bg="gray.200" _dark={{bg: "gray.700"}}>
                        <XlpInset all="4">
                            <Box bg="blue.100" _dark={{bg: "blue.800"}}>Content with padding</Box>
                        </XlpInset>
                    </Box>
                </Box>
                <Box>
                    <Text fontSize="sm" mb={2}>x="8" y="2"</Text>
                    <Box bg="gray.200" _dark={{bg: "gray.700"}}>
                        <XlpInset x="8" y="2">
                            <Box bg="green.100" _dark={{bg: "green.800"}}>Different horizontal/vertical</Box>
                        </XlpInset>
                    </Box>
                </Box>
                <Box>
                    <Text fontSize="sm" mb={2}>top="8" bottom="2"</Text>
                    <Box bg="gray.200" _dark={{bg: "gray.700"}}>
                        <XlpInset top="8" bottom="2" x="4">
                            <Box bg="purple.100" _dark={{bg: "purple.800"}}>Custom top/bottom</Box>
                        </XlpInset>
                    </Box>
                </Box>
            </XlpStack>
        </Box>
    ),
};

export const WrappingStack: Story = {
    render: () => (
        <Box maxW="400px">
            <Text fontWeight="bold" mb={4}>Wrapping Stack</Text>
            <XlpStack direction="row" gap="4" wrap>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Box key={i} bg="blue.100" _dark={{bg: "blue.800"}} p={4} borderRadius="md" minW="80px">
                        Item {i}
                    </Box>
                ))}
            </XlpStack>
        </Box>
    ),
};

