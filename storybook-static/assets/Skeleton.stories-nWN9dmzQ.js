import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DhY--VwN.js";import{c as G}from"./create-recipe-context-Dhiw8L_C.js";import{B as d}from"./index-BCRR_Fbj.js";import{S as W}from"./stack-BVXR5AfD.js";import{F as A}from"./flex-BbQTeZJH.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";const D=g.forwardRef(function(t,o){const{size:a,...n}=t;return e.jsx(d,{...n,ref:o,boxSize:a,css:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,...t.css}})});D.displayName="Square";const I=g.forwardRef(function(t,o){const{size:a,...n}=t;return e.jsx(D,{size:a,ref:o,borderRadius:"9999px",...n})});I.displayName="Circle";const{withContext:H}=G({key:"skeleton"}),i=H("div");i.displayName="Skeleton";const M=g.forwardRef(function(t,o){const{size:a,...n}=t;return e.jsx(I,{size:a,asChild:!0,ref:o,children:e.jsx(i,{...n})})});M.displayName="SkeletonCircle";const P=g.forwardRef(function(t,o){const{noOfLines:a=3,gap:n,rootProps:S,...k}=t;return e.jsx(W,{gap:n,width:"full",ref:o,...S,children:Array.from({length:a}).map((J,E)=>e.jsx(i,{height:"4",_last:{maxW:a===1?"100%":"80%"},...k},E))})});P.displayName="SkeletonText";const l=({height:r="20px",width:t="100%",borderRadius:o="md",loading:a=!0,variant:n="pulse",children:S,mb:k})=>e.jsx(i,{height:r,width:t,borderRadius:o,loading:a,variant:n,marginBottom:k,children:S}),f=({noOfLines:r=3,gap:t=2,loading:o=!0})=>e.jsx(W,{gap:t,children:Array.from({length:r}).map((a,n)=>e.jsx(i,{height:"16px",width:n===r-1?"80%":"100%",loading:o},n))}),s=({size:r="48px",loading:t=!0})=>e.jsx(i,{height:r,width:r,borderRadius:"full",loading:t});try{l.displayName="XlpSkeleton",l.__docgenInfo={description:"XlpSkeleton - A placeholder loading component",displayName:"XlpSkeleton",props:{height:{defaultValue:{value:"20px"},description:"Height of the skeleton",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:{value:"100%"},description:"Width of the skeleton",name:"width",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:{value:"md"},description:"Border radius",name:"borderRadius",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"true"},description:"Whether the skeleton is loaded (will show children when true)",name:"loading",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"pulse"},description:"The variant of the skeleton",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"shine"'}]}},children:{defaultValue:null,description:"Content to show when loaded",name:"children",required:!1,type:{name:"ReactNode"}},mb:{defaultValue:null,description:"Margin bottom",name:"mb",required:!1,type:{name:"string | number"}}}}}catch{}try{f.displayName="XlpSkeletonText",f.__docgenInfo={description:"XlpSkeletonText - A text placeholder loading component",displayName:"XlpSkeletonText",props:{noOfLines:{defaultValue:{value:"3"},description:"Number of lines",name:"noOfLines",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"2"},description:"Gap between lines",name:"gap",required:!1,type:{name:"string | number"}},loading:{defaultValue:{value:"true"},description:"Whether the skeleton is loaded",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="XlpSkeletonCircle",s.__docgenInfo={description:"XlpSkeletonCircle - A circular placeholder loading component",displayName:"XlpSkeletonCircle",props:{size:{defaultValue:{value:"48px"},description:"Size of the circle",name:"size",required:!1,type:{name:"string | number"}},loading:{defaultValue:{value:"true"},description:"Whether the skeleton is loaded",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Components/Feedback/Skeleton",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{height:{control:"text"},width:{control:"text"},loading:{control:"boolean"},variant:{control:"select",options:["pulse","shine","none"]}}},p={args:{height:"20px",width:"200px"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(l,{variant:"pulse",height:"20px"}),e.jsx(l,{variant:"shine",height:"20px"}),e.jsx(l,{variant:"none",height:"20px"})]})},u={render:()=>e.jsx(d,{width:"300px",children:e.jsx(f,{noOfLines:4})})},x={render:()=>e.jsxs(A,{gap:4,children:[e.jsx(s,{size:"32px"}),e.jsx(s,{size:"48px"}),e.jsx(s,{size:"64px"})]})},m={render:()=>e.jsxs(d,{width:"300px",p:4,borderWidth:"1px",borderRadius:"lg",children:[e.jsxs(A,{gap:4,mb:4,children:[e.jsx(s,{size:"48px"}),e.jsxs(d,{flex:"1",children:[e.jsx(l,{height:"16px",width:"120px",mb:2}),e.jsx(l,{height:"12px",width:"80px"})]})]}),e.jsx(f,{noOfLines:3})]})},h={render:()=>e.jsx(d,{width:"200px",children:e.jsx(l,{loading:!1,height:"20px",children:e.jsx("p",{children:"Content loaded!"})})})};var y,j,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    height: "20px",
    width: "200px"
  }
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,_,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "200px"
  }}>\r
            <XlpSkeleton variant="pulse" height="20px" />\r
            <XlpSkeleton variant="shine" height="20px" />\r
            <XlpSkeleton variant="none" height="20px" />\r
        </div>
}`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var C,X,q;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box width="300px">\r
            <XlpSkeletonText noOfLines={4} />\r
        </Box>
}`,...(q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var z,V,N;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap={4}>\r
            <XlpSkeletonCircle size="32px" />\r
            <XlpSkeletonCircle size="48px" />\r
            <XlpSkeletonCircle size="64px" />\r
        </Flex>
}`,...(N=(V=x.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var R,T,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box width="300px" p={4} borderWidth="1px" borderRadius="lg">\r
            <Flex gap={4} mb={4}>\r
                <XlpSkeletonCircle size="48px" />\r
                <Box flex="1">\r
                    <XlpSkeleton height="16px" width="120px" mb={2} />\r
                    <XlpSkeleton height="12px" width="80px" />\r
                </Box>\r
            </Flex>\r
            <XlpSkeletonText noOfLines={3} />\r
        </Box>
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,F,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box width="200px">\r
            <XlpSkeleton loading={false} height="20px">\r
                <p>Content loaded!</p>\r
            </XlpSkeleton>\r
        </Box>
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const ae=["Default","Variants","TextSkeleton","CircleSkeleton","CardSkeleton","LoadedState"];export{m as CardSkeleton,x as CircleSkeleton,p as Default,h as LoadedState,u as TextSkeleton,c as Variants,ae as __namedExportsOrder,oe as default};
