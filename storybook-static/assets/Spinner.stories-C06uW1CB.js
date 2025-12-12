import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as y}from"./spinner-Bgrx1LWn.js";import"./create-recipe-context-Dhiw8L_C.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";const r=({size:t="md",colorPalette:x="blue",borderWidth:v,label:S="Loading..."})=>e.jsx(y,{size:t,colorPalette:x,borderWidth:v,"aria-label":S});try{r.displayName="XlpSpinner",r.__docgenInfo={description:"XlpSpinner - A loading spinner component",displayName:"XlpSpinner",props:{size:{defaultValue:{value:"md"},description:"The size of the spinner",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},colorPalette:{defaultValue:{value:"blue"},description:"The color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'}]}},borderWidth:{defaultValue:null,description:"Border width of the spinner",name:"borderWidth",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Loading..."},description:"Accessible label",name:"label",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Components/Feedback/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]}}},l={args:{}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(r,{size:"xs"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(r,{colorPalette:"blue"}),e.jsx(r,{colorPalette:"green"}),e.jsx(r,{colorPalette:"red"}),e.jsx(r,{colorPalette:"purple"}),e.jsx(r,{colorPalette:"orange"}),e.jsx(r,{colorPalette:"teal"})]})};var s,o,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(o=l.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  }}>\r
            <XlpSpinner size="xs" />\r
            <XlpSpinner size="sm" />\r
            <XlpSpinner size="md" />\r
            <XlpSpinner size="lg" />\r
            <XlpSpinner size="xl" />\r
        </div>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  }}>\r
            <XlpSpinner colorPalette="blue" />\r
            <XlpSpinner colorPalette="green" />\r
            <XlpSpinner colorPalette="red" />\r
            <XlpSpinner colorPalette="purple" />\r
            <XlpSpinner colorPalette="orange" />\r
            <XlpSpinner colorPalette="teal" />\r
        </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const I=["Default","Sizes","ColorPalettes"];export{n as ColorPalettes,l as Default,a as Sizes,I as __namedExportsOrder,_ as default};
