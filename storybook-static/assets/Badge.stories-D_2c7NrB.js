import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{X as r}from"./Badge-CUmcbzjL.js";import"./create-recipe-context-Dhiw8L_C.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";const b={title:"Components/Data Display/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{colorPalette:{control:"select",options:["green","red","gray","blue","yellow","purple","orange"],description:"The color scheme of the badge"},children:{control:"text",description:"The content to display in the badge"}}},l={args:{children:"Badge",colorPalette:"gray"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{colorPalette:"gray",children:"Gray"}),e.jsx(r,{colorPalette:"green",children:"Green"}),e.jsx(r,{colorPalette:"red",children:"Red"}),e.jsx(r,{colorPalette:"blue",children:"Blue"}),e.jsx(r,{colorPalette:"yellow",children:"Yellow"}),e.jsx(r,{colorPalette:"purple",children:"Purple"}),e.jsx(r,{colorPalette:"orange",children:"Orange"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{colorPalette:"green",children:"Success"}),e.jsx(r,{colorPalette:"red",children:"Error"}),e.jsx(r,{colorPalette:"yellow",children:"Warning"}),e.jsx(r,{colorPalette:"blue",children:"Info"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{colorPalette:"green",children:"• Online"}),e.jsx(r,{colorPalette:"gray",children:"• Offline"}),e.jsx(r,{colorPalette:"blue",children:"v1.0.0"}),e.jsx(r,{colorPalette:"purple",children:"New"})]})};var n,s,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    colorPalette: "gray"
  }
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>\r
            <XlpBadge colorPalette="gray">Gray</XlpBadge>\r
            <XlpBadge colorPalette="green">Green</XlpBadge>\r
            <XlpBadge colorPalette="red">Red</XlpBadge>\r
            <XlpBadge colorPalette="blue">Blue</XlpBadge>\r
            <XlpBadge colorPalette="yellow">Yellow</XlpBadge>\r
            <XlpBadge colorPalette="purple">Purple</XlpBadge>\r
            <XlpBadge colorPalette="orange">Orange</XlpBadge>\r
        </div>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>\r
            <XlpBadge colorPalette="green">Success</XlpBadge>\r
            <XlpBadge colorPalette="red">Error</XlpBadge>\r
            <XlpBadge colorPalette="yellow">Warning</XlpBadge>\r
            <XlpBadge colorPalette="blue">Info</XlpBadge>\r
        </div>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var B,P,x;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpBadge colorPalette="green">• Online</XlpBadge>\r
            <XlpBadge colorPalette="gray">• Offline</XlpBadge>\r
            <XlpBadge colorPalette="blue">v1.0.0</XlpBadge>\r
            <XlpBadge colorPalette="purple">New</XlpBadge>\r
        </div>
}`,...(x=(P=t.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const S=["Default","ColorPalettes","StatusBadges","CustomContent"];export{a as ColorPalettes,t as CustomContent,l as Default,o as StatusBadges,S as __namedExportsOrder,b as default};
