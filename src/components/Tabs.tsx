import {Tabs as ChakraTabs} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface TabItem {
    value: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}

export interface XlpTabsProps {
    /** The tab items */
    items: TabItem[];
    /** Default selected tab */
    defaultValue?: string;
    /** Current selected tab (controlled) */
    value?: string;
    /** Callback when tab changes */
    onValueChange?: (details: { value: string }) => void;
    /** The variant of the tabs */
    variant?: 'line' | 'enclosed' | 'outline' | 'plain';
    /** The size of the tabs */
    size?: 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** Whether tabs take full width */
    fitted?: boolean;
    /** The orientation of tabs */
    orientation?: 'horizontal' | 'vertical';
}

/**
 * XlpTabs - A tabbed navigation component
 */
export const XlpTabs: FC<XlpTabsProps> = ({
                                              items,
                                              defaultValue,
                                              value,
                                              onValueChange,
                                              variant = 'line',
                                              size = 'md',
                                              colorPalette = 'blue',
                                              fitted = false,
                                              orientation = 'horizontal',
                                          }) => {
    const initialValue = defaultValue || items[0]?.value;

    return (
        <ChakraTabs.Root
            defaultValue={initialValue}
            value={value}
            onValueChange={onValueChange}
            variant={variant}
            size={size}
            colorPalette={colorPalette}
            fitted={fitted}
            orientation={orientation}
        >
            <ChakraTabs.List>
                {items.map((item) => (
                    <ChakraTabs.Trigger key={item.value} value={item.value} disabled={item.disabled}>
                        {item.label}
                    </ChakraTabs.Trigger>
                ))}
            </ChakraTabs.List>
            {items.map((item) => (
                <ChakraTabs.Content key={item.value} value={item.value}>
                    {item.content}
                </ChakraTabs.Content>
            ))}
        </ChakraTabs.Root>
    );
};

