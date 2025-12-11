import {Dialog as ChakraDialog, Portal} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpModalProps {
    /** Whether the modal is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange?: (details: { open: boolean }) => void;
    /** The title of the modal */
    title?: string;
    /** The content of the modal */
    children: ReactNode;
    /** The footer content */
    footer?: ReactNode;
    /** The size of the modal */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Whether to close on overlay click */
    closeOnInteractOutside?: boolean;
    /** Whether to show close button */
    showCloseButton?: boolean;
    /** The placement of the modal */
    placement?: 'center' | 'top' | 'bottom';
    /** Whether to center the modal */
    centered?: boolean;
}

/**
 * XlpModal - A dialog modal component
 */
export const XlpModal: FC<XlpModalProps> = ({
                                                open,
                                                onOpenChange,
                                                title,
                                                children,
                                                footer,
                                                size = 'md',
                                                closeOnInteractOutside = true,
                                                showCloseButton = true,
                                                placement = 'center',
                                            }) => {
    return (
        <ChakraDialog.Root
            open={open}
            onOpenChange={onOpenChange}
            size={size}
            closeOnInteractOutside={closeOnInteractOutside}
            placement={placement}
        >
            <Portal>
                <ChakraDialog.Backdrop/>
                <ChakraDialog.Positioner>
                    <ChakraDialog.Content>
                        {title && (
                            <ChakraDialog.Header>
                                <ChakraDialog.Title>{title}</ChakraDialog.Title>
                            </ChakraDialog.Header>
                        )}
                        {showCloseButton && <ChakraDialog.CloseTrigger/>}
                        <ChakraDialog.Body>
                            {children}
                        </ChakraDialog.Body>
                        {footer && (
                            <ChakraDialog.Footer>
                                {footer}
                            </ChakraDialog.Footer>
                        )}
                    </ChakraDialog.Content>
                </ChakraDialog.Positioner>
            </Portal>
        </ChakraDialog.Root>
    );
};

export interface XlpModalTriggerProps {
    children: ReactNode;
}

/**
 * XlpModalTrigger - Trigger component for modal
 */
export const XlpModalTrigger: FC<XlpModalTriggerProps> = ({children}) => {
    return <ChakraDialog.Trigger asChild>{children}</ChakraDialog.Trigger>;
};

