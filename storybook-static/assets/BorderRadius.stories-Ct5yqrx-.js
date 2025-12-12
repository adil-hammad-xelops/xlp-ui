import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./index-BCRR_Fbj.js";import{T as n}from"./index-C5uWXf4o.js";import{S as u}from"./simple-grid-BavrYfh5.js";import{V as c}from"./v-stack-C8FbSuKv.js";import{C as s}from"./code-BE4L-KXL.js";import{H as I}from"./h-stack-Bb0vOX7L.js";import{I as V}from"./input-BJpkNLYE.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";import"./stack-BVXR5AfD.js";import"./factory-Bi3dmlYl.js";import"./index-Clc2OPsj.js";import"./use-field-context-DfwsQ_Ow.js";const Z={title:"Foundations/Radii",parameters:{layout:"padded",docs:{description:{component:"Border radius tokens provide consistent rounding across the design system."}}},tags:["autodocs"]},G=[{token:"none",value:"0"},{token:"xs",value:"2px"},{token:"sm",value:"4px"},{token:"md",value:"6px"},{token:"lg",value:"8px"},{token:"xl",value:"12px"},{token:"2xl",value:"16px"},{token:"3xl",value:"24px"},{token:"full",value:"9999px"}],d={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Border Radius Scale"}),e.jsx(u,{columns:{base:2,md:3,lg:5},gap:6,children:G.map(({token:r,value:O})=>e.jsxs(c,{align:"center",children:[e.jsx(o,{bg:"blue.500",w:"80px",h:"80px",borderRadius:r}),e.jsx(n,{fontWeight:"medium",children:r}),e.jsx(n,{fontSize:"sm",color:"text.secondary",children:O})]},r))})]})},t={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Radius on Cards"}),e.jsx(u,{columns:{base:1,md:2,lg:4},gap:6,children:["none","md","lg","xl","2xl"].map(r=>e.jsxs(o,{bg:"bg.secondary",p:6,borderRadius:r,border:"1px solid",borderColor:"border.default",children:[e.jsx(n,{fontWeight:"bold",mb:2,children:"Card Title"}),e.jsxs(n,{fontSize:"sm",color:"text.secondary",mb:4,children:['This card uses borderRadius="',r,'"']}),e.jsxs(s,{fontSize:"xs",children:['borderRadius="',r,'"']})]},r))})]})},a={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Radius on Buttons"}),e.jsx(I,{gap:4,flexWrap:"wrap",children:["none","sm","md","lg","xl","full"].map(r=>e.jsx(o,{as:"button",bg:"blue.500",color:"white",px:6,py:3,borderRadius:r,fontWeight:"medium",_hover:{bg:"blue.600"},children:r},r))})]})},i={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Radius on Avatars/Images"}),e.jsx(I,{gap:6,flexWrap:"wrap",children:["none","md","lg","xl","full"].map(r=>e.jsxs(c,{children:[e.jsx(o,{bg:"purple.500",w:"64px",h:"64px",borderRadius:r,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",children:"JD"}),e.jsx(s,{fontSize:"xs",children:r})]},r))})]})},l={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Radius on Inputs"}),e.jsx(c,{align:"stretch",gap:4,maxW:"400px",children:["none","sm","md","lg","xl","full"].map(r=>e.jsxs(o,{children:[e.jsx(s,{fontSize:"xs",mb:1,children:r}),e.jsx(V,{placeholder:`borderRadius="${r}"`,borderRadius:r})]},r))})]})},x={render:()=>e.jsxs(o,{children:[e.jsx(n,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Mixed Border Radius"}),e.jsx(n,{mb:4,color:"text.secondary",children:"You can apply different radius to each corner."}),e.jsxs(u,{columns:{base:1,md:2},gap:6,children:[e.jsxs(o,{children:[e.jsx(s,{mb:2,children:'borderTopRadius="xl"'}),e.jsx(o,{bg:"blue.500",h:"80px",borderTopRadius:"xl"})]}),e.jsxs(o,{children:[e.jsx(s,{mb:2,children:'borderBottomRadius="xl"'}),e.jsx(o,{bg:"green.500",h:"80px",borderBottomRadius:"xl"})]}),e.jsxs(o,{children:[e.jsx(s,{mb:2,children:'borderLeftRadius="xl"'}),e.jsx(o,{bg:"purple.500",h:"80px",borderLeftRadius:"xl"})]}),e.jsxs(o,{children:[e.jsx(s,{mb:2,children:'borderRightRadius="xl"'}),e.jsx(o,{bg:"orange.500",h:"80px",borderRightRadius:"xl"})]})]})]})};var m,p,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Border Radius Scale</Text>\r
            <SimpleGrid columns={{
      base: 2,
      md: 3,
      lg: 5
    }} gap={6}>\r
                {radiusTokens.map(({
        token,
        value
      }) => <VStack key={token} align="center">\r
                        <Box bg="blue.500" w="80px" h="80px" borderRadius={token} />\r
                        <Text fontWeight="medium">{token}</Text>\r
                        <Text fontSize="sm" color="text.secondary">{value}</Text>\r
                    </VStack>)}\r
            </SimpleGrid>\r
        </Box>
}`,...(b=(p=d.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Cards</Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 2,
      lg: 4
    }} gap={6}>\r
                {["none", "md", "lg", "xl", "2xl"].map(radius => <Box key={radius} bg="bg.secondary" p={6} borderRadius={radius} border="1px solid" borderColor="border.default">\r
                        <Text fontWeight="bold" mb={2}>Card Title</Text>\r
                        <Text fontSize="sm" color="text.secondary" mb={4}>\r
                            This card uses borderRadius="{radius}"\r
                        </Text>\r
                        <Code fontSize="xs">borderRadius="{radius}"</Code>\r
                    </Box>)}\r
            </SimpleGrid>\r
        </Box>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var R,S,j;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Buttons</Text>\r
            <HStack gap={4} flexWrap="wrap">\r
                {["none", "sm", "md", "lg", "xl", "full"].map(radius => <Box key={radius} as="button" bg="blue.500" color="white" px={6} py={3} borderRadius={radius} fontWeight="medium" _hover={{
        bg: "blue.600"
      }}>\r
                        {radius}\r
                    </Box>)}\r
            </HStack>\r
        </Box>
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,T,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Avatars/Images</Text>\r
            <HStack gap={6} flexWrap="wrap">\r
                {["none", "md", "lg", "xl", "full"].map(radius => <VStack key={radius}>\r
                        <Box bg="purple.500" w="64px" h="64px" borderRadius={radius} display="flex" alignItems="center" justifyContent="center" color="white" fontWeight="bold">\r
                            JD\r
                        </Box>\r
                        <Code fontSize="xs">{radius}</Code>\r
                    </VStack>)}\r
            </HStack>\r
        </Box>
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,W,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Radius on Inputs</Text>\r
            <VStack align="stretch" gap={4} maxW="400px">\r
                {["none", "sm", "md", "lg", "xl", "full"].map(radius => <Box key={radius}>\r
                        <Code fontSize="xs" mb={1}>{radius}</Code>\r
                        <Input placeholder={\`borderRadius="\${radius}"\`} borderRadius={radius} />\r
                    </Box>)}\r
            </VStack>\r
        </Box>
}`,...(y=(W=l.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var z,v,w;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Mixed Border Radius</Text>\r
            <Text mb={4} color="text.secondary">\r
                You can apply different radius to each corner.\r
            </Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 2
    }} gap={6}>\r
                <Box>\r
                    <Code mb={2}>borderTopRadius="xl"</Code>\r
                    <Box bg="blue.500" h="80px" borderTopRadius="xl" />\r
                </Box>\r
                <Box>\r
                    <Code mb={2}>borderBottomRadius="xl"</Code>\r
                    <Box bg="green.500" h="80px" borderBottomRadius="xl" />\r
                </Box>\r
                <Box>\r
                    <Code mb={2}>borderLeftRadius="xl"</Code>\r
                    <Box bg="purple.500" h="80px" borderLeftRadius="xl" />\r
                </Box>\r
                <Box>\r
                    <Code mb={2}>borderRightRadius="xl"</Code>\r
                    <Box bg="orange.500" h="80px" borderRightRadius="xl" />\r
                </Box>\r
            </SimpleGrid>\r
        </Box>
}`,...(w=(v=x.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const ee=["RadiusScale","RadiusOnCards","RadiusOnButtons","RadiusOnAvatars","RadiusOnInputs","MixedRadius"];export{x as MixedRadius,i as RadiusOnAvatars,a as RadiusOnButtons,t as RadiusOnCards,l as RadiusOnInputs,d as RadiusScale,ee as __namedExportsOrder,Z as default};
