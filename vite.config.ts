import path from "path";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "xlp-ui",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "@chakra-ui/react",
                "@emotion/react",
                "@emotion/styled",
                "framer-motion",
                "react-icons",
                "next-themes"
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsxRuntime",
                    "@chakra-ui/react": "ChakraUI",
                    "@emotion/react": "emotionReact",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
            outDir: "dist/types",
        }),
        tsconfigPaths(),
    ],
});