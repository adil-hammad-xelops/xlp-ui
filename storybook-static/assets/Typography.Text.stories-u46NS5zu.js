import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as r,b as a,c as _,d as n}from"./Typography-C806syZ3.js";import{V as t}from"./v-stack-C8FbSuKv.js";import{B as h}from"./index-BCRR_Fbj.js";import{H as q}from"./h-stack-Bb0vOX7L.js";import"./index-C5uWXf4o.js";import"./create-recipe-context-Dhiw8L_C.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";import"./index-BQVp-j3M.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const oe={title:"Components/Typography/Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},variant:{control:"select",options:["body","label","caption","overline"]},color:{control:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},weight:{control:"select",options:["normal","medium","semibold","bold","extrabold"]},muted:{control:"boolean"},truncate:{control:"boolean"}}},l={args:{children:"This is a paragraph of text.",size:"md",variant:"body"}},s={render:()=>e.jsxs(t,{align:"start",gap:3,children:[e.jsx(r,{size:"2xl",children:"Text 2XL - Extra Large"}),e.jsx(r,{size:"xl",children:"Text XL - Large"}),e.jsx(r,{size:"lg",children:"Text LG - Medium Large"}),e.jsx(r,{size:"md",children:"Text MD - Medium (Default)"}),e.jsx(r,{size:"sm",children:"Text SM - Small"}),e.jsx(r,{size:"xs",children:"Text XS - Extra Small"})]})},i={render:()=>e.jsxs(t,{align:"start",gap:4,children:[e.jsxs(h,{children:[e.jsx(r,{variant:"overline",children:"OVERLINE TEXT"}),e.jsx(r,{variant:"body",children:"This is body text used for main content and paragraphs."})]}),e.jsx(r,{variant:"label",children:"Label Text - For form labels"}),e.jsx(r,{variant:"caption",children:"Caption text - For supplementary information"})]})},o={render:()=>e.jsxs(t,{align:"start",gap:3,children:[e.jsx(r,{children:"Normal text with full opacity"}),e.jsx(r,{muted:!0,children:"Muted text for secondary information"})]})},p={render:()=>e.jsx(h,{maxW:"300px",children:e.jsx(r,{lineClamp:2,children:"This is a long paragraph that demonstrates line clamping. It should be truncated after two lines with an ellipsis. This text continues beyond the visible area to show the effect."})})},c={render:()=>e.jsxs(t,{align:"start",gap:6,children:[e.jsx(a,{size:"xl",children:"Display XL"}),e.jsx(a,{size:"lg",children:"Display LG"}),e.jsx(a,{size:"md",children:"Display MD"}),e.jsx(a,{size:"sm",children:"Display SM"})]})},d={render:()=>e.jsxs(r,{children:["Use the ",e.jsx(_,{children:"npm install xlp-ui"})," command to install the package."]})},x={render:()=>e.jsx(h,{maxW:"400px",children:e.jsx(_,{block:!0,children:`import { XlpButton } from 'xlp-ui';

function App() {
  return (
    <XlpButton colorPalette="blue">
      Click me
    </XlpButton>
  );
}`})})},m={render:()=>e.jsxs(t,{align:"start",gap:3,children:[e.jsx(n,{href:"#",children:"Default link with hover underline"}),e.jsx(n,{href:"#",underline:"always",children:"Always underlined link"}),e.jsx(n,{href:"#",underline:"none",children:"No underline link"}),e.jsx(n,{href:"https://example.com",external:!0,children:"External link (opens in new tab)"})]})},u={render:()=>e.jsxs(q,{gap:4,children:[e.jsx(n,{href:"#",colorPalette:"blue",children:"Blue Link"}),e.jsx(n,{href:"#",colorPalette:"teal",children:"Teal Link"}),e.jsx(n,{href:"#",colorPalette:"purple",children:"Purple Link"}),e.jsx(n,{href:"#",colorPalette:"gray",children:"Gray Link"})]})};var X,g,T;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: "This is a paragraph of text.",
    size: "md",
    variant: "body"
  }
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var k,f,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={3}>\r
            <XlpText size="2xl">Text 2XL - Extra Large</XlpText>\r
            <XlpText size="xl">Text XL - Large</XlpText>\r
            <XlpText size="lg">Text LG - Medium Large</XlpText>\r
            <XlpText size="md">Text MD - Medium (Default)</XlpText>\r
            <XlpText size="sm">Text SM - Small</XlpText>\r
            <XlpText size="xs">Text XS - Extra Small</XlpText>\r
        </VStack>
}`,...(L=(f=s.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var y,j,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={4}>\r
            <Box>\r
                <XlpText variant="overline">OVERLINE TEXT</XlpText>\r
                <XlpText variant="body">This is body text used for main content and paragraphs.</XlpText>\r
            </Box>\r
            <XlpText variant="label">Label Text - For form labels</XlpText>\r
            <XlpText variant="caption">Caption text - For supplementary information</XlpText>\r
        </VStack>
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,D,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={3}>\r
            <XlpText>Normal text with full opacity</XlpText>\r
            <XlpText muted>Muted text for secondary information</XlpText>\r
        </VStack>
}`,...(z=(D=o.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var C,v,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box maxW="300px">\r
            <XlpText lineClamp={2}>\r
                This is a long paragraph that demonstrates line clamping.\r
                It should be truncated after two lines with an ellipsis.\r
                This text continues beyond the visible area to show the effect.\r
            </XlpText>\r
        </Box>
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var B,M,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={6}>\r
            <XlpDisplay size="xl">Display XL</XlpDisplay>\r
            <XlpDisplay size="lg">Display LG</XlpDisplay>\r
            <XlpDisplay size="md">Display MD</XlpDisplay>\r
            <XlpDisplay size="sm">Display SM</XlpDisplay>\r
        </VStack>
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var E,P,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <XlpText>\r
            Use the <XlpCode>npm install xlp-ui</XlpCode> command to install the package.\r
        </XlpText>
}`,...(G=(P=d.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var I,N,A;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Box maxW="400px">\r
            <XlpCode block>\r
                {\`import { XlpButton } from 'xlp-ui';

function App() {
  return (
    <XlpButton colorPalette="blue">
      Click me
    </XlpButton>
  );
}\`}\r
            </XlpCode>\r
        </Box>
}`,...(A=(N=x.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,H,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={3}>\r
            <XlpLink href="#">Default link with hover underline</XlpLink>\r
            <XlpLink href="#" underline="always">Always underlined link</XlpLink>\r
            <XlpLink href="#" underline="none">No underline link</XlpLink>\r
            <XlpLink href="https://example.com" external>External link (opens in new tab)</XlpLink>\r
        </VStack>
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var O,R,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <HStack gap={4}>\r
            <XlpLink href="#" colorPalette="blue">Blue Link</XlpLink>\r
            <XlpLink href="#" colorPalette="teal">Teal Link</XlpLink>\r
            <XlpLink href="#" colorPalette="purple">Purple Link</XlpLink>\r
            <XlpLink href="#" colorPalette="gray">Gray Link</XlpLink>\r
        </HStack>
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const pe=["Default","Sizes","Variants","MutedText","LineClamp","Display","CodeInline","CodeBlock","Links","LinkColors"];export{x as CodeBlock,d as CodeInline,l as Default,c as Display,p as LineClamp,u as LinkColors,m as Links,o as MutedText,s as Sizes,i as Variants,pe as __namedExportsOrder,oe as default};
