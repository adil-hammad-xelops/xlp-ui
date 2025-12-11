import {Progress as ChakraProgress} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpProgressProps {
    /** The current value */
    value?: number;
    /** The maximum value */
    max?: number;
    /** The minimum value */
    min?: number;
    /** The size of the progress bar */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** Whether to show striped pattern */
    striped?: boolean;
    /** Whether the striped pattern should animate */
    animated?: boolean;
    /** Accessible label */
    label?: string;
    /** Whether to show value label */
    showValueLabel?: boolean;
}

/**
 * XlpProgress - A progress bar component
 */
export const XlpProgress: FC<XlpProgressProps> = ({
                                                      value = 0,
                                                      max = 100,
                                                      min = 0,
                                                      size = 'md',
                                                      colorPalette = 'blue',
                                                      striped = false,
                                                      animated = false,
                                                      label,
                                                      showValueLabel = false,
                                                  }) => {
    return (
        <ChakraProgress.Root
            value={value}
            max={max}
            min={min}
            size={size}
            colorPalette={colorPalette}
            striped={striped}
            animated={animated}
            aria-label={label}
        >
            <ChakraProgress.Track>
                <ChakraProgress.Range/>
            </ChakraProgress.Track>
            {showValueLabel && (
                <ChakraProgress.ValueText/>
            )}
        </ChakraProgress.Root>
    );
};

