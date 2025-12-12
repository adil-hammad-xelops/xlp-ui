import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as ie}from"./create-slot-recipe-context-DbaULi-n.js";import{d as ae}from"./icons-ARZDse-g.js";import{r as l}from"./index-DhY--VwN.js";import{c as g,b as q,u as L,a as M,n as O}from"./index-D_cjyf5z.js";import{u as le,s as $,R as H}from"./render-strategy-B7VclNL_.js";import{c as C,a as v}from"./factory-Bi3dmlYl.js";import{m as ce,c as de,a as me,b as pe}from"./index-C3sFkH4Y.js";import{a0 as u}from"./index-Clc2OPsj.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";const[Y,A]=C({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[ue]=C({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),ve=o=>g()(o,["collapsedHeight","collapsedWidth","defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]),ge=(o={})=>{const{lazyMount:n,unmountOnExit:t,...s}=o,r=l.useId(),i=l.useRef(!1),{dir:a}=q(),{getRootNode:p}=L(),m={id:r,dir:a,getRootNode:p,...s},ne=M(ce,m),x=de(ne,O);x.visible&&(i.current=!0);const se=!x.visible&&!i.current&&n||t&&!x.visible&&i.current;return{...x,isUnmounted:se}},[he,F]=C({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),G=l.forwardRef((o,n)=>{const[t,s]=ve(o),r=ge(t),i=u(r.getRootProps(),s);return e.jsx(he,{value:r,children:e.jsx(v.div,{...i,ref:n})})});G.displayName="CollapsibleRoot";const[xe,j]=C({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),fe=g(),J=l.forwardRef((o,n)=>{const[t,s]=fe(o,["value","disabled"]),r=A(),i=le(),a=u(r.getItemProps(t),s),p=r.getItemState(t),m=r.getItemContentProps(t);return e.jsx(xe,{value:t,children:e.jsx(ue,{value:p,children:e.jsx(G,{ref:n,open:p.expanded,ids:{content:m.id},...i,...a})})})});J.displayName="AccordionItem";const K=l.forwardRef((o,n)=>{const t=F();if(t.isUnmounted)return null;const s=u(t.getContentProps(),o);return e.jsx(v.div,{...s,ref:n})});K.displayName="CollapsibleContent";const be=g(),Q=l.forwardRef((o,n)=>{const t=A(),s=j(),r=t.getItemContentProps(s),[,i]=be(r,["hidden","data-state"]),a=u(i,o);return e.jsx(K,{ref:n,...a})});Q.displayName="AccordionItemContent";const Z=l.forwardRef((o,n)=>{const t=A(),s=j(),r=u(t.getItemIndicatorProps(s),o);return e.jsx(v.div,{...r,ref:n})});Z.displayName="AccordionItemIndicator";const ee=l.forwardRef((o,n)=>{const t=A(),s=j(),r=F(),i=t.getItemTriggerProps(s),a=u({...i,"aria-controls":r.isUnmounted?void 0:i["aria-controls"]},o);return e.jsx(v.button,{...a,ref:n})});ee.displayName="AccordionItemTrigger";const Pe=o=>{const n=l.useId(),{getRootNode:t}=L(),{dir:s}=q(),r={id:n,dir:s,getRootNode:t,...o},i=M(pe,r);return me(i,O)},ye=g(),oe=l.forwardRef((o,n)=>{const[t,s]=$(o),[r,i]=ye(s,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),a=Pe(r),p=u(a.getRootProps(),i);return e.jsx(Y,{value:a,children:e.jsx(H,{value:t,children:e.jsx(v.div,{...p,ref:n})})})});oe.displayName="AccordionRoot";const Ie=g(),te=l.forwardRef((o,n)=>{const[t,s]=$(o),[{value:r},i]=Ie(s,["value"]),a=u(r.getRootProps(),i);return e.jsx(Y,{value:r,children:e.jsx(H,{value:t,children:e.jsx(v.div,{...a,ref:n})})})});te.displayName="AccordionRootProvider";const{withProvider:re,withContext:h}=ie({key:"accordion"});re(te,"root",{forwardAsChild:!0});const Ce=re(oe,"root",{forwardAsChild:!0}),Ae=h(J,"item",{forwardAsChild:!0}),je=h(Q,"itemContent",{forwardAsChild:!0}),we=h("div","itemBody"),Re=h(ee,"itemTrigger",{forwardAsChild:!0}),Se=h(Z,"itemIndicator",{forwardAsChild:!0,defaultProps:{children:e.jsx(ae,{})}}),c=({items:o,defaultValue:n,value:t,onValueChange:s,multiple:r=!1,collapsible:i=!0,variant:a="outline",size:p="md"})=>e.jsx(Ce,{defaultValue:n,value:t,onValueChange:s,multiple:r,collapsible:i,variant:a,size:p,children:o.map(m=>e.jsxs(Ae,{value:m.value,disabled:m.disabled,children:[e.jsxs(Re,{children:[m.title,e.jsx(Se,{})]}),e.jsx(je,{children:e.jsx(we,{children:m.content})})]},m.value))});try{c.displayName="XlpAccordion",c.__docgenInfo={description:"XlpAccordion - A collapsible content component",displayName:"XlpAccordion",props:{items:{defaultValue:null,description:"The accordion items",name:"items",required:!0,type:{name:"AccordionItem[]"}},defaultValue:{defaultValue:null,description:"Default expanded values",name:"defaultValue",required:!1,type:{name:"string[]"}},value:{defaultValue:null,description:"Current expanded values (controlled)",name:"value",required:!1,type:{name:"string[]"}},onValueChange:{defaultValue:null,description:"Callback when value changes",name:"onValueChange",required:!1,type:{name:"((details: { value: string[]; }) => void)"}},multiple:{defaultValue:{value:"false"},description:"Whether multiple items can be open",name:"multiple",required:!1,type:{name:"boolean"}},collapsible:{defaultValue:{value:"true"},description:"Whether items are collapsible",name:"collapsible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"outline"},description:"The variant of the accordion",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"subtle"'},{value:'"plain"'},{value:'"enclosed"'}]}},size:{defaultValue:{value:"md"},description:"The size of the accordion",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const Me={title:"Components/Disclosure/Accordion",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","elevated","contained","plain"]},size:{control:"select",options:["sm","md","lg"]},multiple:{control:"boolean"},collapsible:{control:"boolean"}}},d=[{value:"item-1",title:"What is XLP UI?",content:"XLP UI is a modern React component library built on top of Chakra UI, providing beautiful and accessible components for your applications."},{value:"item-2",title:"How do I install it?",content:"You can install XLP UI using npm: npm install xlp-ui @chakra-ui/react @emotion/react"},{value:"item-3",title:"Is it accessible?",content:"Yes! XLP UI is built on Chakra UI which follows WAI-ARIA standards, ensuring all components are accessible by default."}],f={args:{items:d,defaultValue:["item-1"]},decorators:[o=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{})})]},b={args:{items:d,multiple:!0,defaultValue:["item-1","item-2"]},decorators:[o=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{})})]},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Outline"}),e.jsx(c,{items:d.slice(0,2),variant:"outline"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Subtle"}),e.jsx(c,{items:d.slice(0,2),variant:"subtle"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Enclosed"}),e.jsx(c,{items:d.slice(0,2),variant:"enclosed"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Plain"}),e.jsx(c,{items:d.slice(0,2),variant:"plain"})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Small"}),e.jsx(c,{items:d.slice(0,2),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Medium"}),e.jsx(c,{items:d.slice(0,2),size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Large"}),e.jsx(c,{items:d.slice(0,2),size:"lg"})]})]})},I={args:{items:[...d.slice(0,2),{value:"disabled",title:"Disabled Item",content:"This content is not accessible",disabled:!0}]},decorators:[o=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{})})]};var w,R,S;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    defaultValue: ["item-1"]
  },
  decorators: [Story => <div style={{
    width: "500px"
  }}><Story /></div>]
}`,...(S=(R=f.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var V,W,N;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    multiple: true,
    defaultValue: ["item-1", "item-2"]
  },
  decorators: [Story => <div style={{
    width: "500px"
  }}><Story /></div>]
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var B,z,X;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "500px"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Outline</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="outline" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Subtle</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="subtle" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Enclosed</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="enclosed" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Plain</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} variant="plain" />\r
            </div>\r
        </div>
}`,...(X=(z=P.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var D,T,k;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "500px"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Small</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} size="sm" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Medium</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} size="md" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Large</p>\r
                <XlpAccordion items={sampleItems.slice(0, 2)} size="lg" />\r
            </div>\r
        </div>
}`,...(k=(T=y.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var _,E,U;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [...sampleItems.slice(0, 2), {
      value: "disabled",
      title: "Disabled Item",
      content: "This content is not accessible",
      disabled: true
    }]
  },
  decorators: [Story => <div style={{
    width: "500px"
  }}><Story /></div>]
}`,...(U=(E=I.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const Oe=["Default","Multiple","Variants","Sizes","WithDisabledItem"];export{f as Default,b as Multiple,y as Sizes,P as Variants,I as WithDisabledItem,Oe as __namedExportsOrder,Me as default};
