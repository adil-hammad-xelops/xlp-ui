import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{X as r}from"./Typography-C806syZ3.js";import{V as d}from"./v-stack-C8FbSuKv.js";import{B as W}from"./index-BCRR_Fbj.js";import"./index-C5uWXf4o.js";import"./create-recipe-context-Dhiw8L_C.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";import"./index-BQVp-j3M.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const N={title:"Components/Typography/Heading",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl"]},color:{control:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},weight:{control:"select",options:["normal","medium","semibold","bold","extrabold"]},align:{control:"select",options:["left","center","right","justify"]}}},i={args:{children:"This is a heading",as:"h2",size:"xl"}},n={render:()=>e.jsxs(d,{align:"start",gap:4,children:[e.jsx(r,{size:"5xl",children:"Heading 5XL"}),e.jsx(r,{size:"4xl",children:"Heading 4XL"}),e.jsx(r,{size:"3xl",children:"Heading 3XL"}),e.jsx(r,{size:"2xl",children:"Heading 2XL"}),e.jsx(r,{size:"xl",children:"Heading XL"}),e.jsx(r,{size:"lg",children:"Heading LG"}),e.jsx(r,{size:"md",children:"Heading MD"}),e.jsx(r,{size:"sm",children:"Heading SM"}),e.jsx(r,{size:"xs",children:"Heading XS"})]})},a={render:()=>e.jsxs(d,{align:"start",gap:4,children:[e.jsx(r,{as:"h1",size:"4xl",children:"H1 - Page Title"}),e.jsx(r,{as:"h2",size:"2xl",children:"H2 - Section Title"}),e.jsx(r,{as:"h3",size:"xl",children:"H3 - Subsection Title"}),e.jsx(r,{as:"h4",size:"lg",children:"H4 - Card Title"}),e.jsx(r,{as:"h5",size:"md",children:"H5 - Small Title"}),e.jsx(r,{as:"h6",size:"sm",children:"H6 - Tiny Title"})]})},s={render:()=>e.jsxs(d,{align:"start",gap:4,children:[e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"tertiary",children:"Tertiary Color"}),e.jsx(r,{color:"success",children:"Success Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"error",children:"Error Color"}),e.jsx(r,{color:"info",children:"Info Color"})]})},l={render:()=>e.jsxs(d,{align:"start",gap:4,children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"}),e.jsx(r,{weight:"extrabold",children:"Extrabold Weight"})]})},o={render:()=>e.jsx(W,{maxW:"300px",children:e.jsx(r,{truncate:!0,children:"This is a very long heading that should be truncated when it exceeds the container width"})})};var t,c,g;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "This is a heading",
    as: "h2",
    size: "xl"
  }
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,h,H;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={4}>\r
            <XlpHeading size="5xl">Heading 5XL</XlpHeading>\r
            <XlpHeading size="4xl">Heading 4XL</XlpHeading>\r
            <XlpHeading size="3xl">Heading 3XL</XlpHeading>\r
            <XlpHeading size="2xl">Heading 2XL</XlpHeading>\r
            <XlpHeading size="xl">Heading XL</XlpHeading>\r
            <XlpHeading size="lg">Heading LG</XlpHeading>\r
            <XlpHeading size="md">Heading MD</XlpHeading>\r
            <XlpHeading size="sm">Heading SM</XlpHeading>\r
            <XlpHeading size="xs">Heading XS</XlpHeading>\r
        </VStack>
}`,...(H=(h=n.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var m,x,X;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={4}>\r
            <XlpHeading as="h1" size="4xl">H1 - Page Title</XlpHeading>\r
            <XlpHeading as="h2" size="2xl">H2 - Section Title</XlpHeading>\r
            <XlpHeading as="h3" size="xl">H3 - Subsection Title</XlpHeading>\r
            <XlpHeading as="h4" size="lg">H4 - Card Title</XlpHeading>\r
            <XlpHeading as="h5" size="md">H5 - Small Title</XlpHeading>\r
            <XlpHeading as="h6" size="sm">H6 - Tiny Title</XlpHeading>\r
        </VStack>
}`,...(X=(x=a.parameters)==null?void 0:x.docs)==null?void 0:X.source}}};var u,j,z;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={4}>\r
            <XlpHeading color="primary">Primary Color</XlpHeading>\r
            <XlpHeading color="secondary">Secondary Color</XlpHeading>\r
            <XlpHeading color="tertiary">Tertiary Color</XlpHeading>\r
            <XlpHeading color="success">Success Color</XlpHeading>\r
            <XlpHeading color="warning">Warning Color</XlpHeading>\r
            <XlpHeading color="error">Error Color</XlpHeading>\r
            <XlpHeading color="info">Info Color</XlpHeading>\r
        </VStack>
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var S,y,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack align="start" gap={4}>\r
            <XlpHeading weight="normal">Normal Weight</XlpHeading>\r
            <XlpHeading weight="medium">Medium Weight</XlpHeading>\r
            <XlpHeading weight="semibold">Semibold Weight</XlpHeading>\r
            <XlpHeading weight="bold">Bold Weight</XlpHeading>\r
            <XlpHeading weight="extrabold">Extrabold Weight</XlpHeading>\r
        </VStack>
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var C,w,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box maxW="300px">\r
            <XlpHeading truncate>\r
                This is a very long heading that should be truncated when it exceeds the container width\r
            </XlpHeading>\r
        </Box>
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const _=["Default","AllSizes","SemanticHeadings","Colors","Weights","Truncated"];export{n as AllSizes,s as Colors,i as Default,a as SemanticHeadings,o as Truncated,l as Weights,_ as __namedExportsOrder,N as default};
