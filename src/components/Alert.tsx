import {Alert as ChakraAlert, CloseButton} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpAlertProps {
    /** The status/type of the alert */
    status?: 'info' | 'warning' | 'success' | 'error';
    /** The variant of the alert */
    variant?: 'subtle' | 'solid' | 'outline';
    /** The title of the alert */
    title?: string;
    /** The description/content of the alert */
    children?: ReactNode;
    /** Whether the alert can be closed */
    closable?: boolean;
    /** Callback when alert is closed */
    onClose?: () => void;
    /** Custom icon */
    icon?: ReactNode;
    /** Border radius */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * XlpAlert - A feedback alert component
 */
export const XlpAlert: FC<XlpAlertProps> = ({
                                                status = 'info',
                                                variant = 'subtle',
                                                title,
                                                children,
                                                icon,
                                                closable = false,
                                                onClose,
                                                borderRadius = 'md',
                                            }) => {
    return (
        <ChakraAlert.Root status={status} variant={variant} borderRadius={borderRadius}>
            {icon ? icon : <ChakraAlert.Indicator/>}
            <ChakraAlert.Content>
                {title && <ChakraAlert.Title>{title}</ChakraAlert.Title>}
                {children && <ChakraAlert.Description>{children}</ChakraAlert.Description>}
            </ChakraAlert.Content>
            {closable && (
                <CloseButton
                    position="relative"
                    top="-2px"
                    right="-2px"
                    onClick={onClose}
                    size="sm"
                />
            )}
        </ChakraAlert.Root>
    );
};

