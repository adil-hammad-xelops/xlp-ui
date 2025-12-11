import {Popover as ChakraPopover, Portal} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpPopoverProps {
    /** The trigger element */
    trigger: ReactNode;
    /** The content of the popover */
    children: ReactNode;
    /** The title/header of the popover */
    title?: string;
    /** The placement of the popover */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    /** Whether the popover has an arrow */
    hasArrow?: boolean;
    /** Whether to close on outside click */
    closeOnInteractOutside?: boolean;
    /** Whether to use portal */
    portalled?: boolean;
    /** Whether the popover is open (controlled) */
    open?: boolean;
    /** Default open state */
    defaultOpen?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (details: { open: boolean }) => void;
}

/**
 * XlpPopover - A popover component for displaying content in a floating panel
 */
export const XlpPopover: FC<XlpPopoverProps> = ({
                                                    trigger,
                                                    children,
                                                    title,
                                                    placement = 'bottom',
                                                    hasArrow = true,
                                                    closeOnInteractOutside = true,
                                                    portalled = true,
                                                    open,
                                                    defaultOpen,
                                                    onOpenChange,
                                                }) => {
    const popoverContent = (
        <ChakraPopover.Positioner>
            <ChakraPopover.Content>
                {hasArrow && <ChakraPopover.Arrow/>}
                {title && (
                    <ChakraPopover.Header>
                        <ChakraPopover.Title>{title}</ChakraPopover.Title>
                    </ChakraPopover.Header>
                )}
                <ChakraPopover.Body>
                    {children}
                </ChakraPopover.Body>
                <ChakraPopover.CloseTrigger/>
            </ChakraPopover.Content>
        </ChakraPopover.Positioner>
    );

    return (
        <ChakraPopover.Root
            positioning={{placement}}
            closeOnInteractOutside={closeOnInteractOutside}
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
        >
            <ChakraPopover.Trigger asChild>
                {trigger}
            </ChakraPopover.Trigger>
            {portalled ? <Portal>{popoverContent}</Portal> : popoverContent}
        </ChakraPopover.Root>
    );
};

