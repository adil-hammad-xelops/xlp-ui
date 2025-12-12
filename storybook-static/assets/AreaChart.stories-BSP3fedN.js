import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{B as O}from"./index-BCRR_Fbj.js";import{T as H}from"./index-C5uWXf4o.js";import{F as T}from"./flex-BbQTeZJH.js";import{S as We}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";const h=["#3B82F6","#10B981","#8B5CF6","#F59E0B","#EF4444"],p=({series:i,title:G,height:je=300,showGrid:we=!0,showPoints:Fe=!1,stacked:g=!1,smooth:Ce=!0,showLegend:Me=!0,fillOpacity:W=.3,gradient:$=!0})=>{var N,E;const u={top:20,right:20,bottom:40,left:50},D=600,A=je,$e=D-u.left-u.right,B=A-u.top-u.bottom;let k;g?k=(((N=i[0])==null?void 0:N.data.map(t=>t.label))||[]).map((t,a)=>i.reduce((o,r)=>{var n;return o+(((n=r.data[a])==null?void 0:n.value)||0)},0)):k=i.flatMap(e=>e.data.map(t=>t.value));const P=Math.max(...k),f=0,V=((E=i[0])==null?void 0:E.data.map(e=>e.label))||[],m=e=>u.left+e/(V.length-1)*$e,b=e=>u.top+B-(e-f)/(P-f)*B,J=(e,t=0)=>{const a=e.map((o,r)=>({x:m(r),y:b(o.value+t)}));if(Ce&&a.length>2){let o=`M ${a[0].x} ${a[0].y}`;for(let r=0;r<a.length-1;r++){const n=a[Math.max(0,r-1)],s=a[r],c=a[r+1],R=a[Math.min(a.length-1,r+2)],Ae=s.x+(c.x-n.x)/6,ke=s.y+(c.y-n.y)/6,Oe=c.x-(R.x-s.x)/6,Ge=c.y-(R.y-s.y)/6;o+=` C ${Ae} ${ke}, ${Oe} ${Ge}, ${c.x} ${c.y}`}return o}return a.map((o,r)=>`${r===0?"M":"L"} ${o.x} ${o.y}`).join(" ")},De=(e,t=0)=>{const a=J(e,t),o=m(e.length-1),r=m(0),n=b(t);return`${a} L ${o} ${n} L ${r} ${n} Z`},L=[],X=[],_=5;for(let e=0;e<=_;e++){const t=f+(P-f)/_*e,a=b(t);L.push(l.jsx("line",{x1:u.left,y1:a,x2:D-u.right,y2:a,stroke:"currentColor",strokeOpacity:.1},`grid-${e}`)),X.push(l.jsx("text",{x:u.left-10,y:a,textAnchor:"end",alignmentBaseline:"middle",fontSize:"12",fill:"currentColor",opacity:.6,children:Math.round(t)},`label-${e}`))}const q=g?i.map((e,t)=>e.data.map((a,o)=>{const r=i.slice(0,t).reduce((n,s)=>{var c;return n+(((c=s.data[o])==null?void 0:c.value)||0)},0);return{...a,offset:r}})):null;return l.jsxs(O,{children:[G&&l.jsx(H,{fontSize:"lg",fontWeight:"semibold",mb:4,children:G}),l.jsx(O,{overflowX:"auto",children:l.jsxs("svg",{width:D,height:A,style:{color:"var(--chakra-colors-text-primary)"},children:[l.jsx("defs",{children:i.map((e,t)=>{const a=e.color||h[t%h.length];return $?l.jsxs("linearGradient",{id:`area-gradient-${t}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:a,stopOpacity:W}),l.jsx("stop",{offset:"100%",stopColor:a,stopOpacity:.05})]},`gradient-${t}`):null})}),we&&L,X,V.map((e,t)=>l.jsx("text",{x:m(t),y:A-u.bottom+20,textAnchor:"middle",fontSize:"12",fill:"currentColor",opacity:.6,children:e},`x-${t}`)),[...i].reverse().map((e,t)=>{var n;const a=i.length-1-t,o=e.color||h[a%h.length],r=g&&q?q[a]:e.data.map(s=>({...s,offset:0}));return l.jsxs("g",{children:[l.jsx("path",{d:De(r.map(s=>({label:s.label,value:s.value})),g&&((n=r[0])==null?void 0:n.offset)||0),fill:$?`url(#area-gradient-${a})`:o,fillOpacity:$?1:W}),l.jsx("path",{d:J(r.map(s=>({label:s.label,value:s.value+(s.offset||0)}))),fill:"none",stroke:o,strokeWidth:2}),Fe&&r.map((s,c)=>l.jsx("circle",{cx:m(c),cy:b(s.value+(s.offset||0)),r:4,fill:o,children:l.jsx("title",{children:`${e.name}: ${s.value}`})},c))]},a)})]})}),Me&&i.length>1&&l.jsx(T,{gap:4,mt:4,justify:"center",flexWrap:"wrap",children:i.map((e,t)=>l.jsxs(T,{align:"center",gap:2,children:[l.jsx(O,{w:"12px",h:"12px",borderRadius:"sm",bg:e.color||h[t%h.length]}),l.jsx(H,{fontSize:"sm",children:e.name})]},t))})]})};try{p.displayName="XlpAreaChart",p.__docgenInfo={description:"XlpAreaChart - An area chart component",displayName:"XlpAreaChart",props:{series:{defaultValue:null,description:"Chart series data",name:"series",required:!0,type:{name:"AreaChartSeries[]"}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},height:{defaultValue:{value:"300"},description:"Height of the chart",name:"height",required:!1,type:{name:"number"}},showGrid:{defaultValue:{value:"true"},description:"Whether to show grid lines",name:"showGrid",required:!1,type:{name:"boolean"}},showPoints:{defaultValue:{value:"false"},description:"Whether to show data points",name:"showPoints",required:!1,type:{name:"boolean"}},stacked:{defaultValue:{value:"false"},description:"Whether to stack areas",name:"stacked",required:!1,type:{name:"boolean"}},smooth:{defaultValue:{value:"true"},description:"Whether to smooth the line",name:"smooth",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"true"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},fillOpacity:{defaultValue:{value:"0.3"},description:"Fill opacity (0-1)",name:"fillOpacity",required:!1,type:{name:"number"}},gradient:{defaultValue:{value:"true"},description:"Whether to show gradient fill",name:"gradient",required:!1,type:{name:"boolean"}}}}}catch{}const He={title:"Components/Visualization/AreaChart",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{showGrid:{control:"boolean"},showPoints:{control:"boolean"},stacked:{control:"boolean"},smooth:{control:"boolean"},showLegend:{control:"boolean"},gradient:{control:"boolean"},fillOpacity:{control:{type:"range",min:0,max:1,step:.1}},height:{control:"number"}}},d=[{name:"Revenue",color:"#3B82F6",data:[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:150},{label:"Apr",value:220},{label:"May",value:190},{label:"Jun",value:280}]}],xe=[{name:"Revenue",color:"#3B82F6",data:[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:150},{label:"Apr",value:220},{label:"May",value:190},{label:"Jun",value:280}]},{name:"Expenses",color:"#EF4444",data:[{label:"Jan",value:80},{label:"Feb",value:100},{label:"Mar",value:90},{label:"Apr",value:130},{label:"May",value:110},{label:"Jun",value:150}]}],Se=[{name:"Desktop",color:"#3B82F6",data:[{label:"Jan",value:50},{label:"Feb",value:60},{label:"Mar",value:55},{label:"Apr",value:70},{label:"May",value:65},{label:"Jun",value:80}]},{name:"Mobile",color:"#10B981",data:[{label:"Jan",value:30},{label:"Feb",value:45},{label:"Mar",value:40},{label:"Apr",value:55},{label:"May",value:50},{label:"Jun",value:70}]},{name:"Tablet",color:"#8B5CF6",data:[{label:"Jan",value:20},{label:"Feb",value:25},{label:"Mar",value:22},{label:"Apr",value:30},{label:"May",value:28},{label:"Jun",value:35}]}],v={args:{series:d,title:"Monthly Revenue"}},y={args:{series:xe,title:"Revenue vs Expenses"}},x={args:{series:Se,title:"Traffic by Device (Stacked)",stacked:!0}},S={args:{series:d,title:"With Data Points",showPoints:!0}},j={args:{series:d,title:"Solid Fill (No Gradient)",gradient:!1,fillOpacity:.4}},w={args:{series:d,title:"Linear (Not Smooth)",smooth:!1}},F={render:()=>l.jsxs(We,{columns:{base:1,md:2},gap:8,children:[l.jsx(p,{series:d,title:"Smooth with Gradient",height:200}),l.jsx(p,{series:d,title:"Linear with Solid Fill",smooth:!1,gradient:!1,fillOpacity:.3,height:200}),l.jsx(p,{series:xe,title:"Multi-Series",height:200}),l.jsx(p,{series:Se,title:"Stacked",stacked:!0,height:200})]})},C={args:{series:d,title:"High Fill Opacity",fillOpacity:.6,gradient:!1}},M={args:{series:[{name:"Users",color:"#8B5CF6",data:[{label:"2019",value:1200},{label:"2020",value:2100},{label:"2021",value:3500},{label:"2022",value:5200},{label:"2023",value:7800},{label:"2024",value:11e3}]}],title:"User Growth Over Years",showPoints:!0,height:350}};var Y,z,U;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Monthly Revenue"
  }
}`,...(U=(z=v.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var I,Z,K;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    series: multiSeriesData,
    title: "Revenue vs Expenses"
  }
}`,...(K=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,ee,ae;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    series: stackedData,
    title: "Traffic by Device (Stacked)",
    stacked: true
  }
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "With Data Points",
    showPoints: true
  }
}`,...(re=(le=S.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,oe,ne;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Solid Fill (No Gradient)",
    gradient: false,
    fillOpacity: 0.4
  }
}`,...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "Linear (Not Smooth)",
    smooth: false
  }
}`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,he;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2
  }} gap={8}>\r
            <XlpAreaChart series={singleSeriesData} title="Smooth with Gradient" height={200} />\r
            <XlpAreaChart series={singleSeriesData} title="Linear with Solid Fill" smooth={false} gradient={false} fillOpacity={0.3} height={200} />\r
            <XlpAreaChart series={multiSeriesData} title="Multi-Series" height={200} />\r
            <XlpAreaChart series={stackedData} title="Stacked" stacked height={200} />\r
        </SimpleGrid>
}`,...(he=(de=F.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var me,ge,fe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    series: singleSeriesData,
    title: "High Fill Opacity",
    fillOpacity: 0.6,
    gradient: false
  }
}`,...(fe=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,ve,ye;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    series: [{
      name: "Users",
      color: "#8B5CF6",
      data: [{
        label: "2019",
        value: 1200
      }, {
        label: "2020",
        value: 2100
      }, {
        label: "2021",
        value: 3500
      }, {
        label: "2022",
        value: 5200
      }, {
        label: "2023",
        value: 7800
      }, {
        label: "2024",
        value: 11000
      }]
    }],
    title: "User Growth Over Years",
    showPoints: true,
    height: 350
  }
}`,...(ye=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const Te=["Default","MultiSeries","Stacked","WithPoints","NoGradient","NotSmooth","Comparison","HighFillOpacity","YearlyGrowth"];export{F as Comparison,v as Default,C as HighFillOpacity,y as MultiSeries,j as NoGradient,w as NotSmooth,x as Stacked,S as WithPoints,M as YearlyGrowth,Te as __namedExportsOrder,He as default};
