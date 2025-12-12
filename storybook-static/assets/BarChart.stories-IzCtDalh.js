import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./index-BCRR_Fbj.js";import{T as n}from"./index-C5uWXf4o.js";import{V as P}from"./v-stack-C8FbSuKv.js";import{F as S}from"./flex-BbQTeZJH.js";import{S as I}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const r=({data:s,title:i,height:J=300,showValues:v=!0,showLabels:f=!0,colorPalette:k="blue",borderRadius:b="md",orientation:K="vertical",animated:x=!0,gap:B=2})=>{const C=Math.max(...s.map(a=>a.value)),j=(a,l)=>{if(l)return l;const y=[500,400,600,300,700];return`${k}.${y[a%y.length]}`};return K==="horizontal"?e.jsxs(o,{children:[i&&e.jsx(n,{fontSize:"lg",fontWeight:"semibold",mb:4,children:i}),e.jsx(P,{align:"stretch",gap:B,children:s.map((a,l)=>e.jsxs(S,{align:"center",gap:3,children:[f&&e.jsx(n,{fontSize:"sm",minW:"80px",textAlign:"right",children:a.label}),e.jsx(o,{flex:"1",h:"32px",bg:"bg.secondary",borderRadius:b,overflow:"hidden",children:e.jsx(o,{h:"100%",w:`${a.value/C*100}%`,bg:j(l,a.color),borderRadius:b,transition:x?"width 0.5s ease-out":void 0,display:"flex",alignItems:"center",justifyContent:"flex-end",pr:2,children:v&&e.jsx(n,{fontSize:"xs",fontWeight:"medium",color:"white",children:a.value})})})]},l))})]}):e.jsxs(o,{children:[i&&e.jsx(n,{fontSize:"lg",fontWeight:"semibold",mb:4,children:i}),e.jsx(o,{h:`${J}px`,children:e.jsx(S,{h:"100%",align:"flex-end",gap:B,children:s.map((a,l)=>e.jsxs(P,{flex:"1",h:"100%",justify:"flex-end",gap:1,children:[v&&e.jsx(n,{fontSize:"xs",fontWeight:"medium",children:a.value}),e.jsx(o,{w:"100%",h:`${a.value/C*100}%`,bg:j(l,a.color),borderRadius:b,borderBottomRadius:"none",transition:x?"height 0.5s ease-out":void 0,minH:"4px"}),f&&e.jsx(n,{fontSize:"xs",color:"text.secondary",textAlign:"center",children:a.label})]},l))})})]})};try{r.displayName="XlpBarChart",r.__docgenInfo={description:"XlpBarChart - A simple bar chart component",displayName:"XlpBarChart",props:{data:{defaultValue:null,description:"Chart data points",name:"data",required:!0,type:{name:"BarChartDataPoint[]"}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},height:{defaultValue:{value:"300"},description:"Height of the chart",name:"height",required:!1,type:{name:"number"}},showValues:{defaultValue:{value:"true"},description:"Whether to show values on bars",name:"showValues",required:!1,type:{name:"boolean"}},showLabels:{defaultValue:{value:"true"},description:"Whether to show labels",name:"showLabels",required:!1,type:{name:"boolean"}},colorPalette:{defaultValue:{value:"blue"},description:"Bar color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"teal"'},{value:'"purple"'},{value:'"orange"'}]}},borderRadius:{defaultValue:{value:"md"},description:"Bar border radius",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},orientation:{defaultValue:{value:"vertical"},description:"Orientation of the chart",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},animated:{defaultValue:{value:"true"},description:"Whether to animate on load",name:"animated",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Gap between bars",name:"gap",required:!1,type:{name:"number"}}}}}catch{}const de={title:"Components/Visualization/BarChart",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},colorPalette:{control:"select",options:["blue","green","purple","orange","teal","red"]},borderRadius:{control:"select",options:["none","sm","md","lg","full"]},showValues:{control:"boolean"},showLabels:{control:"boolean"},animated:{control:"boolean"},height:{control:"number"}}},t=[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:150},{label:"Apr",value:220},{label:"May",value:190},{label:"Jun",value:280}],u={args:{data:t,title:"Monthly Sales"}},d={args:{data:t,title:"Monthly Sales",orientation:"horizontal"}},c={render:()=>e.jsxs(I,{columns:{base:1,md:2},gap:8,children:[e.jsx(r,{data:t,title:"Blue",colorPalette:"blue",height:200}),e.jsx(r,{data:t,title:"Green",colorPalette:"green",height:200}),e.jsx(r,{data:t,title:"Purple",colorPalette:"purple",height:200}),e.jsx(r,{data:t,title:"Orange",colorPalette:"orange",height:200})]})},p={render:()=>e.jsxs(I,{columns:{base:1,md:3},gap:8,children:[e.jsx(r,{data:t,title:"None",borderRadius:"none",height:200}),e.jsx(r,{data:t,title:"Medium",borderRadius:"md",height:200}),e.jsx(r,{data:t,title:"Full",borderRadius:"full",height:200})]})},m={args:{data:[{label:"Product A",value:120,color:"#3B82F6"},{label:"Product B",value:180,color:"#10B981"},{label:"Product C",value:150,color:"#8B5CF6"},{label:"Product D",value:220,color:"#F59E0B"}],title:"Product Sales"}},h={args:{data:t,title:"Minimal Bar Chart",showLabels:!1,showValues:!1}},g={render:()=>e.jsx(o,{children:e.jsx(r,{data:[{label:"Q1 2024",value:45e3},{label:"Q2 2024",value:52e3},{label:"Q3 2024",value:48e3},{label:"Q4 2024",value:61e3}],title:"Quarterly Revenue",colorPalette:"teal",height:250})})};var V,w,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Monthly Sales"
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,R,X;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Monthly Sales",
    orientation: "horizontal"
  }
}`,...(X=(R=d.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var F,M,q;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2
  }} gap={8}>\r
            <XlpBarChart data={sampleData} title="Blue" colorPalette="blue" height={200} />\r
            <XlpBarChart data={sampleData} title="Green" colorPalette="green" height={200} />\r
            <XlpBarChart data={sampleData} title="Purple" colorPalette="purple" height={200} />\r
            <XlpBarChart data={sampleData} title="Orange" colorPalette="orange" height={200} />\r
        </SimpleGrid>
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var Q,W,_;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={8}>\r
            <XlpBarChart data={sampleData} title="None" borderRadius="none" height={200} />\r
            <XlpBarChart data={sampleData} title="Medium" borderRadius="md" height={200} />\r
            <XlpBarChart data={sampleData} title="Full" borderRadius="full" height={200} />\r
        </SimpleGrid>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var G,A,L;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: [{
      label: "Product A",
      value: 120,
      color: "#3B82F6"
    }, {
      label: "Product B",
      value: 180,
      color: "#10B981"
    }, {
      label: "Product C",
      value: 150,
      color: "#8B5CF6"
    }, {
      label: "Product D",
      value: 220,
      color: "#F59E0B"
    }],
    title: "Product Sales"
  }
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var $,E,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Minimal Bar Chart",
    showLabels: false,
    showValues: false
  }
}`,...(H=(E=h.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,O,T;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Box>\r
            <XlpBarChart data={[{
      label: "Q1 2024",
      value: 45000
    }, {
      label: "Q2 2024",
      value: 52000
    }, {
      label: "Q3 2024",
      value: 48000
    }, {
      label: "Q4 2024",
      value: 61000
    }]} title="Quarterly Revenue" colorPalette="teal" height={250} />\r
        </Box>
}`,...(T=(O=g.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const ce=["Default","Horizontal","ColorPalettes","BorderRadius","CustomColors","WithoutLabels","ComparisonChart"];export{p as BorderRadius,c as ColorPalettes,g as ComparisonChart,m as CustomColors,u as Default,d as Horizontal,h as WithoutLabels,ce as __namedExportsOrder,de as default};
