import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{X as a}from"./IconButton-aUZtIzWw.js";import{F as D,a as r,b as o,c as k,d as L,e as H,f as O,g as R,h as T}from"./index-B44x0rYr.js";import"./icon-button-u2Ktm2UZ.js";import"./index-DhY--VwN.js";import"./button-Csxds6DH.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const Y={title:"Components/Form/IconButton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["solid","outline","ghost","subtle"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]},rounded:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{icon:e.jsx(D,{}),"aria-label":"Search"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",size:"xs"}),e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",size:"sm"}),e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",size:"md"}),e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",size:"lg"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{icon:e.jsx(o,{}),"aria-label":"Edit",variant:"solid",colorPalette:"blue"}),e.jsx(a,{icon:e.jsx(o,{}),"aria-label":"Edit",variant:"outline",colorPalette:"blue"}),e.jsx(a,{icon:e.jsx(o,{}),"aria-label":"Edit",variant:"ghost",colorPalette:"blue"}),e.jsx(a,{icon:e.jsx(o,{}),"aria-label":"Edit",variant:"subtle",colorPalette:"blue"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{icon:e.jsx(k,{}),"aria-label":"Like",variant:"solid",colorPalette:"red"}),e.jsx(a,{icon:e.jsx(L,{}),"aria-label":"Favorite",variant:"solid",colorPalette:"orange"}),e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",variant:"solid",colorPalette:"green"}),e.jsx(a,{icon:e.jsx(H,{}),"aria-label":"Settings",variant:"solid",colorPalette:"purple"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add",variant:"solid",colorPalette:"blue",rounded:!0}),e.jsx(a,{icon:e.jsx(k,{}),"aria-label":"Like",variant:"solid",colorPalette:"red",rounded:!0}),e.jsx(a,{icon:e.jsx(L,{}),"aria-label":"Star",variant:"outline",colorPalette:"orange",rounded:!0})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(a,{icon:e.jsx(O,{}),"aria-label":"Open menu",variant:"ghost"}),e.jsx(a,{icon:e.jsx(R,{}),"aria-label":"Close",variant:"ghost"}),e.jsx(a,{icon:e.jsx(D,{}),"aria-label":"Search",variant:"outline"}),e.jsx(a,{icon:e.jsx(T,{}),"aria-label":"Delete",variant:"ghost",colorPalette:"red"}),e.jsx(a,{icon:e.jsx(r,{}),"aria-label":"Add new",variant:"solid",colorPalette:"blue",rounded:!0})]})},d={args:{icon:e.jsx(o,{}),"aria-label":"Edit",disabled:!0}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: <FiSearch />,
    "aria-label": "Search"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,x,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" size="xs" />\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" size="sm" />\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" size="md" />\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" size="lg" />\r
        </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,j,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpIconButton icon={<FiEdit />} aria-label="Edit" variant="solid" colorPalette="blue" />\r
            <XlpIconButton icon={<FiEdit />} aria-label="Edit" variant="outline" colorPalette="blue" />\r
            <XlpIconButton icon={<FiEdit />} aria-label="Edit" variant="ghost" colorPalette="blue" />\r
            <XlpIconButton icon={<FiEdit />} aria-label="Edit" variant="subtle" colorPalette="blue" />\r
        </div>
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,I,S;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpIconButton icon={<FiHeart />} aria-label="Like" variant="solid" colorPalette="red" />\r
            <XlpIconButton icon={<FiStar />} aria-label="Favorite" variant="solid" colorPalette="orange" />\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" variant="solid" colorPalette="green" />\r
            <XlpIconButton icon={<FiSettings />} aria-label="Settings" variant="solid" colorPalette="purple" />\r
        </div>
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var h,y,X;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add" variant="solid" colorPalette="blue" rounded />\r
            <XlpIconButton icon={<FiHeart />} aria-label="Like" variant="solid" colorPalette="red" rounded />\r
            <XlpIconButton icon={<FiStar />} aria-label="Star" variant="outline" colorPalette="orange" rounded />\r
        </div>
}`,...(X=(y=s.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var B,E,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpIconButton icon={<FiMenu />} aria-label="Open menu" variant="ghost" />\r
            <XlpIconButton icon={<FiX />} aria-label="Close" variant="ghost" />\r
            <XlpIconButton icon={<FiSearch />} aria-label="Search" variant="outline" />\r
            <XlpIconButton icon={<FiTrash />} aria-label="Delete" variant="ghost" colorPalette="red" />\r
            <XlpIconButton icon={<FiPlus />} aria-label="Add new" variant="solid" colorPalette="blue" rounded />\r
        </div>
}`,...(f=(E=c.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var A,z,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <FiEdit />,
    "aria-label": "Edit",
    disabled: true
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const Z=["Default","Sizes","Variants","ColorPalettes","Rounded","CommonUseCases","Disabled"];export{n as ColorPalettes,c as CommonUseCases,t as Default,d as Disabled,s as Rounded,l as Sizes,i as Variants,Z as __namedExportsOrder,Y as default};
