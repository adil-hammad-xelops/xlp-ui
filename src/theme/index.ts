import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';
import {radii, semanticTokens, shadows} from "./Colors";
import {globalCss} from "./GlobalCss";
import {fonts, fontWeights} from "./Fonts";

const config = defineConfig({
    theme: {
        tokens: {
            fonts: fonts,
            fontWeights: fontWeights,
            radii: radii,
            shadows: shadows,
        },
        semanticTokens: {
            colors: semanticTokens,
        },
    },

    globalCss: globalCss,
});

export default createSystem(defaultConfig, config);