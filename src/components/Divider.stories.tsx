import type {Meta, StoryObj} from "@storybook/react";
import {XlpDivider} from "./Divider";
import {Box, Flex, Text} from "@chakra-ui/react";

const meta: Meta<typeof XlpDivider> = {
    title: "Components/Layout/Divider",
    component: XlpDivider,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
        },
        variant: {
            control: "select",
            options: ["solid", "dashed", "dotted"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [(Story) => <Box width="300px"><Story/></Box>],
};

export const Variants: Story = {
    render: () => (
        <Box width="300px">
            <Flex direction="column" gap={4}>
                <Box>
                    <Text mb={2}>Solid</Text>
                    <XlpDivider variant="solid"/>
                </Box>
                <Box>
                    <Text mb={2}>Dashed</Text>
                    <XlpDivider variant="dashed"/>
                </Box>
                <Box>
                    <Text mb={2}>Dotted</Text>
                    <XlpDivider variant="dotted"/>
                </Box>
            </Flex>
        </Box>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Box width="300px">
            <Flex direction="column" gap={4}>
                <Box>
                    <Text mb={2}>Extra Small</Text>
                    <XlpDivider size="xs"/>
                </Box>
                <Box>
                    <Text mb={2}>Small</Text>
                    <XlpDivider size="sm"/>
                </Box>
                <Box>
                    <Text mb={2}>Medium</Text>
                    <XlpDivider size="md"/>
                </Box>
                <Box>
                    <Text mb={2}>Large</Text>
                    <XlpDivider size="lg"/>
                </Box>
            </Flex>
        </Box>
    ),
};

export const Vertical: Story = {
    render: () => (
        <Flex height="100px" align="center" gap={4}>
            <Text>Section 1</Text>
            <XlpDivider orientation="vertical"/>
            <Text>Section 2</Text>
            <XlpDivider orientation="vertical"/>
            <Text>Section 3</Text>
        </Flex>
    ),
};

export const InContent: Story = {
    render: () => (
        <Box width="400px" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold" mb={2}>Section Header</Text>
            <Text fontSize="sm" mb={4}>Some content in this section explaining something important.</Text>
            <XlpDivider/>
            <Text fontWeight="bold" mt={4} mb={2}>Another Section</Text>
            <Text fontSize="sm">More content in this section with additional information.</Text>
        </Box>
    ),
};

