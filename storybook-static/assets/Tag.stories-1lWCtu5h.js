import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./create-slot-recipe-context-DbaULi-n.js";import{a as O}from"./icons-ARZDse-g.js";import{k as W,d as G,j as U}from"./index-B44x0rYr.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";const{withProvider:A,withContext:i}=N({key:"tag"}),L=A("div","root"),B=i("span","label"),M=i("button","closeTrigger",{defaultProps:{children:e.jsx(O,{})}}),Y=i("span","startElement"),H=i("span","endElement"),l=({children:d,size:R="md",colorPalette:F="gray",variant:I="subtle",closable:q=!1,onClose:D,startElement:p})=>e.jsxs(L,{size:R,colorPalette:F,variant:I,children:[p&&e.jsx(Y,{children:p}),e.jsx(B,{children:d}),q&&e.jsx(H,{children:e.jsx(M,{onClick:D})})]});try{l.displayName="XlpTag",l.__docgenInfo={description:"XlpTag - A tag/chip component for labeling",displayName:"XlpTag",props:{children:{defaultValue:null,description:"The content of the tag",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"The size of the tag",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},colorPalette:{defaultValue:{value:"gray"},description:"The color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'},{value:'"yellow"'}]}},variant:{defaultValue:{value:"subtle"},description:"The variant of the tag",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'},{value:'"surface"'}]}},closable:{defaultValue:{value:"false"},description:"Whether the tag is closable",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},startElement:{defaultValue:null,description:"Start element (icon)",name:"startElement",required:!1,type:{name:"ReactNode"}}}}}catch{}const ae={title:"Components/Data Display/Tag",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"]},variant:{control:"select",options:["solid","subtle","outline","surface"]},closable:{control:"boolean"}}},a={args:{children:"Tag"}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(l,{size:"sm",children:"Small"}),e.jsx(l,{size:"md",children:"Medium"}),e.jsx(l,{size:"lg",children:"Large"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(l,{colorPalette:"gray",children:"Gray"}),e.jsx(l,{colorPalette:"blue",children:"Blue"}),e.jsx(l,{colorPalette:"green",children:"Green"}),e.jsx(l,{colorPalette:"red",children:"Red"}),e.jsx(l,{colorPalette:"purple",children:"Purple"}),e.jsx(l,{colorPalette:"orange",children:"Orange"}),e.jsx(l,{colorPalette:"yellow",children:"Yellow"}),e.jsx(l,{colorPalette:"teal",children:"Teal"}),e.jsx(l,{colorPalette:"pink",children:"Pink"}),e.jsx(l,{colorPalette:"cyan",children:"Cyan"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{variant:"solid",colorPalette:"blue",children:"Solid"}),e.jsx(l,{variant:"subtle",colorPalette:"blue",children:"Subtle"}),e.jsx(l,{variant:"outline",colorPalette:"blue",children:"Outline"}),e.jsx(l,{variant:"surface",colorPalette:"blue",children:"Surface"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{startElement:e.jsx(W,{}),colorPalette:"blue",children:"User"}),e.jsx(l,{startElement:e.jsx(G,{}),colorPalette:"yellow",children:"Featured"}),e.jsx(l,{startElement:e.jsx(U,{}),colorPalette:"green",children:"Verified"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{closable:!0,colorPalette:"blue",children:"Removable"}),e.jsx(l,{closable:!0,colorPalette:"green",children:"Click X to close"}),e.jsx(l,{closable:!0,colorPalette:"red",children:"Delete"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(l,{colorPalette:"green",variant:"solid",children:"Active"}),e.jsx(l,{colorPalette:"yellow",variant:"solid",children:"Pending"}),e.jsx(l,{colorPalette:"red",variant:"solid",children:"Inactive"}),e.jsx(l,{colorPalette:"blue",variant:"solid",children:"New"})]})};var u,g,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Tag"
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var T,v,x;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpTag size="sm">Small</XlpTag>\r
            <XlpTag size="md">Medium</XlpTag>\r
            <XlpTag size="lg">Large</XlpTag>\r
        </div>
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,P,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap"
  }}>\r
            <XlpTag colorPalette="gray">Gray</XlpTag>\r
            <XlpTag colorPalette="blue">Blue</XlpTag>\r
            <XlpTag colorPalette="green">Green</XlpTag>\r
            <XlpTag colorPalette="red">Red</XlpTag>\r
            <XlpTag colorPalette="purple">Purple</XlpTag>\r
            <XlpTag colorPalette="orange">Orange</XlpTag>\r
            <XlpTag colorPalette="yellow">Yellow</XlpTag>\r
            <XlpTag colorPalette="teal">Teal</XlpTag>\r
            <XlpTag colorPalette="pink">Pink</XlpTag>\r
            <XlpTag colorPalette="cyan">Cyan</XlpTag>\r
        </div>
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var X,f,b;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpTag variant="solid" colorPalette="blue">Solid</XlpTag>\r
            <XlpTag variant="subtle" colorPalette="blue">Subtle</XlpTag>\r
            <XlpTag variant="outline" colorPalette="blue">Outline</XlpTag>\r
            <XlpTag variant="surface" colorPalette="blue">Surface</XlpTag>\r
        </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,S,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpTag startElement={<FiUser />} colorPalette="blue">User</XlpTag>\r
            <XlpTag startElement={<FiStar />} colorPalette="yellow">Featured</XlpTag>\r
            <XlpTag startElement={<FiCheck />} colorPalette="green">Verified</XlpTag>\r
        </div>
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,k,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpTag closable colorPalette="blue">Removable</XlpTag>\r
            <XlpTag closable colorPalette="green">Click X to close</XlpTag>\r
            <XlpTag closable colorPalette="red">Delete</XlpTag>\r
        </div>
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,V,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "0.5rem"
  }}>\r
            <XlpTag colorPalette="green" variant="solid">Active</XlpTag>\r
            <XlpTag colorPalette="yellow" variant="solid">Pending</XlpTag>\r
            <XlpTag colorPalette="red" variant="solid">Inactive</XlpTag>\r
            <XlpTag colorPalette="blue" variant="solid">New</XlpTag>\r
        </div>
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const re=["Default","Sizes","ColorPalettes","Variants","WithIcon","Closable","StatusTags"];export{s as Closable,t as ColorPalettes,a as Default,r as Sizes,c as StatusTags,o as Variants,n as WithIcon,re as __namedExportsOrder,ae as default};
