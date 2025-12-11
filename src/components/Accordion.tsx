import {Accordion as ChakraAccordion} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface AccordionItem {
    value: string;
    title: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}

export interface XlpAccordionProps {
    /** The accordion items */
    items: AccordionItem[];
    /** Default expanded values */
    defaultValue?: string[];
    /** Current expanded values (controlled) */
    value?: string[];
    /** Callback when value changes */
    onValueChange?: (details: { value: string[] }) => void;
    /** Whether multiple items can be open */
    multiple?: boolean;
    /** Whether items are collapsible */
    collapsible?: boolean;
    /** The variant of the accordion */
    variant?: 'outline' | 'subtle' | 'enclosed' | 'plain';
    /** The size of the accordion */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * XlpAccordion - A collapsible content component
 */
export const XlpAccordion: FC<XlpAccordionProps> = ({
                                                        items,
                                                        defaultValue,
                                                        value,
                                                        onValueChange,
                                                        multiple = false,
                                                        collapsible = true,
                                                        variant = 'outline',
                                                        size = 'md',
                                                    }) => {
    return (
        <ChakraAccordion.Root
            defaultValue={defaultValue}
            value={value}
            onValueChange={onValueChange}
            multiple={multiple}
            collapsible={collapsible}
            variant={variant}
            size={size}
        >
            {items.map((item) => (
                <ChakraAccordion.Item key={item.value} value={item.value} disabled={item.disabled}>
                    <ChakraAccordion.ItemTrigger>
                        {item.title}
                        <ChakraAccordion.ItemIndicator/>
                    </ChakraAccordion.ItemTrigger>
                    <ChakraAccordion.ItemContent>
                        <ChakraAccordion.ItemBody>
                            {item.content}
                        </ChakraAccordion.ItemBody>
                    </ChakraAccordion.ItemContent>
                </ChakraAccordion.Item>
            ))}
        </ChakraAccordion.Root>
    );
};

