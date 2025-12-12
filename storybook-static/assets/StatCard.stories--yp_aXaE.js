import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as pe,u as F,v as me,w as i,x as X,y as se,z as ie}from"./index-B44x0rYr.js";import{B as a}from"./index-BCRR_Fbj.js";import{F as ge}from"./flex-BbQTeZJH.js";import{T as g}from"./index-C5uWXf4o.js";import{H as de}from"./h-stack-Bb0vOX7L.js";import{S as c}from"./simple-grid-BavrYfh5.js";import"./index-DhY--VwN.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const r=({label:t,value:d,change:l,changeLabel:u="vs last period",icon:p,colorPalette:n="blue",variant:o="outline",borderRadius:C="lg",showTrend:m=!0})=>{const R=()=>!l||l===0?"text.secondary":l>0?"green.500":"red.500",w=()=>!l||l===0?e.jsx(pe,{}):l>0?e.jsx(F,{}):e.jsx(me,{}),k={solid:{bg:`${n}.500`,color:"white",border:"none"},outline:{bg:"bg.primary",border:"1px solid",borderColor:"border.default"},subtle:{bg:`${n}.50`,_dark:{bg:`${n}.900`},border:"none"}};return e.jsx(a,{p:6,borderRadius:C,...k[o],children:e.jsxs(ge,{justify:"space-between",align:"flex-start",children:[e.jsxs(a,{children:[e.jsx(g,{fontSize:"sm",fontWeight:"medium",color:o==="solid"?"whiteAlpha.800":"text.secondary",mb:1,children:t}),e.jsx(g,{fontSize:"3xl",fontWeight:"bold",color:o==="solid"?"white":"text.primary",children:d}),l!==void 0&&e.jsxs(de,{mt:2,gap:1,color:o==="solid"?"whiteAlpha.800":R(),children:[m&&w(),e.jsxs(g,{fontSize:"sm",fontWeight:"medium",children:[l>0?"+":"",l,"%"]}),e.jsx(g,{fontSize:"sm",color:o==="solid"?"whiteAlpha.600":"text.tertiary",children:u})]})]}),p&&e.jsx(a,{p:3,borderRadius:"lg",bg:o==="solid"?"whiteAlpha.200":`${n}.100`,_dark:o!=="solid"?{bg:`${n}.800`}:void 0,color:o==="solid"?"white":`${n}.500`,children:p})]})})},s=({data:t,width:d=100,height:l=30,color:u="#3B82F6",filled:p=!1})=>{const n=Math.min(...t),C=Math.max(...t)-n||1,m=t.map((w,k)=>{const ce=k/(t.length-1)*d,ue=l-(w-n)/C*l;return`${ce},${ue}`}).join(" "),R=`M 0,${l} L ${m} L ${d},${l} Z`;return e.jsxs("svg",{width:d,height:l,children:[p&&e.jsx("path",{d:R,fill:u,fillOpacity:.1}),e.jsx("polyline",{points:m,fill:"none",stroke:u,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})};try{r.displayName="XlpStatCard",r.__docgenInfo={description:"XlpStatCard - A statistics card component",displayName:"XlpStatCard",props:{label:{defaultValue:null,description:"The stat label",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The stat value",name:"value",required:!0,type:{name:"string | number"}},change:{defaultValue:null,description:"Change percentage",name:"change",required:!1,type:{name:"number"}},changeLabel:{defaultValue:{value:"vs last period"},description:'Change label (e.g., "vs last month")',name:"changeLabel",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},colorPalette:{defaultValue:{value:"blue"},description:"Color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"orange"'}]}},variant:{defaultValue:{value:"outline"},description:"Variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'}]}},borderRadius:{defaultValue:{value:"lg"},description:"Border radius",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"none"'}]}},showTrend:{defaultValue:{value:"true"},description:"Whether to show trend icon",name:"showTrend",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="XlpSparkline",s.__docgenInfo={description:"XlpSparkline - A mini sparkline chart",displayName:"XlpSparkline",props:{data:{defaultValue:null,description:"Data values",name:"data",required:!0,type:{name:"number[]"}},width:{defaultValue:{value:"100"},description:"Width of the sparkline",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"30"},description:"Height of the sparkline",name:"height",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#3B82F6"},description:"Line color",name:"color",required:!1,type:{name:"string"}},filled:{defaultValue:{value:"false"},description:"Whether to fill area",name:"filled",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"Components/Visualization/StatCard",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","subtle"]},colorPalette:{control:"select",options:["blue","green","purple","orange","red","gray"]},borderRadius:{control:"select",options:["none","sm","md","lg","xl","2xl"]},showTrend:{control:"boolean"}}},x={args:{label:"Total Revenue",value:"$45,231",change:12.5,changeLabel:"vs last month",icon:e.jsx(i,{size:24})}},b={render:()=>e.jsxs(c,{columns:{base:1,md:3},gap:6,children:[e.jsx(r,{label:"Total Revenue",value:"$45,231",change:12.5,icon:e.jsx(i,{size:24}),variant:"outline"}),e.jsx(r,{label:"Total Revenue",value:"$45,231",change:12.5,icon:e.jsx(i,{size:24}),variant:"subtle",colorPalette:"blue"}),e.jsx(r,{label:"Total Revenue",value:"$45,231",change:12.5,icon:e.jsx(i,{size:24}),variant:"solid",colorPalette:"blue"})]})},h={render:()=>e.jsxs(c,{columns:{base:1,md:2,lg:3},gap:6,children:[e.jsx(r,{label:"Users",value:"1,234",change:8.2,icon:e.jsx(X,{size:24}),colorPalette:"blue",variant:"subtle"}),e.jsx(r,{label:"Revenue",value:"$45,231",change:12.5,icon:e.jsx(i,{size:24}),colorPalette:"green",variant:"subtle"}),e.jsx(r,{label:"Orders",value:"892",change:-3.2,icon:e.jsx(se,{size:24}),colorPalette:"purple",variant:"subtle"}),e.jsx(r,{label:"Growth",value:"23.5%",change:5.1,icon:e.jsx(F,{size:24}),colorPalette:"orange",variant:"subtle"}),e.jsx(r,{label:"Bounce Rate",value:"42.3%",change:-8.4,icon:e.jsx(ie,{size:24}),colorPalette:"red",variant:"subtle"})]})},v={render:()=>e.jsxs(c,{columns:{base:1,md:2,lg:4},gap:6,children:[e.jsx(r,{label:"Users",value:"1,234",change:8.2,icon:e.jsx(X,{size:24}),colorPalette:"blue",variant:"solid"}),e.jsx(r,{label:"Revenue",value:"$45,231",change:12.5,icon:e.jsx(i,{size:24}),colorPalette:"green",variant:"solid"}),e.jsx(r,{label:"Orders",value:"892",change:-3.2,icon:e.jsx(se,{size:24}),colorPalette:"purple",variant:"solid"}),e.jsx(r,{label:"Growth",value:"23.5%",change:5.1,icon:e.jsx(F,{size:24}),colorPalette:"orange",variant:"solid"})]})},f={args:{label:"Bounce Rate",value:"42.3%",change:-8.4,changeLabel:"vs last week",icon:e.jsx(ie,{size:24}),colorPalette:"red",variant:"outline"}},S={args:{label:"Active Sessions",value:"1,234",change:0,changeLabel:"vs yesterday",icon:e.jsx(X,{size:24})}},j={args:{label:"Total Sales",value:"$123,456",change:15.3,changeLabel:"vs last quarter"}},y={render:()=>e.jsxs(c,{columns:{base:1,md:3},gap:6,children:[e.jsx(r,{label:"Users",value:"1,234",change:8.2,borderRadius:"none"}),e.jsx(r,{label:"Users",value:"1,234",change:8.2,borderRadius:"lg"}),e.jsx(r,{label:"Users",value:"1,234",change:8.2,borderRadius:"2xl"})]})},B={render:()=>e.jsx(a,{children:e.jsxs(de,{gap:8,flexWrap:"wrap",children:[e.jsxs(a,{children:[e.jsx(a,{mb:2,fontSize:"sm",fontWeight:"medium",children:"Default"}),e.jsx(s,{data:[10,25,15,30,20,45,35]})]}),e.jsxs(a,{children:[e.jsx(a,{mb:2,fontSize:"sm",fontWeight:"medium",children:"Filled"}),e.jsx(s,{data:[10,25,15,30,20,45,35],filled:!0})]}),e.jsxs(a,{children:[e.jsx(a,{mb:2,fontSize:"sm",fontWeight:"medium",children:"Green"}),e.jsx(s,{data:[10,25,15,30,20,45,35],color:"#10B981",filled:!0})]}),e.jsxs(a,{children:[e.jsx(a,{mb:2,fontSize:"sm",fontWeight:"medium",children:"Red (Downtrend)"}),e.jsx(s,{data:[45,35,40,30,25,15,10],color:"#EF4444",filled:!0})]})]})})},z={render:()=>e.jsxs(c,{columns:{base:1,md:2},gap:6,children:[e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsxs(a,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",children:[e.jsxs(a,{children:[e.jsx(a,{fontSize:"sm",color:"text.secondary",mb:1,children:"Weekly Revenue"}),e.jsx(a,{fontSize:"2xl",fontWeight:"bold",children:"$12,456"}),e.jsx(a,{fontSize:"sm",color:"green.500",mt:1,children:"+12.5% vs last week"})]}),e.jsx(s,{data:[120,150,180,140,190,220,250],color:"#10B981",filled:!0,width:120,height:50})]})}),e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsxs(a,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",children:[e.jsxs(a,{children:[e.jsx(a,{fontSize:"sm",color:"text.secondary",mb:1,children:"Daily Active Users"}),e.jsx(a,{fontSize:"2xl",fontWeight:"bold",children:"3,842"}),e.jsx(a,{fontSize:"sm",color:"red.500",mt:1,children:"-5.2% vs yesterday"})]}),e.jsx(s,{data:[380,420,390,450,410,380,350],color:"#EF4444",filled:!0,width:120,height:50})]})})]})};var $,W,P;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Total Revenue",
    value: "$45,231",
    change: 12.5,
    changeLabel: "vs last month",
    icon: <FiDollarSign size={24} />
  }
}`,...(P=(W=x.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var T,V,_;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={6}>\r
            <XlpStatCard label="Total Revenue" value="$45,231" change={12.5} icon={<FiDollarSign size={24} />} variant="outline" />\r
            <XlpStatCard label="Total Revenue" value="$45,231" change={12.5} icon={<FiDollarSign size={24} />} variant="subtle" colorPalette="blue" />\r
            <XlpStatCard label="Total Revenue" value="$45,231" change={12.5} icon={<FiDollarSign size={24} />} variant="solid" colorPalette="blue" />\r
        </SimpleGrid>
}`,...(_=(V=b.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var U,D,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2,
    lg: 3
  }} gap={6}>\r
            <XlpStatCard label="Users" value="1,234" change={8.2} icon={<FiUsers size={24} />} colorPalette="blue" variant="subtle" />\r
            <XlpStatCard label="Revenue" value="$45,231" change={12.5} icon={<FiDollarSign size={24} />} colorPalette="green" variant="subtle" />\r
            <XlpStatCard label="Orders" value="892" change={-3.2} icon={<FiShoppingCart size={24} />} colorPalette="purple" variant="subtle" />\r
            <XlpStatCard label="Growth" value="23.5%" change={5.1} icon={<FiTrendingUp size={24} />} colorPalette="orange" variant="subtle" />\r
            <XlpStatCard label="Bounce Rate" value="42.3%" change={-8.4} icon={<FiActivity size={24} />} colorPalette="red" variant="subtle" />\r
        </SimpleGrid>
}`,...(G=(D=h.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var q,L,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2,
    lg: 4
  }} gap={6}>\r
            <XlpStatCard label="Users" value="1,234" change={8.2} icon={<FiUsers size={24} />} colorPalette="blue" variant="solid" />\r
            <XlpStatCard label="Revenue" value="$45,231" change={12.5} icon={<FiDollarSign size={24} />} colorPalette="green" variant="solid" />\r
            <XlpStatCard label="Orders" value="892" change={-3.2} icon={<FiShoppingCart size={24} />} colorPalette="purple" variant="solid" />\r
            <XlpStatCard label="Growth" value="23.5%" change={5.1} icon={<FiTrendingUp size={24} />} colorPalette="orange" variant="solid" />\r
        </SimpleGrid>
}`,...(A=(L=v.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,N,E;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Bounce Rate",
    value: "42.3%",
    change: -8.4,
    changeLabel: "vs last week",
    icon: <FiActivity size={24} />,
    colorPalette: "red",
    variant: "outline"
  }
}`,...(E=(N=f.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,H,M;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Active Sessions",
    value: "1,234",
    change: 0,
    changeLabel: "vs yesterday",
    icon: <FiUsers size={24} />
  }
}`,...(M=(H=S.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Z,J,K;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Total Sales",
    value: "$123,456",
    change: 15.3,
    changeLabel: "vs last quarter"
  }
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={6}>\r
            <XlpStatCard label="Users" value="1,234" change={8.2} borderRadius="none" />\r
            <XlpStatCard label="Users" value="1,234" change={8.2} borderRadius="lg" />\r
            <XlpStatCard label="Users" value="1,234" change={8.2} borderRadius="2xl" />\r
        </SimpleGrid>
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,le;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Box>\r
            <HStack gap={8} flexWrap="wrap">\r
                <Box>\r
                    <Box mb={2} fontSize="sm" fontWeight="medium">Default</Box>\r
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]} />\r
                </Box>\r
                <Box>\r
                    <Box mb={2} fontSize="sm" fontWeight="medium">Filled</Box>\r
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]} filled />\r
                </Box>\r
                <Box>\r
                    <Box mb={2} fontSize="sm" fontWeight="medium">Green</Box>\r
                    <XlpSparkline data={[10, 25, 15, 30, 20, 45, 35]} color="#10B981" filled />\r
                </Box>\r
                <Box>\r
                    <Box mb={2} fontSize="sm" fontWeight="medium">Red (Downtrend)</Box>\r
                    <XlpSparkline data={[45, 35, 40, 30, 25, 15, 10]} color="#EF4444" filled />\r
                </Box>\r
            </HStack>\r
        </Box>
}`,...(le=(re=B.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,oe,te;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2
  }} gap={6}>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">\r
                    <Box>\r
                        <Box fontSize="sm" color="text.secondary" mb={1}>Weekly Revenue</Box>\r
                        <Box fontSize="2xl" fontWeight="bold">$12,456</Box>\r
                        <Box fontSize="sm" color="green.500" mt={1}>+12.5% vs last week</Box>\r
                    </Box>\r
                    <XlpSparkline data={[120, 150, 180, 140, 190, 220, 250]} color="#10B981" filled width={120} height={50} />\r
                </Box>\r
            </Box>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">\r
                    <Box>\r
                        <Box fontSize="sm" color="text.secondary" mb={1}>Daily Active Users</Box>\r
                        <Box fontSize="2xl" fontWeight="bold">3,842</Box>\r
                        <Box fontSize="sm" color="red.500" mt={1}>-5.2% vs yesterday</Box>\r
                    </Box>\r
                    <XlpSparkline data={[380, 420, 390, 450, 410, 380, 350]} color="#EF4444" filled width={120} height={50} />\r
                </Box>\r
            </Box>\r
        </SimpleGrid>
}`,...(te=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Xe=["Default","Variants","ColorPalettes","SolidVariants","NegativeChange","NoChange","WithoutIcon","BorderRadius","Sparkline","StatWithSparkline"];export{y as BorderRadius,h as ColorPalettes,x as Default,f as NegativeChange,S as NoChange,v as SolidVariants,B as Sparkline,z as StatWithSparkline,b as Variants,j as WithoutIcon,Xe as __namedExportsOrder,Fe as default};
