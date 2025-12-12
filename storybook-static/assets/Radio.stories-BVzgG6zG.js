import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as fe}from"./flex-BbQTeZJH.js";import{r as s}from"./index-DhY--VwN.js";import{c as ge}from"./create-slot-recipe-context-DbaULi-n.js";import{E as ve,c as he}from"./empty-BNjmiMPX.js";import{u as xe}from"./use-recipe-d5ucoKYr.js";import{d as w}from"./attr-C3Jtgmrz.js";import{c as V,a as p}from"./factory-Bi3dmlYl.js";import{a0 as u}from"./index-Clc2OPsj.js";import{c as I,u as Re,b as Ge,a as be,n as ye}from"./index-D_cjyf5z.js";import{c as je,m as Pe}from"./index-BdUTSEqN.js";import"./split-props-B9mtt7b_.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";import"./index-Bv77Z0QR.js";const[Z,f]=V({name:"RadioGroupContext",hookName:"useRadioGroupContext",providerName:"<RadioGroupProvider />"}),[Ve,Ie]=V({name:"RadioGroupItemContext",hookName:"useRadioGroupItemContext",providerName:"<RadioGroupItemProvider />"}),[Ce,C]=V({name:"RadioGroupItemPropsContext",hookName:"useRadioGroupItemPropsContext",providerName:"<RadioGroupItemPropsProvider />"}),ze=I(),ee=s.forwardRef((r,a)=>{const[o,t]=ze(r,["value","disabled","invalid"]),n=f(),d=u(n.getItemProps(o),t),m=n.getItemState(o);return e.jsx(Ve,{value:m,children:e.jsx(Ce,{value:o,children:e.jsx(p.label,{...d,ref:a})})})});ee.displayName="RadioGroupItem";const We=r=>r.children(Ie()),z=s.forwardRef((r,a)=>{const o=f(),t=C(),n=u(o.getItemControlProps(t),r);return e.jsx(p.div,{...n,ref:a})});z.displayName="RadioGroupItemControl";const oe=s.forwardRef((r,a)=>{const o=f(),t=C(),n=u(o.getItemHiddenInputProps(t),r);return e.jsx(p.input,{...n,ref:a})});oe.displayName="RadioGroupItemHiddenInput";const ae=s.forwardRef((r,a)=>{const o=f(),t=C(),n=u(o.getItemTextProps(t),r);return e.jsx(p.span,{...n,ref:a})});ae.displayName="RadioGroupItemText";const re=s.forwardRef((r,a)=>{const o=f(),t=u(o.getLabelProps(),r);return e.jsx(p.label,{...t,ref:a})});re.displayName="RadioGroupLabel";const we=r=>{const a=s.useId(),{getRootNode:o}=Re(),{dir:t}=Ge(),n={id:a,dir:t,getRootNode:o,...r},d=be(Pe,n);return je(d,ye)},Oe=I(),te=s.forwardRef((r,a)=>{const[o,t]=Oe(r,["defaultValue","disabled","form","id","ids","name","onValueChange","orientation","readOnly","value"]),n=we(o),d=u(n.getRootProps(),t);return e.jsx(Z,{value:n,children:e.jsx(p.div,{...d,ref:a})})});te.displayName="RadioGroupRoot";const Ne=I(),ne=s.forwardRef((r,a)=>{const[{value:o},t]=Ne(r,["value"]),n=u(o.getRootProps(),t);return e.jsx(Z,{value:o,children:e.jsx(p.div,{...n,ref:a})})});ne.displayName="RadioGroupRootProvider";const le=s.forwardRef(function(a,o){const t=xe({key:"radiomark",recipe:a.recipe}),[n,d]=t.splitVariantProps(a),{checked:m,disabled:g,unstyled:P,children:W,...c}=d,me=P?ve:t(n),ce={ref:o,"data-checked":w(m),"data-disabled":w(g),...c,css:[me,a.css]};return e.jsx(he.span,{...ce,children:m&&e.jsx("span",{className:"dot"})})});le.displayName="Radiomark";const{withProvider:ie,withContext:j,useStyles:Xe}=ge({key:"radioGroup"});ie(ne,"root",{forwardAsChild:!0});const Be=ie(te,"root",{forwardAsChild:!0});j(re,"label",{forwardAsChild:!0});const se=j(ee,"item",{forwardAsChild:!0}),de=j(ae,"itemText",{forwardAsChild:!0});j(z,"itemControl",{forwardAsChild:!0});const pe=s.forwardRef(function(a,o){const t=Xe();return e.jsx(We,{children:n=>e.jsx(z,{asChild:!0,children:e.jsx(le,{ref:o,unstyled:!0,...a,checked:n.checked,disabled:n.disabled,css:[t.itemControl,a.css]})})})}),ue=oe,l=({options:r,value:a,defaultValue:o,onValueChange:t,size:n="md",colorPalette:d="blue",disabled:m=!1,orientation:g="vertical",name:P,gap:W=3})=>e.jsx(Be,{value:a,defaultValue:o,onValueChange:t,size:n,colorPalette:d,disabled:m,name:P,children:e.jsx(fe,{direction:g==="horizontal"?"row":"column",gap:W,flexWrap:g==="horizontal"?"wrap":"nowrap",children:r.map(c=>e.jsxs(se,{value:c.value,disabled:c.disabled,children:[e.jsx(ue,{}),e.jsx(pe,{}),e.jsx(de,{children:c.label})]},c.value))})}),O=({value:r,disabled:a=!1,children:o})=>e.jsxs(se,{value:r,disabled:a,children:[e.jsx(ue,{}),e.jsx(pe,{}),o&&e.jsx(de,{children:o})]});try{l.displayName="XlpRadioGroup",l.__docgenInfo={description:"XlpRadioGroup - A radio button group component",displayName:"XlpRadioGroup",props:{options:{defaultValue:null,description:"The options to display",name:"options",required:!0,type:{name:"RadioOption[]"}},value:{defaultValue:null,description:"The current value",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"Callback when value changes",name:"onValueChange",required:!1,type:{name:"((details: ValueChangeDetails) => void)"}},size:{defaultValue:{value:"md"},description:"The size of the radio buttons",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},colorPalette:{defaultValue:{value:"blue"},description:"The color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the radio group is disabled",name:"disabled",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"vertical"},description:"The orientation of the radio group",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},name:{defaultValue:null,description:"The name for the radio group",name:"name",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"3"},description:"Gap/spacing between radio items",name:"gap",required:!1,type:{name:"string | number"}}}}}catch{}try{O.displayName="XlpRadio",O.__docgenInfo={description:"XlpRadio - Individual radio button (use within XlpRadioGroup)",displayName:"XlpRadio",props:{value:{defaultValue:null,description:"The value of the radio",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the radio is disabled",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The radio label",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Qe={title:"Components/Form/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"},gap:{control:"number"}}},i=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],v={args:{options:i,defaultValue:"a"}},h={args:{options:i,orientation:"horizontal",defaultValue:"b"}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Small"}),e.jsx(l,{options:i,size:"sm",defaultValue:"a"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Medium"}),e.jsx(l,{options:i,size:"md",defaultValue:"a"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Large"}),e.jsx(l,{options:i,size:"lg",defaultValue:"a"})]})]})},R={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsx(l,{options:i,colorPalette:"blue",defaultValue:"a"}),e.jsx(l,{options:i,colorPalette:"green",defaultValue:"a"}),e.jsx(l,{options:i,colorPalette:"purple",defaultValue:"a"})]})},G={args:{options:[{label:"Available",value:"1"},{label:"Disabled",value:"2",disabled:!0},{label:"Available",value:"3"}],defaultValue:"1"}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 1 (small)"}),e.jsx(l,{options:i,defaultValue:"a",gap:1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 4 (medium)"}),e.jsx(l,{options:i,defaultValue:"a",gap:4})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 8 (large)"}),e.jsx(l,{options:i,defaultValue:"a",gap:8})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 2"}),e.jsx(l,{options:i,orientation:"horizontal",defaultValue:"a",gap:2})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 6"}),e.jsx(l,{options:i,orientation:"horizontal",defaultValue:"a",gap:6})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Gap: 10"}),e.jsx(l,{options:i,orientation:"horizontal",defaultValue:"a",gap:10})]})]})};var N,X,B;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    defaultValue: "a"
  }
}`,...(B=(X=v.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var _,k,S;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    orientation: "horizontal",
    defaultValue: "b"
  }
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,D,q;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Small</p>\r
                <XlpRadioGroup options={sampleOptions} size="sm" defaultValue="a" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Medium</p>\r
                <XlpRadioGroup options={sampleOptions} size="md" defaultValue="a" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Large</p>\r
                <XlpRadioGroup options={sampleOptions} size="lg" defaultValue="a" />\r
            </div>\r
        </div>
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,H,E;R.parameters={...R.parameters,docs:{...(A=R.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap"
  }}>\r
            <XlpRadioGroup options={sampleOptions} colorPalette="blue" defaultValue="a" />\r
            <XlpRadioGroup options={sampleOptions} colorPalette="green" defaultValue="a" />\r
            <XlpRadioGroup options={sampleOptions} colorPalette="purple" defaultValue="a" />\r
        </div>
}`,...(E=(H=R.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var L,M,$;G.parameters={...G.parameters,docs:{...(L=G.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Available",
      value: "1"
    }, {
      label: "Disabled",
      value: "2",
      disabled: true
    }, {
      label: "Available",
      value: "3"
    }],
    defaultValue: "1"
  }
}`,...($=(M=G.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var F,Y,J;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 1 (small)</p>\r
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={1} />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 4 (medium)</p>\r
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={4} />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 8 (large)</p>\r
                <XlpRadioGroup options={sampleOptions} defaultValue="a" gap={8} />\r
            </div>\r
        </div>
}`,...(J=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 2</p>\r
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={2} />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 6</p>\r
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={6} />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Gap: 10</p>\r
                <XlpRadioGroup options={sampleOptions} orientation="horizontal" defaultValue="a" gap={10} />\r
            </div>\r
        </div>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ue=["Default","Horizontal","Sizes","ColorPalettes","WithDisabledOption","CustomGap","HorizontalWithGap"];export{R as ColorPalettes,b as CustomGap,v as Default,h as Horizontal,y as HorizontalWithGap,x as Sizes,G as WithDisabledOption,Ue as __namedExportsOrder,Qe as default};
