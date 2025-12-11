import {Switch as ChakraSwitch} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpSwitchProps {
    /** Whether the switch is checked */
    checked?: boolean;
    /** Default checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Callback when checked state changes */
    onCheckedChange?: (details: { checked: boolean }) => void;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Whether the switch is invalid */
    invalid?: boolean;
    /** The size of the switch */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** The switch label */
    children?: ReactNode;
    /** Track label when checked */
    trackLabel?: { on: ReactNode; off: ReactNode };
    /** Thumb label */
    thumbLabel?: { on: ReactNode; off: ReactNode };
}

/**
 * XlpSwitch - A toggle switch component
 */
export const XlpSwitch: FC<XlpSwitchProps> = ({
                                                  checked,
                                                  defaultChecked,
                                                  onCheckedChange,
                                                  disabled = false,
                                                  invalid = false,
                                                  size = 'md',
                                                  colorPalette = 'blue',
                                                  children,
                                                  trackLabel: _trackLabel,
                                                  thumbLabel,
                                              }) => {
    return (
        <ChakraSwitch.Root
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            invalid={invalid}
            size={size}
            colorPalette={colorPalette}
        >
            <ChakraSwitch.HiddenInput/>
            <ChakraSwitch.Control>
                <ChakraSwitch.Thumb>
                    {thumbLabel && <ChakraSwitch.ThumbIndicator
                        fallback={thumbLabel.off}>{thumbLabel.on}</ChakraSwitch.ThumbIndicator>}
                </ChakraSwitch.Thumb>
            </ChakraSwitch.Control>
            {children && <ChakraSwitch.Label>{children}</ChakraSwitch.Label>}
        </ChakraSwitch.Root>
    );
};

