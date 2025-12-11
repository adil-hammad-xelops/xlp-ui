import {Tag as ChakraTag} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpTagProps {
    /** The content of the tag */
    children: ReactNode;
    /** The size of the tag */
    size?: 'sm' | 'md' | 'lg';
    /** The color palette */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange' | 'yellow';
    /** The variant of the tag */
    variant?: 'solid' | 'subtle' | 'outline' | 'surface';
    /** Whether the tag is closable */
    closable?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Start element (icon) */
    startElement?: ReactNode;
}

/**
 * XlpTag - A tag/chip component for labeling
 */
export const XlpTag: FC<XlpTagProps> = ({
                                            children,
                                            size = 'md',
                                            colorPalette = 'gray',
                                            variant = 'subtle',
                                            closable = false,
                                            onClose,
                                            startElement,
                                        }) => {
    return (
        <ChakraTag.Root
            size={size}
            colorPalette={colorPalette}
            variant={variant}
        >
            {startElement && <ChakraTag.StartElement>{startElement}</ChakraTag.StartElement>}
            <ChakraTag.Label>{children}</ChakraTag.Label>
            {closable && (
                <ChakraTag.EndElement>
                    <ChakraTag.CloseTrigger onClick={onClose}/>
                </ChakraTag.EndElement>
            )}
        </ChakraTag.Root>
    );
};

