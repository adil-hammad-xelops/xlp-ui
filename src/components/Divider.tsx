import {Separator as ChakraSeparator} from "@chakra-ui/react";
import type {FC} from "react";

export interface XlpDividerProps {
    /** The orientation of the divider */
    orientation?: 'horizontal' | 'vertical';
    /** The variant of the divider */
    variant?: 'solid' | 'dashed' | 'dotted';
    /** The size/thickness of the divider */
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * XlpDivider - A visual separator component
 */
export const XlpDivider: FC<XlpDividerProps> = ({
                                                    orientation = 'horizontal',
                                                    variant = 'solid',
                                                    size = 'sm',
                                                }) => {
    return (
        <ChakraSeparator
            orientation={orientation}
            variant={variant}
            size={size}
        />
    );
};

