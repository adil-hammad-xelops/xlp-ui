import type {Meta, StoryObj} from "@storybook/react";
import {XlpAccordion} from "./Accordion";

const meta: Meta<typeof XlpAccordion> = {
    title: "Components/Disclosure/Accordion",
    component: XlpAccordion,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["outline", "elevated", "contained", "plain"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        multiple: {control: "boolean"},
        collapsible: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        value: "item-1",
        title: "What is XLP UI?",
        content: "XLP UI is a modern React component library built on top of Chakra UI, providing beautiful and accessible components for your applications.",
    },
    {
        value: "item-2",
        title: "How do I install it?",
        content: "You can install XLP UI using npm: npm install xlp-ui @chakra-ui/react @emotion/react",
    },
    {
        value: "item-3",
        title: "Is it accessible?",
        content: "Yes! XLP UI is built on Chakra UI which follows WAI-ARIA standards, ensuring all components are accessible by default.",
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        defaultValue: ["item-1"],
    },
    decorators: [(Story) => <div style={{width: "500px"}}><Story/></div>],
};

export const Multiple: Story = {
    args: {
        items: sampleItems,
        multiple: true,
        defaultValue: ["item-1", "item-2"],
    },
    decorators: [(Story) => <div style={{width: "500px"}}><Story/></div>],
};

export const Variants: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", width: "500px"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Outline</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="outline"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Subtle</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="subtle"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Enclosed</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="enclosed"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Plain</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="plain"/>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", width: "500px"}}>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Small</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} size="sm"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Medium</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} size="md"/>
            </div>
            <div>
                <p style={{marginBottom: "0.5rem", fontWeight: "bold"}}>Large</p>
                <XlpAccordion items={sampleItems.slice(0, 2)} size="lg"/>
            </div>
        </div>
    ),
};

export const WithDisabledItem: Story = {
    args: {
        items: [
            ...sampleItems.slice(0, 2),
            {value: "disabled", title: "Disabled Item", content: "This content is not accessible", disabled: true},
        ],
    },
    decorators: [(Story) => <div style={{width: "500px"}}><Story/></div>],
};

