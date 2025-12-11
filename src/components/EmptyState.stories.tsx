import type {Meta, StoryObj} from "@storybook/react";
import {XlpEmptyState} from "./EmptyState";
import {XlpButton} from "./Button";
import {FiFile, FiInbox, FiSearch, FiShoppingCart, FiUsers} from "react-icons/fi";

const meta: Meta<typeof XlpEmptyState> = {
    title: "Components/Feedback/EmptyState",
    component: XlpEmptyState,
    parameters: {layout: "centered"},
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: <FiInbox size={48}/>,
        title: "No items found",
        description: "There are no items to display at the moment.",
    },
};

export const WithAction: Story = {
    args: {
        icon: <FiFile size={48}/>,
        title: "No documents",
        description: "You haven't created any documents yet. Start by creating your first document.",
        children: <XlpButton colorPalette="blue">Create Document</XlpButton>,
    },
};

export const SearchEmpty: Story = {
    args: {
        icon: <FiSearch size={48}/>,
        title: "No results found",
        description: "We couldn't find any results matching your search. Try adjusting your search terms.",
        children: <XlpButton variant="outline">Clear Search</XlpButton>,
    },
};

export const NoUsers: Story = {
    args: {
        icon: <FiUsers size={48}/>,
        title: "No team members",
        description: "Start building your team by inviting members.",
        children: (
            <div style={{display: "flex", gap: "0.5rem"}}>
                <XlpButton colorPalette="blue">Invite Members</XlpButton>
                <XlpButton variant="outline">Import CSV</XlpButton>
            </div>
        ),
    },
};

export const EmptyCart: Story = {
    args: {
        icon: <FiShoppingCart size={48}/>,
        title: "Your cart is empty",
        description: "Looks like you haven't added any items to your cart yet.",
        children: <XlpButton colorPalette="blue">Continue Shopping</XlpButton>,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
            <XlpEmptyState
                size="sm"
                icon={<FiInbox size={32}/>}
                title="Small empty state"
                description="This is a small empty state"
            />
            <XlpEmptyState
                size="md"
                icon={<FiInbox size={48}/>}
                title="Medium empty state"
                description="This is a medium empty state"
            />
            <XlpEmptyState
                size="lg"
                icon={<FiInbox size={64}/>}
                title="Large empty state"
                description="This is a large empty state"
            />
        </div>
    ),
};

