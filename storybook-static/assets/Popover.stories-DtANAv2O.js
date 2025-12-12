import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as E,P as ie}from"./portal-pLIFDF4x.js";import{c as ae}from"./create-slot-recipe-context-DbaULi-n.js";import{a as j,u as L,P as H}from"./use-presence-context-DaWXm0cY.js";import{c as le,m as ce}from"./index-DtJRZ9SM.js";import{u as de,b as ue,a as me,n as he}from"./index-D_cjyf5z.js";import{r as a}from"./index-DhY--VwN.js";import{c as ge,a as l,b as ve}from"./factory-Bi3dmlYl.js";import{a0 as i}from"./index-Clc2OPsj.js";import{X as d}from"./Button-CjnvWVVQ.js";import{X as y}from"./Input-wZplC8AG.js";import{S as Pe}from"./stack-BVXR5AfD.js";import{B as C}from"./index-BCRR_Fbj.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./index-ClHelJ_k.js";import"./use-event-Ca1lKzpL.js";import"./index-CiM1LM5s.js";import"./index-DvxohMEG.js";import"./index-_bMBXrLM.js";import"./button-Csxds6DH.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";import"./input-BJpkNLYE.js";import"./use-field-context-DfwsQ_Ow.js";import"./walk-object-D0juuZak.js";const[F,c]=ge({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),M=a.forwardRef((t,n)=>{const o=c(),r=i(o.getAnchorProps(),t);return e.jsx(l.div,{...r,ref:n})});M.displayName="PopoverAnchor";const G=a.forwardRef((t,n)=>{const o=c(),r=i(o.getArrowProps(),t);return e.jsx(l.div,{...r,ref:n})});G.displayName="PopoverArrow";const J=a.forwardRef((t,n)=>{const o=c(),r=i(o.getArrowTipProps(),t);return e.jsx(l.div,{...r,ref:n})});J.displayName="PopoverArrowTip";const K=a.forwardRef((t,n)=>{const o=c(),r=i(o.getCloseTriggerProps(),t);return e.jsx(l.button,{...r,ref:n})});K.displayName="PopoverCloseTrigger";const Q=a.forwardRef((t,n)=>{const o=c(),r=j(),s=i(o.getContentProps(),r.getPresenceProps(),t);return r.unmounted?null:e.jsx(l.div,{...s,ref:ve(r.ref,n)})});Q.displayName="PopoverContent";const U=a.forwardRef((t,n)=>{const o=c(),r=i(o.getDescriptionProps(),t);return e.jsx(l.div,{...r,ref:n})});U.displayName="PopoverDescription";const Y=a.forwardRef((t,n)=>{const o=c(),r=i(o.getIndicatorProps(),t);return e.jsx(l.div,{...r,ref:n})});Y.displayName="PopoverIndicator";const Z=a.forwardRef((t,n)=>{const o=c(),r=j(),s=i(o.getPositionerProps(),t);return r.unmounted?null:e.jsx(l.div,{...s,ref:n})});Z.displayName="PopoverPositioner";const fe=t=>{const n=a.useId(),{getRootNode:o}=de(),{dir:r}=ue(),s={id:n,dir:r,getRootNode:o,...t},m=me(ce,s);return le(m,he)},xe=t=>{const[n,{children:o,...r}]=E(t),s=fe(r),m=L(i({present:s.open},n));return e.jsx(F,{value:s,children:e.jsx(H,{value:m,children:o})})},je=t=>{const[n,{value:o,children:r}]=E(t),s=L(i({present:o.open},n));return e.jsx(F,{value:o,children:e.jsx(H,{value:s,children:r})})},ee=a.forwardRef((t,n)=>{const o=c(),r=i(o.getTitleProps(),t);return e.jsx(l.div,{...r,ref:n})});ee.displayName="PopoverTitle";const oe=a.forwardRef((t,n)=>{const o=c(),r=j(),s=i({...o.getTriggerProps(),"aria-controls":r.unmounted?void 0:o.getTriggerProps()["aria-controls"]},t);return e.jsx(l.button,{...s,ref:n})});oe.displayName="PopoverTrigger";const{withRootProvider:re,withContext:p}=ae({key:"popover"});re(je);const we=re(xe),ye=p(oe,"trigger",{forwardAsChild:!0}),Ce=p(Z,"positioner",{forwardAsChild:!0}),Te=p(Q,"content",{forwardAsChild:!0}),Xe=p(J,"arrowTip",{forwardAsChild:!0}),be=p(G,"arrow",{forwardAsChild:!0,defaultProps:{children:e.jsx(Xe,{})}}),Ae=p(K,"closeTrigger",{forwardAsChild:!0});p(Y,"indicator",{forwardAsChild:!0});const Be=p(ee,"title",{forwardAsChild:!0});p(U,"description",{forwardAsChild:!0});p("footer","footer");const Re=p("header","header"),Ne=p("div","body");p(M,void 0,{forwardAsChild:!0});const u=({trigger:t,children:n,title:o,placement:r="bottom",hasArrow:s=!0,closeOnInteractOutside:m=!0,portalled:te=!0,open:ne,defaultOpen:se,onOpenChange:pe})=>{const w=e.jsx(Ce,{children:e.jsxs(Te,{children:[s&&e.jsx(be,{}),o&&e.jsx(Re,{children:e.jsx(Be,{children:o})}),e.jsx(Ne,{children:n}),e.jsx(Ae,{})]})});return e.jsxs(we,{positioning:{placement:r},closeOnInteractOutside:m,open:ne,defaultOpen:se,onOpenChange:pe,children:[e.jsx(ye,{asChild:!0,children:t}),te?e.jsx(ie,{children:w}):w]})};try{u.displayName="XlpPopover",u.__docgenInfo={description:"XlpPopover - A popover component for displaying content in a floating panel",displayName:"XlpPopover",props:{trigger:{defaultValue:null,description:"The trigger element",name:"trigger",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The content of the popover",name:"children",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"The title/header of the popover",name:"title",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"bottom"},description:"The placement of the popover",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},hasArrow:{defaultValue:{value:"true"},description:"Whether the popover has an arrow",name:"hasArrow",required:!1,type:{name:"boolean"}},closeOnInteractOutside:{defaultValue:{value:"true"},description:"Whether to close on outside click",name:"closeOnInteractOutside",required:!1,type:{name:"boolean"}},portalled:{defaultValue:{value:"true"},description:"Whether to use portal",name:"portalled",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Whether the popover is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Default open state",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((details: { open: boolean; }) => void)"}}}}}catch{}const io={title:"Components/Overlay/Popover",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"]},hasArrow:{control:"boolean"},closeOnInteractOutside:{control:"boolean"}}},h={args:{trigger:e.jsx(d,{children:"Click me"}),title:"Popover Title",children:"This is the popover content. Click outside to close."}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsx(u,{trigger:e.jsx(d,{children:"Top"}),placement:"top",title:"Top Popover",children:"Content positioned at top"}),e.jsx(u,{trigger:e.jsx(d,{children:"Bottom"}),placement:"bottom",title:"Bottom Popover",children:"Content positioned at bottom"}),e.jsx(u,{trigger:e.jsx(d,{children:"Left"}),placement:"left",title:"Left Popover",children:"Content positioned at left"}),e.jsx(u,{trigger:e.jsx(d,{children:"Right"}),placement:"right",title:"Right Popover",children:"Content positioned at right"})]})},v={render:()=>e.jsx(u,{trigger:e.jsx(d,{colorPalette:"blue",children:"Edit Settings"}),title:"Settings",children:e.jsxs(Pe,{gap:3,children:[e.jsxs(C,{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:500},children:"Width"}),e.jsx(y,{size:"sm",placeholder:"100%"})]}),e.jsxs(C,{children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:500},children:"Height"}),e.jsx(y,{size:"sm",placeholder:"auto"})]}),e.jsx(d,{size:"sm",colorPalette:"blue",children:"Apply"})]})})},P={args:{trigger:e.jsx(d,{children:"No Arrow"}),title:"Popover",hasArrow:!1,children:"This popover has no arrow."}},f={args:{trigger:e.jsx(d,{children:"Simple Popover"}),children:"This popover has no title, just content."}},x={render:()=>e.jsx(u,{trigger:e.jsx("span",{style:{cursor:"help",color:"blue",textDecoration:"underline"},children:"What is this?"}),title:"Information",children:e.jsx("p",{style:{maxWidth:"250px"},children:"This feature allows you to customize your experience. Click on the settings icon to access more options."})})};var T,X,b;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    trigger: <XlpButton>Click me</XlpButton>,
    title: "Popover Title",
    children: "This is the popover content. Click outside to close."
  }
}`,...(b=(X=h.parameters)==null?void 0:X.docs)==null?void 0:b.source}}};var A,B,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    padding: "2rem"
  }}>\r
            <XlpPopover trigger={<XlpButton>Top</XlpButton>} placement="top" title="Top Popover">\r
                Content positioned at top\r
            </XlpPopover>\r
            <XlpPopover trigger={<XlpButton>Bottom</XlpButton>} placement="bottom" title="Bottom Popover">\r
                Content positioned at bottom\r
            </XlpPopover>\r
            <XlpPopover trigger={<XlpButton>Left</XlpButton>} placement="left" title="Left Popover">\r
                Content positioned at left\r
            </XlpPopover>\r
            <XlpPopover trigger={<XlpButton>Right</XlpButton>} placement="right" title="Right Popover">\r
                Content positioned at right\r
            </XlpPopover>\r
        </div>
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,S,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <XlpPopover trigger={<XlpButton colorPalette="blue">Edit Settings</XlpButton>} title="Settings">\r
            <Stack gap={3}>\r
                <Box>\r
                    <label style={{
          fontSize: "14px",
          fontWeight: 500
        }}>Width</label>\r
                    <XlpInput size="sm" placeholder="100%" />\r
                </Box>\r
                <Box>\r
                    <label style={{
          fontSize: "14px",
          fontWeight: 500
        }}>Height</label>\r
                    <XlpInput size="sm" placeholder="auto" />\r
                </Box>\r
                <XlpButton size="sm" colorPalette="blue">Apply</XlpButton>\r
            </Stack>\r
        </XlpPopover>
}`,...(W=(S=v.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var I,k,z;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    trigger: <XlpButton>No Arrow</XlpButton>,
    title: "Popover",
    hasArrow: false,
    children: "This popover has no arrow."
  }
}`,...(z=(k=P.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var O,q,V;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    trigger: <XlpButton>Simple Popover</XlpButton>,
    children: "This popover has no title, just content."
  }
}`,...(V=(q=f.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,D,$;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <XlpPopover trigger={<span style={{
    cursor: "help",
    color: "blue",
    textDecoration: "underline"
  }}>\r
          What is this?\r
        </span>} title="Information">\r
            <p style={{
      maxWidth: "250px"
    }}>\r
                This feature allows you to customize your experience.\r
                Click on the settings icon to access more options.\r
            </p>\r
        </XlpPopover>
}`,...($=(D=x.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const ao=["Default","Placements","WithForm","NoArrow","NoTitle","InfoPopover"];export{h as Default,x as InfoPopover,P as NoArrow,f as NoTitle,g as Placements,v as WithForm,ao as __namedExportsOrder,io as default};
