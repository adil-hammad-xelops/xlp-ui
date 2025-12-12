import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as xe}from"./create-slot-recipe-context-DbaULi-n.js";import{c as ve,d as ge}from"./icons-ARZDse-g.js";import{r as u}from"./index-DhY--VwN.js";import{u as ye,b as Ie,a as Ne,n as we,c as Q}from"./index-D_cjyf5z.js";import{c as Ve,a as d}from"./factory-Bi3dmlYl.js";import{c as je,m as Se}from"./index-CwREuive.js";import{u as Y}from"./use-field-context-DfwsQ_Ow.js";import{a0 as i}from"./index-Clc2OPsj.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";const[Z,p]=Ve({name:"NumberInputContext",hookName:"useNumberInputContext",providerName:"<NumberInputProvider />"}),ee=u.forwardRef((r,n)=>{const a=p(),s=i(a.getControlProps(),r);return e.jsx(d.div,{...s,ref:n})});ee.displayName="NumberInputControl";const re=u.forwardRef((r,n)=>{const a=p(),s=i(a.getDecrementTriggerProps(),r);return e.jsx(d.button,{...s,ref:n})});re.displayName="NumberInputDecrementTrigger";const te=u.forwardRef((r,n)=>{const a=p(),s=i(a.getIncrementTriggerProps(),r);return e.jsx(d.button,{...s,ref:n})});te.displayName="NumberInputIncrementTrigger";const ae=u.forwardRef((r,n)=>{const a=p(),s=i(a.getInputProps(),r),o=Y();return e.jsx(d.input,{"aria-describedby":o==null?void 0:o.ariaDescribedby,...s,ref:n})});ae.displayName="NumberInputInput";const ne=u.forwardRef((r,n)=>{const a=p(),s=i(a.getLabelProps(),r);return e.jsx(d.label,{...s,ref:n})});ne.displayName="NumberInputLabel";const Pe=r=>{const n=u.useId(),{getRootNode:a}=ye(),{dir:s,locale:o}=Ie(),t=Y(),N={id:n,ids:{label:t==null?void 0:t.ids.label,input:t==null?void 0:t.ids.control},disabled:t==null?void 0:t.disabled,readOnly:t==null?void 0:t.readOnly,required:t==null?void 0:t.required,invalid:t==null?void 0:t.invalid,dir:s,locale:o,getRootNode:a,...r},w=Ne(Se,N);return je(w,we)},Ce=Q(),se=u.forwardRef((r,n)=>{const[a,s]=Ce(r,["allowMouseWheel","allowOverflow","clampValueOnBlur","defaultValue","disabled","focusInputOnChange","form","formatOptions","id","ids","inputMode","invalid","locale","max","min","name","onFocusChange","onValueChange","onValueInvalid","pattern","readOnly","required","spinOnPress","step","translations","value"]),o=Pe(a),t=i(o.getRootProps(),s);return e.jsx(Z,{value:o,children:e.jsx(d.div,{...t,ref:n})})});se.displayName="NumberInputRoot";const Re=Q(),oe=u.forwardRef((r,n)=>{const[{value:a},s]=Re(r,["value"]),o=i(a.getRootProps(),s);return e.jsx(Z,{value:a,children:e.jsx(d.div,{...o,ref:n})})});oe.displayName="NumberInputRootProvider";const le=u.forwardRef((r,n)=>{const a=p(),s=i(a.getScrubberProps(),r);return e.jsx(d.div,{...s,ref:n})});le.displayName="NumberInputScrubber";const ue=u.forwardRef((r,n)=>{const{children:a,...s}=r,o=p(),t=i(o.getValueTextProps(),s);return e.jsx(d.span,{...t,ref:n,children:a||o.value})});ue.displayName="NumberInputValueText";const{withProvider:de,withContext:c}=xe({key:"numberInput"});de(oe,"root",{forwardAsChild:!0});const Te=de(se,"root",{forwardAsChild:!0});c(ne,"label",{forwardAsChild:!0});const qe=c(ae,"input",{forwardAsChild:!0}),ie=c(te,"incrementTrigger",{forwardAsChild:!0,defaultProps:{children:e.jsx(ve,{})}}),pe=c(re,"decrementTrigger",{forwardAsChild:!0,defaultProps:{children:e.jsx(ge,{})}}),ze=c(ee,"control",{forwardAsChild:!0,defaultProps:{children:e.jsxs(e.Fragment,{children:[e.jsx(ie,{}),e.jsx(pe,{})]})}});c(le,"scrubber",{forwardAsChild:!0});c(ue,"valueText",{forwardAsChild:!0});const l=({value:r,defaultValue:n,onValueChange:a,min:s,max:o,step:t=1,size:N="md",variant:w="outline",disabled:ce=!1,invalid:me=!1,placeholder:he,allowMouseWheel:fe=!1,showStepper:be=!0})=>e.jsxs(Te,{value:r,defaultValue:n,onValueChange:a,min:s,max:o,step:t,size:N,variant:w,disabled:ce,invalid:me,allowMouseWheel:fe,children:[e.jsx(qe,{placeholder:he}),be&&e.jsxs(ze,{children:[e.jsx(ie,{}),e.jsx(pe,{})]})]});try{l.displayName="XlpNumberInput",l.__docgenInfo={description:"XlpNumberInput - A number input with increment/decrement controls",displayName:"XlpNumberInput",props:{value:{defaultValue:null,description:"The value of the input",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"Callback when value changes",name:"onValueChange",required:!1,type:{name:"((details: { value: string; valueAsNumber: number; }) => void)"}},min:{defaultValue:null,description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"The size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"outline"},description:"The variant of the input",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"subtle"'},{value:'"flushed"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the input is disabled",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the input is invalid",name:"invalid",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},allowMouseWheel:{defaultValue:{value:"false"},description:"Whether to allow mouse wheel changes",name:"allowMouseWheel",required:!1,type:{name:"boolean"}},showStepper:{defaultValue:{value:"true"},description:"Whether to show stepper buttons",name:"showStepper",required:!1,type:{name:"boolean"}}}}}catch{}const Ge={title:"Components/Form/NumberInput",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["outline","subtle","flushed"]},disabled:{control:"boolean"},invalid:{control:"boolean"},showStepper:{control:"boolean"},allowMouseWheel:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"}}},m={args:{placeholder:"Enter a number",defaultValue:"10"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},h={args:{min:0,max:100,defaultValue:"50",placeholder:"0-100"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},f={args:{step:5,defaultValue:"10",placeholder:"Step by 5"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(l,{size:"xs",defaultValue:"10",placeholder:"Extra small"}),e.jsx(l,{size:"sm",defaultValue:"10",placeholder:"Small"}),e.jsx(l,{size:"md",defaultValue:"10",placeholder:"Medium"}),e.jsx(l,{size:"lg",defaultValue:"10",placeholder:"Large"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(l,{variant:"outline",defaultValue:"10",placeholder:"Outline"}),e.jsx(l,{variant:"subtle",defaultValue:"10",placeholder:"Subtle"}),e.jsx(l,{variant:"flushed",defaultValue:"10",placeholder:"Flushed"})]})},v={args:{showStepper:!1,defaultValue:"42",placeholder:"No stepper"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},g={args:{disabled:!0,defaultValue:"10"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},y={args:{invalid:!0,defaultValue:"999",max:100},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]},I={args:{min:0,step:.01,defaultValue:"99.99",placeholder:"0.00"},decorators:[r=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})]};var V,j,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter a number",
    defaultValue: "10"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var P,C,R;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    defaultValue: "50",
    placeholder: "0-100"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(R=(C=h.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var T,q,z;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    step: 5,
    defaultValue: "10",
    placeholder: "Step by 5"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,M,W;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "200px"
  }}>\r
            <XlpNumberInput size="xs" defaultValue="10" placeholder="Extra small" />\r
            <XlpNumberInput size="sm" defaultValue="10" placeholder="Small" />\r
            <XlpNumberInput size="md" defaultValue="10" placeholder="Medium" />\r
            <XlpNumberInput size="lg" defaultValue="10" placeholder="Large" />\r
        </div>
}`,...(W=(M=b.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var A,O,X;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "200px"
  }}>\r
            <XlpNumberInput variant="outline" defaultValue="10" placeholder="Outline" />\r
            <XlpNumberInput variant="subtle" defaultValue="10" placeholder="Subtle" />\r
            <XlpNumberInput variant="flushed" defaultValue="10" placeholder="Flushed" />\r
        </div>
}`,...(X=(O=x.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var _,E,F;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showStepper: false,
    defaultValue: "42",
    placeholder: "No stepper"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(F=(E=v.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,$,k;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "10"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(k=($=g.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var B,U,G;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    invalid: true,
    defaultValue: "999",
    max: 100
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,J,K;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    min: 0,
    step: 0.01,
    defaultValue: "99.99",
    placeholder: "0.00"
  },
  decorators: [Story => <div style={{
    width: "200px"
  }}><Story /></div>]
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const He=["Default","WithMinMax","WithStep","Sizes","Variants","WithoutStepper","Disabled","Invalid","Currency"];export{I as Currency,m as Default,g as Disabled,y as Invalid,b as Sizes,x as Variants,h as WithMinMax,f as WithStep,v as WithoutStepper,He as __namedExportsOrder,Ge as default};
