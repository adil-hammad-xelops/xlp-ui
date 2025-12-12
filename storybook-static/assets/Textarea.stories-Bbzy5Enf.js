import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as X}from"./create-recipe-context-Dhiw8L_C.js";import{a as w}from"./index-DyFH4k7L.js";import{r as m}from"./index-DhY--VwN.js";import{a as E,b as _}from"./factory-Bi3dmlYl.js";import{u as S}from"./use-field-context-DfwsQ_Ow.js";import{a0 as q}from"./index-Clc2OPsj.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";const z=m.forwardRef((l,d)=>{const{autoresize:r,...u}=l,s=m.useRef(null),t=S(),p=q(t==null?void 0:t.getTextareaProps(),{style:{resize:r?"none":void 0}},u);return m.useEffect(()=>{if(r)return w(s.current)},[r]),e.jsx(E.textarea,{...p,ref:_(d,s)})});z.displayName="FieldTextarea";const{withContext:C}=X({key:"textarea"}),j=C(z);j.displayName="Textarea";const a=({size:l="md",variant:d="outline",rows:r=4,placeholder:u,disabled:s,value:t,defaultValue:p,onChange:V})=>e.jsx(j,{size:l,variant:d,rows:r,placeholder:u,disabled:s,value:t,defaultValue:p,onChange:V});try{a.displayName="XlpTextarea",a.__docgenInfo={description:"XlpTextarea - A multi-line text input component",displayName:"XlpTextarea",props:{size:{defaultValue:{value:"md"},description:"The size of the textarea",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"outline"},description:"The variant of the textarea",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"subtle"'},{value:'"flushed"'}]}},rows:{defaultValue:{value:"4"},description:"Number of visible rows",name:"rows",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether the textarea is disabled",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the textarea",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}}}}}catch{}const H={title:"Components/Form/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["outline","subtle","flushed"]},disabled:{control:"boolean"},rows:{control:"number"}}},n={args:{placeholder:"Enter your message..."}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(a,{variant:"outline",placeholder:"Outline variant"}),e.jsx(a,{variant:"subtle",placeholder:"Subtle variant"}),e.jsx(a,{variant:"flushed",placeholder:"Flushed variant"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(a,{size:"xs",placeholder:"Extra small"}),e.jsx(a,{size:"sm",placeholder:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large"})]})};var c,x,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpTextarea variant="outline" placeholder="Outline variant" />\r
            <XlpTextarea variant="subtle" placeholder="Subtle variant" />\r
            <XlpTextarea variant="flushed" placeholder="Flushed variant" />\r
        </div>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,T,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpTextarea size="xs" placeholder="Extra small" />\r
            <XlpTextarea size="sm" placeholder="Small" />\r
            <XlpTextarea size="md" placeholder="Medium" />\r
            <XlpTextarea size="lg" placeholder="Large" />\r
        </div>
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const I=["Default","Variants","Sizes"];export{n as Default,i as Sizes,o as Variants,I as __namedExportsOrder,H as default};
