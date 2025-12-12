import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./index-BCRR_Fbj.js";import{T as o}from"./index-C5uWXf4o.js";import{S as i}from"./simple-grid-BavrYfh5.js";import{F as b}from"./flex-BbQTeZJH.js";import"./empty-BNjmiMPX.js";import"./split-props-B9mtt7b_.js";import"./index-DhY--VwN.js";import"./create-recipe-context-Dhiw8L_C.js";import"./use-recipe-d5ucoKYr.js";import"./walk-object-D0juuZak.js";const n=({color:a,name:m,hex:d})=>r.jsxs(e,{children:[r.jsx(e,{bg:a,h:"60px",w:"100%",borderRadius:"md",border:"1px solid",borderColor:"border.default"}),r.jsx(o,{fontSize:"sm",fontWeight:"medium",mt:2,children:m}),d&&r.jsx(o,{fontSize:"xs",color:"text.tertiary",children:d})]}),s=({colorName:a,shades:m})=>r.jsxs(e,{mb:8,children:[r.jsx(o,{fontSize:"lg",fontWeight:"bold",mb:4,textTransform:"capitalize",children:a}),r.jsx(i,{columns:{base:5,md:10},gap:2,children:m.map(d=>r.jsx(n,{color:`${a}.${d}`,name:`${d}`},d))})]}),k={title:"Foundations/Colors",parameters:{layout:"padded",docs:{description:{component:"The color system provides a consistent palette across the design system."}}},tags:["autodocs"]},t=[50,100,200,300,400,500,600,700,800,900],l={render:()=>r.jsxs(e,{children:[r.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Color Palette"}),r.jsx(s,{colorName:"gray",shades:t}),r.jsx(s,{colorName:"red",shades:t}),r.jsx(s,{colorName:"orange",shades:t}),r.jsx(s,{colorName:"yellow",shades:t}),r.jsx(s,{colorName:"green",shades:t}),r.jsx(s,{colorName:"teal",shades:t}),r.jsx(s,{colorName:"blue",shades:t}),r.jsx(s,{colorName:"cyan",shades:t}),r.jsx(s,{colorName:"purple",shades:t}),r.jsx(s,{colorName:"pink",shades:t})]})},c={render:()=>r.jsxs(e,{children:[r.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Semantic Colors"}),r.jsx(o,{fontSize:"lg",fontWeight:"semibold",mb:4,children:"Background"}),r.jsxs(i,{columns:{base:2,md:4},gap:4,mb:8,children:[r.jsx(n,{color:"bg.primary",name:"bg.primary"}),r.jsx(n,{color:"bg.secondary",name:"bg.secondary"}),r.jsx(n,{color:"bg.tertiary",name:"bg.tertiary"}),r.jsx(n,{color:"bg.muted",name:"bg.muted"})]}),r.jsx(o,{fontSize:"lg",fontWeight:"semibold",mb:4,children:"Text"}),r.jsxs(i,{columns:{base:2,md:4},gap:4,mb:8,children:[r.jsx(e,{children:r.jsx(e,{bg:"bg.tertiary",p:4,borderRadius:"md",children:r.jsx(o,{color:"text.primary",children:"text.primary"})})}),r.jsx(e,{children:r.jsx(e,{bg:"bg.tertiary",p:4,borderRadius:"md",children:r.jsx(o,{color:"text.secondary",children:"text.secondary"})})}),r.jsx(e,{children:r.jsx(e,{bg:"bg.tertiary",p:4,borderRadius:"md",children:r.jsx(o,{color:"text.tertiary",children:"text.tertiary"})})}),r.jsx(e,{children:r.jsx(e,{bg:"bg.tertiary",p:4,borderRadius:"md",children:r.jsx(o,{color:"text.muted",children:"text.muted"})})})]}),r.jsx(o,{fontSize:"lg",fontWeight:"semibold",mb:4,children:"Border"}),r.jsxs(i,{columns:{base:2,md:4},gap:4,mb:8,children:[r.jsx(e,{p:4,border:"2px solid",borderColor:"border.default",borderRadius:"md",children:r.jsx(o,{fontSize:"sm",children:"border.default"})}),r.jsx(e,{p:4,border:"2px solid",borderColor:"border.hover",borderRadius:"md",children:r.jsx(o,{fontSize:"sm",children:"border.hover"})}),r.jsx(e,{p:4,border:"2px solid",borderColor:"border.focus",borderRadius:"md",children:r.jsx(o,{fontSize:"sm",children:"border.focus"})})]}),r.jsx(o,{fontSize:"lg",fontWeight:"semibold",mb:4,children:"Accent / Status"}),r.jsxs(i,{columns:{base:2,md:6},gap:4,children:[r.jsx(n,{color:"accent.primary",name:"Primary"}),r.jsx(n,{color:"accent.secondary",name:"Secondary"}),r.jsx(n,{color:"accent.success",name:"Success"}),r.jsx(n,{color:"accent.warning",name:"Warning"}),r.jsx(n,{color:"accent.error",name:"Error"}),r.jsx(n,{color:"accent.info",name:"Info"})]})]})},x={render:()=>r.jsxs(e,{children:[r.jsx(o,{fontSize:"2xl",fontWeight:"bold",mb:6,children:"Dark Mode Comparison"}),r.jsxs(b,{gap:4,flexWrap:"wrap",children:[r.jsxs(e,{flex:"1",minW:"300px",children:[r.jsx(o,{fontWeight:"semibold",mb:4,children:"Light Mode"}),r.jsxs(e,{bg:"white",p:6,borderRadius:"lg",border:"1px solid",borderColor:"gray.200",children:[r.jsxs(e,{bg:"#F8FAFC",p:4,borderRadius:"md",mb:4,children:[r.jsx(o,{color:"#0F172A",fontWeight:"medium",children:"Primary Text"}),r.jsx(o,{color:"#475569",fontSize:"sm",children:"Secondary Text"}),r.jsx(o,{color:"#94A3B8",fontSize:"xs",children:"Tertiary Text"})]}),r.jsxs(b,{gap:2,children:[r.jsx(e,{bg:"#3B82F6",color:"white",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Primary"}),r.jsx(e,{bg:"#10B981",color:"white",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Success"}),r.jsx(e,{bg:"#EF4444",color:"white",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Error"})]})]})]}),r.jsxs(e,{flex:"1",minW:"300px",children:[r.jsx(o,{fontWeight:"semibold",mb:4,children:"Dark Mode"}),r.jsxs(e,{bg:"#0F172A",p:6,borderRadius:"lg",border:"1px solid",borderColor:"gray.700",children:[r.jsxs(e,{bg:"#1E293B",p:4,borderRadius:"md",mb:4,children:[r.jsx(o,{color:"#F8FAFC",fontWeight:"medium",children:"Primary Text"}),r.jsx(o,{color:"#CBD5E1",fontSize:"sm",children:"Secondary Text"}),r.jsx(o,{color:"#64748B",fontSize:"xs",children:"Tertiary Text"})]}),r.jsxs(b,{gap:2,children:[r.jsx(e,{bg:"#60A5FA",color:"#0F172A",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Primary"}),r.jsx(e,{bg:"#34D399",color:"#0F172A",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Success"}),r.jsx(e,{bg:"#F87171",color:"#0F172A",px:3,py:1,borderRadius:"md",fontSize:"sm",children:"Error"})]})]})]})]})]})};var p,h,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>\r
                Color Palette\r
            </Text>\r
            <ColorScale colorName="gray" shades={shades} />\r
            <ColorScale colorName="red" shades={shades} />\r
            <ColorScale colorName="orange" shades={shades} />\r
            <ColorScale colorName="yellow" shades={shades} />\r
            <ColorScale colorName="green" shades={shades} />\r
            <ColorScale colorName="teal" shades={shades} />\r
            <ColorScale colorName="blue" shades={shades} />\r
            <ColorScale colorName="cyan" shades={shades} />\r
            <ColorScale colorName="purple" shades={shades} />\r
            <ColorScale colorName="pink" shades={shades} />\r
        </Box>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,S,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>\r
                Semantic Colors\r
            </Text>\r
\r
            <Text fontSize="lg" fontWeight="semibold" mb={4}>\r
                Background\r
            </Text>\r
            <SimpleGrid columns={{
      base: 2,
      md: 4
    }} gap={4} mb={8}>\r
                <ColorSwatch color="bg.primary" name="bg.primary" />\r
                <ColorSwatch color="bg.secondary" name="bg.secondary" />\r
                <ColorSwatch color="bg.tertiary" name="bg.tertiary" />\r
                <ColorSwatch color="bg.muted" name="bg.muted" />\r
            </SimpleGrid>\r
\r
            <Text fontSize="lg" fontWeight="semibold" mb={4}>\r
                Text\r
            </Text>\r
            <SimpleGrid columns={{
      base: 2,
      md: 4
    }} gap={4} mb={8}>\r
                <Box>\r
                    <Box bg="bg.tertiary" p={4} borderRadius="md">\r
                        <Text color="text.primary">text.primary</Text>\r
                    </Box>\r
                </Box>\r
                <Box>\r
                    <Box bg="bg.tertiary" p={4} borderRadius="md">\r
                        <Text color="text.secondary">text.secondary</Text>\r
                    </Box>\r
                </Box>\r
                <Box>\r
                    <Box bg="bg.tertiary" p={4} borderRadius="md">\r
                        <Text color="text.tertiary">text.tertiary</Text>\r
                    </Box>\r
                </Box>\r
                <Box>\r
                    <Box bg="bg.tertiary" p={4} borderRadius="md">\r
                        <Text color="text.muted">text.muted</Text>\r
                    </Box>\r
                </Box>\r
            </SimpleGrid>\r
\r
            <Text fontSize="lg" fontWeight="semibold" mb={4}>\r
                Border\r
            </Text>\r
            <SimpleGrid columns={{
      base: 2,
      md: 4
    }} gap={4} mb={8}>\r
                <Box p={4} border="2px solid" borderColor="border.default" borderRadius="md">\r
                    <Text fontSize="sm">border.default</Text>\r
                </Box>\r
                <Box p={4} border="2px solid" borderColor="border.hover" borderRadius="md">\r
                    <Text fontSize="sm">border.hover</Text>\r
                </Box>\r
                <Box p={4} border="2px solid" borderColor="border.focus" borderRadius="md">\r
                    <Text fontSize="sm">border.focus</Text>\r
                </Box>\r
            </SimpleGrid>\r
\r
            <Text fontSize="lg" fontWeight="semibold" mb={4}>\r
                Accent / Status\r
            </Text>\r
            <SimpleGrid columns={{
      base: 2,
      md: 6
    }} gap={4}>\r
                <ColorSwatch color="accent.primary" name="Primary" />\r
                <ColorSwatch color="accent.secondary" name="Secondary" />\r
                <ColorSwatch color="accent.success" name="Success" />\r
                <ColorSwatch color="accent.warning" name="Warning" />\r
                <ColorSwatch color="accent.error" name="Error" />\r
                <ColorSwatch color="accent.info" name="Info" />\r
            </SimpleGrid>\r
        </Box>
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,y,B;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box>\r
            <Text fontSize="2xl" fontWeight="bold" mb={6}>\r
                Dark Mode Comparison\r
            </Text>\r
            <Flex gap={4} flexWrap="wrap">\r
                <Box flex="1" minW="300px">\r
                    <Text fontWeight="semibold" mb={4}>Light Mode</Text>\r
                    <Box bg="white" p={6} borderRadius="lg" border="1px solid" borderColor="gray.200">\r
                        <Box bg="#F8FAFC" p={4} borderRadius="md" mb={4}>\r
                            <Text color="#0F172A" fontWeight="medium">Primary Text</Text>\r
                            <Text color="#475569" fontSize="sm">Secondary Text</Text>\r
                            <Text color="#94A3B8" fontSize="xs">Tertiary Text</Text>\r
                        </Box>\r
                        <Flex gap={2}>\r
                            <Box bg="#3B82F6" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Primary</Box>\r
                            <Box bg="#10B981" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Success</Box>\r
                            <Box bg="#EF4444" color="white" px={3} py={1} borderRadius="md" fontSize="sm">Error</Box>\r
                        </Flex>\r
                    </Box>\r
                </Box>\r
                <Box flex="1" minW="300px">\r
                    <Text fontWeight="semibold" mb={4}>Dark Mode</Text>\r
                    <Box bg="#0F172A" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">\r
                        <Box bg="#1E293B" p={4} borderRadius="md" mb={4}>\r
                            <Text color="#F8FAFC" fontWeight="medium">Primary Text</Text>\r
                            <Text color="#CBD5E1" fontSize="sm">Secondary Text</Text>\r
                            <Text color="#64748B" fontSize="xs">Tertiary Text</Text>\r
                        </Box>\r
                        <Flex gap={2}>\r
                            <Box bg="#60A5FA" color="#0F172A" px={3} py={1} borderRadius="md" fontSize="sm">Primary</Box>\r
                            <Box bg="#34D399" color="#0F172A" px={3} py={1} borderRadius="md" fontSize="sm">Success</Box>\r
                            <Box bg="#F87171" color="#0F172A" px={3} py={1} borderRadius="md" fontSize="sm">Error</Box>\r
                        </Flex>\r
                    </Box>\r
                </Box>\r
            </Flex>\r
        </Box>
}`,...(B=(y=x.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const D=["ColorPalette","SemanticColors","DarkModePreview"];export{l as ColorPalette,x as DarkModePreview,c as SemanticColors,D as __namedExportsOrder,k as default};
