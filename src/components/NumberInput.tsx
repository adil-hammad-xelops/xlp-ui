import {NumberInput as ChakraNumberInput} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpNumberInputProps {
    /** The value of the input */
    value?: string;
    /** Default value (uncontrolled) */
    defaultValue?: string;
    /** Callback when value changes */
    onValueChange?: (details: { value: string; valueAsNumber: number }) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** The size of the input */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The variant of the input */
    variant?: 'outline' | 'subtle' | 'flushed';
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is invalid */
    invalid?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Whether to allow mouse wheel changes */
    allowMouseWheel?: boolean;
    /** Whether to show stepper buttons */
    showStepper?: boolean;
}

/**
 * XlpNumberInput - A number input with increment/decrement controls
 */
export const XlpNumberInput: FC<XlpNumberInputProps> = ({
                                                            value,
                                                            defaultValue,
                                                            onValueChange,
                                                            min,
                                                            max,
                                                            step = 1,
                                                            size = 'md',
                                                            variant = 'outline',
                                                            disabled = false,
                                                            invalid = false,
                                                            placeholder,
                                                            allowMouseWheel = false,
                                                            showStepper = true,
                                                        }) => {
    return (
        <ChakraNumberInput.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            min={min}
            max={max}
            step={step}
            size={size}
            variant={variant}
            disabled={disabled}
            invalid={invalid}
            allowMouseWheel={allowMouseWheel}
        >
            <ChakraNumberInput.Input placeholder={placeholder}/>
            {showStepper && (
                <ChakraNumberInput.Control>
                    <ChakraNumberInput.IncrementTrigger/>
                    <ChakraNumberInput.DecrementTrigger/>
                </ChakraNumberInput.Control>
            )}
        </ChakraNumberInput.Root>
    );
};

