import {IconButton as ChakraIconButton} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpIconButtonProps {
    /** The icon to display */
    icon: ReactNode;
    /** Accessible label for the button */
    "aria-label": string;
    /** The size of the button */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** The variant of the button */
    variant?: 'solid' | 'outline' | 'ghost' | 'subtle';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** Whether the button is round */
    rounded?: boolean;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Whether the button is loading */
    loading?: boolean;
    /** Click handler */
    onClick?: () => void;
}

/**
 * XlpIconButton - An icon-only button component
 */
export const XlpIconButton: FC<XlpIconButtonProps> = ({
                                                          icon,
                                                          "aria-label": ariaLabel,
                                                          size = 'md',
                                                          variant = 'ghost',
                                                          colorPalette = 'gray',
                                                          rounded = false,
                                                          disabled,
                                                          loading,
                                                          onClick,
                                                      }) => {
    return (
        <ChakraIconButton
            aria-label={ariaLabel}
            size={size}
            variant={variant}
            colorPalette={colorPalette}
            borderRadius={rounded ? 'full' : undefined}
            disabled={disabled}
            loading={loading}
            onClick={onClick}
        >
            {icon}
        </ChakraIconButton>
    );
};

