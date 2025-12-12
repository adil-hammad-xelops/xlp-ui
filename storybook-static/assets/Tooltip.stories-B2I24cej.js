import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{s as H,P as Y}from"./portal-pLIFDF4x.js";import{c as Z}from"./create-slot-recipe-context-DbaULi-n.js";import{a as I,u as $,P as O}from"./use-presence-context-DaWXm0cY.js";import{u as tt,b as et,a as ot,n as rt}from"./index-D_cjyf5z.js";import{c as nt,m as lt}from"./index-Br8Xi7si.js";import{r as a}from"./index-DhY--VwN.js";import{c as st,a as d,b as it}from"./factory-Bi3dmlYl.js";import{a0 as p}from"./index-Clc2OPsj.js";import{X as i}from"./Button-CjnvWVVQ.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./index-ClHelJ_k.js";import"./use-event-Ca1lKzpL.js";import"./index-Bv77Z0QR.js";import"./index-CiM1LM5s.js";import"./button-Csxds6DH.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const[z,m]=st({name:"TooltipContext",hookName:"useTooltipContext",providerName:"<TooltipProvider />"}),k=a.forwardRef((o,n)=>{const r=m(),e=p(r.getArrowProps(),o);return t.jsx(d.div,{...e,ref:n})});k.displayName="TooltipArrow";const M=a.forwardRef((o,n)=>{const r=m(),e=p(r.getArrowTipProps(),o);return t.jsx(d.div,{...e,ref:n})});M.displayName="TooltipArrowTip";const F=a.forwardRef((o,n)=>{const r=m(),e=I(),l=p(r.getContentProps(),e.getPresenceProps(),o);return e.unmounted?null:t.jsx(d.div,{...l,ref:it(e.ref,n)})});F.displayName="TooltipContent";const G=a.forwardRef((o,n)=>{const r=m(),e=p(r.getPositionerProps(),o);return I().unmounted?null:t.jsx(d.div,{...e,ref:n})});G.displayName="TooltipPositioner";const pt=o=>{const n=a.useId(),{getRootNode:r}=tt(),{dir:e}=et(),l={id:n,dir:e,getRootNode:r,...o},c=ot(lt,l);return nt(c,rt)},at=o=>{const[n,{children:r,...e}]=H(o),l=pt(e),c=$(p({present:l.open},n));return t.jsx(z,{value:l,children:t.jsx(O,{value:c,children:r})})},ct=o=>{const[n,{value:r,children:e}]=H(o),l=$(p({present:r.open},n));return t.jsx(z,{value:r,children:t.jsx(O,{value:l,children:e})})},J=a.forwardRef((o,n)=>{const r=m(),e=p(r.getTriggerProps(),o);return t.jsx(d.button,{...e,ref:n})});J.displayName="TooltipTrigger";const{withRootProvider:K,withContext:u}=Z({key:"tooltip"});K(ct);const dt=K(at,{defaultProps:{lazyMount:!0,unmountOnExit:!0}}),mt=u(J,"trigger",{forwardAsChild:!0}),ut=u(G,"positioner",{forwardAsChild:!0}),ht=u(F,"content",{forwardAsChild:!0}),ft=u(M,"arrowTip",{forwardAsChild:!0}),gt=u(k,"arrow",{forwardAsChild:!0,defaultProps:{children:t.jsx(ft,{})}}),s=({content:o,children:n,placement:r="top",hasArrow:e=!0,openDelay:l=0,closeDelay:c=0,disabled:Q=!1,portalled:U=!0})=>{const y=t.jsx(ut,{children:t.jsxs(ht,{children:[e&&t.jsx(gt,{}),o]})});return t.jsxs(dt,{positioning:{placement:r},openDelay:l,closeDelay:c,disabled:Q,children:[t.jsx(mt,{asChild:!0,children:n}),U?t.jsx(Y,{children:y}):y]})};try{s.displayName="XlpTooltip",s.__docgenInfo={description:"XlpTooltip - A tooltip component for displaying additional information",displayName:"XlpTooltip",props:{content:{defaultValue:null,description:"The content of the tooltip",name:"content",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The trigger element",name:"children",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"The placement of the tooltip",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},hasArrow:{defaultValue:{value:"true"},description:"Whether the tooltip has an arrow",name:"hasArrow",required:!1,type:{name:"boolean"}},openDelay:{defaultValue:{value:"0"},description:"Delay before showing tooltip (ms)",name:"openDelay",required:!1,type:{name:"number"}},closeDelay:{defaultValue:{value:"0"},description:"Delay before hiding tooltip (ms)",name:"closeDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Whether the tooltip is disabled",name:"disabled",required:!1,type:{name:"boolean"}},portalled:{defaultValue:{value:"true"},description:"Whether to use portal",name:"portalled",required:!1,type:{name:"boolean"}}}}}catch{}const It={title:"Components/Overlay/Tooltip",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"]},hasArrow:{control:"boolean"},openDelay:{control:"number"},closeDelay:{control:"number"},disabled:{control:"boolean"}}},h={args:{content:"This is a tooltip",children:t.jsx(i,{children:"Hover me"})}},f={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem",padding:"4rem"},children:[t.jsx("div",{}),t.jsx(s,{content:"Top tooltip",placement:"top",children:t.jsx(i,{children:"Top"})}),t.jsx("div",{}),t.jsx(s,{content:"Left tooltip",placement:"left",children:t.jsx(i,{children:"Left"})}),t.jsx("div",{}),t.jsx(s,{content:"Right tooltip",placement:"right",children:t.jsx(i,{children:"Right"})}),t.jsx("div",{}),t.jsx(s,{content:"Bottom tooltip",placement:"bottom",children:t.jsx(i,{children:"Bottom"})}),t.jsx("div",{})]})},g={args:{content:"This tooltip has a 500ms delay",openDelay:500,children:t.jsx(i,{children:"Hover me (with delay)"})}},T={args:{content:"No arrow tooltip",hasArrow:!1,children:t.jsx(i,{children:"No arrow"})}},x={args:{content:"This is a longer tooltip with more detailed information that might span multiple lines.",children:t.jsx(i,{children:"Long tooltip"})}},v={render:()=>t.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[t.jsx(s,{content:"Button tooltip",children:t.jsx(i,{children:"Button"})}),t.jsx(s,{content:"Text tooltip",children:t.jsx("span",{style:{textDecoration:"underline",cursor:"help"},children:"Hover this text"})}),t.jsx(s,{content:"Icon tooltip",children:t.jsx("span",{style:{cursor:"help",fontSize:"24px"},children:"ℹ️"})})]})};var j,w,P;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: "This is a tooltip",
    children: <XlpButton>Hover me</XlpButton>
  }
}`,...(P=(w=h.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var X,B,b;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    padding: "4rem"
  }}>\r
            <div />\r
            <XlpTooltip content="Top tooltip" placement="top">\r
                <XlpButton>Top</XlpButton>\r
            </XlpTooltip>\r
            <div />\r
\r
            <XlpTooltip content="Left tooltip" placement="left">\r
                <XlpButton>Left</XlpButton>\r
            </XlpTooltip>\r
            <div />\r
            <XlpTooltip content="Right tooltip" placement="right">\r
                <XlpButton>Right</XlpButton>\r
            </XlpTooltip>\r
\r
            <div />\r
            <XlpTooltip content="Bottom tooltip" placement="bottom">\r
                <XlpButton>Bottom</XlpButton>\r
            </XlpTooltip>\r
            <div />\r
        </div>
}`,...(b=(B=f.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var C,A,R;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: "This tooltip has a 500ms delay",
    openDelay: 500,
    children: <XlpButton>Hover me (with delay)</XlpButton>
  }
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,N,_;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    content: "No arrow tooltip",
    hasArrow: false,
    children: <XlpButton>No arrow</XlpButton>
  }
}`,...(_=(N=T.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var L,S,q;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: "This is a longer tooltip with more detailed information that might span multiple lines.",
    children: <XlpButton>Long tooltip</XlpButton>
  }
}`,...(q=(S=x.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,E,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  }}>\r
            <XlpTooltip content="Button tooltip">\r
                <XlpButton>Button</XlpButton>\r
            </XlpTooltip>\r
            <XlpTooltip content="Text tooltip">\r
                <span style={{
        textDecoration: "underline",
        cursor: "help"
      }}>Hover this text</span>\r
            </XlpTooltip>\r
            <XlpTooltip content="Icon tooltip">\r
                <span style={{
        cursor: "help",
        fontSize: "24px"
      }}>ℹ️</span>\r
            </XlpTooltip>\r
        </div>
}`,...(W=(E=v.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const $t=["Default","Placements","WithDelay","WithoutArrow","LongContent","OnDifferentElements"];export{h as Default,x as LongContent,v as OnDifferentElements,f as Placements,g as WithDelay,T as WithoutArrow,$t as __namedExportsOrder,It as default};
