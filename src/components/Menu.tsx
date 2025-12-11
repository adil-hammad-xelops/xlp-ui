import {Menu as ChakraMenu, Portal} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface MenuItem {
    label: string;
    value: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export interface MenuGroup {
    label?: string;
    items: MenuItem[];
}

export interface XlpMenuProps {
    /** The trigger element */
    trigger: ReactNode;
    /** Menu items or groups */
    items: (MenuItem | MenuGroup)[];
    /** The placement of the menu */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    /** Whether to use portal */
    portalled?: boolean;
}

const isMenuGroup = (item: MenuItem | MenuGroup): item is MenuGroup => {
    return 'items' in item;
};

/**
 * XlpMenu - A dropdown menu component
 */
export const XlpMenu: FC<XlpMenuProps> = ({
                                              trigger,
                                              items,
                                              placement = 'bottom-start',
                                              portalled = true,
                                          }) => {
    const renderItems = (menuItems: MenuItem[]) => {
        return menuItems.map((item) => (
            <ChakraMenu.Item
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                onClick={item.onClick}
            >
                {item.icon && <span style={{marginRight: '8px'}}>{item.icon}</span>}
                {item.label}
            </ChakraMenu.Item>
        ));
    };

    const menuContent = (
        <ChakraMenu.Positioner>
            <ChakraMenu.Content>
                {items.map((item, index) => {
                    if (isMenuGroup(item)) {
                        return (
                            <ChakraMenu.ItemGroup key={index}>
                                {item.label && <ChakraMenu.ItemGroupLabel>{item.label}</ChakraMenu.ItemGroupLabel>}
                                {renderItems(item.items)}
                            </ChakraMenu.ItemGroup>
                        );
                    }
                    return (
                        <ChakraMenu.Item
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            onClick={item.onClick}
                        >
                            {item.icon && <span style={{marginRight: '8px'}}>{item.icon}</span>}
                            {item.label}
                        </ChakraMenu.Item>
                    );
                })}
            </ChakraMenu.Content>
        </ChakraMenu.Positioner>
    );

    return (
        <ChakraMenu.Root positioning={{placement}}>
            <ChakraMenu.Trigger asChild>
                {trigger}
            </ChakraMenu.Trigger>
            {portalled ? <Portal>{menuContent}</Portal> : menuContent}
        </ChakraMenu.Root>
    );
};

