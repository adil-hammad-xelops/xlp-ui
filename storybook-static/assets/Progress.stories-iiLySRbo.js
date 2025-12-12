import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as K}from"./create-slot-recipe-context-DbaULi-n.js";import{r as i}from"./index-DhY--VwN.js";import{u as Q,b as U,a as Y,n as Z,c as W}from"./index-D_cjyf5z.js";import{c as ee,a as d}from"./factory-Bi3dmlYl.js";import{c as re,m as se}from"./index-Dj5Sg7Kh.js";import{a0 as c}from"./index-Clc2OPsj.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";const[E,P]=ee({name:"ProgressContext",hookName:"useProgressContext",providerName:"<ProgressProvider />"}),$=i.forwardRef((r,o)=>{const s=P(),a=c(s.getLabelProps(),r);return e.jsx(d.label,{...a,ref:o})});$.displayName="ProgressLabel";const I=i.forwardRef((r,o)=>{const s=P(),a=c(s.getRangeProps(),r);return e.jsx(d.div,{...a,ref:o})});I.displayName="ProgressRange";const oe=r=>{const o=i.useId(),{getRootNode:s}=Q(),{dir:a,locale:l}=U(),n={id:o,dir:a,locale:l,getRootNode:s,...r},h=Y(se,n);return re(h,Z)},ae=W(),O=i.forwardRef((r,o)=>{const[s,a]=ae(r,["defaultValue","formatOptions","id","ids","locale","max","min","onValueChange","orientation","translations","value"]),l=oe(s),n=c(l.getRootProps(),a);return e.jsx(E,{value:l,children:e.jsx(d.div,{...n,ref:o})})});O.displayName="ProgressRoot";const te=W(),F=i.forwardRef((r,o)=>{const[{value:s},a]=te(r,["value"]),l=c(s.getRootProps(),a);return e.jsx(E,{value:s,children:e.jsx(d.div,{...l,ref:o})})});F.displayName="ProgressRootProvider";const M=i.forwardRef((r,o)=>{const s=P(),a=c(s.getTrackProps(),r);return e.jsx(d.div,{...a,ref:o})});M.displayName="ProgressTrack";const B=i.forwardRef((r,o)=>{const{children:s,...a}=r,l=P(),n=c(l.getValueTextProps(),a);return e.jsx(d.span,{...n,ref:o,children:s||l.percentAsString})});B.displayName="ProgressValueText";const{withProvider:G,withContext:f}=K({key:"progress"});G(F,"root",{forwardAsChild:!0});const le=G(O,"root");f($,"label",{forwardAsChild:!0});const ne=f(M,"track",{forwardAsChild:!0}),ie=f(I,"range",{forwardAsChild:!0}),de=f(B,"valueText",{forwardAsChild:!0}),t=({value:r=0,max:o=100,min:s=0,size:a="md",colorPalette:l="blue",striped:n=!1,animated:h=!1,label:H,showValueLabel:J=!1})=>e.jsxs(le,{value:r,max:o,min:s,size:a,colorPalette:l,striped:n,animated:h,"aria-label":H,children:[e.jsx(ne,{children:e.jsx(ie,{})}),J&&e.jsx(de,{})]});try{t.displayName="XlpProgress",t.__docgenInfo={description:"XlpProgress - A progress bar component",displayName:"XlpProgress",props:{value:{defaultValue:{value:"0"},description:"The current value",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"The maximum value",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"The minimum value",name:"min",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"The size of the progress bar",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},colorPalette:{defaultValue:{value:"blue"},description:"The color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'}]}},striped:{defaultValue:{value:"false"},description:"Whether to show striped pattern",name:"striped",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Whether the striped pattern should animate",name:"animated",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Accessible label",name:"label",required:!1,type:{name:"string"}},showValueLabel:{defaultValue:{value:"false"},description:"Whether to show value label",name:"showValueLabel",required:!1,type:{name:"boolean"}}}}}catch{}const je={title:"Components/Feedback/Progress",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},size:{control:"select",options:["xs","sm","md","lg"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]},striped:{control:"boolean"},animated:{control:"boolean"},showValueLabel:{control:"boolean"}}},u={args:{value:60},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"300px"},children:[e.jsx(t,{value:60,size:"xs"}),e.jsx(t,{value:60,size:"sm"}),e.jsx(t,{value:60,size:"md"}),e.jsx(t,{value:60,size:"lg"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(t,{value:80,colorPalette:"blue"}),e.jsx(t,{value:80,colorPalette:"green"}),e.jsx(t,{value:80,colorPalette:"red"}),e.jsx(t,{value:80,colorPalette:"purple"}),e.jsx(t,{value:80,colorPalette:"orange"})]})},g={args:{value:70,striped:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},v={args:{value:70,striped:!0,animated:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},x={args:{value:45,showValueLabel:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]};var y,b,j;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 60
  },
  decorators: [Story => <div style={{
    width: "300px"
  }}><Story /></div>]
}`,...(j=(b=u.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,S,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "300px"
  }}>\r
            <XlpProgress value={60} size="xs" />\r
            <XlpProgress value={60} size="sm" />\r
            <XlpProgress value={60} size="md" />\r
            <XlpProgress value={60} size="lg" />\r
        </div>
}`,...(R=(S=p.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,C,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>\r
            <XlpProgress value={80} colorPalette="blue" />\r
            <XlpProgress value={80} colorPalette="green" />\r
            <XlpProgress value={80} colorPalette="red" />\r
            <XlpProgress value={80} colorPalette="purple" />\r
            <XlpProgress value={80} colorPalette="orange" />\r
        </div>
}`,...(z=(C=m.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var T,X,k;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 70,
    striped: true
  },
  decorators: [Story => <div style={{
    width: "300px"
  }}><Story /></div>]
}`,...(k=(X=g.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};var L,N,A;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 70,
    striped: true,
    animated: true
  },
  decorators: [Story => <div style={{
    width: "300px"
  }}><Story /></div>]
}`,...(A=(N=v.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var _,q,D;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 45,
    showValueLabel: true
  },
  decorators: [Story => <div style={{
    width: "300px"
  }}><Story /></div>]
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const we=["Default","Sizes","ColorPalettes","Striped","StripedAnimated","WithValueLabel"];export{m as ColorPalettes,u as Default,p as Sizes,g as Striped,v as StripedAnimated,x as WithValueLabel,we as __namedExportsOrder,je as default};
