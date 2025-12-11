// ============================================
// XLP UI - Global CSS Styles
// ============================================

export const globalCss = {
    html: {
        colorScheme: "light dark",
        scrollBehavior: "smooth",
    },
    "html, body": {
        height: "100%",
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "body",
        bg: "bg.primary",
        color: "text.primary",
        lineHeight: "1.6",
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    },
    // Selection
    "::selection": {
        bg: "accent.primary",
        color: "text.inverse",
    },
    // Placeholder
    "*::placeholder": {
        color: "text.tertiary",
    },
    // Focus styles
    "*:focus-visible": {
        outline: "2px solid",
        outlineColor: "border.focus",
        outlineOffset: "2px",
    },
    // Scrollbar styles
    "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
    },
    "::-webkit-scrollbar-track": {
        bg: "bg.secondary",
    },
    "::-webkit-scrollbar-thumb": {
        bg: "border.default",
        borderRadius: "full",
        "&:hover": {
            bg: "border.hover",
        },
    },
    // Link defaults
    a: {
        color: "accent.primary",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    // Code blocks
    "pre, code": {
        fontFamily: "mono",
    },
};