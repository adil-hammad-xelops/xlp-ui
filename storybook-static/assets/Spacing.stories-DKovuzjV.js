import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./index-BCRR_Fbj.js";import{T as o}from"./index-C5uWXf4o.js";import{V as m}from"./v-stack-C8FbSuKv.js";import{F as c}from"./flex-BbQTeZJH.js";import{C as a}from"./code-BE4L-KXL.js";import{S as F}from"./simple-grid-BavrYfh5.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./stack-BVXR5AfD.js";import"./walk-object-D0juuZak.js";const K={title:"Foundations/Spacing",parameters:{layout:"padded",docs:{description:{component:"Spacing tokens provide consistent spacing values across the design system."}}},tags:["autodocs"]},G=[{token:"0",value:"0px"},{token:"0.5",value:"2px"},{token:"1",value:"4px"},{token:"1.5",value:"6px"},{token:"2",value:"8px"},{token:"2.5",value:"10px"},{token:"3",value:"12px"},{token:"3.5",value:"14px"},{token:"4",value:"16px"},{token:"5",value:"20px"},{token:"6",value:"24px"},{token:"7",value:"28px"},{token:"8",value:"32px"},{token:"9",value:"36px"},{token:"10",value:"40px"},{token:"12",value:"48px"},{token:"14",value:"56px"},{token:"16",value:"64px"},{token:"20",value:"80px"},{token:"24",value:"96px"}],t={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Spacing Scale"}),e.jsx(m,{align:"stretch",gap:2,children:G.map(({token:n,value:s})=>e.jsxs(c,{align:"center",gap:4,children:[e.jsx(a,{minW:"60px",children:n}),e.jsx(o,{minW:"60px",fontSize:"sm",color:"text.secondary",children:s}),e.jsx(r,{bg:"blue.500",h:"24px",w:n,borderRadius:"sm"})]},n))})]})},i={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Padding Examples"}),e.jsx(F,{columns:{base:1,md:2,lg:4},gap:6,children:["2","4","6","8"].map(n=>e.jsx(r,{bg:"bg.secondary",borderRadius:"md",children:e.jsx(r,{p:n,bg:"blue.100",_dark:{bg:"blue.900"},borderRadius:"md",children:e.jsxs(r,{bg:"bg.primary",p:4,borderRadius:"md",children:[e.jsxs(o,{fontWeight:"medium",children:["p=",n]}),e.jsxs(o,{fontSize:"sm",color:"text.secondary",children:[n==="2"&&"8px",n==="4"&&"16px",n==="6"&&"24px",n==="8"&&"32px"]})]})})},n))})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Margin Examples"}),e.jsx(r,{bg:"bg.secondary",p:4,borderRadius:"md",children:e.jsxs(m,{align:"start",gap:0,children:[["2","4","6","8"].map(n=>e.jsx(r,{bg:"blue.500",p:3,borderRadius:"md",mb:n,color:"white",children:e.jsxs(o,{fontWeight:"medium",children:["mb=",n]})},n)),e.jsx(r,{bg:"green.500",p:3,borderRadius:"md",color:"white",children:e.jsx(o,{fontWeight:"medium",children:"Last item (no margin)"})})]})})]})},x={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Gap Examples (Flex/Grid)"}),e.jsx(m,{align:"stretch",gap:8,children:["2","4","6","8"].map(n=>e.jsxs(r,{children:[e.jsxs(a,{mb:2,children:["gap=",n]}),e.jsx(c,{gap:n,bg:"bg.secondary",p:4,borderRadius:"md",children:[1,2,3,4].map(s=>e.jsxs(r,{bg:"blue.500",p:3,borderRadius:"md",color:"white",children:["Item ",s]},s))})]},n))})]})},p={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Responsive Spacing"}),e.jsx(o,{mb:4,color:"text.secondary",children:"Spacing can be responsive using object syntax or array syntax."}),e.jsxs(r,{mb:8,children:[e.jsx(a,{mb:2,children:"p={{ base: 2, md: 4, lg: 8 }}"}),e.jsx(r,{bg:"blue.500",color:"white",p:{base:2,md:4,lg:8},borderRadius:"md",children:e.jsx(o,{children:"Resize the window to see padding change"})})]}),e.jsxs(r,{children:[e.jsx(a,{mb:2,children:"gap={{ base: 2, md: 4, lg: 6 }}"}),e.jsx(c,{gap:{base:2,md:4,lg:6},bg:"bg.secondary",p:4,borderRadius:"md",flexWrap:"wrap",children:[1,2,3,4].map(n=>e.jsxs(r,{bg:"green.500",p:3,borderRadius:"md",color:"white",children:["Item ",n]},n))})]})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Negative Spacing"}),e.jsx(o,{mb:4,color:"text.secondary",children:"Use negative values for overlapping elements."}),e.jsxs(r,{position:"relative",h:"100px",w:"300px",children:[e.jsx(r,{position:"absolute",bg:"blue.500",w:"80px",h:"80px",borderRadius:"md",left:"0"}),e.jsx(r,{position:"absolute",bg:"green.500",w:"80px",h:"80px",borderRadius:"md",left:"60px"}),e.jsx(r,{position:"absolute",bg:"purple.500",w:"80px",h:"80px",borderRadius:"md",left:"120px"})]}),e.jsx(a,{mt:4,children:'Using negative margin: ml="-4"'})]})};var g,b,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Spacing Scale</Text>\r
            <VStack align="stretch" gap={2}>\r
                {spacingScale.map(({
        token,
        value
      }) => <Flex key={token} align="center" gap={4}>\r
                        <Code minW="60px">{token}</Code>\r
                        <Text minW="60px" fontSize="sm" color="text.secondary">{value}</Text>\r
                        <Box bg="blue.500" h="24px" w={token} borderRadius="sm" />\r
                    </Flex>)}\r
            </VStack>\r
        </Box>
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,S,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Padding Examples</Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 2,
      lg: 4
    }} gap={6}>\r
                {["2", "4", "6", "8"].map(p => <Box key={p} bg="bg.secondary" borderRadius="md">\r
                        <Box p={p} bg="blue.100" _dark={{
          bg: "blue.900"
        }} borderRadius="md">\r
                            <Box bg="bg.primary" p={4} borderRadius="md">\r
                                <Text fontWeight="medium">p={p}</Text>\r
                                <Text fontSize="sm" color="text.secondary">\r
                                    {p === "2" && "8px"}\r
                                    {p === "4" && "16px"}\r
                                    {p === "6" && "24px"}\r
                                    {p === "8" && "32px"}\r
                                </Text>\r
                            </Box>\r
                        </Box>\r
                    </Box>)}\r
            </SimpleGrid>\r
        </Box>
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var f,v,B;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Margin Examples</Text>\r
            <Box bg="bg.secondary" p={4} borderRadius="md">\r
                <VStack align="start" gap={0}>\r
                    {["2", "4", "6", "8"].map(m => <Box key={m} bg="blue.500" p={3} borderRadius="md" mb={m} color="white">\r
                            <Text fontWeight="medium">mb={m}</Text>\r
                        </Box>)}\r
                    <Box bg="green.500" p={3} borderRadius="md" color="white">\r
                        <Text fontWeight="medium">Last item (no margin)</Text>\r
                    </Box>\r
                </VStack>\r
            </Box>\r
        </Box>
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var k,R,y;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Gap Examples (Flex/Grid)</Text>\r
            <VStack align="stretch" gap={8}>\r
                {["2", "4", "6", "8"].map(gap => <Box key={gap}>\r
                        <Code mb={2}>gap={gap}</Code>\r
                        <Flex gap={gap} bg="bg.secondary" p={4} borderRadius="md">\r
                            {[1, 2, 3, 4].map(i => <Box key={i} bg="blue.500" p={3} borderRadius="md" color="white">\r
                                    Item {i}\r
                                </Box>)}\r
                        </Flex>\r
                    </Box>)}\r
            </VStack>\r
        </Box>
}`,...(y=(R=x.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var T,w,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Responsive Spacing</Text>\r
            <Text mb={4} color="text.secondary">\r
                Spacing can be responsive using object syntax or array syntax.\r
            </Text>\r
            <Box mb={8}>\r
                <Code mb={2}>{"p={{ base: 2, md: 4, lg: 8 }}"}</Code>\r
                <Box bg="blue.500" color="white" p={{
        base: 2,
        md: 4,
        lg: 8
      }} borderRadius="md">\r
                    <Text>Resize the window to see padding change</Text>\r
                </Box>\r
            </Box>\r
            <Box>\r
                <Code mb={2}>{"gap={{ base: 2, md: 4, lg: 6 }}"}</Code>\r
                <Flex gap={{
        base: 2,
        md: 4,
        lg: 6
      }} bg="bg.secondary" p={4} borderRadius="md" flexWrap="wrap">\r
                    {[1, 2, 3, 4].map(i => <Box key={i} bg="green.500" p={3} borderRadius="md" color="white">\r
                            Item {i}\r
                        </Box>)}\r
                </Flex>\r
            </Box>\r
        </Box>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var z,E,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Negative Spacing</Text>\r
            <Text mb={4} color="text.secondary">\r
                Use negative values for overlapping elements.\r
            </Text>\r
            <Box position="relative" h="100px" w="300px">\r
                <Box position="absolute" bg="blue.500" w="80px" h="80px" borderRadius="md" left="0" />\r
                <Box position="absolute" bg="green.500" w="80px" h="80px" borderRadius="md" left="60px" />\r
                <Box position="absolute" bg="purple.500" w="80px" h="80px" borderRadius="md" left="120px" />\r
            </Box>\r
            <Code mt={4}>Using negative margin: ml="-4"</Code>\r
        </Box>
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const Q=["SpacingScale","PaddingExamples","MarginExamples","GapExamples","ResponsiveSpacing","NegativeSpacing"];export{x as GapExamples,d as MarginExamples,l as NegativeSpacing,i as PaddingExamples,p as ResponsiveSpacing,t as SpacingScale,Q as __namedExportsOrder,K as default};
