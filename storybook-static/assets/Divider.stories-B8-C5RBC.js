import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-DhY--VwN.js";import{c as E}from"./create-recipe-context-Dhiw8L_C.js";import{c as C}from"./empty-BNjmiMPX.js";import{a as M,b as h}from"./split-props-B9mtt7b_.js";import{o as k}from"./omit-QLD0Eizt.js";import{B as i}from"./index-BCRR_Fbj.js";import{F as p}from"./flex-BbQTeZJH.js";import{T as r}from"./index-C5uWXf4o.js";import"./use-recipe-d5ucoKYr.js";const{useRecipeResult:q}=E({key:"separator"}),F=W.forwardRef(function(n,x){const{styles:R,className:V,props:N}=q(n),m=n.orientation||"horizontal";return e.jsx(C.span,{ref:x,role:h(m)?"separator":"presentation","aria-orientation":h(m)?m:void 0,...k(N,["orientation"]),className:M(V,n.className),css:[R,n.css]})});F.displayName="Separator";const t=({orientation:o="horizontal",variant:n="solid",size:x="sm"})=>e.jsx(F,{orientation:o,variant:n,size:x});try{t.displayName="XlpDivider",t.__docgenInfo={description:"XlpDivider - A visual separator component",displayName:"XlpDivider",props:{orientation:{defaultValue:{value:"horizontal"},description:"The orientation of the divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},variant:{defaultValue:{value:"solid"},description:"The variant of the divider",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dashed"'},{value:'"dotted"'},{value:'"solid"'}]}},size:{defaultValue:{value:"sm"},description:"The size/thickness of the divider",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const U={title:"Components/Layout/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed","dotted"]},size:{control:"select",options:["xs","sm","md","lg"]}}},s={args:{},decorators:[o=>e.jsx(i,{width:"300px",children:e.jsx(o,{})})]},a={render:()=>e.jsx(i,{width:"300px",children:e.jsxs(p,{direction:"column",gap:4,children:[e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Solid"}),e.jsx(t,{variant:"solid"})]}),e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Dashed"}),e.jsx(t,{variant:"dashed"})]}),e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Dotted"}),e.jsx(t,{variant:"dotted"})]})]})})},d={render:()=>e.jsx(i,{width:"300px",children:e.jsxs(p,{direction:"column",gap:4,children:[e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Extra Small"}),e.jsx(t,{size:"xs"})]}),e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Small"}),e.jsx(t,{size:"sm"})]}),e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Medium"}),e.jsx(t,{size:"md"})]}),e.jsxs(i,{children:[e.jsx(r,{mb:2,children:"Large"}),e.jsx(t,{size:"lg"})]})]})})},l={render:()=>e.jsxs(p,{height:"100px",align:"center",gap:4,children:[e.jsx(r,{children:"Section 1"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Section 2"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Section 3"})]})},c={render:()=>e.jsxs(i,{width:"400px",p:4,borderWidth:"1px",borderRadius:"lg",children:[e.jsx(r,{fontWeight:"bold",mb:2,children:"Section Header"}),e.jsx(r,{fontSize:"sm",mb:4,children:"Some content in this section explaining something important."}),e.jsx(t,{}),e.jsx(r,{fontWeight:"bold",mt:4,mb:2,children:"Another Section"}),e.jsx(r,{fontSize:"sm",children:"More content in this section with additional information."})]})};var u,v,j;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <Box width="300px"><Story /></Box>]
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var g,f,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Box width="300px">\r
            <Flex direction="column" gap={4}>\r
                <Box>\r
                    <Text mb={2}>Solid</Text>\r
                    <XlpDivider variant="solid" />\r
                </Box>\r
                <Box>\r
                    <Text mb={2}>Dashed</Text>\r
                    <XlpDivider variant="dashed" />\r
                </Box>\r
                <Box>\r
                    <Text mb={2}>Dotted</Text>\r
                    <XlpDivider variant="dotted" />\r
                </Box>\r
            </Flex>\r
        </Box>
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,b,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box width="300px">\r
            <Flex direction="column" gap={4}>\r
                <Box>\r
                    <Text mb={2}>Extra Small</Text>\r
                    <XlpDivider size="xs" />\r
                </Box>\r
                <Box>\r
                    <Text mb={2}>Small</Text>\r
                    <XlpDivider size="sm" />\r
                </Box>\r
                <Box>\r
                    <Text mb={2}>Medium</Text>\r
                    <XlpDivider size="md" />\r
                </Box>\r
                <Box>\r
                    <Text mb={2}>Large</Text>\r
                    <XlpDivider size="lg" />\r
                </Box>\r
            </Flex>\r
        </Box>
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var z,D,y;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex height="100px" align="center" gap={4}>\r
            <Text>Section 1</Text>\r
            <XlpDivider orientation="vertical" />\r
            <Text>Section 2</Text>\r
            <XlpDivider orientation="vertical" />\r
            <Text>Section 3</Text>\r
        </Flex>
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var X,w,_;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box width="400px" p={4} borderWidth="1px" borderRadius="lg">\r
            <Text fontWeight="bold" mb={2}>Section Header</Text>\r
            <Text fontSize="sm" mb={4}>Some content in this section explaining something important.</Text>\r
            <XlpDivider />\r
            <Text fontWeight="bold" mt={4} mb={2}>Another Section</Text>\r
            <Text fontSize="sm">More content in this section with additional information.</Text>\r
        </Box>
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const Y=["Default","Variants","Sizes","Vertical","InContent"];export{s as Default,c as InContent,d as Sizes,a as Variants,l as Vertical,Y as __namedExportsOrder,U as default};
