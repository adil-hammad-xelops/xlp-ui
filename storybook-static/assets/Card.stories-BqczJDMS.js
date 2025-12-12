import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as H}from"./create-slot-recipe-context-DbaULi-n.js";import{X as h}from"./Button-CjnvWVVQ.js";import{H as n}from"./index-BQVp-j3M.js";import{T as o}from"./index-C5uWXf4o.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./button-Csxds6DH.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const{withProvider:w,withContext:i}=H({key:"card"}),T=w("div","root"),b=i("div","body"),B=i("div","header"),z=i("div","footer");i("h3","title");i("p","description");const a=({children:r,variant:g="elevated",..._})=>e.jsx(T,{variant:g,..._,children:r}),t=({children:r})=>e.jsx(B,{children:r}),d=({children:r})=>e.jsx(b,{children:r}),c=({children:r})=>e.jsx(z,{children:r});try{a.displayName="XlpCard",a.__docgenInfo={description:"XlpCard - A flexible card container component",displayName:"XlpCard",props:{children:{defaultValue:null,description:"The content of the card",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"elevated"},description:"The variant of the card",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"subtle"'},{value:'"elevated"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>"}}}}}catch{}try{t.displayName="XlpCardHeader",t.__docgenInfo={description:"",displayName:"XlpCardHeader",props:{}}}catch{}try{d.displayName="XlpCardBody",d.__docgenInfo={description:"",displayName:"XlpCardBody",props:{}}}catch{}try{c.displayName="XlpCardFooter",c.__docgenInfo={description:"",displayName:"XlpCardFooter",props:{}}}catch{}const P={title:"Components/Data Display/Card",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outline","subtle"],description:"The variant of the card"}}},s={render:()=>e.jsxs(a,{style:{width:"320px"},children:[e.jsx(t,{children:e.jsx(n,{size:"md",children:"Card Title"})}),e.jsx(d,{children:e.jsx(o,{children:"This is the card content. You can put any content here."})})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"elevated",style:{width:"200px"},children:[e.jsx(t,{children:e.jsx(n,{size:"sm",children:"Elevated"})}),e.jsx(d,{children:e.jsx(o,{fontSize:"sm",children:"Card with shadow"})})]}),e.jsxs(a,{variant:"outline",style:{width:"200px"},children:[e.jsx(t,{children:e.jsx(n,{size:"sm",children:"Outline"})}),e.jsx(d,{children:e.jsx(o,{fontSize:"sm",children:"Card with border"})})]}),e.jsxs(a,{variant:"subtle",style:{width:"200px"},children:[e.jsx(t,{children:e.jsx(n,{size:"sm",children:"Subtle"})}),e.jsx(d,{children:e.jsx(o,{fontSize:"sm",children:"Subtle background"})})]})]})},p={render:()=>e.jsxs(a,{style:{width:"320px"},children:[e.jsx(t,{children:e.jsx(n,{size:"md",children:"Complete Card"})}),e.jsx(d,{children:e.jsx(o,{children:"This card has a header, body, and footer with action buttons."})}),e.jsx(c,{children:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(h,{variant:"solid",colorPalette:"blue",children:"Accept"}),e.jsx(h,{variant:"ghost",children:"Cancel"})]})})]})};var m,x,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <XlpCard style={{
    width: "320px"
  }}>\r
            <XlpCardHeader>\r
                <Heading size="md">Card Title</Heading>\r
            </XlpCardHeader>\r
            <XlpCardBody>\r
                <Text>This is the card content. You can put any content here.</Text>\r
            </XlpCardBody>\r
        </XlpCard>
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var C,y,X;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>\r
            <XlpCard variant="elevated" style={{
      width: "200px"
    }}>\r
                <XlpCardHeader>\r
                    <Heading size="sm">Elevated</Heading>\r
                </XlpCardHeader>\r
                <XlpCardBody>\r
                    <Text fontSize="sm">Card with shadow</Text>\r
                </XlpCardBody>\r
            </XlpCard>\r
            <XlpCard variant="outline" style={{
      width: "200px"
    }}>\r
                <XlpCardHeader>\r
                    <Heading size="sm">Outline</Heading>\r
                </XlpCardHeader>\r
                <XlpCardBody>\r
                    <Text fontSize="sm">Card with border</Text>\r
                </XlpCardBody>\r
            </XlpCard>\r
            <XlpCard variant="subtle" style={{
      width: "200px"
    }}>\r
                <XlpCardHeader>\r
                    <Heading size="sm">Subtle</Heading>\r
                </XlpCardHeader>\r
                <XlpCardBody>\r
                    <Text fontSize="sm">Subtle background</Text>\r
                </XlpCardBody>\r
            </XlpCard>\r
        </div>
}`,...(X=(y=l.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var v,f,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <XlpCard style={{
    width: "320px"
  }}>\r
            <XlpCardHeader>\r
                <Heading size="md">Complete Card</Heading>\r
            </XlpCardHeader>\r
            <XlpCardBody>\r
                <Text>This card has a header, body, and footer with action buttons.</Text>\r
            </XlpCardBody>\r
            <XlpCardFooter>\r
                <div style={{
        display: "flex",
        gap: "0.5rem"
      }}>\r
                    <XlpButton variant="solid" colorPalette="blue">Accept</XlpButton>\r
                    <XlpButton variant="ghost">Cancel</XlpButton>\r
                </div>\r
            </XlpCardFooter>\r
        </XlpCard>
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const Y=["Default","Variants","WithFooter"];export{s as Default,l as Variants,p as WithFooter,Y as __namedExportsOrder,P as default};
