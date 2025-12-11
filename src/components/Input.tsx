import {Input as ChakraInput} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpInputProps {
    /** The size of the input */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The variant of the input */
    variant?: 'outline' | 'subtle' | 'flushed';
    /** Border radius of the input */
    borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    /** Placeholder text */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** The value of the input */
    value?: string;
    /** Default value */
    defaultValue?: string;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Input type */
    type?: string;
}

/**
 * XlpInput - A customizable input component
 *
 * @example
 * ```tsx
 * <XlpInput placeholder="Enter your name" />
 * <XlpInput variant="subtle" size="lg" borderRadius="lg" />
 * ```
 */
export const XlpInput: FC<XlpInputProps> = ({
                                                size = 'md',
                                                variant = 'outline',
                                                borderRadius = 'md',
                                                placeholder,
                                                disabled,
                                                value,
                                                defaultValue,
                                                onChange,
                                                type,
                                            }) => {
    return (
        <ChakraInput
            size={size}
            variant={variant}
            borderRadius={borderRadius}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type}
        />
    );
};
