import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as D}from"./index-BCRR_Fbj.js";import{T as E}from"./index-C5uWXf4o.js";import{F as O}from"./flex-BbQTeZJH.js";import{S as Le}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";const g=["#3B82F6","#10B981","#8B5CF6","#F59E0B","#EF4444"],i=({series:u,title:R,height:fe=300,showGrid:be=!0,showPoints:xe=!0,filled:ye=!1,smooth:Se=!1,showLegend:Me=!0})=>{var _;const r={top:20,right:20,bottom:40,left:50},C=600,F=fe,je=C-r.left-r.right,c=F-r.top-r.bottom,W=u.flatMap(e=>e.data.map(l=>l.value)),B=Math.max(...W),m=Math.min(0,Math.min(...W)),V=((_=u[0])==null?void 0:_.data.map(e=>e.label))||[],$=e=>r.left+e/(V.length-1)*je,L=e=>r.top+c-(e-m)/(B-m)*c,G=(e,l=!1)=>{const a=e.map((n,s)=>({x:$(s),y:L(n.value)}));if(Se&&a.length>2){let n=`M ${a[0].x} ${a[0].y}`;for(let s=0;s<a.length-1;s++){const q=a[Math.max(0,s-1)],p=a[s],d=a[s+1],A=a[Math.min(a.length-1,s+2)],we=p.x+(d.x-q.x)/6,Ce=p.y+(d.y-q.y)/6,Fe=d.x-(A.x-p.x)/6,$e=d.y-(A.y-p.y)/6;n+=` C ${we} ${Ce}, ${Fe} ${$e}, ${d.x} ${d.y}`}return l&&(n+=` L ${a[a.length-1].x} ${r.top+c}`,n+=` L ${a[0].x} ${r.top+c} Z`),n}let h=a.map((n,s)=>`${s===0?"M":"L"} ${n.x} ${n.y}`).join(" ");return l&&(h+=` L ${a[a.length-1].x} ${r.top+c}`,h+=` L ${a[0].x} ${r.top+c} Z`),h},P=[],J=[],X=5;for(let e=0;e<=X;e++){const l=m+(B-m)/X*e,a=L(l);P.push(t.jsx("line",{x1:r.left,y1:a,x2:C-r.right,y2:a,stroke:"currentColor",strokeOpacity:.1},`grid-${e}`)),J.push(t.jsx("text",{x:r.left-10,y:a,textAnchor:"end",alignmentBaseline:"middle",fontSize:"12",fill:"currentColor",opacity:.6,children:Math.round(l)},`label-${e}`))}return t.jsxs(D,{children:[R&&t.jsx(E,{fontSize:"lg",fontWeight:"semibold",mb:4,children:R}),t.jsx(D,{overflowX:"auto",children:t.jsxs("svg",{width:C,height:F,style:{color:"var(--chakra-colors-text-primary)"},children:[be&&P,J,V.map((e,l)=>t.jsx("text",{x:$(l),y:F-r.bottom+20,textAnchor:"middle",fontSize:"12",fill:"currentColor",opacity:.6,children:e},`x-${l}`)),u.map((e,l)=>{const a=e.color||g[l%g.length];return t.jsxs("g",{children:[ye&&t.jsx("path",{d:G(e.data,!0),fill:a,fillOpacity:.1}),t.jsx("path",{d:G(e.data),fill:"none",stroke:a,strokeWidth:2}),xe&&e.data.map((h,n)=>t.jsx("circle",{cx:$(n),cy:L(h.value),r:4,fill:a,children:t.jsx("title",{children:`${e.name}: ${h.value}`})},n))]},l)})]})}),Me&&u.length>1&&t.jsx(O,{gap:4,mt:4,justify:"center",flexWrap:"wrap",children:u.map((e,l)=>t.jsxs(O,{align:"center",gap:2,children:[t.jsx(D,{w:"12px",h:"3px",borderRadius:"full",bg:e.color||g[l%g.length]}),t.jsx(E,{fontSize:"sm",children:e.name})]},l))})]})};try{i.displayName="XlpLineChart",i.__docgenInfo={description:"XlpLineChart - A line chart component",displayName:"XlpLineChart",props:{series:{defaultValue:null,description:"Chart series data",name:"series",required:!0,type:{name:"LineChartSeries[]"}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},height:{defaultValue:{value:"300"},description:"Height of the chart",name:"height",required:!1,type:{name:"number"}},showGrid:{defaultValue:{value:"true"},description:"Whether to show grid lines",name:"showGrid",required:!1,type:{name:"boolean"}},showPoints:{defaultValue:{value:"true"},description:"Whether to show data points",name:"showPoints",required:!1,type:{name:"boolean"}},filled:{defaultValue:{value:"false"},description:"Whether to fill area under line",name:"filled",required:!1,type:{name:"boolean"}},smooth:{defaultValue:{value:"false"},description:"Whether to smooth the line",name:"smooth",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"true"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},colorPalette:{defaultValue:null,description:"Color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"multi"'}]}}}}}catch{}const Ae={title:"Components/Visualization/LineChart",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{showGrid:{control:"boolean"},showPoints:{control:"boolean"},filled:{control:"boolean"},smooth:{control:"boolean"},showLegend:{control:"boolean"},height:{control:"number"}}},o=[{data:[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:150},{label:"Apr",value:220},{label:"May",value:190},{label:"Jun",value:280}],name:"Revenue",color:"#3B82F6"}],ve=[{name:"Revenue",color:"#3B82F6",data:[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:150},{label:"Apr",value:220},{label:"May",value:190},{label:"Jun",value:280}]},{name:"Expenses",color:"#EF4444",data:[{label:"Jan",value:80},{label:"Feb",value:120},{label:"Mar",value:100},{label:"Apr",value:140},{label:"May",value:130},{label:"Jun",value:160}]}],v={args:{series:o,title:"Monthly Revenue"}},f={args:{series:ve,title:"Revenue vs Expenses"}},b={args:{series:o,title:"Monthly Revenue",filled:!0}},x={args:{series:o,title:"Monthly Revenue (Smooth)",smooth:!0,filled:!0}},y={args:{series:o,title:"Monthly Revenue",showPoints:!1}},S={args:{series:o,title:"Monthly Revenue",showGrid:!1}},M={render:()=>t.jsxs(Le,{columns:{base:1,md:2},gap:8,children:[t.jsx(i,{series:o,title:"Standard",height:200}),t.jsx(i,{series:o,title:"Smooth",smooth:!0,height:200}),t.jsx(i,{series:o,title:"Filled",filled:!0,height:200}),t.jsx(i,{series:o,title:"Smooth + Filled",smooth:!0,filled:!0,height:200})]})},j={args:{series:[...ve,{name:"Profit",color:"#10B981",data:[{label:"Jan",value:40},{label:"Feb",value:60},{label:"Mar",value:50},{label:"Apr",value:80},{label:"May",value:60},{label:"Jun",value:120}]}],title:"Financial Overview"}},w={args:{series:[{name:"Users",color:"#8B5CF6",data:[{label:"2019",value:1200},{label:"2020",value:1800},{label:"2021",value:2400},{label:"2022",value:3200},{label:"2023",value:4100},{label:"2024",value:5500}]}],title:"User Growth Over Years",smooth:!0,filled:!0,height:350}};var k,z,T;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue"
  }
}`,...(T=(z=v.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var Y,U,H;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    series: multiSeriesData,
    title: "Revenue vs Expenses"
  }
}`,...(H=(U=f.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var N,Z,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue",
    filled: true
  }
}`,...(I=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var K,Q,ee;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue (Smooth)",
    smooth: true,
    filled: true
  }
}`,...(ee=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue",
    showPoints: false
  }
}`,...(le=(te=y.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ne,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue",
    showGrid: false
  }
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,ue;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2
  }} gap={8}>\r
            <XlpLineChart series={singleSeriesData} title="Standard" height={200} />\r
            <XlpLineChart series={singleSeriesData} title="Smooth" smooth height={200} />\r
            <XlpLineChart series={singleSeriesData} title="Filled" filled height={200} />\r
            <XlpLineChart series={singleSeriesData} title="Smooth + Filled" smooth filled height={200} />\r
        </SimpleGrid>
}`,...(ue=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,he,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    series: [...multiSeriesData, {
      name: "Profit",
      color: "#10B981",
      data: [{
        label: "Jan",
        value: 40
      }, {
        label: "Feb",
        value: 60
      }, {
        label: "Mar",
        value: 50
      }, {
        label: "Apr",
        value: 80
      }, {
        label: "May",
        value: 60
      }, {
        label: "Jun",
        value: 120
      }]
    }],
    title: "Financial Overview"
  }
}`,...(de=(he=j.parameters)==null?void 0:he.docs)==null?void 0:de.source}}};var me,pe,ge;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    series: [{
      name: "Users",
      color: "#8B5CF6",
      data: [{
        label: "2019",
        value: 1200
      }, {
        label: "2020",
        value: 1800
      }, {
        label: "2021",
        value: 2400
      }, {
        label: "2022",
        value: 3200
      }, {
        label: "2023",
        value: 4100
      }, {
        label: "2024",
        value: 5500
      }]
    }],
    title: "User Growth Over Years",
    smooth: true,
    filled: true,
    height: 350
  }
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ee=["Default","MultiSeries","Filled","Smooth","WithoutPoints","WithoutGrid","Comparison","ThreeSeries","YearlyData"];export{M as Comparison,v as Default,b as Filled,f as MultiSeries,x as Smooth,j as ThreeSeries,S as WithoutGrid,y as WithoutPoints,w as YearlyData,Ee as __namedExportsOrder,Ae as default};
