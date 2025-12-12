import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as g}from"./index-BCRR_Fbj.js";import{T as d}from"./index-C5uWXf4o.js";import{F as Pe}from"./flex-BbQTeZJH.js";import{V as R}from"./v-stack-C8FbSuKv.js";import{H as je}from"./h-stack-Bb0vOX7L.js";import{S as w}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const pe=["#3B82F6","#10B981","#8B5CF6","#F59E0B","#EF4444","#06B6D4","#EC4899","#84CC16"],Se={blue:["#3B82F6","#60A5FA","#93C5FD","#BFDBFE","#DBEAFE"],green:["#10B981","#34D399","#6EE7B7","#A7F3D0","#D1FAE5"],purple:["#8B5CF6","#A78BFA","#C4B5FD","#DDD6FE","#EDE9FE"],rainbow:pe},a=({data:p,title:F,size:o=200,thickness:S=.6,showLegend:M=!0,legendPosition:me="right",showCenterLabel:he=!0,centerLabel:L,centerValue:y,colorPalette:ge="rainbow"})=>{const V=p.reduce((t,n)=>t+n.value,0),m=Se[ge]||pe,A=[];let B=-90;p.forEach((t,n)=>{const X=t.value/V*100/100*360,be=t.color||m[n%m.length],h=B,i=B+X,$=X>180?1:0,l=o/2,s=l*(1-S),c=o/2,u=o/2,T=c+l*Math.cos(h*Math.PI/180),I=u+l*Math.sin(h*Math.PI/180),z=c+l*Math.cos(i*Math.PI/180),q=u+l*Math.sin(i*Math.PI/180),De=c+s*Math.cos(i*Math.PI/180),xe=u+s*Math.sin(i*Math.PI/180),Ce=c+s*Math.cos(h*Math.PI/180),ve=u+s*Math.sin(h*Math.PI/180),fe=S>0?`M ${T} ${I}
         A ${l} ${l} 0 ${$} 1 ${z} ${q}
         L ${De} ${xe}
         A ${s} ${s} 0 ${$} 0 ${Ce} ${ve}
         Z`:`M ${c} ${u}
         L ${T} ${I}
         A ${l} ${l} 0 ${$} 1 ${z} ${q}
         Z`;A.push({path:fe,color:be,item:t}),B=i});const E=()=>e.jsx(R,{align:"start",gap:2,children:p.map((t,n)=>e.jsxs(je,{gap:2,children:[e.jsx(g,{w:"12px",h:"12px",borderRadius:"sm",bg:t.color||m[n%m.length]}),e.jsx(d,{fontSize:"sm",children:t.label}),e.jsxs(d,{fontSize:"sm",color:"text.secondary",children:["(",(t.value/V*100).toFixed(1),"%)"]})]},n))}),k=()=>e.jsxs(g,{position:"relative",w:`${o}px`,h:`${o}px`,children:[e.jsx("svg",{width:o,height:o,children:A.map((t,n)=>e.jsx("path",{d:t.path,fill:t.color,style:{transition:"opacity 0.2s"},opacity:1,children:e.jsx("title",{children:`${t.item.label}: ${t.item.value}`})},n))}),he&&S>0&&e.jsxs(g,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",children:[y&&e.jsx(d,{fontSize:"2xl",fontWeight:"bold",lineHeight:"1",children:y}),L&&e.jsx(d,{fontSize:"sm",color:"text.secondary",children:L})]})]});return e.jsxs(g,{children:[F&&e.jsx(d,{fontSize:"lg",fontWeight:"semibold",mb:4,children:F}),me==="right"?e.jsxs(Pe,{gap:8,align:"center",flexWrap:"wrap",children:[e.jsx(k,{}),M&&e.jsx(E,{})]}):e.jsxs(R,{gap:4,children:[e.jsx(k,{}),M&&e.jsx(E,{})]})]})};try{a.displayName="XlpDonutChart",a.__docgenInfo={description:"XlpDonutChart - A donut/pie chart component",displayName:"XlpDonutChart",props:{data:{defaultValue:null,description:"Chart data points",name:"data",required:!0,type:{name:"DonutChartDataPoint[]"}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"200"},description:"Size of the chart",name:"size",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"0.6"},description:"Thickness of the donut (0-1, where 0 is full pie)",name:"thickness",required:!1,type:{name:"number"}},showLegend:{defaultValue:{value:"true"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendPosition:{defaultValue:{value:"right"},description:"Legend position",name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"right"'}]}},showCenterLabel:{defaultValue:{value:"true"},description:"Whether to show center label",name:"showCenterLabel",required:!1,type:{name:"boolean"}},centerLabel:{defaultValue:null,description:"Center label text",name:"centerLabel",required:!1,type:{name:"string"}},centerValue:{defaultValue:null,description:"Center value text",name:"centerValue",required:!1,type:{name:"string"}},colorPalette:{defaultValue:{value:"rainbow"},description:"Color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"rainbow"'}]}}}}}catch{}const qe={title:"Components/Visualization/DonutChart",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"number"},thickness:{control:{type:"range",min:0,max:1,step:.1}},showLegend:{control:"boolean"},legendPosition:{control:"select",options:["right","bottom"]},showCenterLabel:{control:"boolean"},colorPalette:{control:"select",options:["blue","green","purple","rainbow"]}}},r=[{label:"Desktop",value:45},{label:"Mobile",value:35},{label:"Tablet",value:15},{label:"Other",value:5}],b={args:{data:r,title:"Device Usage",centerValue:"100%",centerLabel:"Total"}},D={args:{data:r,title:"Device Usage (Pie)",thickness:0,showCenterLabel:!1}},x={render:()=>e.jsxs(w,{columns:{base:1,md:2},gap:8,children:[e.jsx(a,{data:r,title:"Rainbow",colorPalette:"rainbow"}),e.jsx(a,{data:r,title:"Blue",colorPalette:"blue"}),e.jsx(a,{data:r,title:"Green",colorPalette:"green"}),e.jsx(a,{data:r,title:"Purple",colorPalette:"purple"})]})},C={render:()=>e.jsxs(w,{columns:{base:1,md:3},gap:8,children:[e.jsx(a,{data:r,title:"Small",size:120}),e.jsx(a,{data:r,title:"Medium",size:180}),e.jsx(a,{data:r,title:"Large",size:240})]})},v={render:()=>e.jsxs(w,{columns:{base:1,md:3},gap:8,children:[e.jsx(a,{data:r,title:"Thin (0.3)",thickness:.3}),e.jsx(a,{data:r,title:"Medium (0.5)",thickness:.5}),e.jsx(a,{data:r,title:"Thick (0.8)",thickness:.8})]})},f={args:{data:r,title:"Device Usage",legendPosition:"bottom",centerValue:"100%",centerLabel:"Total"}},P={args:{data:[{label:"Completed",value:65,color:"#10B981"},{label:"In Progress",value:25,color:"#F59E0B"},{label:"Not Started",value:10,color:"#EF4444"}],title:"Project Status",centerValue:"65%",centerLabel:"Complete"}},j={args:{data:[{label:"Marketing",value:3e4},{label:"Development",value:45e3},{label:"Operations",value:25e3},{label:"HR",value:15e3},{label:"R&D",value:35e3}],title:"Budget Allocation",centerValue:"$150K",centerLabel:"Total Budget",colorPalette:"rainbow"}};var _,G,O;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Device Usage",
    centerValue: "100%",
    centerLabel: "Total"
  }
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,H,W;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Device Usage (Pie)",
    thickness: 0,
    showCenterLabel: false
  }
}`,...(W=(H=D.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,N,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2
  }} gap={8}>\r
            <XlpDonutChart data={sampleData} title="Rainbow" colorPalette="rainbow" />\r
            <XlpDonutChart data={sampleData} title="Blue" colorPalette="blue" />\r
            <XlpDonutChart data={sampleData} title="Green" colorPalette="green" />\r
            <XlpDonutChart data={sampleData} title="Purple" colorPalette="purple" />\r
        </SimpleGrid>
}`,...(K=(N=x.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var Z,J,Q;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={8}>\r
            <XlpDonutChart data={sampleData} title="Small" size={120} />\r
            <XlpDonutChart data={sampleData} title="Medium" size={180} />\r
            <XlpDonutChart data={sampleData} title="Large" size={240} />\r
        </SimpleGrid>
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={8}>\r
            <XlpDonutChart data={sampleData} title="Thin (0.3)" thickness={0.3} />\r
            <XlpDonutChart data={sampleData} title="Medium (0.5)" thickness={0.5} />\r
            <XlpDonutChart data={sampleData} title="Thick (0.8)" thickness={0.8} />\r
        </SimpleGrid>
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,le,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    title: "Device Usage",
    legendPosition: "bottom",
    centerValue: "100%",
    centerLabel: "Total"
  }
}`,...(ne=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,se,ie;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    data: [{
      label: "Completed",
      value: 65,
      color: "#10B981"
    }, {
      label: "In Progress",
      value: 25,
      color: "#F59E0B"
    }, {
      label: "Not Started",
      value: 10,
      color: "#EF4444"
    }],
    title: "Project Status",
    centerValue: "65%",
    centerLabel: "Complete"
  }
}`,...(ie=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,ue,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: [{
      label: "Marketing",
      value: 30000
    }, {
      label: "Development",
      value: 45000
    }, {
      label: "Operations",
      value: 25000
    }, {
      label: "HR",
      value: 15000
    }, {
      label: "R&D",
      value: 35000
    }],
    title: "Budget Allocation",
    centerValue: "$150K",
    centerLabel: "Total Budget",
    colorPalette: "rainbow"
  }
}`,...(de=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Re=["Default","PieChart","ColorPalettes","Sizes","Thickness","LegendBottom","CustomColors","BudgetAllocation"];export{j as BudgetAllocation,x as ColorPalettes,P as CustomColors,b as Default,f as LegendBottom,D as PieChart,C as Sizes,v as Thickness,Re as __namedExportsOrder,qe as default};
