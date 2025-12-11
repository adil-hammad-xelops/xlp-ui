import type {Meta, StoryObj} from "@storybook/react";
import {XlpCard, XlpCardBody, XlpCardFooter, XlpCardHeader} from "./Card";
import {XlpButton} from "./Button";
import {Heading, Text} from "@chakra-ui/react";

const meta: Meta<typeof XlpCard> = {
    title: "Components/Data Display/Card",
    component: XlpCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["elevated", "outline", "subtle"],
            description: "The variant of the card",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <XlpCard style={{width: "320px"}}>
            <XlpCardHeader>
                <Heading size="md">Card Title</Heading>
            </XlpCardHeader>
            <XlpCardBody>
                <Text>This is the card content. You can put any content here.</Text>
            </XlpCardBody>
        </XlpCard>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <XlpCard variant="elevated" style={{width: "200px"}}>
                <XlpCardHeader>
                    <Heading size="sm">Elevated</Heading>
                </XlpCardHeader>
                <XlpCardBody>
                    <Text fontSize="sm">Card with shadow</Text>
                </XlpCardBody>
            </XlpCard>
            <XlpCard variant="outline" style={{width: "200px"}}>
                <XlpCardHeader>
                    <Heading size="sm">Outline</Heading>
                </XlpCardHeader>
                <XlpCardBody>
                    <Text fontSize="sm">Card with border</Text>
                </XlpCardBody>
            </XlpCard>
            <XlpCard variant="subtle" style={{width: "200px"}}>
                <XlpCardHeader>
                    <Heading size="sm">Subtle</Heading>
                </XlpCardHeader>
                <XlpCardBody>
                    <Text fontSize="sm">Subtle background</Text>
                </XlpCardBody>
            </XlpCard>
        </div>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <XlpCard style={{width: "320px"}}>
            <XlpCardHeader>
                <Heading size="md">Complete Card</Heading>
            </XlpCardHeader>
            <XlpCardBody>
                <Text>This card has a header, body, and footer with action buttons.</Text>
            </XlpCardBody>
            <XlpCardFooter>
                <div style={{display: "flex", gap: "0.5rem"}}>
                    <XlpButton variant="solid" colorPalette="blue">Accept</XlpButton>
                    <XlpButton variant="ghost">Cancel</XlpButton>
                </div>
            </XlpCardFooter>
        </XlpCard>
    ),
};

