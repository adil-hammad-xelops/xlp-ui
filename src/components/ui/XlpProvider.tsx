"use client";

import {ChakraProvider} from "@chakra-ui/react";
import {ThemeProvider, type ThemeProviderProps} from "next-themes";
import type {FC, ReactNode} from "react";
import xlpTheme from "@/theme/index";

export interface XlpProviderProps {
    /** The children to wrap with providers */
    children?: ReactNode;
    /** Theme provider props for next-themes */
    themeProps?: Omit<ThemeProviderProps, 'children'>;
}

/**
 * Main provider component for XLP UI library.
 * Wraps your application with Chakra UI and theme providers.
 *
 * @example
 * ```tsx
 * import { XlpProvider } from 'xlp-ui';
 *
 * function App() {
 *   return (
 *     <XlpProvider>
 *       <YourApp />
 *     </XlpProvider>
 *   );
 * }
 * ```
 */
export const XlpProvider: FC<XlpProviderProps> = ({
                                                      children,
                                                      themeProps = {}
                                                  }) => {
    return (
        <ChakraProvider value={xlpTheme}>
            <ThemeProvider
                attribute="class"
                disableTransitionOnChange
                defaultTheme="system"
                enableSystem
                {...themeProps}
            >
                {children}
            </ThemeProvider>
        </ChakraProvider>
    );
};

