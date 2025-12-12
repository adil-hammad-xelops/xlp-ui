import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{B as W}from"./index-BCRR_Fbj.js";import{T as z}from"./index-C5uWXf4o.js";import{F as j}from"./flex-BbQTeZJH.js";import{S as Pe}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";const b=["#3B82F6","#10B981","#8B5CF6","#F59E0B","#EF4444"],u=({series:i,title:w,size:d=300,maxValue:ve,levels:L=5,showLabels:he=!0,showLegend:be=!0,fill:F=!0,fillOpacity:ge=.2,showDots:fe=!0})=>{var V;const n=d/2,m=(d-80)/2,v=((V=i[0])==null?void 0:V.data.map(e=>e.label))||[],ye=v.length,h=Math.PI*2/ye,xe=ve||Math.max(...i.flatMap(e=>e.data.map(a=>a.value)))*1.1,B=e=>e/xe*m,R=(e,a)=>{const t=h*a-Math.PI/2;return{x:n+B(e)*Math.cos(t),y:n+B(e)*Math.sin(t)}},Se=e=>`M ${e.map((t,s)=>{const r=R(t.value,s);return`${r.x},${r.y}`}).join(" L ")} Z`,O=[];for(let e=1;e<=L;e++){const a=m/L*e,s=`M ${v.map((r,c)=>{const p=h*c-Math.PI/2;return{x:n+a*Math.cos(p),y:n+a*Math.sin(p)}}).map(r=>`${r.x},${r.y}`).join(" L ")} Z`;O.push(l.jsx("path",{d:s,fill:"none",stroke:"currentColor",strokeOpacity:.15,strokeWidth:1},`level-${e}`))}const Ce=v.map((e,a)=>{const t=h*a-Math.PI/2,s=n+m*Math.cos(t),r=n+m*Math.sin(t);return l.jsx("line",{x1:n,y1:n,x2:s,y2:r,stroke:"currentColor",strokeOpacity:.15,strokeWidth:1},`axis-${a}`)}),De=v.map((e,a)=>{const t=h*a-Math.PI/2,s=m+20,r=n+s*Math.cos(t),c=n+s*Math.sin(t);let p="middle";return Math.abs(Math.cos(t))>.1&&(p=Math.cos(t)>0?"start":"end"),l.jsx("text",{x:r,y:c,textAnchor:p,alignmentBaseline:"middle",fontSize:"12",fill:"currentColor",opacity:.8,children:e},`label-${a}`)});return l.jsxs(W,{children:[w&&l.jsx(z,{fontSize:"lg",fontWeight:"semibold",mb:4,children:w}),l.jsxs(j,{direction:"column",align:"center",children:[l.jsxs("svg",{width:d,height:d,style:{color:"var(--chakra-colors-text-primary)"},children:[O,Ce,i.map((e,a)=>{const t=e.color||b[a%b.length];return l.jsxs("g",{children:[l.jsx("path",{d:Se(e.data),fill:F?t:"none",fillOpacity:F?ge:0,stroke:t,strokeWidth:2}),fe&&e.data.map((s,r)=>{const c=R(s.value,r);return l.jsx("circle",{cx:c.x,cy:c.y,r:4,fill:t,children:l.jsx("title",{children:`${s.label}: ${s.value}`})},r)})]},a)}),he&&De]}),be&&i.length>1&&l.jsx(j,{gap:4,mt:4,justify:"center",flexWrap:"wrap",children:i.map((e,a)=>l.jsxs(j,{align:"center",gap:2,children:[l.jsx(W,{w:"12px",h:"12px",borderRadius:"sm",bg:e.color||b[a%b.length]}),l.jsx(z,{fontSize:"sm",children:e.name})]},a))})]})]})};try{u.displayName="XlpRadarChart",u.__docgenInfo={description:"XlpRadarChart - A radar/spider chart component",displayName:"XlpRadarChart",props:{series:{defaultValue:null,description:"Chart series data",name:"series",required:!0,type:{name:"RadarChartSeries[]"}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"300"},description:"Size of the chart",name:"size",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Maximum value for the scale",name:"maxValue",required:!1,type:{name:"number"}},levels:{defaultValue:{value:"5"},description:"Number of levels/rings to show",name:"levels",required:!1,type:{name:"number"}},showLabels:{defaultValue:{value:"true"},description:"Whether to show labels",name:"showLabels",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"true"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"true"},description:"Whether to fill the area",name:"fill",required:!1,type:{name:"boolean"}},fillOpacity:{defaultValue:{value:"0.2"},description:"Fill opacity",name:"fillOpacity",required:!1,type:{name:"number"}},showDots:{defaultValue:{value:"true"},description:"Whether to show dots on data points",name:"showDots",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Components/Visualization/RadarChart",component:u,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"number"},levels:{control:{type:"range",min:3,max:10}},showLabels:{control:"boolean"},showLegend:{control:"boolean"},fill:{control:"boolean"},fillOpacity:{control:{type:"range",min:0,max:1,step:.1}},showDots:{control:"boolean"}}},o=[{name:"Skills",color:"#3B82F6",data:[{label:"JavaScript",value:90},{label:"TypeScript",value:85},{label:"React",value:95},{label:"Node.js",value:75},{label:"CSS",value:80},{label:"Testing",value:70}]}],de=[{name:"Team A",color:"#3B82F6",data:[{label:"Speed",value:85},{label:"Quality",value:90},{label:"Communication",value:75},{label:"Teamwork",value:88},{label:"Innovation",value:82},{label:"Reliability",value:95}]},{name:"Team B",color:"#10B981",data:[{label:"Speed",value:78},{label:"Quality",value:85},{label:"Communication",value:92},{label:"Teamwork",value:95},{label:"Innovation",value:70},{label:"Reliability",value:88}]}],ke=[{name:"Product A",color:"#8B5CF6",data:[{label:"Performance",value:85},{label:"Design",value:92},{label:"Price",value:70},{label:"Features",value:88},{label:"Support",value:75}]},{name:"Product B",color:"#F59E0B",data:[{label:"Performance",value:78},{label:"Design",value:80},{label:"Price",value:95},{label:"Features",value:72},{label:"Support",value:90}]},{name:"Product C",color:"#EF4444",data:[{label:"Performance",value:95},{label:"Design",value:75},{label:"Price",value:60},{label:"Features",value:98},{label:"Support",value:65}]}],g={args:{series:o,title:"Developer Skills"}},f={args:{series:de,title:"Team Performance Comparison"}},y={args:{series:ke,title:"Product Comparison",size:350}},x={args:{series:de,title:"Lines Only",fill:!1}},S={args:{series:o,title:"High Fill Opacity",fillOpacity:.5}},C={args:{series:o,title:"Without Data Points",showDots:!1}},D={args:{series:o,title:"With 8 Levels",levels:8}},P={render:()=>l.jsxs(Pe,{columns:{base:1,md:3},gap:8,children:[l.jsx(u,{series:o,title:"Small (200px)",size:200}),l.jsx(u,{series:o,title:"Medium (300px)",size:300}),l.jsx(u,{series:o,title:"Large (400px)",size:400})]})},k={args:{series:[{name:"Player Stats",color:"#EC4899",data:[{label:"Attack",value:88},{label:"Defense",value:75},{label:"Speed",value:92},{label:"Stamina",value:80},{label:"Magic",value:65},{label:"Luck",value:70}]}],title:"Character Stats",maxValue:100,fillOpacity:.3}},M={args:{series:[{name:"2023",color:"#6B7280",data:[{label:"Satisfaction",value:72},{label:"Engagement",value:68},{label:"Productivity",value:75},{label:"Work-Life",value:65},{label:"Growth",value:70}]},{name:"2024",color:"#10B981",data:[{label:"Satisfaction",value:85},{label:"Engagement",value:82},{label:"Productivity",value:88},{label:"Work-Life",value:78},{label:"Growth",value:90}]}],title:"Employee Survey: Year over Year",maxValue:100}};var E,T,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    series: skillsData,
    title: "Developer Skills"
  }
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,q,G;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    series: comparisonData,
    title: "Team Performance Comparison"
  }
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var N,X,I;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    series: productData,
    title: "Product Comparison",
    size: 350
  }
}`,...(I=(X=y.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var A,Y,H;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    series: comparisonData,
    title: "Lines Only",
    fill: false
  }
}`,...(H=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var Q,Z,J;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    series: skillsData,
    title: "High Fill Opacity",
    fillOpacity: 0.5
  }
}`,...(J=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,U,ee;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    series: skillsData,
    title: "Without Data Points",
    showDots: false
  }
}`,...(ee=(U=C.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};var ae,le,te;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    series: skillsData,
    title: "With 8 Levels",
    levels: 8
  }
}`,...(te=(le=D.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var re,se,ne;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={8}>\r
            <XlpRadarChart series={skillsData} title="Small (200px)" size={200} />\r
            <XlpRadarChart series={skillsData} title="Medium (300px)" size={300} />\r
            <XlpRadarChart series={skillsData} title="Large (400px)" size={400} />\r
        </SimpleGrid>
}`,...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ie,ce;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    series: [{
      name: "Player Stats",
      color: "#EC4899",
      data: [{
        label: "Attack",
        value: 88
      }, {
        label: "Defense",
        value: 75
      }, {
        label: "Speed",
        value: 92
      }, {
        label: "Stamina",
        value: 80
      }, {
        label: "Magic",
        value: 65
      }, {
        label: "Luck",
        value: 70
      }]
    }],
    title: "Character Stats",
    maxValue: 100,
    fillOpacity: 0.3
  }
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,me,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    series: [{
      name: "2023",
      color: "#6B7280",
      data: [{
        label: "Satisfaction",
        value: 72
      }, {
        label: "Engagement",
        value: 68
      }, {
        label: "Productivity",
        value: 75
      }, {
        label: "Work-Life",
        value: 65
      }, {
        label: "Growth",
        value: 70
      }]
    }, {
      name: "2024",
      color: "#10B981",
      data: [{
        label: "Satisfaction",
        value: 85
      }, {
        label: "Engagement",
        value: 82
      }, {
        label: "Productivity",
        value: 88
      }, {
        label: "Work-Life",
        value: 78
      }, {
        label: "Growth",
        value: 90
      }]
    }],
    title: "Employee Survey: Year over Year",
    maxValue: 100
  }
}`,...(pe=(me=M.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Te=["Default","Comparison","ThreeSeries","NoFill","HighFillOpacity","NoDots","MoreLevels","Sizes","GameStats","SurveyResults"];export{f as Comparison,g as Default,k as GameStats,S as HighFillOpacity,D as MoreLevels,C as NoDots,x as NoFill,P as Sizes,M as SurveyResults,y as ThreeSeries,Te as __namedExportsOrder,Ee as default};
