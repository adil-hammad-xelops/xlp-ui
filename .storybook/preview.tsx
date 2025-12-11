import type {Preview} from "@storybook/react";
import {XlpProvider} from "../src/components/ui/XlpProvider";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            toc: true,
        },
        backgrounds: {
            default: "light",
            values: [
                {name: "light", value: "#FFFFFF"},
                {name: "dark", value: "#0F172A"},
            ],
        },
    },
    decorators: [
        (Story, context) => {
            // Get the background from Storybook toolbar
            const backgroundColor = context.globals.backgrounds?.value;
            const isDark = backgroundColor === "#0F172A";

            return (
                <XlpProvider
                    themeProps={{
                        defaultTheme: isDark ? "dark" : "light",
                        forcedTheme: isDark ? "dark" : "light",
                    }}
                >
                    <Story/>
                </XlpProvider>
            );
        },
    ],
    tags: ["autodocs"],
};

export default preview;
