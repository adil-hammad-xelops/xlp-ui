import {Spinner as ChakraSpinner} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpSpinnerProps {
    /** The size of the spinner */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** Border width of the spinner */
    borderWidth?: string;
    /** Accessible label */
    label?: string;
}

/**
 * XlpSpinner - A loading spinner component
 */
export const XlpSpinner: FC<XlpSpinnerProps> = ({
                                                    size = 'md',
                                                    colorPalette = 'blue',
                                                    borderWidth,
                                                    label = "Loading...",
                                                }) => {
    return (
        <ChakraSpinner
            size={size}
            colorPalette={colorPalette}
            borderWidth={borderWidth}
            aria-label={label}
        />
    );
};

