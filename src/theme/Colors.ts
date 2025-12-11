// ============================================
// XLP UI - Color System
// ============================================

// Base color palette
export const colors = {
    light: {
        bg: {
            primary: "#FFFFFF",
            secondary: "#F8FAFC",
            tertiary: "#F1F5F9",
            muted: "#E2E8F0",
            subtle: "#F7F7F8",
            canvas: "#FAFAFA",
        },
        text: {
            primary: "#0F172A",
            secondary: "#475569",
            tertiary: "#94A3B8",
            muted: "#CBD5E1",
            inverse: "#FFFFFF",
        },
        border: {
            default: "#E2E8F0",
            hover: "#CBD5E1",
            focus: "#3B82F6",
            subtle: "#F1F5F9",
        },
        accent: {
            primary: "#3B82F6",    // Blue
            secondary: "#8B5CF6",  // Purple
            success: "#10B981",    // Green
            warning: "#F59E0B",    // Amber
            error: "#EF4444",      // Red
            info: "#06B6D4",       // Cyan
        },
    },
    dark: {
        bg: {
            primary: "#0F172A",
            secondary: "#1E293B",
            tertiary: "#334155",
            muted: "#475569",
            subtle: "#1A1A2E",
            canvas: "#0A0A0F",
        },
        text: {
            primary: "#F8FAFC",
            secondary: "#CBD5E1",
            tertiary: "#64748B",
            muted: "#475569",
            inverse: "#0F172A",
        },
        border: {
            default: "#334155",
            hover: "#475569",
            focus: "#60A5FA",
            subtle: "#1E293B",
        },
        accent: {
            primary: "#60A5FA",    // Blue
            secondary: "#A78BFA",  // Purple
            success: "#34D399",    // Green
            warning: "#FBBF24",    // Amber
            error: "#F87171",      // Red
            info: "#22D3EE",       // Cyan
        },
    },
} as const;

// Helper to create semantic tokens with light/dark support
export const createColorToken = (lightColor: string, darkColor: string) => ({
    value: {
        base: lightColor,
        _dark: darkColor,
    },
});

// Semantic color tokens
export const semanticTokens = {
    // Background colors
    bg: {
        primary: createColorToken(colors.light.bg.primary, colors.dark.bg.primary),
        secondary: createColorToken(colors.light.bg.secondary, colors.dark.bg.secondary),
        tertiary: createColorToken(colors.light.bg.tertiary, colors.dark.bg.tertiary),
        muted: createColorToken(colors.light.bg.muted, colors.dark.bg.muted),
        subtle: createColorToken(colors.light.bg.subtle, colors.dark.bg.subtle),
        canvas: createColorToken(colors.light.bg.canvas, colors.dark.bg.canvas),
    },
    // Text colors
    text: {
        primary: createColorToken(colors.light.text.primary, colors.dark.text.primary),
        secondary: createColorToken(colors.light.text.secondary, colors.dark.text.secondary),
        tertiary: createColorToken(colors.light.text.tertiary, colors.dark.text.tertiary),
        muted: createColorToken(colors.light.text.muted, colors.dark.text.muted),
        inverse: createColorToken(colors.light.text.inverse, colors.dark.text.inverse),
    },
    // Border colors
    border: {
        default: createColorToken(colors.light.border.default, colors.dark.border.default),
        hover: createColorToken(colors.light.border.hover, colors.dark.border.hover),
        focus: createColorToken(colors.light.border.focus, colors.dark.border.focus),
        subtle: createColorToken(colors.light.border.subtle, colors.dark.border.subtle),
    },
    // Accent colors
    accent: {
        primary: createColorToken(colors.light.accent.primary, colors.dark.accent.primary),
        secondary: createColorToken(colors.light.accent.secondary, colors.dark.accent.secondary),
        success: createColorToken(colors.light.accent.success, colors.dark.accent.success),
        warning: createColorToken(colors.light.accent.warning, colors.dark.accent.warning),
        error: createColorToken(colors.light.accent.error, colors.dark.accent.error),
        info: createColorToken(colors.light.accent.info, colors.dark.accent.info),
    },
};

// Border radius tokens
export const radii = {
    none: {value: "0"},
    xs: {value: "0.125rem"},   // 2px
    sm: {value: "0.25rem"},    // 4px
    md: {value: "0.375rem"},   // 6px
    lg: {value: "0.5rem"},     // 8px
    xl: {value: "0.75rem"},    // 12px
    "2xl": {value: "1rem"},    // 16px
    "3xl": {value: "1.5rem"},  // 24px
    full: {value: "9999px"},
};

// Shadow tokens
export const shadows = {
    none: {value: "none"},
    xs: {value: "0 1px 2px 0 rgb(0 0 0 / 0.05)"},
    sm: {value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"},
    md: {value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"},
    lg: {value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"},
    xl: {value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},
    "2xl": {value: "0 25px 50px -12px rgb(0 0 0 / 0.25)"},
    inner: {value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"},
};