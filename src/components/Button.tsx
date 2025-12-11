import {Button, type ButtonProps} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpButtonProps extends ButtonProps {
    /** The visual variant of the button */
    variant?: 'solid' | 'outline' | 'ghost' | 'subtle' | 'surface' | 'plain';
    /** The size of the button */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** The color palette to use */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange' | 'yellow';
    /** Border radius of the button */
    borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const XlpButton: FC<XlpButtonProps> = ({
                                                  variant = 'solid',
                                                  size = 'md',
                                                  colorPalette = 'blue',
                                                  borderRadius = 'md',
                                                  children,
                                                  ...props
                                              }) => {
    return (
        <Button
            variant={variant}
            size={size}
            colorPalette={colorPalette}
            borderRadius={borderRadius}
            {...props}
        >
            {children}
        </Button>
    );
};
