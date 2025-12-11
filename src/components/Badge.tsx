import {Badge as ChakraBadge, type BadgeProps as ChakraBadgeProps} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpBadgeProps extends Omit<ChakraBadgeProps, 'colorPalette'> {
    /** The color scheme of the badge */
    colorPalette?: 'green' | 'red' | 'gray' | 'blue' | 'yellow' | 'purple' | 'orange';
    /** The text content to display */
    children: React.ReactNode;
}

export const XlpBadge: FC<XlpBadgeProps> = ({
                                                colorPalette = 'gray',
                                                children,
                                                ...props
                                            }) => {
    return (
        <ChakraBadge
            colorPalette={colorPalette}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            {...props}
        >
            {children}
        </ChakraBadge>
    );
};

// Re-export for backward compatibility
export {XlpBadge as Badge};

