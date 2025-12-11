import {createListCollection, Portal, Select as ChakraSelect} from "@chakra-ui/react";
import type {FC} from "react";

export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface XlpSelectProps {
    /** The options to display */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** The size of the select */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The variant of the select */
    variant?: 'outline' | 'subtle';
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Current value */
    value?: string[];
    /** Callback when value changes */
    onValueChange?: (details: { value: string[] }) => void;
    /** Whether multiple selection is allowed */
    multiple?: boolean;
    /** Label for the select */
    label?: string;
}

/**
 * XlpSelect - A dropdown select component
 */
export const XlpSelect: FC<XlpSelectProps> = ({
                                                  options,
                                                  placeholder = "Select an option",
                                                  size = 'md',
                                                  variant = 'outline',
                                                  disabled = false,
                                                  value,
                                                  onValueChange,
                                                  multiple = false,
                                                  label,
                                              }) => {
    const collection = createListCollection({
        items: options.map(opt => ({
            label: opt.label,
            value: opt.value,
            disabled: opt.disabled,
        })),
    });

    return (
        <ChakraSelect.Root
            collection={collection}
            size={size}
            variant={variant}
            disabled={disabled}
            value={value}
            onValueChange={onValueChange}
            multiple={multiple}
        >
            {label && <ChakraSelect.Label>{label}</ChakraSelect.Label>}
            <ChakraSelect.Trigger>
                <ChakraSelect.ValueText placeholder={placeholder}/>
            </ChakraSelect.Trigger>
            <Portal>
                <ChakraSelect.Positioner>
                    <ChakraSelect.Content>
                        {collection.items.map((item) => (
                            <ChakraSelect.Item key={item.value} item={item}>
                                {item.label}
                            </ChakraSelect.Item>
                        ))}
                    </ChakraSelect.Content>
                </ChakraSelect.Positioner>
            </Portal>
        </ChakraSelect.Root>
    );
};

