import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./index-BCRR_Fbj.js";import{T as e}from"./index-C5uWXf4o.js";import{S as x}from"./simple-grid-BavrYfh5.js";import{V as v}from"./v-stack-C8FbSuKv.js";import{C as M}from"./code-BE4L-KXL.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";import"./stack-BVXR5AfD.js";const A={title:"Foundations/Shadows",parameters:{layout:"padded",docs:{description:{component:"Shadow tokens provide elevation and depth to UI elements."}}},tags:["autodocs"]},G=[{token:"xs",description:"Subtle shadow for small elements"},{token:"sm",description:"Light shadow for cards"},{token:"md",description:"Medium shadow for dropdowns"},{token:"lg",description:"Large shadow for modals"},{token:"xl",description:"Extra large shadow for popovers"},{token:"2xl",description:"Maximum elevation"}],n={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Shadow Scale"}),o.jsx(x,{columns:{base:1,md:2,lg:3},gap:8,children:G.map(({token:l,description:k})=>o.jsx(v,{align:"start",children:o.jsxs(r,{bg:"bg.primary",p:6,borderRadius:"lg",shadow:l,w:"100%",children:[o.jsxs(e,{fontWeight:"bold",mb:1,children:['shadow="',l,'"']}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:k})]})},l))})]})},d={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"No Shadow"}),o.jsxs(r,{bg:"bg.primary",p:6,borderRadius:"lg",border:"1px solid",borderColor:"border.default",maxW:"300px",children:[o.jsx(e,{fontWeight:"bold",mb:1,children:'shadow="none"'}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:"Use borders instead of shadows for a flat design"})]})]})},s={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Inner Shadow"}),o.jsxs(r,{bg:"bg.secondary",p:6,borderRadius:"lg",boxShadow:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",maxW:"300px",children:[o.jsx(e,{fontWeight:"bold",mb:1,children:"Inner Shadow"}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:"Used for pressed states or inset elements"})]}),o.jsx(M,{mt:4,display:"block",children:'boxShadow="inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"'})]})},t={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Shadow on Cards"}),o.jsxs(x,{columns:{base:1,md:3},gap:6,children:[o.jsxs(r,{bg:"bg.primary",p:6,borderRadius:"xl",shadow:"sm",children:[o.jsx(e,{fontWeight:"bold",mb:2,children:"Basic Card"}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:'shadow="sm" - Good for default cards'})]}),o.jsxs(r,{bg:"bg.primary",p:6,borderRadius:"xl",shadow:"md",transition:"shadow 0.2s",_hover:{shadow:"lg"},cursor:"pointer",children:[o.jsx(e,{fontWeight:"bold",mb:2,children:"Hover Card"}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:"Hover to see shadow change"})]}),o.jsxs(r,{bg:"bg.primary",p:6,borderRadius:"xl",shadow:"xl",children:[o.jsx(e,{fontWeight:"bold",mb:2,children:"Elevated Card"}),o.jsx(e,{fontSize:"sm",color:"text.secondary",children:'shadow="xl" - For important elements'})]})]})]})},a={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Shadow on Modals/Dialogs"}),o.jsx(r,{position:"relative",h:"300px",bg:"bg.secondary",borderRadius:"lg",p:8,children:o.jsxs(r,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bg:"bg.primary",p:8,borderRadius:"xl",shadow:"2xl",maxW:"400px",w:"90%",children:[o.jsx(e,{fontWeight:"bold",fontSize:"lg",mb:2,children:"Modal Title"}),o.jsx(e,{fontSize:"sm",color:"text.secondary",mb:4,children:'Modals use shadow="2xl" to create depth and focus attention.'}),o.jsx(r,{as:"button",bg:"blue.500",color:"white",px:4,py:2,borderRadius:"md",fontWeight:"medium",children:"Close Modal"})]})})]})},i={render:()=>o.jsxs(r,{children:[o.jsx(e,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Colored Shadows"}),o.jsx(e,{mb:4,color:"text.secondary",children:"Custom colored shadows for special effects."}),o.jsxs(x,{columns:{base:1,md:3},gap:6,children:[o.jsx(r,{bg:"blue.500",color:"white",p:6,borderRadius:"xl",boxShadow:"0 10px 40px -10px rgba(59, 130, 246, 0.5)",children:o.jsx(e,{fontWeight:"bold",children:"Blue Shadow"})}),o.jsx(r,{bg:"green.500",color:"white",p:6,borderRadius:"xl",boxShadow:"0 10px 40px -10px rgba(16, 185, 129, 0.5)",children:o.jsx(e,{fontWeight:"bold",children:"Green Shadow"})}),o.jsx(r,{bg:"purple.500",color:"white",p:6,borderRadius:"xl",boxShadow:"0 10px 40px -10px rgba(139, 92, 246, 0.5)",children:o.jsx(e,{fontWeight:"bold",children:"Purple Shadow"})})]})]})};var c,h,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow Scale</Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 2,
      lg: 3
    }} gap={8}>\r
                {shadowTokens.map(({
        token,
        description
      }) => <VStack key={token} align="start">\r
                        <Box bg="bg.primary" p={6} borderRadius="lg" shadow={token} w="100%">\r
                            <Text fontWeight="bold" mb={1}>shadow="{token}"</Text>\r
                            <Text fontSize="sm" color="text.secondary">{description}</Text>\r
                        </Box>\r
                    </VStack>)}\r
            </SimpleGrid>\r
        </Box>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var p,m,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>No Shadow</Text>\r
            <Box bg="bg.primary" p={6} borderRadius="lg" border="1px solid" borderColor="border.default" maxW="300px">\r
                <Text fontWeight="bold" mb={1}>shadow="none"</Text>\r
                <Text fontSize="sm" color="text.secondary">\r
                    Use borders instead of shadows for a flat design\r
                </Text>\r
            </Box>\r
        </Box>
}`,...(g=(m=d.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,w,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Inner Shadow</Text>\r
            <Box bg="bg.secondary" p={6} borderRadius="lg" boxShadow="inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" maxW="300px">\r
                <Text fontWeight="bold" mb={1}>Inner Shadow</Text>\r
                <Text fontSize="sm" color="text.secondary">\r
                    Used for pressed states or inset elements\r
                </Text>\r
            </Box>\r
            <Code mt={4} display="block">\r
                boxShadow="inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"\r
            </Code>\r
        </Box>
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var u,T,j;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow on Cards</Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 3
    }} gap={6}>\r
                <Box bg="bg.primary" p={6} borderRadius="xl" shadow="sm">\r
                    <Text fontWeight="bold" mb={2}>Basic Card</Text>\r
                    <Text fontSize="sm" color="text.secondary">\r
                        shadow="sm" - Good for default cards\r
                    </Text>\r
                </Box>\r
                <Box bg="bg.primary" p={6} borderRadius="xl" shadow="md" transition="shadow 0.2s" _hover={{
        shadow: "lg"
      }} cursor="pointer">\r
                    <Text fontWeight="bold" mb={2}>Hover Card</Text>\r
                    <Text fontSize="sm" color="text.secondary">\r
                        Hover to see shadow change\r
                    </Text>\r
                </Box>\r
                <Box bg="bg.primary" p={6} borderRadius="xl" shadow="xl">\r
                    <Text fontWeight="bold" mb={2}>Elevated Card</Text>\r
                    <Text fontSize="sm" color="text.secondary">\r
                        shadow="xl" - For important elements\r
                    </Text>\r
                </Box>\r
            </SimpleGrid>\r
        </Box>
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var B,W,y;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Shadow on Modals/Dialogs</Text>\r
            <Box position="relative" h="300px" bg="bg.secondary" borderRadius="lg" p={8}>\r
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" bg="bg.primary" p={8} borderRadius="xl" shadow="2xl" maxW="400px" w="90%">\r
                    <Text fontWeight="bold" fontSize="lg" mb={2}>Modal Title</Text>\r
                    <Text fontSize="sm" color="text.secondary" mb={4}>\r
                        Modals use shadow="2xl" to create depth and focus attention.\r
                    </Text>\r
                    <Box as="button" bg="blue.500" color="white" px={4} py={2} borderRadius="md" fontWeight="medium">\r
                        Close Modal\r
                    </Box>\r
                </Box>\r
            </Box>\r
        </Box>
}`,...(y=(W=a.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var z,R,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>Colored Shadows</Text>\r
            <Text mb={4} color="text.secondary">\r
                Custom colored shadows for special effects.\r
            </Text>\r
            <SimpleGrid columns={{
      base: 1,
      md: 3
    }} gap={6}>\r
                <Box bg="blue.500" color="white" p={6} borderRadius="xl" boxShadow="0 10px 40px -10px rgba(59, 130, 246, 0.5)">\r
                    <Text fontWeight="bold">Blue Shadow</Text>\r
                </Box>\r
                <Box bg="green.500" color="white" p={6} borderRadius="xl" boxShadow="0 10px 40px -10px rgba(16, 185, 129, 0.5)">\r
                    <Text fontWeight="bold">Green Shadow</Text>\r
                </Box>\r
                <Box bg="purple.500" color="white" p={6} borderRadius="xl" boxShadow="0 10px 40px -10px rgba(139, 92, 246, 0.5)">\r
                    <Text fontWeight="bold">Purple Shadow</Text>\r
                </Box>\r
            </SimpleGrid>\r
        </Box>
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const J=["ShadowScale","NoShadow","InnerShadow","ShadowOnCards","ShadowOnModals","ColoredShadows"];export{i as ColoredShadows,s as InnerShadow,d as NoShadow,t as ShadowOnCards,a as ShadowOnModals,n as ShadowScale,J as __namedExportsOrder,A as default};
