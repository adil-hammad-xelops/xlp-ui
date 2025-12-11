import {EmptyState as ChakraEmptyState} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpEmptyStateProps {
    /** The icon to display */
    icon?: ReactNode;
    /** The title text */
    title: string;
    /** The description text */
    description?: string;
    /** Children (typically action buttons) */
    children?: ReactNode;
    /** The size of the empty state */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * XlpEmptyState - A placeholder component for empty content
 */
export const XlpEmptyState: FC<XlpEmptyStateProps> = ({
                                                          icon,
                                                          title,
                                                          description,
                                                          children,
                                                          size = 'md',
                                                      }) => {
    return (
        <ChakraEmptyState.Root size={size}>
            <ChakraEmptyState.Content>
                {icon && <ChakraEmptyState.Indicator>{icon}</ChakraEmptyState.Indicator>}
                <ChakraEmptyState.Title>{title}</ChakraEmptyState.Title>
                {description && <ChakraEmptyState.Description>{description}</ChakraEmptyState.Description>}
                {children}
            </ChakraEmptyState.Content>
        </ChakraEmptyState.Root>
    );
};

