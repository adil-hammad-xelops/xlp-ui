import {Portal, Tooltip as ChakraTooltip} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpTooltipProps {
    /** The content of the tooltip */
    content: ReactNode;
    /** The trigger element */
    children: ReactNode;
    /** The placement of the tooltip */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    /** Whether the tooltip has an arrow */
    hasArrow?: boolean;
    /** Delay before showing tooltip (ms) */
    openDelay?: number;
    /** Delay before hiding tooltip (ms) */
    closeDelay?: number;
    /** Whether the tooltip is disabled */
    disabled?: boolean;
    /** Whether to use portal */
    portalled?: boolean;
}

/**
 * XlpTooltip - A tooltip component for displaying additional information
 */
export const XlpTooltip: FC<XlpTooltipProps> = ({
                                                    content,
                                                    children,
                                                    placement = 'top',
                                                    hasArrow = true,
                                                    openDelay = 0,
                                                    closeDelay = 0,
                                                    disabled = false,
                                                    portalled = true,
                                                }) => {
    const tooltipContent = (
        <ChakraTooltip.Positioner>
            <ChakraTooltip.Content>
                {hasArrow && <ChakraTooltip.Arrow/>}
                {content}
            </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
    );

    return (
        <ChakraTooltip.Root
            positioning={{placement}}
            openDelay={openDelay}
            closeDelay={closeDelay}
            disabled={disabled}
        >
            <ChakraTooltip.Trigger asChild>
                {children}
            </ChakraTooltip.Trigger>
            {portalled ? <Portal>{tooltipContent}</Portal> : tooltipContent}
        </ChakraTooltip.Root>
    );
};

