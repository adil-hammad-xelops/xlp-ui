// ============================================
// XLP UI - Charts: Stat Card Stories
// ============================================

import type {Meta, StoryObj} from "@storybook/react";
import {XlpSparkline, XlpStatCard} from "./StatCard";
import {Box, HStack, SimpleGrid} from "@chakra-ui/react";
import {FiActivity, FiDollarSign, FiShoppingCart, FiTrendingUp, FiUsers} from "react-icons/fi";

const meta: Meta<typeof XlpStatCard> = {
    title: "Components/Visualization/StatCard",
    component: XlpStatCard,
    parameters: {layout: "padded"},
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["solid", "outline", "subtle"],
        },
        colorPalette: {
            control: "select",
            options: ["blue", "green", "purple", "orange", "red", "gray"],
        },
        borderRadius: {
            control: "select",
            options: ["none", "sm", "md", "lg", "xl", "2xl"],
        },
        showTrend: {control: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Total Revenue",
        value: "$45,231",
        change: 12.5,
        changeLabel: "vs last month",
        icon: <FiDollarSign size={24}/>,
    },
};

export const Variants: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={6}>
            <XlpStatCard
                label="Total Revenue"
                value="$45,231"
                change={12.5}
                icon={<FiDollarSign size={24}/>}
                variant="outline"
            />
            <XlpStatCard
                label="Total Revenue"
                value="$45,231"
                change={12.5}
                icon={<FiDollarSign size={24}/>}
                variant="subtle"
                colorPalette="blue"
            />
            <XlpStatCard
                label="Total Revenue"
                value="$45,231"
                change={12.5}
                icon={<FiDollarSign size={24}/>}
                variant="solid"
                colorPalette="blue"
            />
        </SimpleGrid>
    ),
};

export const ColorPalettes: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={6}>
            <XlpStatCard
                label="Users"
                value="1,234"
                change={8.2}
                icon={<FiUsers size={24}/>}
                colorPalette="blue"
                variant="subtle"
            />
            <XlpStatCard
                label="Revenue"
                value="$45,231"
                change={12.5}
                icon={<FiDollarSign size={24}/>}
                colorPalette="green"
                variant="subtle"
            />
            <XlpStatCard
                label="Orders"
                value="892"
                change={-3.2}
                icon={<FiShoppingCart size={24}/>}
                colorPalette="purple"
                variant="subtle"
            />
            <XlpStatCard
                label="Growth"
                value="23.5%"
                change={5.1}
                icon={<FiTrendingUp size={24}/>}
                colorPalette="orange"
                variant="subtle"
            />
            <XlpStatCard
                label="Bounce Rate"
                value="42.3%"
                change={-8.4}
                icon={<FiActivity size={24}/>}
                colorPalette="red"
                variant="subtle"
            />
        </SimpleGrid>
    ),
};

export const SolidVariants: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
            <XlpStatCard
                label="Users"
                value="1,234"
                change={8.2}
                icon={<FiUsers size={24}/>}
                colorPalette="blue"
                variant="solid"
            />
            <XlpStatCard
                label="Revenue"
                value="$45,231"
                change={12.5}
                icon={<FiDollarSign size={24}/>}
                colorPalette="green"
                variant="solid"
            />
            <XlpStatCard
                label="Orders"
                value="892"
                change={-3.2}
                icon={<FiShoppingCart size={24}/>}
                colorPalette="purple"
                variant="solid"
            />
            <XlpStatCard
                label="Growth"
                value="23.5%"
                change={5.1}
                icon={<FiTrendingUp size={24}/>}
                colorPalette="orange"
                variant="solid"
            />
        </SimpleGrid>
    ),
};

export const NegativeChange: Story = {
    args: {
        label: "Bounce Rate",
        value: "42.3%",
        change: -8.4,
        changeLabel: "vs last week",
        icon: <FiActivity size={24}/>,
        colorPalette: "red",
        variant: "outline",
    },
};

export const NoChange: Story = {
    args: {
        label: "Active Sessions",
        value: "1,234",
        change: 0,
        changeLabel: "vs yesterday",
        icon: <FiUsers size={24}/>,
    },
};

export const WithoutIcon: Story = {
    args: {
        label: "Total Sales",
        value: "$123,456",
        change: 15.3,
        changeLabel: "vs last quarter",
    },
};

export const BorderRadius: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 3}} gap={6}>
            <XlpStatCard
                label="Users"
                value="1,234"
                change={8.2}
                borderRadius="none"
            />
            <XlpStatCard
                label="Users"
                value="1,234"
                change={8.2}
                borderRadius="lg"
            />
            <XlpStatCard
                label="Users"
                value="1,234"
                change={8.2}
                borderRadius="2xl"
            />
        </SimpleGrid>
    ),
};

// Sparkline Stories
export const Sparkline: Story = {
    render: () => (
        <Box>
            <HStack gap={8} flexWrap="wrap">
                <Box>
                    <Box mb={2} fontSize="sm" fontWeight="medium">Default</Box>
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]}/>
                </Box>
                <Box>
                    <Box mb={2} fontSize="sm" fontWeight="medium">Filled</Box>
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]} filled/>
                </Box>
                <Box>
                    <Box mb={2} fontSize="sm" fontWeight="medium">Green</Box>
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]} color="#10B981" filled/>
                </Box>
                <Box>
                    <Box mb={2} fontSize="sm" fontWeight="medium">Red (Downtrend)</Box>
                    <XlpSparkline data={[45, 35, 40, 30, 25, 15, 10]} color="#EF4444" filled/>
                </Box>
            </HStack>
        </Box>
    ),
};

export const StatWithSparkline: Story = {
    render: () => (
        <SimpleGrid columns={{base: 1, md: 2}} gap={6}>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                        <Box fontSize="sm" color="text.secondary" mb={1}>Weekly Revenue</Box>
                        <Box fontSize="2xl" fontWeight="bold">$12,456</Box>
                        <Box fontSize="sm" color="green.500" mt={1}>+12.5% vs last week</Box>
                    </Box>
                    <XlpSparkline
                        data={[120, 150, 180, 140, 190, 220, 250]}
                        color="#10B981"
                        filled
                        width={120}
                        height={50}
                    />
                </Box>
            </Box>
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                        <Box fontSize="sm" color="text.secondary" mb={1}>Daily Active Users</Box>
                        <Box fontSize="2xl" fontWeight="bold">3,842</Box>
                        <Box fontSize="sm" color="red.500" mt={1}>-5.2% vs yesterday</Box>
                    </Box>
                    <XlpSparkline
                        data={[380, 420, 390, 450, 410, 380, 350]}
                        color="#EF4444"
                        filled
                        width={120}
                        height={50}
                    />
                </Box>
            </Box>
        </SimpleGrid>
    ),
};

