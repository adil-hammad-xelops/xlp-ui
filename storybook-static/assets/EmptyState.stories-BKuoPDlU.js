import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as P}from"./create-slot-recipe-context-DbaULi-n.js";import{X as i}from"./Button-CjnvWVVQ.js";import{B as l,C as V,F as k,x as q,y as R}from"./index-B44x0rYr.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./button-Csxds6DH.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./attr-C3Jtgmrz.js";import"./spinner-Bgrx1LWn.js";const{withProvider:L,withContext:p}=P({key:"emptyState"}),M=L("div","root"),U=p("div","content"),W=p("div","indicator"),Y=p("h3","title"),A=p("p","description"),t=({icon:m,title:I,description:d,children:_,size:D="md"})=>e.jsx(M,{size:D,children:e.jsxs(U,{children:[m&&e.jsx(W,{children:m}),e.jsx(Y,{children:I}),d&&e.jsx(A,{children:d}),_]})});try{t.displayName="XlpEmptyState",t.__docgenInfo={description:"XlpEmptyState - A placeholder component for empty content",displayName:"XlpEmptyState",props:{icon:{defaultValue:null,description:"The icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"The title text",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The description text",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children (typically action buttons)",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"The size of the empty state",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const re={title:"Components/Feedback/EmptyState",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},r={args:{icon:e.jsx(l,{size:48}),title:"No items found",description:"There are no items to display at the moment."}},s={args:{icon:e.jsx(V,{size:48}),title:"No documents",description:"You haven't created any documents yet. Start by creating your first document.",children:e.jsx(i,{colorPalette:"blue",children:"Create Document"})}},o={args:{icon:e.jsx(k,{size:48}),title:"No results found",description:"We couldn't find any results matching your search. Try adjusting your search terms.",children:e.jsx(i,{variant:"outline",children:"Clear Search"})}},a={args:{icon:e.jsx(q,{size:48}),title:"No team members",description:"Start building your team by inviting members.",children:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(i,{colorPalette:"blue",children:"Invite Members"}),e.jsx(i,{variant:"outline",children:"Import CSV"})]})}},n={args:{icon:e.jsx(R,{size:48}),title:"Your cart is empty",description:"Looks like you haven't added any items to your cart yet.",children:e.jsx(i,{colorPalette:"blue",children:"Continue Shopping"})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsx(t,{size:"sm",icon:e.jsx(l,{size:32}),title:"Small empty state",description:"This is a small empty state"}),e.jsx(t,{size:"md",icon:e.jsx(l,{size:48}),title:"Medium empty state",description:"This is a medium empty state"}),e.jsx(t,{size:"lg",icon:e.jsx(l,{size:64}),title:"Large empty state",description:"This is a large empty state"})]})};var u,y,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: <FiInbox size={48} />,
    title: "No items found",
    description: "There are no items to display at the moment."
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,x,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <FiFile size={48} />,
    title: "No documents",
    description: "You haven't created any documents yet. Start by creating your first document.",
    children: <XlpButton colorPalette="blue">Create Document</XlpButton>
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,z,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: <FiSearch size={48} />,
    title: "No results found",
    description: "We couldn't find any results matching your search. Try adjusting your search terms.",
    children: <XlpButton variant="outline">Clear Search</XlpButton>
  }
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var v,b,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <FiUsers size={48} />,
    title: "No team members",
    description: "Start building your team by inviting members.",
    children: <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>\r
                <XlpButton colorPalette="blue">Invite Members</XlpButton>\r
                <XlpButton variant="outline">Import CSV</XlpButton>\r
            </div>
  }
}`,...(E=(b=a.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var X,C,F;n.parameters={...n.parameters,docs:{...(X=n.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    icon: <FiShoppingCart size={48} />,
    title: "Your cart is empty",
    description: "Looks like you haven't added any items to your cart yet.",
    children: <XlpButton colorPalette="blue">Continue Shopping</XlpButton>
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var T,N,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
  }}>\r
            <XlpEmptyState size="sm" icon={<FiInbox size={32} />} title="Small empty state" description="This is a small empty state" />\r
            <XlpEmptyState size="md" icon={<FiInbox size={48} />} title="Medium empty state" description="This is a medium empty state" />\r
            <XlpEmptyState size="lg" icon={<FiInbox size={64} />} title="Large empty state" description="This is a large empty state" />\r
        </div>
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const se=["Default","WithAction","SearchEmpty","NoUsers","EmptyCart","Sizes"];export{r as Default,n as EmptyCart,a as NoUsers,o as SearchEmpty,c as Sizes,s as WithAction,se as __namedExportsOrder,re as default};
