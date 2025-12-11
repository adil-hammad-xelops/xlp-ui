import {Checkbox as ChakraCheckbox} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpCheckboxProps {
    /** Whether the checkbox is checked */
    checked?: boolean;
    /** Default checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Callback when checked state changes */
    onCheckedChange?: (details: { checked: boolean | 'indeterminate' }) => void;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Whether the checkbox is invalid */
    invalid?: boolean;
    /** The size of the checkbox */
    size?: 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** The checkbox label */
    children?: ReactNode;
    /** The value of the checkbox */
    value?: string;
}

/**
 * XlpCheckbox - A checkbox input component
 */
export const XlpCheckbox: FC<XlpCheckboxProps> = ({
                                                      checked,
                                                      defaultChecked,
                                                      onCheckedChange,
                                                      disabled = false,
                                                      invalid = false,
                                                      size = 'md',
                                                      colorPalette = 'blue',
                                                      children,
                                                      value,
                                                  }) => {
    return (
        <ChakraCheckbox.Root
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            invalid={invalid}
            size={size}
            colorPalette={colorPalette}
            value={value}
        >
            <ChakraCheckbox.HiddenInput/>
            <ChakraCheckbox.Control/>
            {children && <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>}
        </ChakraCheckbox.Root>
    );
};

