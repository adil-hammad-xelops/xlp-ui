// ============================================
// XLP UI - Combobox Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {type ComboboxOption, XlpCombobox} from "./Combobox";
import {useState} from "react";
import {Box, VStack} from "@chakra-ui/react";
import {FiGlobe, FiMail, FiMapPin, FiPhone, FiUser} from "react-icons/fi";

const meta: Meta<typeof XlpCombobox> = {
    title: "Components/Form/Combobox",
    component: XlpCombobox,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl", "full"],
        },
        colorPalette: {
            control: "select",
            options: ["blue", "green", "purple", "teal", "gray"],
        },
        disabled: {control: "boolean"},
        clearable: {control: "boolean"},
        creatable: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const countries: ComboboxOption[] = [
    {value: "us", label: "United States"},
    {value: "uk", label: "United Kingdom"},
    {value: "fr", label: "France"},
    {value: "de", label: "Germany"},
    {value: "es", label: "Spain"},
    {value: "it", label: "Italy"},
    {value: "jp", label: "Japan"},
    {value: "cn", label: "China"},
    {value: "kr", label: "South Korea"},
    {value: "br", label: "Brazil"},
    {value: "mx", label: "Mexico"},
    {value: "ca", label: "Canada"},
    {value: "au", label: "Australia"},
    {value: "in", label: "India"},
];

const ComboboxDemo = (props: Partial<React.ComponentProps<typeof XlpCombobox>>) => {
    const [value, setValue] = useState<string | null>(null);
    return (
        <Box w="300px">
            <XlpCombobox
                options={countries}
                value={value ?? undefined}
                onChange={(v) => setValue(v)}
                placeholder="Select a country..."
                {...props}
            />
        </Box>
    );
};

export const Default: Story = {
    render: () => <ComboboxDemo/>,
};

export const WithLabel: Story = {
    render: () => (
        <ComboboxDemo
            label="Country"
            helperText="Select your country of residence"
        />
    ),
};

export const WithError: Story = {
    render: () => (
        <ComboboxDemo
            label="Country"
            error="This field is required"
        />
    ),
};

export const Sizes: Story = {
    render: () => (
        <VStack gap={4} w="300px">
            <ComboboxDemo size="sm" placeholder="Small"/>
            <ComboboxDemo size="md" placeholder="Medium"/>
            <ComboboxDemo size="lg" placeholder="Large"/>
        </VStack>
    ),
};

export const BorderRadius: Story = {
    render: () => (
        <VStack gap={4} w="300px">
            <ComboboxDemo borderRadius="none" placeholder="No radius"/>
            <ComboboxDemo borderRadius="md" placeholder="Medium radius"/>
            <ComboboxDemo borderRadius="full" placeholder="Full radius"/>
        </VStack>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <VStack gap={4} w="300px">
            <ComboboxDemo colorPalette="blue" placeholder="Blue"/>
            <ComboboxDemo colorPalette="green" placeholder="Green"/>
            <ComboboxDemo colorPalette="purple" placeholder="Purple"/>
            <ComboboxDemo colorPalette="teal" placeholder="Teal"/>
        </VStack>
    ),
};

export const Disabled: Story = {
    render: () => <ComboboxDemo disabled placeholder="Disabled"/>,
};

export const NotClearable: Story = {
    render: () => <ComboboxDemo clearable={false} placeholder="Not clearable"/>,
};

const CreatableDemo = () => {
    const [options, setOptions] = useState<ComboboxOption[]>([
        {value: "react", label: "React"},
        {value: "vue", label: "Vue"},
        {value: "angular", label: "Angular"},
        {value: "svelte", label: "Svelte"},
    ]);
    const [value, setValue] = useState<string | null>(null);

    const handleCreate = (newValue: string) => {
        const newOption = {value: newValue.toLowerCase(), label: newValue};
        setOptions([...options, newOption]);
        setValue(newOption.value);
    };

    return (
        <Box w="300px">
            <XlpCombobox
                options={options}
                value={value ?? undefined}
                onChange={(v) => setValue(v)}
                placeholder="Select or create..."
                creatable
                onCreate={handleCreate}
                label="Framework"
                helperText="Select a framework or create a new one"
            />
        </Box>
    );
};

export const Creatable: Story = {
    render: () => <CreatableDemo/>,
};

const optionsWithIcons: ComboboxOption[] = [
    {value: "user", label: "Profile", icon: <FiUser/>},
    {value: "email", label: "Email", icon: <FiMail/>},
    {value: "phone", label: "Phone", icon: <FiPhone/>},
    {value: "address", label: "Address", icon: <FiMapPin/>},
    {value: "website", label: "Website", icon: <FiGlobe/>},
];

const WithIconsDemo = () => {
    const [value, setValue] = useState<string | null>(null);
    return (
        <Box w="300px">
            <XlpCombobox
                options={optionsWithIcons}
                value={value ?? undefined}
                onChange={(v) => setValue(v)}
                placeholder="Select field type..."
                label="Field Type"
            />
        </Box>
    );
};

export const WithIcons: Story = {
    render: () => <WithIconsDemo/>,
};

const optionsWithDisabled: ComboboxOption[] = [
    {value: "free", label: "Free Plan"},
    {value: "basic", label: "Basic Plan"},
    {value: "pro", label: "Pro Plan", disabled: true},
    {value: "enterprise", label: "Enterprise Plan", disabled: true},
];

const WithDisabledOptionsDemo = () => {
    const [value, setValue] = useState<string | null>(null);
    return (
        <Box w="300px">
            <XlpCombobox
                options={optionsWithDisabled}
                value={value ?? undefined}
                onChange={(v) => setValue(v)}
                placeholder="Select plan..."
                label="Subscription Plan"
                helperText="Pro and Enterprise plans are coming soon"
            />
        </Box>
    );
};

export const WithDisabledOptions: Story = {
    render: () => <WithDisabledOptionsDemo/>,
};

const ManyOptionsDemo = () => {
    const [value, setValue] = useState<string | null>(null);
    const manyOptions = Array.from({length: 100}, (_, i) => ({
        value: `option-${i}`,
        label: `Option ${i + 1}`,
    }));
    return (
        <Box w="300px">
            <XlpCombobox
                options={manyOptions}
                value={value ?? undefined}
                onChange={(v) => setValue(v)}
                placeholder="Search 100 options..."
                maxDropdownHeight={250}
            />
        </Box>
    );
};

export const ManyOptions: Story = {
    render: () => <ManyOptionsDemo/>,
};
