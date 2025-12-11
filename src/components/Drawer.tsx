import {Drawer as ChakraDrawer, Portal} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpDrawerProps {
    /** Whether the drawer is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange?: (details: { open: boolean }) => void;
    /** The title of the drawer */
    title?: string;
    /** The content of the drawer */
    children: ReactNode;
    /** The footer content */
    footer?: ReactNode;
    /** The placement of the drawer */
    placement?: 'start' | 'end' | 'top' | 'bottom';
    /** The size of the drawer */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Whether to close on overlay click */
    closeOnInteractOutside?: boolean;
    /** Whether to show close button */
    showCloseButton?: boolean;
}

/**
 * XlpDrawer - A sliding panel component
 */
export const XlpDrawer: FC<XlpDrawerProps> = ({
                                                  open,
                                                  onOpenChange,
                                                  title,
                                                  children,
                                                  footer,
                                                  placement = 'end',
                                                  size = 'md',
                                                  closeOnInteractOutside = true,
                                                  showCloseButton = true,
                                              }) => {
    return (
        <ChakraDrawer.Root
            open={open}
            onOpenChange={onOpenChange}
            placement={placement}
            size={size}
            closeOnInteractOutside={closeOnInteractOutside}
        >
            <Portal>
                <ChakraDrawer.Backdrop/>
                <ChakraDrawer.Positioner>
                    <ChakraDrawer.Content>
                        {title && (
                            <ChakraDrawer.Header>
                                <ChakraDrawer.Title>{title}</ChakraDrawer.Title>
                            </ChakraDrawer.Header>
                        )}
                        {showCloseButton && <ChakraDrawer.CloseTrigger/>}
                        <ChakraDrawer.Body>
                            {children}
                        </ChakraDrawer.Body>
                        {footer && (
                            <ChakraDrawer.Footer>
                                {footer}
                            </ChakraDrawer.Footer>
                        )}
                    </ChakraDrawer.Content>
                </ChakraDrawer.Positioner>
            </Portal>
        </ChakraDrawer.Root>
    );
};

