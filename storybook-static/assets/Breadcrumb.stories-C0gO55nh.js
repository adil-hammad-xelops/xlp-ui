import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as F}from"./create-slot-recipe-context-DbaULi-n.js";import{C as L,E as W}from"./icons-ARZDse-g.js";import{r as d,A as E}from"./index-B44x0rYr.js";import"./index-DhY--VwN.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";const{withProvider:N,withContext:a}=F({key:"breadcrumb"}),q=N("nav","root",{defaultProps:{"aria-label":"breadcrumb"}}),T=a("ol","list"),V=a("li","item"),w=a("a","link"),A=a("span","currentLink",{defaultProps:{role:"link","aria-current":"page"}}),O=a("li","separator",{defaultProps:{"aria-hidden":!0,children:e.jsx(L,{})}});a("li","ellipsis",{defaultProps:{role:"presentation","aria-hidden":!0,children:e.jsx(W,{})}});const r=({items:u,separator:X="/",size:k="md"})=>e.jsx(q,{size:k,children:e.jsx(T,{children:u.map((t,p)=>e.jsxs(V,{children:[t.current?e.jsx(A,{children:t.label}):e.jsx(w,{href:t.href,children:t.label}),p<u.length-1&&e.jsx(O,{children:X})]},p))})});try{r.displayName="XlpBreadcrumb",r.__docgenInfo={description:"XlpBreadcrumb - A navigation breadcrumb component",displayName:"XlpBreadcrumb",props:{items:{defaultValue:null,description:"The breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:"/"},description:"Custom separator",name:"separator",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"The size of the breadcrumb",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const $={title:"Components/Navigation/Breadcrumb",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},s=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Page",current:!0}],o={args:{items:s}},n={args:{items:s,separator:e.jsx(d,{})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{items:s,size:"sm"}),e.jsx(r,{items:s,size:"md"}),e.jsx(r,{items:s,size:"lg"})]})},G=[{label:e.jsxs(e.Fragment,{children:[e.jsx(E,{style:{marginRight:"4px"}})," Home"]}),href:"/"},{label:"Dashboard",href:"/dashboard"},{label:"Settings",current:!0}],i={args:{items:G,separator:e.jsx(d,{})}},l={args:{items:[{label:"Home",href:"/"},{label:"Page",current:!0}]}},m={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/sub"},{label:"Section",href:"/category/sub/section"},{label:"Item",href:"/category/sub/section/item"},{label:"Details",current:!0}],separator:e.jsx(d,{})}};var b,h,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: <FiChevronRight />
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,B,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <XlpBreadcrumb items={basicItems} size="sm" />\r
            <XlpBreadcrumb items={basicItems} size="md" />\r
            <XlpBreadcrumb items={basicItems} size="lg" />\r
        </div>
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,C,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: itemsWithIcons,
    separator: <FiChevronRight />
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var z,R,_;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Page",
      current: true
    }]
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var P,D,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Subcategory",
      href: "/category/sub"
    }, {
      label: "Section",
      href: "/category/sub/section"
    }, {
      label: "Item",
      href: "/category/sub/section/item"
    }, {
      label: "Details",
      current: true
    }],
    separator: <FiChevronRight />
  }
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const ee=["Default","WithCustomSeparator","Sizes","WithIcons","ShortBreadcrumb","LongBreadcrumb"];export{o as Default,m as LongBreadcrumb,l as ShortBreadcrumb,c as Sizes,n as WithCustomSeparator,i as WithIcons,ee as __namedExportsOrder,$ as default};
