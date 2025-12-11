import {Breadcrumb as ChakraBreadcrumb} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    current?: boolean;
}

export interface XlpBreadcrumbProps {
    /** The breadcrumb items */
    items: BreadcrumbItem[];
    /** Custom separator */
    separator?: ReactNode;
    /** The size of the breadcrumb */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * XlpBreadcrumb - A navigation breadcrumb component
 */
export const XlpBreadcrumb: FC<XlpBreadcrumbProps> = ({
                                                          items,
                                                          separator = "/",
                                                          size = 'md',
                                                      }) => {
    return (
        <ChakraBreadcrumb.Root size={size}>
            <ChakraBreadcrumb.List>
                {items.map((item, index) => (
                    <ChakraBreadcrumb.Item key={index}>
                        {item.current ? (
                            <ChakraBreadcrumb.CurrentLink>
                                {item.label}
                            </ChakraBreadcrumb.CurrentLink>
                        ) : (
                            <ChakraBreadcrumb.Link href={item.href}>
                                {item.label}
                            </ChakraBreadcrumb.Link>
                        )}
                        {index < items.length - 1 &&
                            <ChakraBreadcrumb.Separator>{separator}</ChakraBreadcrumb.Separator>}
                    </ChakraBreadcrumb.Item>
                ))}
            </ChakraBreadcrumb.List>
        </ChakraBreadcrumb.Root>
    );
};

