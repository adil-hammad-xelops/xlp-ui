import {Card as ChakraCard, type CardRootProps} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpCardProps extends CardRootProps {
    /** The content of the card */
    children: ReactNode;
    /** The variant of the card */
    variant?: 'elevated' | 'outline' | 'subtle';
}

/**
 * XlpCard - A flexible card container component
 *
 * @example
 * ```tsx
 * <XlpCard>
 *   <XlpCardHeader>Title</XlpCardHeader>
 *   <XlpCardBody>Content here</XlpCardBody>
 * </XlpCard>
 * ```
 */
export const XlpCard: FC<XlpCardProps> = ({
                                              children,
                                              variant = 'elevated',
                                              ...props
                                          }) => {
    return (
        <ChakraCard.Root variant={variant} {...props}>
            {children}
        </ChakraCard.Root>
    );
};

export interface XlpCardHeaderProps {
    children: ReactNode;
}

export const XlpCardHeader: FC<XlpCardHeaderProps> = ({children}) => {
    return <ChakraCard.Header>{children}</ChakraCard.Header>;
};

export interface XlpCardBodyProps {
    children: ReactNode;
}

export const XlpCardBody: FC<XlpCardBodyProps> = ({children}) => {
    return <ChakraCard.Body>{children}</ChakraCard.Body>;
};

export interface XlpCardFooterProps {
    children: ReactNode;
}

export const XlpCardFooter: FC<XlpCardFooterProps> = ({children}) => {
    return <ChakraCard.Footer>{children}</ChakraCard.Footer>;
};

