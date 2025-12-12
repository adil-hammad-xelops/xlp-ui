import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-vABTGKhX.js";import{M as i}from"./index-CqD7BBWo.js";import"./index-DhY--VwN.js";import"./iframe-t8R0GX8m.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Theming/Overview"}),`
`,n.jsx(e.h1,{id:"theming",children:"Theming"}),`
`,n.jsx(e.p,{children:"XLP UI uses a token-based theming system built on top of Chakra UI's design system."}),`
`,n.jsx(e.h2,{id:"theme-structure",children:"Theme Structure"}),`
`,n.jsx(e.p,{children:"The theme is composed of several layers:"}),`
`,n.jsx(e.h3,{id:"1-design-tokens",children:"1. Design Tokens"}),`
`,n.jsx(e.p,{children:"Design tokens are the smallest pieces of the theme:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Colors\r
colors.light.bg.primary    // "#FFFFFF"\r
colors.dark.bg.primary     // "#0F172A"\r
\r
// Spacing\r
spacing.4                  // "1rem" (16px)\r
\r
// Radii\r
radii.md                   // "6px"\r
\r
// Shadows\r
shadows.md                 // "0 4px 6px..."
`})}),`
`,n.jsx(e.h3,{id:"2-semantic-tokens",children:"2. Semantic Tokens"}),`
`,n.jsx(e.p,{children:"Semantic tokens provide meaning to design tokens:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// These automatically switch between light/dark mode\r
bg.primary      // Background color\r
text.primary    // Text color\r
border.default  // Border color\r
accent.primary  // Accent color
`})}),`
`,n.jsx(e.h3,{id:"3-component-styles",children:"3. Component Styles"}),`
`,n.jsx(e.p,{children:"Components use semantic tokens for consistent styling:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<XlpButton colorPalette="blue" variant="solid" />\r
<XlpInput borderRadius="lg" />\r
<XlpCard variant="elevated" />
`})}),`
`,n.jsx(e.h2,{id:"using-the-theme",children:"Using the Theme"}),`
`,n.jsx(e.h3,{id:"provider-setup",children:"Provider Setup"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { XlpProvider } from 'xlp-ui';\r
\r
function App() {\r
  return (\r
    <XlpProvider>\r
      <YourApp />\r
    </XlpProvider>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"with-custom-theme-options",children:"With Custom Theme Options"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<XlpProvider\r
  themeProps={{\r
    defaultTheme: "light",  // or "dark"\r
  }}\r
>\r
  <YourApp />\r
</XlpProvider>
`})}),`
`,n.jsx(e.h2,{id:"color-mode",children:"Color Mode"}),`
`,n.jsx(e.p,{children:"XLP UI supports both light and dark modes out of the box."}),`
`,n.jsx(e.h3,{id:"toggle-color-mode",children:"Toggle Color Mode"}),`
`,n.jsx(e.p,{children:"Use the built-in color mode utilities:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useColorMode } from '@chakra-ui/react';\r
\r
function ColorModeToggle() {\r
  const { colorMode, toggleColorMode } = useColorMode();\r
\r
  return (\r
    <button onClick={toggleColorMode}>\r
      {colorMode === 'light' ? '🌙' : '☀️'}\r
    </button>\r
  );\r
}
`})}),`
`,n.jsx(e.h2,{id:"customizing-components",children:"Customizing Components"}),`
`,n.jsx(e.h3,{id:"using-props",children:"Using Props"}),`
`,n.jsx(e.p,{children:"Most components accept styling props:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<XlpButton\r
  colorPalette="purple"\r
  variant="outline"\r
  size="lg"\r
  borderRadius="full"\r
/>
`})}),`
`,n.jsx(e.h3,{id:"available-props",children:"Available Props"}),`
`,n.jsxs(e.p,{children:[`| Prop | Values |\r
|------|--------|\r
| `,n.jsx(e.code,{children:"colorPalette"}),` | gray, red, orange, yellow, green, teal, blue, cyan, purple, pink |\r
| `,n.jsx(e.code,{children:"variant"}),` | solid, outline, ghost, subtle |\r
| `,n.jsx(e.code,{children:"size"}),` | xs, sm, md, lg, xl |\r
| `,n.jsx(e.code,{children:"borderRadius"})," | none, sm, md, lg, xl, 2xl, full |"]}),`
`,n.jsx(e.h2,{id:"token-reference",children:"Token Reference"}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.p,{children:["See the ",n.jsx(e.strong,{children:"Foundations/Colors"})," section for the complete color palette."]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`0    → 0px\r
1    → 4px\r
2    → 8px\r
3    → 12px\r
4    → 16px\r
5    → 20px\r
6    → 24px\r
8    → 32px\r
10   → 40px\r
12   → 48px\r
16   → 64px\r
20   → 80px\r
24   → 96px
`})}),`
`,n.jsx(e.h3,{id:"radii",children:"Radii"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`none → 0\r
sm   → 4px\r
md   → 6px\r
lg   → 8px\r
xl   → 12px\r
2xl  → 16px\r
full → 9999px
`})}),`
`,n.jsx(e.h3,{id:"shadows",children:"Shadows"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`xs   → Subtle shadow\r
sm   → Light shadow\r
md   → Medium shadow\r
lg   → Large shadow\r
xl   → Extra large shadow\r
2xl  → Maximum shadow
`})})]})}function g(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{g as default};
