import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-vABTGKhX.js";import{M as l}from"./index-CqD7BBWo.js";import"./index-DhY--VwN.js";import"./iframe-t8R0GX8m.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Overview/Getting Started"}),`
`,n.jsx(r.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(r.p,{children:"This guide will help you set up XLP UI in your React project."}),`
`,n.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(r.p,{children:"Install XLP UI and its peer dependencies:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`# npm\r
npm install xlp-ui @chakra-ui/react @emotion/react\r
\r
# yarn\r
yarn add xlp-ui @chakra-ui/react @emotion/react\r
\r
# pnpm\r
pnpm add xlp-ui @chakra-ui/react @emotion/react
`})}),`
`,n.jsx(r.h2,{id:"setup",children:"Setup"}),`
`,n.jsx(r.h3,{id:"1-add-the-provider",children:"1. Add the Provider"}),`
`,n.jsxs(r.p,{children:["Wrap your application with ",n.jsx(r.code,{children:"XlpProvider"}),":"]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`// src/main.tsx or src/index.tsx\r
import React from 'react';\r
import ReactDOM from 'react-dom/client';\r
import { XlpProvider } from 'xlp-ui';\r
import App from './App';\r
\r
ReactDOM.createRoot(document.getElementById('root')!).render(\r
  <React.StrictMode>\r
    <XlpProvider>\r
      <App />\r
    </XlpProvider>\r
  </React.StrictMode>\r
);
`})}),`
`,n.jsx(r.h3,{id:"2-use-components",children:"2. Use Components"}),`
`,n.jsx(r.p,{children:"Import and use components in your application:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import {\r
  XlpButton,\r
  XlpInput,\r
  XlpCard,\r
  XlpCardBody,\r
  Box,\r
  VStack\r
} from 'xlp-ui';\r
\r
function App() {\r
  return (\r
    <Box p={8}>\r
      <XlpCard maxW="400px">\r
        <XlpCardBody>\r
          <VStack gap={4}>\r
            <XlpInput placeholder="Enter your email" />\r
            <XlpButton colorPalette="blue" w="full">\r
              Subscribe\r
            </XlpButton>\r
          </VStack>\r
        </XlpCardBody>\r
      </XlpCard>\r
    </Box>\r
  );\r
}
`})}),`
`,n.jsx(r.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,n.jsx(r.p,{children:"XLP UI supports dark mode out of the box. To enable dark mode:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<XlpProvider themeProps={{ defaultTheme: "dark" }}>\r
  <App />\r
</XlpProvider>
`})}),`
`,n.jsx(r.p,{children:"Or let users toggle it:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { useColorMode } from '@chakra-ui/react';\r
import { XlpButton } from 'xlp-ui';\r
\r
function ColorModeToggle() {\r
  const { colorMode, toggleColorMode } = useColorMode();\r
\r
  return (\r
    <XlpButton onClick={toggleColorMode}>\r
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}\r
    </XlpButton>\r
  );\r
}
`})}),`
`,n.jsx(r.h2,{id:"typescript",children:"TypeScript"}),`
`,n.jsx(r.p,{children:"XLP UI is built with TypeScript. All components have full type support:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { XlpButton, type XlpButtonProps } from 'xlp-ui';\r
\r
interface MyButtonProps extends XlpButtonProps {\r
  label: string;\r
}\r
\r
const MyButton: React.FC<MyButtonProps> = ({ label, ...props }) => (\r
  <XlpButton {...props}>{label}</XlpButton>\r
);
`})}),`
`,n.jsx(r.h2,{id:"next-steps",children:"Next Steps"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Browse the ",n.jsx(r.strong,{children:"Components"})," section to see all available components"]}),`
`,n.jsxs(r.li,{children:["Check ",n.jsx(r.strong,{children:"Foundations"})," to understand the design tokens"]}),`
`,n.jsxs(r.li,{children:["Read ",n.jsx(r.strong,{children:"Theming"})," to learn how to customize the look and feel"]}),`
`]})]})}function x(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{x as default};
