import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{X as r}from"./Input-wZplC8AG.js";import"./input-BJpkNLYE.js";import"./create-recipe-context-Dhiw8L_C.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";import"./factory-Bi3dmlYl.js";import"./index-Clc2OPsj.js";import"./use-field-context-DfwsQ_Ow.js";const T={title:"Components/Form/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"The size of the input"},variant:{control:"select",options:["outline","subtle","flushed"],description:"The variant of the input"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},borderRadius:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","full"],description:"The border radius of the input"}}},a={args:{placeholder:"Enter text..."}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{variant:"outline",placeholder:"Outline variant"}),e.jsx(r,{variant:"subtle",placeholder:"Subtle variant"}),e.jsx(r,{variant:"flushed",placeholder:"Flushed variant"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{size:"xs",placeholder:"Extra small"}),e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},o={args:{placeholder:"Disabled input",disabled:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{borderRadius:"none",placeholder:"No radius"}),e.jsx(r,{borderRadius:"sm",placeholder:"Small radius"}),e.jsx(r,{borderRadius:"md",placeholder:"Medium radius"}),e.jsx(r,{borderRadius:"lg",placeholder:"Large radius"}),e.jsx(r,{borderRadius:"xl",placeholder:"XL radius"}),e.jsx(r,{borderRadius:"full",placeholder:"Full radius"})]})};var t,i,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,u,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpInput variant="outline" placeholder="Outline variant" />\r
            <XlpInput variant="subtle" placeholder="Subtle variant" />\r
            <XlpInput variant="flushed" placeholder="Flushed variant" />\r
        </div>
}`,...(c=(u=l.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,h,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpInput size="xs" placeholder="Extra small" />\r
            <XlpInput size="sm" placeholder="Small" />\r
            <XlpInput size="md" placeholder="Medium" />\r
            <XlpInput size="lg" placeholder="Large" />\r
        </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,j,X;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpInput borderRadius="none" placeholder="No radius" />\r
            <XlpInput borderRadius="sm" placeholder="Small radius" />\r
            <XlpInput borderRadius="md" placeholder="Medium radius" />\r
            <XlpInput borderRadius="lg" placeholder="Large radius" />\r
            <XlpInput borderRadius="xl" placeholder="XL radius" />\r
            <XlpInput borderRadius="full" placeholder="Full radius" />\r
        </div>
}`,...(X=(j=d.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};const O=["Default","Variants","Sizes","Disabled","BorderRadius"];export{d as BorderRadius,a as Default,o as Disabled,s as Sizes,l as Variants,O as __namedExportsOrder,T as default};
