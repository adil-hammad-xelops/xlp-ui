import {Textarea as ChakraTextarea} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpTextareaProps {
    /** The size of the textarea */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The variant of the textarea */
    variant?: 'outline' | 'subtle' | 'flushed';
    /** Number of visible rows */
    rows?: number;
    /** Placeholder text */
    placeholder?: string;
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** The value of the textarea */
    value?: string;
    /** Default value */
    defaultValue?: string;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * XlpTextarea - A multi-line text input component
 */
export const XlpTextarea: FC<XlpTextareaProps> = ({
                                                      size = 'md',
                                                      variant = 'outline',
                                                      rows = 4,
                                                      placeholder,
                                                      disabled,
                                                      value,
                                                      defaultValue,
                                                      onChange,
                                                  }) => {
    return (
        <ChakraTextarea
            size={size}
            variant={variant}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
        />
    );
};
