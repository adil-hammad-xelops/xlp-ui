import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as pe}from"./flex-BbQTeZJH.js";import{r as o}from"./index-DhY--VwN.js";import{c as me,u as ve}from"./create-slot-recipe-context-DbaULi-n.js";import{c as z}from"./empty-BNjmiMPX.js";import{a as ee}from"./split-props-B9mtt7b_.js";import{d as S}from"./attr-C3Jtgmrz.js";import{u as fe,b as xe,a as ge,n as he,c as ae}from"./index-D_cjyf5z.js";import{c as Ae,a as P}from"./factory-Bi3dmlYl.js";import{c as ye,m as be}from"./index-D7JSJXYm.js";import{a0 as R}from"./index-Clc2OPsj.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";import"./index-ClHelJ_k.js";const[re,te]=Ae({name:"AvatarContext",hookName:"useAvatarContext",providerName:"<AvatarProvider />"}),se=o.forwardRef((t,r)=>{const s=te(),n=R(s.getFallbackProps(),t);return e.jsx(P.span,{...n,ref:r})});se.displayName="AvatarFallback";const ne=o.forwardRef((t,r)=>{const s=te(),n=R(s.getImageProps(),t);return e.jsx(P.img,{...n,ref:r})});ne.displayName="AvatarImage";const je=t=>{const r=o.useId(),{getRootNode:s}=fe(),{dir:n}=xe(),l={id:r,dir:n,getRootNode:s,...t},i=ge(be,l);return ye(i,he)},Pe=ae(),oe=o.forwardRef((t,r)=>{const[s,n]=Pe(t,["id","ids","onStatusChange"]),l=je(s),i=R(l.getRootProps(),n);return e.jsx(re,{value:l,children:e.jsx(P.div,{...i,ref:r})})});oe.displayName="AvatarRoot";const Re=ae(),le=o.forwardRef((t,r)=>{const[{value:s},n]=Re(t,["value"]),l=R(s.getRootProps(),n);return e.jsx(re,{value:s,children:e.jsx(P.div,{...l,ref:r})})});le.displayName="AvatarRootProvider";const Xe=z("div",{base:{display:"inline-flex",gap:"var(--group-gap, 0.5rem)",isolation:"isolate",position:"relative","& [data-group-item]":{_focusVisible:{zIndex:1}}},variants:{orientation:{horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}},attached:{true:{gap:"0!"}},grow:{true:{display:"flex","& > *":{flex:1}}},stacking:{"first-on-top":{"& > [data-group-item]":{zIndex:"calc(var(--group-count) - var(--group-index))"}},"last-on-top":{"& > [data-group-item]":{zIndex:"var(--group-index)"}}}},compoundVariants:[{orientation:"horizontal",attached:!0,css:{"& > *[data-first]":{borderEndRadius:"0!",marginEnd:"-1px"},"& > *[data-between]":{borderRadius:"0!",marginEnd:"-1px"},"& > *[data-last]":{borderStartRadius:"0!"}}},{orientation:"vertical",attached:!0,css:{"& > *[data-first]":{borderBottomRadius:"0!",marginBottom:"-1px"},"& > *[data-between]":{borderRadius:"0!",marginBottom:"-1px"},"& > *[data-last]":{borderTopRadius:"0!"}}}],defaultVariants:{orientation:"horizontal"}}),ie=o.memo(o.forwardRef(function(r,s){const{align:n="center",justify:l="flex-start",children:i,wrap:c,skip:u,...de}=r,ce=o.useMemo(()=>{let p=o.Children.toArray(i).filter(o.isValidElement);if(p.length===1)return p;const X=p.filter(d=>!(u!=null&&u(d))),C=X.length;return X.length===1?p:p.map(d=>{const v=d.props;if(u!=null&&u(d))return d;const m=X.indexOf(d);return o.cloneElement(d,{...v,"data-group-item":"","data-first":S(m===0),"data-last":S(m===C-1),"data-between":S(m>0&&m<C-1),style:{"--group-count":C,"--group-index":m,...(v==null?void 0:v.style)??{}}})})},[i,u]);return e.jsx(Xe,{ref:s,alignItems:n,justifyContent:l,flexWrap:c,...de,className:ee("chakra-group",r.className),children:ce})}));ie.displayName="Group";const{withProvider:ue,withContext:Ce,useStyles:Se,useClassNames:qe,PropsProvider:ze}=me({key:"avatar"});ue(le,"root",{forwardAsChild:!0});const we=ue(oe,"root",{forwardAsChild:!0}),Ne=z(se,{},{forwardAsChild:!0});function Ge(t){return t.children||t.asChild?t.children:t.name?Ie(t.name):e.jsx(ke,{})}function Ie(t){const r=t.trim().split(" "),s=r[0]!=null?r[0]:"",n=r.length>1?r[r.length-1]:"";return s&&n?`${s.charAt(0)}${n.charAt(0)}`:s.charAt(0)}const Ve=o.forwardRef(function(r,s){const n=Se(),l=qe(),{name:i,...c}=r;return e.jsx(Ne,{ref:s,...c,className:ee(r.className,l.fallback),css:[n.fallback,r.css],children:Ge(r)})}),_e=Ce(ne,"image",{forwardAsChild:!0,defaultProps:{draggable:"false",referrerPolicy:"no-referrer"}}),ke=o.forwardRef(function(r,s){return e.jsx(z.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1.2em",width:"1.2em",ref:s,...r,children:e.jsx("path",{d:"M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"})})});o.forwardRef(function(r,s){const n=ve({key:"avatar"}),[l,i]=o.useMemo(()=>n.splitVariantProps(r),[r,n]);return e.jsx(ze,{value:l,children:e.jsx(ie,{gap:"0",spaceX:"-3",ref:s,...i})})});const a=({name:t,src:r,size:s="md",colorPalette:n="gray",variant:l="solid",shape:i="full",borderRadius:c})=>e.jsxs(we,{size:s,colorPalette:n,variant:l,shape:i,borderRadius:c,children:[e.jsx(Ve,{name:t}),r&&e.jsx(_e,{src:r,alt:t})]}),q=({children:t})=>e.jsx(pe,{children:t});try{a.displayName="XlpAvatar",a.__docgenInfo={description:"XlpAvatar - A user avatar component",displayName:"XlpAvatar",props:{name:{defaultValue:null,description:"The name of the person (used for fallback initials)",name:"name",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The image source",name:"src",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"The size of the avatar",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},colorPalette:{defaultValue:{value:"gray"},description:"The color palette for fallback",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"pink"'},{value:'"purple"'},{value:'"cyan"'},{value:'"orange"'}]}},variant:{defaultValue:{value:"solid"},description:"The variant of the avatar",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'}]}},shape:{defaultValue:{value:"full"},description:"The shape of the avatar",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"full"'},{value:'"square"'}]}},borderRadius:{defaultValue:null,description:"Border radius (only applies when shape is not 'full')",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"none"'},{value:'"full"'}]}}}}}catch{}try{q.displayName="XlpAvatarGroup",q.__docgenInfo={description:"XlpAvatarGroup - A group of avatars",displayName:"XlpAvatarGroup",props:{max:{defaultValue:null,description:"Maximum number of avatars to show",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"The size of avatars",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},children:{defaultValue:null,description:"Avatar items",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const Ke={title:"Components/Media and Icons/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},colorPalette:{control:"select",options:["gray","red","green","blue","teal","pink","purple","cyan","orange"]},variant:{control:"select",options:["solid","subtle","outline"]},shape:{control:"select",options:["circle","square","rounded"]},borderRadius:{control:"select",options:["none","xs","sm","md","lg","xl","2xl","full"]}}},f={args:{name:"John Doe"}},x={args:{name:"Jane Smith",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(a,{name:"XS",size:"xs"}),e.jsx(a,{name:"SM",size:"sm"}),e.jsx(a,{name:"MD",size:"md"}),e.jsx(a,{name:"LG",size:"lg"}),e.jsx(a,{name:"XL",size:"xl"}),e.jsx(a,{name:"2XL",size:"2xl"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{name:"Gray",colorPalette:"gray"}),e.jsx(a,{name:"Blue",colorPalette:"blue"}),e.jsx(a,{name:"Green",colorPalette:"green"}),e.jsx(a,{name:"Red",colorPalette:"red"}),e.jsx(a,{name:"Purple",colorPalette:"purple"}),e.jsx(a,{name:"Orange",colorPalette:"orange"})]})},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{name:"Full",shape:"full"}),e.jsx(a,{name:"Square",shape:"square"}),e.jsx(a,{name:"Rounded",shape:"rounded"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(a,{name:"Solid",variant:"solid",colorPalette:"blue"}),e.jsx(a,{name:"Subtle",variant:"subtle",colorPalette:"blue"}),e.jsx(a,{name:"Outline",variant:"outline",colorPalette:"blue"})]})},b={render:()=>e.jsxs(q,{max:3,children:[e.jsx(a,{name:"John Doe",src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"}),e.jsx(a,{name:"Jane Smith",src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"}),e.jsx(a,{name:"Bob Wilson",src:"https://i.pravatar.cc/150?u=a04258114e29026702d"}),e.jsx(a,{name:"Alice Brown",src:"https://i.pravatar.cc/150?u=a048581f4e29026701d"}),e.jsx(a,{name:"Extra User"})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(a,{name:"None",shape:"square",borderRadius:"none"}),e.jsx(a,{name:"SM",shape:"square",borderRadius:"sm"}),e.jsx(a,{name:"MD",shape:"square",borderRadius:"md"}),e.jsx(a,{name:"LG",shape:"square",borderRadius:"lg"}),e.jsx(a,{name:"XL",shape:"square",borderRadius:"xl"}),e.jsx(a,{name:"2XL",shape:"square",borderRadius:"2xl"}),e.jsx(a,{name:"Full",shape:"square",borderRadius:"full"})]})};var w,N,G;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: "John Doe"
  }
}`,...(G=(N=f.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var I,V,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: "Jane Smith",
    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  }
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var k,M,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpAvatar name="XS" size="xs" />\r
            <XlpAvatar name="SM" size="sm" />\r
            <XlpAvatar name="MD" size="md" />\r
            <XlpAvatar name="LG" size="lg" />\r
            <XlpAvatar name="XL" size="xl" />\r
            <XlpAvatar name="2XL" size="2xl" />\r
        </div>
}`,...(B=(M=g.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,L,D;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpAvatar name="Gray" colorPalette="gray" />\r
            <XlpAvatar name="Blue" colorPalette="blue" />\r
            <XlpAvatar name="Green" colorPalette="green" />\r
            <XlpAvatar name="Red" colorPalette="red" />\r
            <XlpAvatar name="Purple" colorPalette="purple" />\r
            <XlpAvatar name="Orange" colorPalette="orange" />\r
        </div>
}`,...(D=(L=h.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var E,T,J;A.parameters={...A.parameters,docs:{...(E=A.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpAvatar name="Full" shape="full" />\r
            <XlpAvatar name="Square" shape="square" />\r
            <XlpAvatar name="Rounded" shape="rounded" />\r
        </div>
}`,...(J=(T=A.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var O,W,$;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>\r
            <XlpAvatar name="Solid" variant="solid" colorPalette="blue" />\r
            <XlpAvatar name="Subtle" variant="subtle" colorPalette="blue" />\r
            <XlpAvatar name="Outline" variant="outline" colorPalette="blue" />\r
        </div>
}`,...($=(W=y.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var H,Z,U;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <XlpAvatarGroup max={3}>\r
            <XlpAvatar name="John Doe" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />\r
            <XlpAvatar name="Jane Smith" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />\r
            <XlpAvatar name="Bob Wilson" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />\r
            <XlpAvatar name="Alice Brown" src="https://i.pravatar.cc/150?u=a048581f4e29026701d" />\r
            <XlpAvatar name="Extra User" />\r
        </XlpAvatarGroup>
}`,...(U=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var K,Q,Y;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>\r
            <XlpAvatar name="None" shape="square" borderRadius="none" />\r
            <XlpAvatar name="SM" shape="square" borderRadius="sm" />\r
            <XlpAvatar name="MD" shape="square" borderRadius="md" />\r
            <XlpAvatar name="LG" shape="square" borderRadius="lg" />\r
            <XlpAvatar name="XL" shape="square" borderRadius="xl" />\r
            <XlpAvatar name="2XL" shape="square" borderRadius="2xl" />\r
            <XlpAvatar name="Full" shape="square" borderRadius="full" />\r
        </div>
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Qe=["Default","WithImage","Sizes","ColorPalettes","Shapes","Variants","Group","BorderRadius"];export{j as BorderRadius,h as ColorPalettes,f as Default,b as Group,A as Shapes,g as Sizes,y as Variants,x as WithImage,Qe as __namedExportsOrder,Ke as default};
