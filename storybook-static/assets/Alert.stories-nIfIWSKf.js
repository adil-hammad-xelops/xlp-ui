import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhY--VwN.js";import{I as g,W as y,b as F,a as M}from"./icons-ARZDse-g.js";import{I as z}from"./icon-button-u2Ktm2UZ.js";import{c as G}from"./split-props-B9mtt7b_.js";import{c as H}from"./create-slot-recipe-context-DbaULi-n.js";import{c as J}from"./empty-BNjmiMPX.js";import"./button-Csxds6DH.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const[K,Q]=G({name:"AlertStatusContext",hookName:"useAlertStatusContext",providerName:"<Alert />"}),{withProvider:U,withContext:b,useStyles:Z}=H({key:"alert"}),$=U("div","root",{forwardAsChild:!0,wrapElement(s,r){return e.jsx(K,{value:{status:r.status||"info"},children:s})}}),ee=b("div","title"),te=b("div","description"),re=b("div","content"),se={info:g,warning:y,success:F,error:y,neutral:g},ne=f.forwardRef(function(r,n){const a=Q(),l=Z(),h=typeof a.status=="string"?se[a.status]:f.Fragment,{children:x=e.jsx(h,{}),...v}=r;return e.jsx(J.span,{ref:n,...v,css:[l.indicator,r.css],children:x})}),P=f.forwardRef(function(r,n){return e.jsx(z,{variant:"ghost","aria-label":"Close",ref:n,...r,children:r.children??e.jsx(M,{})})});P.displayName="CloseButton";const t=({status:s="info",variant:r="subtle",title:n,children:a,icon:l,closable:h=!1,onClose:x,borderRadius:v="md"})=>e.jsxs($,{status:s,variant:r,borderRadius:v,children:[l||e.jsx(ne,{}),e.jsxs(re,{children:[n&&e.jsx(ee,{children:n}),a&&e.jsx(te,{children:a})]}),h&&e.jsx(P,{position:"relative",top:"-2px",right:"-2px",onClick:x,size:"sm"})]});try{t.displayName="XlpAlert",t.__docgenInfo={description:"XlpAlert - A feedback alert component",displayName:"XlpAlert",props:{status:{defaultValue:{value:"info"},description:"The status/type of the alert",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"error"'}]}},variant:{defaultValue:{value:"subtle"},description:"The variant of the alert",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'}]}},title:{defaultValue:null,description:"The title of the alert",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The description/content of the alert",name:"children",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"false"},description:"Whether the alert can be closed",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when alert is closed",name:"onClose",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},borderRadius:{defaultValue:{value:"md"},description:"Border radius",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}}}}}catch{}const be={title:"Components/Feedback/Alert",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["info","warning","success","error"],description:"The status/type of the alert"},variant:{control:"select",options:["subtle","solid","outline"],description:"The variant of the alert"},borderRadius:{control:"select",options:["none","sm","md","lg","xl"],description:"The border radius of the alert"},title:{control:"text",description:"The title of the alert"},children:{control:"text",description:"The description/content of the alert"},closable:{control:"boolean",description:"Whether the alert can be closed"},onClose:{action:"closed",description:"Callback when alert is closed"},icon:{control:!1,description:"Custom icon element"}}},o={args:{title:"Information",children:"This is an informational alert message.",status:"info"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsx(t,{status:"info",title:"Info",children:"This is an info alert."}),e.jsx(t,{status:"success",title:"Success",children:"Operation completed successfully!"}),e.jsx(t,{status:"warning",title:"Warning",children:"Please review your input."}),e.jsx(t,{status:"error",title:"Error",children:"Something went wrong."})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsx(t,{status:"success",variant:"subtle",title:"Subtle",children:"Subtle variant alert"}),e.jsx(t,{status:"success",variant:"solid",title:"Solid",children:"Solid variant alert"}),e.jsx(t,{status:"success",variant:"outline",title:"Outline",children:"Outline variant alert"})]})},u={args:{title:"Your session will expire in 5 minutes",status:"warning"}},d={args:{children:"Your account has been created successfully. Check your email for verification.",status:"success"}},ae=()=>{const[s,r]=f.useState(!0);return s?e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{status:"success",title:"File uploaded",closable:!0,onClose:()=>r(!1),children:"Your file has been uploaded successfully."})}):e.jsx("button",{onClick:()=>r(!0),style:{padding:"8px 16px",cursor:"pointer"},children:"Show Alert Again"})},p={render:()=>e.jsx(ae,{})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsx(t,{status:"info",title:"None",borderRadius:"none",children:'borderRadius="none"'}),e.jsx(t,{status:"info",title:"Small",borderRadius:"sm",children:'borderRadius="sm"'}),e.jsx(t,{status:"info",title:"Medium",borderRadius:"md",children:'borderRadius="md"'}),e.jsx(t,{status:"info",title:"Large",borderRadius:"lg",children:'borderRadius="lg"'}),e.jsx(t,{status:"info",title:"Extra Large",borderRadius:"xl",children:'borderRadius="xl"'})]})};var A,w,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Information",
    children: "This is an informational alert message.",
    status: "info"
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,C,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }}>\r
            <XlpAlert status="info" title="Info">\r
                This is an info alert.\r
            </XlpAlert>\r
            <XlpAlert status="success" title="Success">\r
                Operation completed successfully!\r
            </XlpAlert>\r
            <XlpAlert status="warning" title="Warning">\r
                Please review your input.\r
            </XlpAlert>\r
            <XlpAlert status="error" title="Error">\r
                Something went wrong.\r
            </XlpAlert>\r
        </div>
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var X,T,I;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }}>\r
            <XlpAlert status="success" variant="subtle" title="Subtle">\r
                Subtle variant alert\r
            </XlpAlert>\r
            <XlpAlert status="success" variant="solid" title="Solid">\r
                Solid variant alert\r
            </XlpAlert>\r
            <XlpAlert status="success" variant="outline" title="Outline">\r
                Outline variant alert\r
            </XlpAlert>\r
        </div>
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var D,k,O;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Your session will expire in 5 minutes",
    status: "warning"
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var V,_,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Your account has been created successfully. Check your email for verification.",
    status: "success"
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var q,E,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ClosableAlertDemo />
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var W,Y,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }}>\r
            <XlpAlert status="info" title="None" borderRadius="none">\r
                borderRadius="none"\r
            </XlpAlert>\r
            <XlpAlert status="info" title="Small" borderRadius="sm">\r
                borderRadius="sm"\r
            </XlpAlert>\r
            <XlpAlert status="info" title="Medium" borderRadius="md">\r
                borderRadius="md"\r
            </XlpAlert>\r
            <XlpAlert status="info" title="Large" borderRadius="lg">\r
                borderRadius="lg"\r
            </XlpAlert>\r
            <XlpAlert status="info" title="Extra Large" borderRadius="xl">\r
                borderRadius="xl"\r
            </XlpAlert>\r
        </div>
}`,...(L=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};const ge=["Default","Statuses","Variants","TitleOnly","DescriptionOnly","Closable","BorderRadius"];export{m as BorderRadius,p as Closable,o as Default,d as DescriptionOnly,i as Statuses,u as TitleOnly,c as Variants,ge as __namedExportsOrder,be as default};
