import type {Meta, StoryObj} from "@storybook/react";
import {XlpCode, XlpDisplay, XlpLink, XlpText} from "./Typography";
import {Box, HStack, VStack} from "@chakra-ui/react";

const meta: Meta<typeof XlpText> = {
    title: "Components/Typography/Text",
    component: XlpText,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        variant: {
            control: "select",
            options: ["body", "label", "caption", "overline"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "tertiary", "success", "warning", "error", "info"],
        },
        weight: {
            control: "select",
            options: ["normal", "medium", "semibold", "bold", "extrabold"],
        },
        muted: {control: "boolean"},
        truncate: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a paragraph of text.",
        size: "md",
        variant: "body",
    },
};

export const Sizes: Story = {
    render: () => (
        <VStack align="start" gap={3}>
            <XlpText size="2xl">Text 2XL - Extra Large</XlpText>
            <XlpText size="xl">Text XL - Large</XlpText>
            <XlpText size="lg">Text LG - Medium Large</XlpText>
            <XlpText size="md">Text MD - Medium (Default)</XlpText>
            <XlpText size="sm">Text SM - Small</XlpText>
            <XlpText size="xs">Text XS - Extra Small</XlpText>
        </VStack>
    ),
};

export const Variants: Story = {
    render: () => (
        <VStack align="start" gap={4}>
            <Box>
                <XlpText variant="overline">OVERLINE TEXT</XlpText>
                <XlpText variant="body">This is body text used for main content and paragraphs.</XlpText>
            </Box>
            <XlpText variant="label">Label Text - For form labels</XlpText>
            <XlpText variant="caption">Caption text - For supplementary information</XlpText>
        </VStack>
    ),
};

export const MutedText: Story = {
    render: () => (
        <VStack align="start" gap={3}>
            <XlpText>Normal text with full opacity</XlpText>
            <XlpText muted>Muted text for secondary information</XlpText>
        </VStack>
    ),
};

export const LineClamp: Story = {
    render: () => (
        <Box maxW="300px">
            <XlpText lineClamp={2}>
                This is a long paragraph that demonstrates line clamping.
                It should be truncated after two lines with an ellipsis.
                This text continues beyond the visible area to show the effect.
            </XlpText>
        </Box>
    ),
};

// Display Stories
export const Display: Story = {
    render: () => (
        <VStack align="start" gap={6}>
            <XlpDisplay size="xl">Display XL</XlpDisplay>
            <XlpDisplay size="lg">Display LG</XlpDisplay>
            <XlpDisplay size="md">Display MD</XlpDisplay>
            <XlpDisplay size="sm">Display SM</XlpDisplay>
        </VStack>
    ),
};

// Code Stories
export const CodeInline: Story = {
    render: () => (
        <XlpText>
            Use the <XlpCode>npm install xlp-ui</XlpCode> command to install the package.
        </XlpText>
    ),
};

export const CodeBlock: Story = {
    render: () => (
        <Box maxW="400px">
            <XlpCode block>
                {`import { XlpButton } from 'xlp-ui';

function App() {
  return (
    <XlpButton colorPalette="blue">
      Click me
    </XlpButton>
  );
}`}
            </XlpCode>
        </Box>
    ),
};

// Link Stories
export const Links: Story = {
    render: () => (
        <VStack align="start" gap={3}>
            <XlpLink href="#">Default link with hover underline</XlpLink>
            <XlpLink href="#" underline="always">Always underlined link</XlpLink>
            <XlpLink href="#" underline="none">No underline link</XlpLink>
            <XlpLink href="https://example.com" external>External link (opens in new tab)</XlpLink>
        </VStack>
    ),
};

export const LinkColors: Story = {
    render: () => (
        <HStack gap={4}>
            <XlpLink href="#" colorPalette="blue">Blue Link</XlpLink>
            <XlpLink href="#" colorPalette="teal">Teal Link</XlpLink>
            <XlpLink href="#" colorPalette="purple">Purple Link</XlpLink>
            <XlpLink href="#" colorPalette="gray">Gray Link</XlpLink>
        </HStack>
    ),
};

