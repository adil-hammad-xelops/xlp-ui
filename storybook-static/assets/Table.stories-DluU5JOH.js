import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as U,a as Y,b as Z,c as f,d as ee,e as ae,f as re}from"./table-D6k3571G.js";import{X as se}from"./Badge-CUmcbzjL.js";import"./index-DhY--VwN.js";import"./create-slot-recipe-context-DbaULi-n.js";import"./split-props-B9mtt7b_.js";import"./empty-BNjmiMPX.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";const t=({columns:s,data:g,size:O="md",variant:J="line",striped:$=!1,showColumnBorder:P=!1,stickyHeader:F=!1,interactive:G=!1,caption:b})=>{const K=(n,o)=>typeof o.accessor=="function"?o.accessor(n):n[o.accessor];return e.jsxs(U,{size:O,variant:J,striped:$,showColumnBorder:P,stickyHeader:F,interactive:G,children:[b&&e.jsx(Y,{children:b}),e.jsx(Z,{children:e.jsx(f,{children:s.map((n,o)=>e.jsx(ee,{textAlign:n.isNumeric?"end":"start",children:n.header},o))})}),e.jsx(ae,{children:g.map((n,o)=>e.jsx(f,{children:s.map((v,Q)=>e.jsx(re,{textAlign:v.isNumeric?"end":"start",children:K(n,v)},Q))},o))})]})};try{t.displayName="XlpTable",t.__docgenInfo={description:"XlpTable - A data table component",displayName:"XlpTable",props:{columns:{defaultValue:null,description:"The columns configuration",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"The data rows",name:"data",required:!0,type:{name:"T[]"}},size:{defaultValue:{value:"md"},description:"The size of the table",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"line"},description:"The variant of the table",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"line"'}]}},striped:{defaultValue:{value:"false"},description:"Whether the table has striped rows",name:"striped",required:!1,type:{name:"boolean"}},showColumnBorder:{defaultValue:{value:"false"},description:"Whether to show column borders",name:"showColumnBorder",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Whether the table has sticky header",name:"stickyHeader",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"Whether rows are interactive/hoverable",name:"interactive",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"Caption for the table",name:"caption",required:!1,type:{name:"string"}}}}}catch{}const he={title:"Components/Data Display/Table",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["line","outline"]},striped:{control:"boolean"},showColumnBorder:{control:"boolean"},stickyHeader:{control:"boolean"},interactive:{control:"boolean"}}},a=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",amount:1500},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",amount:2300},{id:3,name:"Bob Wilson",email:"bob@example.com",role:"Viewer",status:"inactive",amount:800},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",amount:1200},{id:5,name:"Charlie Davis",email:"charlie@example.com",role:"Admin",status:"active",amount:3100}],r=[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"}],l={args:{columns:r,data:a}},te=[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:s=>{const g={active:"green",inactive:"gray",pending:"yellow"};return e.jsx(se,{colorPalette:g[s.status],children:s.status})}},{header:"Amount",accessor:s=>`$${s.amount.toLocaleString()}`,isNumeric:!0}],i={args:{columns:te,data:a}},m={args:{columns:r,data:a,striped:!0}},c={args:{columns:r,data:a,showColumnBorder:!0}},d={args:{columns:r,data:a,interactive:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Small"}),e.jsx(t,{columns:r,data:a.slice(0,3),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Medium"}),e.jsx(t,{columns:r,data:a.slice(0,3),size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Large"}),e.jsx(t,{columns:r,data:a.slice(0,3),size:"lg"})]})]})},p={args:{columns:r,data:a,caption:"Team Members"}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Line"}),e.jsx(t,{columns:r,data:a.slice(0,3),variant:"line"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Outline"}),e.jsx(t,{columns:r,data:a.slice(0,3),variant:"outline"})]})]})};var x,y,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: sampleData
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,T,W;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: columnsWithStatus,
    data: sampleData
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var D,B,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: sampleData,
    striped: true
  }
}`,...(S=(B=m.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var V,z,w;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: sampleData,
    showColumnBorder: true
  }
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var X,_,q;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: sampleData,
    interactive: true
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,N,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="sm" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Medium</p>\r
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="md" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Large</p>\r
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} size="lg" />\r
            </div>\r
        </div>
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,H,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: sampleData,
    caption: "Team Members"
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var M,k,I;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Line</p>\r
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} variant="line" />\r
            </div>\r
            <div>\r
                <p style={{
        marginBottom: "0.5rem",
        fontWeight: "bold"
      }}>Outline</p>\r
                <XlpTable columns={basicColumns} data={sampleData.slice(0, 3)} variant="outline" />\r
            </div>\r
        </div>
}`,...(I=(k=h.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ge=["Default","WithCustomRenderers","Striped","WithColumnBorders","Interactive","Sizes","WithCaption","Variants"];export{l as Default,d as Interactive,u as Sizes,m as Striped,h as Variants,p as WithCaption,c as WithColumnBorders,i as WithCustomRenderers,ge as __namedExportsOrder,he as default};
