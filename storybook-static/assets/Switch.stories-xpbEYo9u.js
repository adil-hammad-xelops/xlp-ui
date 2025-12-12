import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DhY--VwN.js";import{c as Q}from"./create-slot-recipe-context-DbaULi-n.js";import{c as V}from"./empty-BNjmiMPX.js";import{d as A}from"./attr-C3Jtgmrz.js";import{c as U,a as d}from"./factory-Bi3dmlYl.js";import{u as E}from"./use-field-context-DfwsQ_Ow.js";import{a0 as u}from"./index-Clc2OPsj.js";import{u as Y,b as Z,a as ee,n as te,c as O}from"./index-D_cjyf5z.js";import{c as re,m as ae}from"./index-BLuSQQ4v.js";import"./split-props-B9mtt7b_.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";import"./index-Bv77Z0QR.js";const[$,h]=U({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),H=n.forwardRef((o,a)=>{const l=h(),r=u(l.getControlProps(),o);return t.jsx(d.span,{...r,ref:a})});H.displayName="SwitchControl";const M=n.forwardRef((o,a)=>{const l=h(),r=u(l.getHiddenInputProps(),o),e=E();return t.jsx(d.input,{"aria-describedby":e==null?void 0:e.ariaDescribedby,...r,ref:a})});M.displayName="SwitchHiddenInput";const W=n.forwardRef((o,a)=>{const l=h(),r=u(l.getLabelProps(),o);return t.jsx(d.span,{...r,ref:a})});W.displayName="SwitchLabel";const le=o=>{const a=n.useId(),{getRootNode:l}=Y(),{dir:r}=Z(),e=E(),s={id:a,ids:{label:e==null?void 0:e.ids.label,hiddenInput:e==null?void 0:e.ids.control},dir:r,disabled:e==null?void 0:e.disabled,readOnly:e==null?void 0:e.readOnly,invalid:e==null?void 0:e.invalid,required:e==null?void 0:e.required,getRootNode:l,...o},i=ee(ae,s);return re(i,te)},oe=O(),B=n.forwardRef((o,a)=>{const[l,r]=oe(o,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),e=le(l),s=u(e.getRootProps(),r);return t.jsx($,{value:e,children:t.jsx(d.label,{...s,ref:a})})});B.displayName="SwitchRoot";const ce=O(),F=n.forwardRef((o,a)=>{const[{value:l},r]=ce(o,["value"]),e=u(l.getRootProps(),r);return t.jsx($,{value:l,children:t.jsx(d.label,{...e,ref:a})})});F.displayName="SwitchRootProvider";const G=n.forwardRef((o,a)=>{const l=h(),r=u(l.getThumbProps(),o);return t.jsx(d.span,{...r,ref:a})});G.displayName="SwitchThumb";const{withProvider:J,withContext:g,useStyles:se}=Q({key:"switch"});J(F,"root",{forwardAsChild:!0});const ne=J(B,"root",{forwardAsChild:!0}),ie=g(W,"label",{forwardAsChild:!0}),K=g(G,"thumb",{forwardAsChild:!0}),de=g(H,"control",{forwardAsChild:!0,defaultProps:{children:t.jsx(K,{})}});n.forwardRef(function(a,l){const r=h(),e=se(),{fallback:s,children:i,unstyled:p,...k}=a;return t.jsx(V.span,{ref:l,"data-checked":A(r.checked),...k,css:[p?void 0:e.indicator,a.css],children:r.checked?i:s})});const ue=n.forwardRef(function(a,l){const r=h(),{fallback:e,children:s,...i}=a;return t.jsx(V.span,{ref:l,"data-checked":A(r.checked),...i,children:r.checked?s:e})}),he=M,c=({checked:o,defaultChecked:a,onCheckedChange:l,disabled:r=!1,invalid:e=!1,size:s="md",colorPalette:i="blue",children:p,trackLabel:k,thumbLabel:b})=>t.jsxs(ne,{checked:o,defaultChecked:a,onCheckedChange:l,disabled:r,invalid:e,size:s,colorPalette:i,children:[t.jsx(he,{}),t.jsx(de,{children:t.jsx(K,{children:b&&t.jsx(ue,{fallback:b.off,children:b.on})})}),p&&t.jsx(ie,{children:p})]});try{c.displayName="XlpSwitch",c.__docgenInfo={description:"XlpSwitch - A toggle switch component",displayName:"XlpSwitch",props:{checked:{defaultValue:null,description:"Whether the switch is checked",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Default checked state (uncontrolled)",name:"defaultChecked",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Callback when checked state changes",name:"onCheckedChange",required:!1,type:{name:"((details: { checked: boolean; }) => void)"}},disabled:{defaultValue:{value:"false"},description:"Whether the switch is disabled",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the switch is invalid",name:"invalid",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"The size of the switch",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},colorPalette:{defaultValue:{value:"blue"},description:"The color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'}]}},children:{defaultValue:null,description:"The switch label",name:"children",required:!1,type:{name:"ReactNode"}},trackLabel:{defaultValue:null,description:"Track label when checked",name:"trackLabel",required:!1,type:{name:"{ on: ReactNode; off: ReactNode; }"}},thumbLabel:{defaultValue:null,description:"Thumb label",name:"thumbLabel",required:!1,type:{name:"{ on: ReactNode; off: ReactNode; }"}}}}}catch{}const Re={title:"Components/Form/Switch",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]},disabled:{control:"boolean"},defaultChecked:{control:"boolean"}}},m={args:{children:"Enable notifications"}},f={args:{children:"Active",defaultChecked:!0}},w={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(c,{size:"xs",children:"Extra small"}),t.jsx(c,{size:"sm",children:"Small"}),t.jsx(c,{size:"md",children:"Medium"}),t.jsx(c,{size:"lg",children:"Large"})]})},S={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(c,{colorPalette:"blue",defaultChecked:!0,children:"Blue"}),t.jsx(c,{colorPalette:"green",defaultChecked:!0,children:"Green"}),t.jsx(c,{colorPalette:"red",defaultChecked:!0,children:"Red"}),t.jsx(c,{colorPalette:"purple",defaultChecked:!0,children:"Purple"}),t.jsx(c,{colorPalette:"orange",defaultChecked:!0,children:"Orange"}),t.jsx(c,{colorPalette:"teal",defaultChecked:!0,children:"Teal"})]})},x={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(c,{children:"Normal"}),t.jsx(c,{disabled:!0,children:"Disabled"}),t.jsx(c,{disabled:!0,defaultChecked:!0,children:"Disabled checked"})]})};var C,v,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Enable notifications"
  }
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var P,j,X;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Active",
    defaultChecked: true
  }
}`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var R,N,z;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <XlpSwitch size="xs">Extra small</XlpSwitch>\r
            <XlpSwitch size="sm">Small</XlpSwitch>\r
            <XlpSwitch size="md">Medium</XlpSwitch>\r
            <XlpSwitch size="lg">Large</XlpSwitch>\r
        </div>
}`,...(z=(N=w.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,T,q;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <XlpSwitch colorPalette="blue" defaultChecked>Blue</XlpSwitch>\r
            <XlpSwitch colorPalette="green" defaultChecked>Green</XlpSwitch>\r
            <XlpSwitch colorPalette="red" defaultChecked>Red</XlpSwitch>\r
            <XlpSwitch colorPalette="purple" defaultChecked>Purple</XlpSwitch>\r
            <XlpSwitch colorPalette="orange" defaultChecked>Orange</XlpSwitch>\r
            <XlpSwitch colorPalette="teal" defaultChecked>Teal</XlpSwitch>\r
        </div>
}`,...(q=(T=S.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var L,_,I;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <XlpSwitch>Normal</XlpSwitch>\r
            <XlpSwitch disabled>Disabled</XlpSwitch>\r
            <XlpSwitch disabled defaultChecked>Disabled checked</XlpSwitch>\r
        </div>
}`,...(I=(_=x.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const Ne=["Default","Checked","Sizes","ColorPalettes","States"];export{f as Checked,S as ColorPalettes,m as Default,w as Sizes,x as States,Ne as __namedExportsOrder,Re as default};
