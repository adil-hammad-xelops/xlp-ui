import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{V as d}from"./v-stack-C8FbSuKv.js";import{B as a}from"./index-BCRR_Fbj.js";import{T as l}from"./index-C5uWXf4o.js";import{F as X}from"./flex-BbQTeZJH.js";import{S as g}from"./simple-grid-BavrYfh5.js";import"./index-DhY--VwN.js";import"./stack-BVXR5AfD.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./walk-object-D0juuZak.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";const r=({value:n,size:o=120,thickness:u=10,color:b,colorPalette:c="blue",trackColor:p,showValue:t=!0,centerContent:s,label:W})=>{const w=Math.min(100,Math.max(0,n)),B=(o-u)/2,T=B*2*Math.PI,xe=T-w/100*T,he=b||`var(--chakra-colors-${c}-500)`,ve=p||"var(--chakra-colors-bg-secondary)";return e.jsxs(d,{gap:2,children:[e.jsxs(a,{position:"relative",w:`${o}px`,h:`${o}px`,children:[e.jsxs("svg",{width:o,height:o,children:[e.jsx("circle",{cx:o/2,cy:o/2,r:B,fill:"none",stroke:ve,strokeWidth:u}),e.jsx("circle",{cx:o/2,cy:o/2,r:B,fill:"none",stroke:he,strokeWidth:u,strokeLinecap:"round",strokeDasharray:T,strokeDashoffset:xe,transform:`rotate(-90 ${o/2} ${o/2})`,style:{transition:"stroke-dashoffset 0.5s ease"}})]}),(t||s)&&e.jsx(a,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",children:s||e.jsxs(l,{fontSize:"xl",fontWeight:"bold",children:[Math.round(w),"%"]})})]}),W&&e.jsx(l,{fontSize:"sm",color:"text.secondary",children:W})]})},i=({value:n,label:o,showPercentage:u=!0,colorPalette:b="blue",size:c="md",borderRadius:p="full"})=>{const t=Math.min(100,Math.max(0,n)),s={sm:{h:"6px",fontSize:"xs"},md:{h:"8px",fontSize:"sm"},lg:{h:"12px",fontSize:"md"}};return e.jsxs(a,{w:"100%",children:[e.jsxs(X,{justify:"space-between",mb:1,children:[e.jsx(l,{fontSize:s[c].fontSize,fontWeight:"medium",children:o}),u&&e.jsxs(l,{fontSize:s[c].fontSize,color:"text.secondary",children:[Math.round(t),"%"]})]}),e.jsx(a,{h:s[c].h,bg:"bg.secondary",borderRadius:p,overflow:"hidden",children:e.jsx(a,{h:"100%",w:`${t}%`,bg:`${b}.500`,borderRadius:p,transition:"width 0.5s ease"})})]})},x=["#3B82F6","#10B981","#8B5CF6","#F59E0B","#EF4444"],m=({segments:n,total:o=100,height:u=8,borderRadius:b="full",showLegend:c=!0})=>{const p=n.reduce((t,s)=>t+s.value,0);return e.jsxs(a,{children:[e.jsx(a,{h:`${u}px`,bg:"bg.secondary",borderRadius:b,overflow:"hidden",display:"flex",children:n.map((t,s)=>e.jsx(a,{h:"100%",w:`${t.value/o*100}%`,bg:t.color||x[s%x.length],transition:"width 0.5s ease"},s))}),c&&e.jsx(X,{gap:4,mt:3,flexWrap:"wrap",children:n.map((t,s)=>e.jsxs(X,{align:"center",gap:2,children:[e.jsx(a,{w:"10px",h:"10px",borderRadius:"sm",bg:t.color||x[s%x.length]}),e.jsx(l,{fontSize:"sm",children:t.label||`Segment ${s+1}`}),e.jsxs(l,{fontSize:"sm",color:"text.secondary",children:["(",(t.value/p*100).toFixed(1),"%)"]})]},s))})]})};try{r.displayName="XlpProgressRing",r.__docgenInfo={description:"XlpProgressRing - A circular progress indicator",displayName:"XlpProgressRing",props:{value:{defaultValue:null,description:"Progress value (0-100)",name:"value",required:!0,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size of the ring",name:"size",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"10"},description:"Thickness of the ring",name:"thickness",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"Color of the progress",name:"color",required:!1,type:{name:"string"}},colorPalette:{defaultValue:{value:"blue"},description:"Color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"orange"'}]}},trackColor:{defaultValue:null,description:"Background track color",name:"trackColor",required:!1,type:{name:"string"}},showValue:{defaultValue:{value:"true"},description:"Whether to show value in center",name:"showValue",required:!1,type:{name:"boolean"}},centerContent:{defaultValue:null,description:"Custom center content",name:"centerContent",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label below the ring",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="XlpLabeledProgress",i.__docgenInfo={description:"XlpLabeledProgress - A progress bar with label",displayName:"XlpLabeledProgress",props:{value:{defaultValue:null,description:"Progress value (0-100)",name:"value",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"Label text",name:"label",required:!0,type:{name:"string"}},showPercentage:{defaultValue:{value:"true"},description:"Whether to show percentage",name:"showPercentage",required:!1,type:{name:"boolean"}},colorPalette:{defaultValue:{value:"blue"},description:"Color palette",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"green"'},{value:'"blue"'},{value:'"purple"'},{value:'"orange"'}]}},size:{defaultValue:{value:"md"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},borderRadius:{defaultValue:{value:"full"},description:"Border radius",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"none"'},{value:'"full"'}]}}}}}catch{}try{m.displayName="XlpSegmentedProgress",m.__docgenInfo={description:"XlpSegmentedProgress - A multi-segment progress bar",displayName:"XlpSegmentedProgress",props:{segments:{defaultValue:null,description:"Progress segments",name:"segments",required:!0,type:{name:"ProgressSegment[]"}},total:{defaultValue:{value:"100"},description:"Total value (if not 100)",name:"total",required:!1,type:{name:"number"}},height:{defaultValue:{value:"8"},description:"Height of the bar",name:"height",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"full"},description:"Border radius",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"none"'},{value:'"full"'}]}},showLegend:{defaultValue:{value:"true"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}}}}}catch{}const We={title:"Components/Visualization/ProgressRing",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},size:{control:"number"},thickness:{control:"number"},colorPalette:{control:"select",options:["blue","green","purple","orange","red"]},showValue:{control:"boolean"}}},h={args:{value:75,label:"Completed"}},v={render:()=>e.jsxs(g,{columns:{base:2,md:4},gap:8,children:[e.jsx(r,{value:75,size:80,label:"Small"}),e.jsx(r,{value:75,size:120,label:"Medium"}),e.jsx(r,{value:75,size:160,label:"Large"}),e.jsx(r,{value:75,size:200,label:"XL"})]})},f={render:()=>e.jsxs(g,{columns:{base:2,md:5},gap:6,children:[e.jsx(r,{value:75,colorPalette:"blue",label:"Blue"}),e.jsx(r,{value:75,colorPalette:"green",label:"Green"}),e.jsx(r,{value:75,colorPalette:"purple",label:"Purple"}),e.jsx(r,{value:75,colorPalette:"orange",label:"Orange"}),e.jsx(r,{value:75,colorPalette:"red",label:"Red"})]})},S={render:()=>e.jsxs(g,{columns:{base:2,md:4},gap:6,children:[e.jsx(r,{value:75,thickness:4,label:"Thin (4px)"}),e.jsx(r,{value:75,thickness:10,label:"Medium (10px)"}),e.jsx(r,{value:75,thickness:20,label:"Thick (20px)"}),e.jsx(r,{value:75,thickness:30,label:"Extra Thick"})]})},P={render:()=>e.jsxs(g,{columns:{base:1,md:3},gap:6,children:[e.jsx(r,{value:65,centerContent:e.jsxs(d,{gap:0,children:[e.jsx(l,{fontSize:"2xl",fontWeight:"bold",children:"65"}),e.jsx(l,{fontSize:"xs",color:"text.secondary",children:"Tasks"})]}),label:"Tasks Completed"}),e.jsx(r,{value:42,colorPalette:"green",centerContent:e.jsxs(d,{gap:0,children:[e.jsx(l,{fontSize:"xl",fontWeight:"bold",children:"$4.2K"}),e.jsx(l,{fontSize:"xs",color:"text.secondary",children:"Revenue"})]}),label:"Monthly Goal"}),e.jsx(r,{value:88,colorPalette:"purple",centerContent:e.jsxs(d,{gap:0,children:[e.jsx(l,{fontSize:"2xl",fontWeight:"bold",children:"88%"}),e.jsx(l,{fontSize:"xs",color:"text.secondary",children:"Score"})]}),label:"Performance"})]})},j={render:()=>e.jsx(g,{columns:{base:3,md:6},gap:6,children:[0,25,50,75,90,100].map(n=>e.jsx(r,{value:n,size:80},n))})},k={render:()=>e.jsxs(d,{gap:6,maxW:"400px",children:[e.jsx(i,{value:75,label:"Project Progress"}),e.jsx(i,{value:45,label:"Storage Used",colorPalette:"purple"}),e.jsx(i,{value:90,label:"Goal Achieved",colorPalette:"green"}),e.jsx(i,{value:25,label:"Tasks Completed",colorPalette:"orange"})]})},R={render:()=>e.jsxs(d,{gap:6,maxW:"400px",children:[e.jsx(i,{value:75,label:"Small",size:"sm"}),e.jsx(i,{value:75,label:"Medium",size:"md"}),e.jsx(i,{value:75,label:"Large",size:"lg"})]})},y={render:()=>e.jsxs(d,{gap:6,maxW:"400px",children:[e.jsx(i,{value:75,label:"No Radius",borderRadius:"none"}),e.jsx(i,{value:75,label:"Small Radius",borderRadius:"sm"}),e.jsx(i,{value:75,label:"Full Radius",borderRadius:"full"})]})},V={render:()=>e.jsx(a,{maxW:"500px",children:e.jsx(m,{segments:[{value:30,label:"Completed",color:"#10B981"},{value:45,label:"In Progress",color:"#3B82F6"},{value:25,label:"Pending",color:"#F59E0B"}]})})},C={render:()=>e.jsxs(d,{gap:8,maxW:"500px",children:[e.jsxs(a,{w:"100%",children:[e.jsx(l,{fontWeight:"medium",mb:3,children:"Task Status"}),e.jsx(m,{segments:[{value:45,label:"Done"},{value:30,label:"In Progress"},{value:25,label:"Todo"}]})]}),e.jsxs(a,{w:"100%",children:[e.jsx(l,{fontWeight:"medium",mb:3,children:"Budget Allocation"}),e.jsx(m,{segments:[{value:40,label:"Marketing",color:"#8B5CF6"},{value:35,label:"Development",color:"#06B6D4"},{value:25,label:"Operations",color:"#F59E0B"}],height:12,borderRadius:"md"})]}),e.jsxs(a,{w:"100%",children:[e.jsx(l,{fontWeight:"medium",mb:3,children:"Storage Usage"}),e.jsx(m,{segments:[{value:50,label:"Documents",color:"#3B82F6"},{value:30,label:"Images",color:"#10B981"},{value:15,label:"Videos",color:"#EF4444"},{value:5,label:"Other",color:"#6B7280"}]})]})]})},z={render:()=>e.jsxs(g,{columns:{base:1,md:2,lg:4},gap:6,children:[e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsx(r,{value:78,colorPalette:"blue",centerContent:e.jsx(d,{gap:0,children:e.jsx(l,{fontSize:"xl",fontWeight:"bold",children:"78%"})}),label:"CPU Usage"})}),e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsx(r,{value:45,colorPalette:"green",centerContent:e.jsx(d,{gap:0,children:e.jsx(l,{fontSize:"xl",fontWeight:"bold",children:"45%"})}),label:"Memory"})}),e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsx(r,{value:92,colorPalette:"orange",centerContent:e.jsx(d,{gap:0,children:e.jsx(l,{fontSize:"xl",fontWeight:"bold",children:"92%"})}),label:"Disk Space"})}),e.jsx(a,{p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",children:e.jsx(r,{value:23,colorPalette:"purple",centerContent:e.jsx(d,{gap:0,children:e.jsx(l,{fontSize:"xl",fontWeight:"bold",children:"23%"})}),label:"Bandwidth"})})]})};var L,_,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Completed"
  }
}`,...(F=(_=h.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,G,M;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 2,
    md: 4
  }} gap={8}>\r
            <XlpProgressRing value={75} size={80} label="Small" />\r
            <XlpProgressRing value={75} size={120} label="Medium" />\r
            <XlpProgressRing value={75} size={160} label="Large" />\r
            <XlpProgressRing value={75} size={200} label="XL" />\r
        </SimpleGrid>
}`,...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var D,E,$;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 2,
    md: 5
  }} gap={6}>\r
            <XlpProgressRing value={75} colorPalette="blue" label="Blue" />\r
            <XlpProgressRing value={75} colorPalette="green" label="Green" />\r
            <XlpProgressRing value={75} colorPalette="purple" label="Purple" />\r
            <XlpProgressRing value={75} colorPalette="orange" label="Orange" />\r
            <XlpProgressRing value={75} colorPalette="red" label="Red" />\r
        </SimpleGrid>
}`,...($=(E=f.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,N,A;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 2,
    md: 4
  }} gap={6}>\r
            <XlpProgressRing value={75} thickness={4} label="Thin (4px)" />\r
            <XlpProgressRing value={75} thickness={10} label="Medium (10px)" />\r
            <XlpProgressRing value={75} thickness={20} label="Thick (20px)" />\r
            <XlpProgressRing value={75} thickness={30} label="Extra Thick" />\r
        </SimpleGrid>
}`,...(A=(N=S.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,O,K;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 3
  }} gap={6}>\r
            <XlpProgressRing value={65} centerContent={<VStack gap={0}>\r
                        <Text fontSize="2xl" fontWeight="bold">65</Text>\r
                        <Text fontSize="xs" color="text.secondary">Tasks</Text>\r
                    </VStack>} label="Tasks Completed" />\r
            <XlpProgressRing value={42} colorPalette="green" centerContent={<VStack gap={0}>\r
                        <Text fontSize="xl" fontWeight="bold">$4.2K</Text>\r
                        <Text fontSize="xs" color="text.secondary">Revenue</Text>\r
                    </VStack>} label="Monthly Goal" />\r
            <XlpProgressRing value={88} colorPalette="purple" centerContent={<VStack gap={0}>\r
                        <Text fontSize="2xl" fontWeight="bold">88%</Text>\r
                        <Text fontSize="xs" color="text.secondary">Score</Text>\r
                    </VStack>} label="Performance" />\r
        </SimpleGrid>
}`,...(K=(O=P.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var H,J,Q;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 3,
    md: 6
  }} gap={6}>\r
            {[0, 25, 50, 75, 90, 100].map(value => <XlpProgressRing key={value} value={value} size={80} />)}\r
        </SimpleGrid>
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <VStack gap={6} maxW="400px">\r
            <XlpLabeledProgress value={75} label="Project Progress" />\r
            <XlpLabeledProgress value={45} label="Storage Used" colorPalette="purple" />\r
            <XlpLabeledProgress value={90} label="Goal Achieved" colorPalette="green" />\r
            <XlpLabeledProgress value={25} label="Tasks Completed" colorPalette="orange" />\r
        </VStack>
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,le,ae;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <VStack gap={6} maxW="400px">\r
            <XlpLabeledProgress value={75} label="Small" size="sm" />\r
            <XlpLabeledProgress value={75} label="Medium" size="md" />\r
            <XlpLabeledProgress value={75} label="Large" size="lg" />\r
        </VStack>
}`,...(ae=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,se,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <VStack gap={6} maxW="400px">\r
            <XlpLabeledProgress value={75} label="No Radius" borderRadius="none" />\r
            <XlpLabeledProgress value={75} label="Small Radius" borderRadius="sm" />\r
            <XlpLabeledProgress value={75} label="Full Radius" borderRadius="full" />\r
        </VStack>
}`,...(ne=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,de,ie;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Box maxW="500px">\r
            <XlpSegmentedProgress segments={[{
      value: 30,
      label: "Completed",
      color: "#10B981"
    }, {
      value: 45,
      label: "In Progress",
      color: "#3B82F6"
    }, {
      value: 25,
      label: "Pending",
      color: "#F59E0B"
    }]} />\r
        </Box>
}`,...(ie=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ue,ce,pe;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <VStack gap={8} maxW="500px">\r
            <Box w="100%">\r
                <Text fontWeight="medium" mb={3}>Task Status</Text>\r
                <XlpSegmentedProgress segments={[{
        value: 45,
        label: "Done"
      }, {
        value: 30,
        label: "In Progress"
      }, {
        value: 25,
        label: "Todo"
      }]} />\r
            </Box>\r
            <Box w="100%">\r
                <Text fontWeight="medium" mb={3}>Budget Allocation</Text>\r
                <XlpSegmentedProgress segments={[{
        value: 40,
        label: "Marketing",
        color: "#8B5CF6"
      }, {
        value: 35,
        label: "Development",
        color: "#06B6D4"
      }, {
        value: 25,
        label: "Operations",
        color: "#F59E0B"
      }]} height={12} borderRadius="md" />\r
            </Box>\r
            <Box w="100%">\r
                <Text fontWeight="medium" mb={3}>Storage Usage</Text>\r
                <XlpSegmentedProgress segments={[{
        value: 50,
        label: "Documents",
        color: "#3B82F6"
      }, {
        value: 30,
        label: "Images",
        color: "#10B981"
      }, {
        value: 15,
        label: "Videos",
        color: "#EF4444"
      }, {
        value: 5,
        label: "Other",
        color: "#6B7280"
      }]} />\r
            </Box>\r
        </VStack>
}`,...(pe=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,be;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={{
    base: 1,
    md: 2,
    lg: 4
  }} gap={6}>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <XlpProgressRing value={78} colorPalette="blue" centerContent={<VStack gap={0}>\r
                            <Text fontSize="xl" fontWeight="bold">78%</Text>\r
                        </VStack>} label="CPU Usage" />\r
            </Box>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <XlpProgressRing value={45} colorPalette="green" centerContent={<VStack gap={0}>\r
                            <Text fontSize="xl" fontWeight="bold">45%</Text>\r
                        </VStack>} label="Memory" />\r
            </Box>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <XlpProgressRing value={92} colorPalette="orange" centerContent={<VStack gap={0}>\r
                            <Text fontSize="xl" fontWeight="bold">92%</Text>\r
                        </VStack>} label="Disk Space" />\r
            </Box>\r
            <Box p={6} borderRadius="lg" border="1px solid" borderColor="border.default">\r
                <XlpProgressRing value={23} colorPalette="purple" centerContent={<VStack gap={0}>\r
                            <Text fontSize="xl" fontWeight="bold">23%</Text>\r
                        </VStack>} label="Bandwidth" />\r
            </Box>\r
        </SimpleGrid>
}`,...(be=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const we=["Default","Sizes","ColorPalettes","Thickness","CustomCenter","DifferentValues","LabeledProgress","LabeledProgressSizes","LabeledProgressRadius","SegmentedProgress","SegmentedProgressVariants","Dashboard"];export{f as ColorPalettes,P as CustomCenter,z as Dashboard,h as Default,j as DifferentValues,k as LabeledProgress,y as LabeledProgressRadius,R as LabeledProgressSizes,V as SegmentedProgress,C as SegmentedProgressVariants,v as Sizes,S as Thickness,we as __namedExportsOrder,We as default};
