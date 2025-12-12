import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{X as r}from"./Button-CjnvWVVQ.js";import"./button-Csxds6DH.js";import"./index-DhY--VwN.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const F={title:"Components/Form/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","ghost","subtle","surface","plain"],description:"The visual variant of the button"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"The size of the button"},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"],description:"The color palette to use"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Whether the button is in loading state"},borderRadius:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","full"],description:"The border radius of the button"}}},t={args:{children:"Button",variant:"solid",size:"md",colorPalette:"blue"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",children:"Solid"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"subtle",children:"Subtle"}),e.jsx(r,{variant:"surface",children:"Surface"}),e.jsx(r,{variant:"plain",children:"Plain"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"xs",children:"Extra Small"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"xl",children:"Extra Large"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{colorPalette:"gray",children:"Gray"}),e.jsx(r,{colorPalette:"red",children:"Red"}),e.jsx(r,{colorPalette:"green",children:"Green"}),e.jsx(r,{colorPalette:"blue",children:"Blue"}),e.jsx(r,{colorPalette:"teal",children:"Teal"}),e.jsx(r,{colorPalette:"pink",children:"Pink"}),e.jsx(r,{colorPalette:"purple",children:"Purple"}),e.jsx(r,{colorPalette:"cyan",children:"Cyan"}),e.jsx(r,{colorPalette:"orange",children:"Orange"}),e.jsx(r,{colorPalette:"yellow",children:"Yellow"})]})},a={args:{children:"Disabled Button",disabled:!0}},s={args:{children:"Loading...",loading:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{borderRadius:"none",children:"None"}),e.jsx(r,{borderRadius:"sm",children:"Small"}),e.jsx(r,{borderRadius:"md",children:"Medium"}),e.jsx(r,{borderRadius:"lg",children:"Large"}),e.jsx(r,{borderRadius:"xl",children:"XL"}),e.jsx(r,{borderRadius:"2xl",children:"2XL"}),e.jsx(r,{borderRadius:"full",children:"Full"})]})};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    colorPalette: "blue"
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,x;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>\r
            <XlpButton variant="solid">Solid</XlpButton>\r
            <XlpButton variant="outline">Outline</XlpButton>\r
            <XlpButton variant="ghost">Ghost</XlpButton>\r
            <XlpButton variant="subtle">Subtle</XlpButton>\r
            <XlpButton variant="surface">Surface</XlpButton>\r
            <XlpButton variant="plain">Plain</XlpButton>\r
        </div>
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var B,X,g;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpButton size="xs">Extra Small</XlpButton>\r
            <XlpButton size="sm">Small</XlpButton>\r
            <XlpButton size="md">Medium</XlpButton>\r
            <XlpButton size="lg">Large</XlpButton>\r
            <XlpButton size="xl">Extra Large</XlpButton>\r
        </div>
}`,...(g=(X=n.parameters)==null?void 0:X.docs)==null?void 0:g.source}}};var h,b,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>\r
            <XlpButton colorPalette="gray">Gray</XlpButton>\r
            <XlpButton colorPalette="red">Red</XlpButton>\r
            <XlpButton colorPalette="green">Green</XlpButton>\r
            <XlpButton colorPalette="blue">Blue</XlpButton>\r
            <XlpButton colorPalette="teal">Teal</XlpButton>\r
            <XlpButton colorPalette="pink">Pink</XlpButton>\r
            <XlpButton colorPalette="purple">Purple</XlpButton>\r
            <XlpButton colorPalette="cyan">Cyan</XlpButton>\r
            <XlpButton colorPalette="orange">Orange</XlpButton>\r
            <XlpButton colorPalette="yellow">Yellow</XlpButton>\r
        </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,P,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var v,S,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Loading...",
    loading: true
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var z,L,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    alignItems: "center"
  }}>\r
            <XlpButton borderRadius="none">None</XlpButton>\r
            <XlpButton borderRadius="sm">Small</XlpButton>\r
            <XlpButton borderRadius="md">Medium</XlpButton>\r
            <XlpButton borderRadius="lg">Large</XlpButton>\r
            <XlpButton borderRadius="xl">XL</XlpButton>\r
            <XlpButton borderRadius="2xl">2XL</XlpButton>\r
            <XlpButton borderRadius="full">Full</XlpButton>\r
        </div>
}`,...(w=(L=i.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const N=["Default","Variants","Sizes","ColorPalettes","Disabled","Loading","BorderRadius"];export{i as BorderRadius,o as ColorPalettes,t as Default,a as Disabled,s as Loading,n as Sizes,l as Variants,N as __namedExportsOrder,F as default};
