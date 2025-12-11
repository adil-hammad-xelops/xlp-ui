import {Flex, RadioGroup as ChakraRadioGroup} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}

/** Value change details from radio group */
interface ValueChangeDetails {
    value: string | null;
}

export interface XlpRadioGroupProps {
    /** The options to display */
    options: RadioOption[];
    /** The current value */
    value?: string;
    /** Default value (uncontrolled) */
    defaultValue?: string;
    /** Callback when value changes */
    onValueChange?: (details: ValueChangeDetails) => void;
    /** The size of the radio buttons */
    size?: 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** Whether the radio group is disabled */
    disabled?: boolean;
    /** The orientation of the radio group */
    orientation?: 'horizontal' | 'vertical';
    /** The name for the radio group */
    name?: string;
    /** Gap/spacing between radio items */
    gap?: number | string;
}

/**
 * XlpRadioGroup - A radio button group component
 */
export const XlpRadioGroup: FC<XlpRadioGroupProps> = ({
                                                          options,
                                                          value,
                                                          defaultValue,
                                                          onValueChange,
                                                          size = 'md',
                                                          colorPalette = 'blue',
                                                          disabled = false,
                                                          orientation = 'vertical',
                                                          name,
                                                          gap = 3,
                                                      }) => {
    return (
        <ChakraRadioGroup.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            size={size}
            colorPalette={colorPalette}
            disabled={disabled}
            name={name}
        >
            <Flex
                direction={orientation === 'horizontal' ? 'row' : 'column'}
                gap={gap}
                flexWrap={orientation === 'horizontal' ? 'wrap' : 'nowrap'}
            >
                {options.map((option) => (
                    <ChakraRadioGroup.Item
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        <ChakraRadioGroup.ItemHiddenInput/>
                        <ChakraRadioGroup.ItemIndicator/>
                        <ChakraRadioGroup.ItemText>{option.label}</ChakraRadioGroup.ItemText>
                    </ChakraRadioGroup.Item>
                ))}
            </Flex>
        </ChakraRadioGroup.Root>
    );
};

export interface XlpRadioProps {
    /** The value of the radio */
    value: string;
    /** Whether the radio is disabled */
    disabled?: boolean;
    /** The radio label */
    children?: ReactNode;
}

/**
 * XlpRadio - Individual radio button (use within XlpRadioGroup)
 */
export const XlpRadio: FC<XlpRadioProps> = ({
                                                value,
                                                disabled = false,
                                                children,
                                            }) => {
    return (
        <ChakraRadioGroup.Item value={value} disabled={disabled}>
            <ChakraRadioGroup.ItemHiddenInput/>
            <ChakraRadioGroup.ItemIndicator/>
            {children && <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>}
        </ChakraRadioGroup.Item>
    );
};

